import { useEffect, useState } from 'react';
import Header from '../components/Header';
import './Siparis.css'

import {Card, CardBody, CardFooter, CardHeader, Form, FormFeedback, FormGroup, FormText, Input, Label } from "reactstrap";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const defData = {
    boyut: '',
    hamur: '',
    malzeme: [],
    not: '',
    adet: 0,
}
const errorMessages = {
    boyut : 'Lütfen boyut seçiniz.',
    hamur: 'Lütfen hamur kalınlığı seçiniz.',
    adet: 'Lütfen adet seçiniz.',
}

export default function Siparis(){
    const [formData,setFormData] = useState(defData); 
    const [isValid,setIsValid] = useState(false);
    const [fiyat,setFiyat] = useState(85.50); 
    const history = useHistory();
    const [errors,setErrors] = useState({
        boyut: false,
        hamur: false,
        adet: false,

    })
    
    
    useEffect(()=>{
        if(formData.boyut.checked != false && formData.hamur != '' && formData.adet != 0){
            setIsValid(true);
        }
        else{
            setIsValid(false);
        }
    },[formData])



    function handleChange(event){
        let {name, value, type , checked } = event.target;
        value = type == 'checkbox' ? checked : value;
        
        setFormData({...formData, [name]: value})
        

        if(name === 'boyut') {
            if(name.checked === false){
                setErrors({...errors, [name] : true });
            }
            else {
                setErrors({...errors, [name] : false });
            }
        }
        if(name === 'hamur') {
            if(value == ''){
                setErrors({...errors, [name] : true });
            }
            else {
                setErrors({...errors, [name] : false });
            }
        }
        if(name == 'adet') {
            if(value == 0){
                setErrors({...errors, [name] : true });
            }
            else {
                setErrors({...errors, [name] : false });
            }
        }

    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(isValid === false) return;
        axios.post('https://reqres.in/api/pizza',formData)
        .then((result) => {
            setFormData(defData);
            history.push('./Sonuc');
        }).catch((err) => {
            console.warn(err);
        });
    }




    return (
        <>  
            <Header>
               
            </Header>
            <div className="pizza-formu barlow-medium">
                <Form onSubmit={handleSubmit}>
                    <div className="pizza-baslik"><FormGroup>
                        <h3>Position Absolute Pizza</h3>
                    </FormGroup></div>
                    <div className="pizza-degerlendirme">
                        <div className="pizza-fiyat">85.50₺</div>
                        <div className="pizza-rating">4.9</div>
                        <div className="pizza-yorum">(200)</div>
                    </div>
                    <div className="pizza-text"><FormGroup>
                        <FormText>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
                        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra gelneksel olarak
                        odun ateşinde bir fırında yüksek sıcaklıkta pişirilirken, genellikle yuvarlak, düzleştirilmiş mayalı
                        buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</FormText>
                    </FormGroup></div>
                    <div className="pizza-boyut-hamur">
                        <div className="pizza-boyut">
                            <FormGroup>
                                <h3>Boyut Seç</h3>
                                <FormGroup check>
                                <Input
                                    name="boyut"
                                    type="radio"
                                    value='kucuk'
                                    id='kucuk'
                                    onChange={handleChange}
                                    checked = {formData.boyut == 'kucuk'}
                                    invalid={errors.boyut}
                                    
                                />
                                {' '}
                                <Label check htmlFor='kucuk'>
                                    Küçük
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Input
                                    name="boyut"
                                    type="radio"
                                    value='orta'
                                    id='orta'
                                    onChange={handleChange}
                                    invalid={errors.boyut}
                                    checked = {formData.boyut == 'orta'}
                                />
                                {' '}
                                <Label check htmlFor= 'orta'>
                                    Orta
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Input
                                    name="boyut"
                                    type="radio"
                                    value='buyuk'
                                    id='buyuk'
                                    onChange={handleChange}
                                    invalid={errors.boyut}
                                    checked = {formData.boyut == 'buyuk'}
                                />
                                {' '}
                                <Label check htmlFor='buyuk'>
                                    Büyük
                                </Label>
                                </FormGroup>
                                {errors.boyut && <FormFeedback>{errorMessages.boyut}</FormFeedback>}
                            </FormGroup>
                        </div>
                        <div className="pizza-hamur">
                        <FormGroup>
                            <h3 for="hamurSelect">
                            Hamur Seç
                            </h3>
                            <Input id="hamurSelect" value={formData.hamur} name="hamurSelect" type="select" onChange={handleChange} invalid={errors.hamur}>
                                <option value="" disabled selected>Hamur Kalınlığı</option>
                                <option value='ince'>İnce</option>
                                <option value='orta'>Orta</option>
                                <option value='kalın'>Kalın</option>
                            </Input>
                            {errors.hamur && <FormFeedback>{errorMessages.hamur}</FormFeedback>}
                        </FormGroup>
                        </div>
                    </div>
                    <div className="pizza-ek-malzeme-text"><FormGroup>
                            <div>
                                <h3>Ek Malzemeler</h3>
                                <p>En fazla 10 malzeme seçebilirsiniz.  5 ₺</p>
                            </div>
                    </FormGroup></div>
                    <div className="pizza-ek-malzemeler">
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Pepperoni' onChange={handleChange}/>
                            Pepperoni
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Domates' onChange={handleChange} />
                            Domates
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Biber' onChange={handleChange} />
                            Biber
                        </Label>
                    </FormGroup>
                
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Sosis' onChange={handleChange}/>
                            Sosis
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Mısır' onChange={handleChange}/>
                            Mısır
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Sucuk' onChange={handleChange}/>
                            Sucuk
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='KanadaJambonu' onChange={handleChange}/>
                            Kanada Jambonu
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Salam' onChange={handleChange}/>
                            Salam
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Ananas' onChange={handleChange}/>
                            Ananas
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='TavukIzgara' onChange={handleChange}/>
                            Tavuk Izgara
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Jalepeno' onChange={handleChange}/>
                            Jalepeno
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Kabak' onChange={handleChange}/>
                            Kabak
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Soğan' onChange={handleChange}/>
                            Soğan
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Sarımsak' onChange={handleChange}/>
                            Sarımsak
                        </Label>
                    </FormGroup></div>
                    <div className="pizza-siparis-notu">
                        <h3>Sipariş Notu</h3>
                        <Input type='textarea' name='not' placeholder='Siparişine eklemek istediğin bir not var mı?' onChange={handleChange} />
                        
                    </div>

                    <hr/>
                    
                    <div className="pizza-sonuc-odeme">
                        <div className='pizza-adet'>
                            <button onClick={()=>{if(formData.adet >0) return setFormData({...formData, adet: formData.adet - 1 })}}>-</button>
                            <p>{formData.adet}</p>
                            <button onClick={()=>setFormData({...formData, adet: formData.adet + 1 })}>+</button>
                        

                            {errors.adet && <p>{errorMessages.adet}</p>}
                        </div>
                       
                        <div className='pizza-toplam'>
                            <Card>
                                <CardHeader>
                                    Sipariş Toplamı
                                </CardHeader>
                                <CardBody>
                                    <p>Seçimler                                             25.00₺</p>
                                    <p style={{color: 'red'}}>Toplam                        {fiyat}₺</p>
                                </CardBody>
                                <CardFooter>
                                    <button  disabled={!isValid}>SİPARİŞ VER</button>
                                </CardFooter>
                            </Card>

                    </div>
                    </div>
                </Form>
            </div>
        </>
    )
}