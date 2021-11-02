import React, {Component} from 'react';
import s from "./IjodiyDirection/IjodiyDirection.module.css";
import car from "../images/IbnSino.jpg";
import sww from "../images/sww.png"
import ibnSino from "../images/ibnSino2.png"
import page3 from "../images/paper.png"
import asboblar from "../images/asboplar .png"
import cosmosm from "../images/cosmosm.png"
import opkam from "../images/opkam.png"
import yure from "../images/yure.png"
import qurt from "../images/qurt.png"


class Contribute extends Component {
    render() {
        return (
            <>
                <div className={s.touch} style={{backgroundImage: `url(${car})`}}>
                    <div className="row">
                        <div className="lala">
                            <img className='sww' src={sww} alt=""/>
                            <h2 className='jahonn'>jahon ilm-faniga <br/> qo‘shgan hissasi</h2>
                        </div>
                    </div>

                    <div className="row my-5">
                        <h2 className="yuzellik">
                            Ibn Sino asarlarining umumiy soni 450 dan oshadi.
                        </h2>
                    </div>


                    <div className="row">
                        <div className="col-md-6">
                            <div className="lll">
                                <img className="ibnSino" src={ibnSino} alt=""/>
                                <img className="page3" src={page3} alt=""/>
                                <p className="textk">
                                    Ibn Sinoning tabobat sohasidagi eng <br/>
                                    katta xizmati o‘z davrining tibbiy <br/>
                                    bilimlarini tizimlashtirdi va tibbiyot <br/>
                                    nazariyasini shakllantirdi
                                </p>

                            </div>

                        </div>


                        <div className="col-md-6">
                            <div className="kkk">
                                <img className="ibnSino" src={asboblar} alt=""/>
                                <img className="page3" src={page3} alt=""/>
                                <p className="textk1">
                                    U foydalangan jarrohlik asboblari hozirgi <br/>
                                    kunda ham foydalanilmoqda
                                </p>

                            </div>

                        </div>


                    </div>


                    <div className="row ">
                        <div className="col-md-6 my-4">
                            <div className="lll">
                                <img className="cosmosm" style={{width:'140px'}} src={cosmosm} alt=""/>
                                <img className="page3" style={{height: '100px'}} src={page3} alt=""/>
                                <p className="textk4">
                                    Tibbiyotda psixiatriyaga alohida yo‘nalish sifatida asos solgan
                                </p>

                            </div>

                        </div>


                        <div className="col-md-6 my-5">
                            <div className="kkk">
                                <img className="ibnSino" src={opkam} alt=""/>
                                <img className="page3" style={{height: '100px'}} src={page3} alt=""/>
                                <p className="textk5">
                                    Ibn Sino o‘lat va vabo kasalliklarini <br/> birinchi bo‘lib bir-biridan farqlagan
                                </p>

                            </div>

                        </div>


                    </div>


                    <div className="row ">
                        <div className="col-md-6">
                            <div className="lll">
                                <img className="ibnSino" src={yure} alt=""/>
                                <img className="page3" style={{height: '150px'}} src={page3} alt=""/>
                                <p className="textk6">
                                    Odam nafas olganda havo o‘pka orqali <br/> borishini aniqlagan. Ungacha bo‘lgan <br/> olimlar
                                    havo o‘pka orqali  emas to‘g‘ri <br/> yurakka boradi deb tasavvur qilishgan

                                </p>

                            </div>

                        </div>


                        <div className="col-md-6 ">
                            <div className="kkk">
                                <img className="ibnSino" src={qurt} alt=""/>
                                <img className="page3" style={{height: '155px'}} src={page3} alt=""/>
                                <p className="textk9">
                                    Ibn Sino viruslar yuqumli kasalliklar- <br/>
                                     ning ko'rinmas qo'zg'atuvchilari <br/>
                                    ekanligini aniqladi, ammo bu faraz <br/>
                                    800 yil o'tgachgina Paster tomonidan <br/> tasdiqlandi

                                </p>

                            </div>

                        </div>


                    </div>


                </div>
            </>
        );
    }
}

export default Contribute;