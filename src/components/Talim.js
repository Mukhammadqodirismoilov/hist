import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import s from "./IjodiyDirection/Tibiyot/Tibiyot.module.css";
import car from "../images/IbnSino.jpg";
import qogoz from "../images/qogoz.png"
import uch from "../images/uch.png"


class Talim extends Component {
    render() {
        return (
            <>
                <div className={s.touch} style={{backgroundImage: `url(${car})`}}>

                    <h1 className="tta">Ta'lim Sohasida</h1>


                    <div className="row">
                        <div className="col-md-6 my-5">
                            <img className="qogoz" src={qogoz} alt=""/>
                            <p className="qogozi">
                                Ibn Sinoning xotirasi kuchli boʻlgan. U harflarni oyga <br/>
                                qarab, oydagi dogʻlarning
                                shakliga qiyoslab eslab <br/>
                                qolgan. Assotsiativ xotira bilimlarni oʻzlashtirish va <br/>
                                eslab
                                qolishda yaxshi samara berishini asoslab bergan.
                            </p>

                        </div>
                        <div className="col-md-6 my-5">
                            <img className="qogoz" src={qogoz} alt=""/>
                            <p className="qogozi">
                                Oʻquvchilarga taʼlim-tarbiya berishda ularning temperament <br/>
                                xususiyatlarini hisobga olib
                                pedagogik-psixologik yondashish <br/> kerakligi haqida gapirib bergan
                            </p>
                        </div>
                    </div>


                    <div className="row">


                        <div className="col-md-4 d-inline">
                            <img className="qogozm" src={qogoz} alt=""/>
                            <p className="qogozl">
                                Taʼlimning didaktik prinsiplarini asoslab <br/> bergan. Xususan, nazariya va
                                amaliyot <br/> birligi
                                tamoyili haqida pedagogik <br/> qarashlari mavjud
                            </p>
                        </div>


                        <div className="col-md-4 d-inline">
                            <img className="qogozmm" src={qogoz} alt=""/>
                            <p className="qogozll">

                                Musiqa va sheʼriyatning oʻquvchilar <br/>
                                ruhiyatiga taʼsirini asoslab bergan. <br/> Art-terapiya usullari shundan kelib chiqqan

                            </p>
                        </div>


                    </div>


                    <div className="row my-4">
                        <div className="col-md-4 d-inline">
                            <img className="qogozm" src={qogoz} alt=""/>
                            <p className="qogozl">
                                Taʼlimning didaktik prinsiplarini asoslab <br/> bergan. Xususan, nazariya va
                                amaliyot <br/> birligi
                                tamoyili haqida pedagogik <br/> qarashlari mavjud
                            </p>
                        </div>


                        <div className="col-md-4 d-inline">
                            <img className="qogozmm" src={qogoz} alt=""/>
                            <p className="qogozll">

                                Taʼlim jarayonida interfaol metodlarni <br/> qoʻllash, oʻyin texnologiyalaridan <br/> foydalanish
                                kerakligi haqida pedagogik <br/> qarashlari mavjud

                            </p>
                        </div>


                    </div>


                    <img className="uch" src={uch} alt=""/>

                   <h2 className="ped">Teng tomonli uchburchakning
                       </h2>
                    <h2 className="ped2">
                        yasalishi
                    </h2>


                </div>


            </>
        );
    }
}

export default Talim;