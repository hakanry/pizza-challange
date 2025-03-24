import {Form, FormGroup, Label, Input, FormText, Button, CardBody, Card, CardHeader, CardFooter} from 'reactstrap';
import './siparis.css';

export default function Siparis(){
    
    
    return <>
        <header>
            <h1>Teknolojik Yemekler</h1>
            <p>Anasayfa - Sipariş Oluştur</p>
        </header>
        <main>
            <form>
                <div className='pizza-description'>
                    <h3>Position Absolute Acı Pizza</h3>
                    <div className='pizza-degerlendirme'>
                        <p className='pizza-fiyat'>85.50₺</p>
                        <p className='pizza-rating'>4.9</p>
                        <p className='pizza-yorum'>(200)</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam et odio nec urna ultricies tincidunt.
                        Nullam sit amet nulla nec elit luctus ultricies.
                        Nullam sit amet nulla nec elit luctus ultricies.
                        Nullam sit amet nulla nec elit luctus ultricies.

                    </p>
                </div>

                <div className='pizza-boyut-hamur'>
                    <div className='boyut'>
                        <FormGroup tag="fieldset">
                            <legend>
                                Boyut Seç
                            </legend>
                            <FormGroup className='boyut-radio'>
                            <Input type='radio' name='boyut' value='kucuk'/>
                            <Label>Küçük</Label>
                            </FormGroup>
                            <FormGroup className='boyut-radio'>
                            <Input type='radio' name='boyut' value='orta'/>
                            <Label>Orta</Label>
                            </FormGroup>
                            <FormGroup className='boyut-radio'>
                            <Input type='radio' name='boyut' value='buyuk'/>
                            <Label>Büyük</Label>
                            </FormGroup>
                        </FormGroup>
                    </div>
                    <div className='hamur'>
                        <FormGroup>
                            <legend for="hamurSelect">
                            Hamur Seç
                            </legend>
                            <Input id="hamurSelect" name="hamurSelect" type="select">
                                <option value="" disabled selected>Hamur Kalınlığı</option>
                                <option>İnce</option>
                                <option>Orta</option>
                                <option>Kalın</option>
                            </Input>
                        </FormGroup>
                    </div>
                </div>

                <div>
                    <legend>Ek Malzemeler</legend>
                    <p>En fazla 10 malzeme seçebilirsiniz.  5 ₺</p>
                </div>

                <div className='pizza-extra-malzemeler'>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Pepperoni'/>
                            Pepperoni
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Domates'/>
                            Domates
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Biber'/>
                            Biber
                        </Label>
                    </FormGroup>
                
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Sosis'/>
                            Sosis
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Mısır'/>
                            Mısır
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Sucuk'/>
                            Sucuk
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='KanadaJambonu'/>
                            Kanada Jambonu
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Salam'/>
                            Salam
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Ananas'/>
                            Ananas
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='TavukIzgara'/>
                            Tavuk Izgara
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Jalepeno'/>
                            Jalepeno
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Kabak'/>
                            Kabak
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Soğan'/>
                            Soğan
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='malzeme' value='Sarımsak'/>
                            Sarımsak
                        </Label>
                    </FormGroup>

                </div> 

                <div>
                    <h3>Sipariş Notu</h3>
                    <Input type='textarea' name='not' placeholder='Siparişine eklemek istediğin bir not var mı?' rows='1' />
                </div>

                <hr/>

                <div className='siparis-ozet'>
                    <div className='siparis-adet'>
                        <button>-</button>
                        <p>ADET</p>
                        <button>+</button>
                    </div>
                    <div className='siparis-toplam'>
                        <Card>
                            <CardHeader>
                                Sipariş Toplamı
                            </CardHeader>
                            <CardBody>
                                <p>Seçimler</p>
                                <p>Toplam</p>
                            </CardBody>
                            <CardFooter>
                                <Button>SİPARİŞ VER</Button>
                            </CardFooter>
                        </Card>

                    </div>
                </div>
            </form>
        </main>
        </>

}