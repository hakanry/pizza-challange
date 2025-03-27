import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Baslik, Button } from "./Anasayfa";
import styled from "styled-components";

import { malzemeler } from "../../data";
import Checkbox from "../components/Checkbox";
const HeaderSiparis = styled.div`
  color: white;
  font-family: "Londrina Solid", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: #ce2829;
  padding: 1rem;
  width: 100%;
  & > p {
    text-align: start;
    padding-left: 36rem;
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
  }
`;
const PizzaDegerlendirme = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
`;
const PizzaText = styled.p`
  text-align: start;
  color: #5f5f5f;
  margin: 0;
`;
const FormCSS = styled.form`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-style: normal;
`;
const BoyutHamur = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const BoyutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #5f5f5f;
`;
const EkMalzemeText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > p {
    padding: 0rem;
    margin: 0rem 0rem 1rem 0rem;
  }
`;
const SiparisInput = styled.input`
  width: 94%;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
`;
const AdetveOdeme = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  & > div {
    flex-grow: 3;
    display: flex;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    align-items: center;
    align-content: center;
  }
  & > section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
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
  const [fiyat, setFiyat] = useState(85.5);
  const history = useHistory();
  const [errors, setErrors] = useState({
    boyut: false,
    hamur: false,
    adet: false,
  });

  useEffect(() => {
    if (
      formData.boyut.check != "" &&
      formData.hamur != "" &&
      formData.adet != 0
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  function handleChange(event) {
    let { name, value, checked, type } = event.target;

    if (type === "checkbox") {
      const oldValues = formData.malzeme;
      if (oldValues.includes(value)) {
        value = oldValues.filter((v) => {
          v !== value;
        });
        checked = false;
      } else {
        value = [...oldValues, value];
        checked = true;
      }
    }

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid === false) return;
    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((result) => {
        setFormData(defData);
        history.push("./sonuc");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <>
      <HeaderSiparis>
        <Baslik>Teknolojik Yemekler</Baslik>
        <p>
          Anasayfa - <strong>Sipariş Oluştur</strong>
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
            <div check>
              <label>
                <input
                  name="boyut"
                  type="radio"
                  value="kucuk"
                  onChange={handleChange}
                  checked={formData.boyut === "kucuk"}
                />
                {"  "}
                Küçük
              </label>
            </div>
            <div check>
              <label>
                <input
                  name="boyut"
                  type="radio"
                  value="orta"
                  onChange={handleChange}
                  checked={formData.boyut === "orta"}
                />
                {"  "}
                Orta
              </label>
            </div>
            <div check>
              <label>
                <input
                  name="boyut"
                  type="radio"
                  value="buyuk"
                  onChange={handleChange}
                  checked={formData.boyut === "buyuk"}
                />
                {"  "}
                Büyük
              </label>
            </div>
            {errors.boyut && <p>{errorMessages.boyut}</p>}
          </BoyutDiv>
          <div>
            <div>
              <h3 for="hamurSelect">Hamur Seç</h3>
              <select
                id="hamurSelect"
                value={formData.hamur}
                name="hamurSelect"
                type="select"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Hamur Kalınlığı
                </option>
                <option value="ince">İnce</option>
                <option value="orta">Orta</option>
                <option value="kalın">Kalın</option>
              </select>
              {errors.hamur && <p>{errorMessages.hamur}</p>}
            </div>
          </div>
        </BoyutHamur>
        <EkMalzemeText>
          <h3>Ek Malzemeler</h3>
          <p>En fazla 10 malzeme seçebilirsiniz. 5 ₺</p>
          <p style={{ color: "black", width: "100%", margin: "2rem auto" }}>
            {formData.boyut}
            {formData.hamur}
            {formData.malzeme}
            {formData.not}
            {formData.adet}
          </p>
        </EkMalzemeText>
        {malzemeler.map((malz) => {
          <Checkbox
            handleChFn={handleChange}
            isChecked={formData.malzeme.includes(malz.valueOf)}
            fieldName="ekMalzemeler"
            value={malz.valueOf}
            label={malz.label}
          ></Checkbox>;
        })}
        <EkMalzemeText>
          <h3>Sipariş Notu</h3>
          <SiparisInput
            type="textarea"
            name="not"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            onChange={formData.not}
          />
        </EkMalzemeText>
        <hr style={{ width: "100%", margin: "2rem auto" }}></hr>
        <AdetveOdeme>
          <div>
            <Button
              type="button"
              onClick={() => {
                if (formData.adet > 0)
                  return setFormData({
                    ...formData,
                    adet: formData.adet - 1,
                  });
              }}
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
              +{" "}
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
