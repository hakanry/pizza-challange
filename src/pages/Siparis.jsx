import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Baslik, Button } from "./Anasayfa";
import styled from "styled-components";

import { EkMalzemelerData } from "../../data";
import Checkbox from "../components/Checkbox";

const CheckBoxCSS = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 70vh;
  max-height: 25vh;
  overflow-y: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    max-height: none;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    max-height: 20vh;
    col-gap: 2rem;
  }
`;
const HeaderSiparis = styled.div`
  color: white;
  font-family: "Londrina Solid", sans-serif;
  background-color: #ce2829;
  padding: 1rem;
  width: 100%;
  & > p {
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
  }
`;
const PizzaDegerlendirme = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const PizzaText = styled.p`
  text-align: start;
  color: #5f5f5f;
`;
const FormCSS = styled.form`
  max-width: 100%;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Barlow", sans-serif;
`;
const BoyutHamur = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;
const BoyutDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #5f5f5f;
`;
const EkMalzemeText = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    margin-bottom: 1rem;
  }
`;
const SiparisInput = styled.input`
  width: 100%;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
`;
const AdetveOdeme = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const defData = {
  boyut: "",
  hamur: "",
  malzeme: [],
  not: "",
  adet: 0,
};
const errorMessages = {
  boyut: "Lütfen boyut seçiniz.",
  hamur: "Lütfen hamur kalınlığı seçiniz.",
  adet: "Lütfen adet seçiniz.",
};

export default function Siparis() {
  const [formData, setFormData] = useState(defData);
  const [isValid, setIsValid] = useState(false);
  const [fiyat] = useState(85.5); // sabit tutuldu
  const history = useHistory();
  const [errors, setErrors] = useState({
    boyut: false,
    hamur: false,
    malzemeler: false,
    adet: false,
  });

  useEffect(() => {
    if (formData.boyut && formData.hamur && formData.adet > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  function handleChange(event) {
    let { name, value, id, type } = event.target;
    if (type === "radio") value = id;
    if (type === "checkbox") {
      const newValues = formData.malzeme.includes(value)
        ? formData.malzeme.filter((v) => v !== value)
        : [...formData.malzeme, value];

      if (newValues.length > 10) {
        setErrors((prev) => ({ ...prev, malzemeler: true }));
        return;
      }

      setErrors((prev) => ({ ...prev, malzemeler: false }));
      setFormData({ ...formData, [name]: newValues });
      return;
    }

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {
      boyut: !formData.boyut,
      hamur: !formData.hamur,
      malzemeler: formData.malzeme.length > 10,
      adet: formData.adet <= 0,
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    axios
      .post("https://reqres.in/api/pizza", formData)
      .then(() => {
        setFormData(defData);
        history.push("./sonuc");
      })
      .catch((err) => console.warn(err));
  };

  return (
    <>
      <HeaderSiparis>
        <Baslik>Teknolojik Yemekler</Baslik>
        <p>
          <Link to="./anasayfa" style={{ color: "white" }}>
            Anasayfa
          </Link>{" "}
          - <strong>Sipariş Oluştur</strong>
        </p>
      </HeaderSiparis>
      <FormCSS onSubmit={handleSubmit}>
        <h3>Position Absolute Pizza</h3>
        <PizzaDegerlendirme>
          <h4>85.50₺</h4>
          <p>4.9</p>
          <p>(200)</p>
        </PizzaDegerlendirme>
        <PizzaText>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra gelneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilirken, genellikle
          yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
          kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </PizzaText>
        <BoyutHamur>
          <BoyutDiv>
            <h3>Boyut Seç</h3>
            {["kucuk", "orta", "buyuk"].map((size) => (
              <label key={size}>
                <input
                  name="boyut"
                  type="radio"
                  value={size}
                  id={size}
                  onChange={handleChange}
                  checked={formData.boyut === size}
                />
                {"  " + size.charAt(0).toUpperCase() + size.slice(1)}
              </label>
            ))}
            {errors.boyut && <p>{errorMessages.boyut}</p>}
          </BoyutDiv>
          <div>
            <label htmlFor="hamur">
              <h3>Hamur Seç</h3>
            </label>
            <select
              id="hamur"
              value={formData.hamur}
              name="hamur"
              onChange={handleChange}
            >
              <option value="" disabled>
                Hamur Kalınlığı
              </option>
              {["ince", "orta", "kalın"].map((h) => (
                <option key={h} value={h}>
                  {h.charAt(0).toUpperCase() + h.slice(1)}
                </option>
              ))}
            </select>
            {errors.hamur && <p>{errorMessages.hamur}</p>}
          </div>
        </BoyutHamur>
        <EkMalzemeText>
          <h3>Ek Malzemeler</h3>
          <p>En fazla 10 malzeme seçebilirsiniz. 5 ₺</p>
          {errors.malzemeler && (
            <p style={{ color: "red" }}>En fazla 10 malzeme seçebilirsiniz.</p>
          )}
        </EkMalzemeText>
        <CheckBoxCSS>
          {EkMalzemelerData.map((item, indx) => (
            <Checkbox
              key={indx}
              handleChFn={handleChange}
              isChecked={formData.malzeme.includes(item)}
              fieldName="malzeme"
              value={item}
              label={item}
            />
          ))}
        </CheckBoxCSS>
        <EkMalzemeText>
          <h3>Sipariş Notu</h3>
          <SiparisInput
            type="text"
            name="not"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={formData.not}
            onChange={handleChange}
          />
        </EkMalzemeText>
        <hr />
        <AdetveOdeme>
          <div>
            <Button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  adet: Math.max(0, formData.adet - 1),
                })
              }
            >
              -
            </Button>
            <p>{formData.adet}</p>
            <Button
              type="button"
              onClick={() =>
                setFormData({ ...formData, adet: formData.adet + 1 })
              }
            >
              +
            </Button>
            {errors.adet && <p>{errorMessages.adet}</p>}
          </div>
          <section>
            <h4>Sipariş Toplamı</h4>
            <div>
              <p>Seçimler 25.00₺</p>
              <p style={{ color: "red" }}>Toplam {fiyat}₺</p>
            </div>
            <div>
              <Button type="submit" disabled={!isValid}>
                SİPARİŞ VER
              </Button>
            </div>
          </section>
        </AdetveOdeme>
      </FormCSS>
    </>
  );
}
