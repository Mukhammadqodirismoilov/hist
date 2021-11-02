import React, {Component} from 'react';
import s from "./IjodiyDirection/IjodiyDirection.module.css";
import car from "../images/IbnSino.jpg";
import tabletka from "../images/tabletka.png"
import uzin from "../images/uzin.png"
import aaaaaaa from "../images/aaaaaaa.png"
import gul from "../images/gul.png"
import ukol from "../images/ukol.png"





class Dori extends Component {
    render() {
        return (
            <div className={s.touch} style={{backgroundImage: `url(${car})`}}>
                <div className="row">
                    <div className="cedce ">
                        <img className='tabletka' src={tabletka} alt=""/>
                        <h1 className="dorim">
                            Dorishunoslik bo'yicha
                        </h1>
                    </div>
                </div>

                    <div className="buttons"></div>
                <h3 className="ta">1237 ta dori</h3>

                <img className="uzin" src={uzin} alt=""/>
                <img className="aaaaaaa" src={aaaaaaa} alt=""/>

                <div className="row">
                    <div className="col-md-6">
                        <div className="buttons1"></div>
                        <h3 className="ichi1">811 ta sodda dorilar</h3>
                    </div>
                    <div className="col-md-6">
                        <div className="buttons2"></div>
                        <h3 className="ichi2">426 ta murakkab dori</h3>
                    </div>
                </div>



                <div className="row my-5">
                    <div className="col-md-6">
                        <div className="buttons3"></div>
                        <h3 className="ichi3">85 ta madaniy</h3>
                    </div>
                    <div className="col-md-6">
                        <div className="buttons4"></div>
                        <h3 className="ichi4">107 ta quruq dorilar</h3>
                    </div>
                </div>



                <div className="row my-5">
                    <div className="col-md-6">
                        <div className="buttons3"></div>
                        <h3 className="ichi3">590 ta o‘simlik</h3>
                    </div>
                    <div className="col-md-6">
                        <div className="buttons4"></div>
                        <h3 className="ichi4">233 ta quyuq dorilar</h3>
                    </div>
                </div>



                <div className="row my-5">
                    <div className="col-md-6">
                        <div className="buttons3"></div>
                        <h3 className="ichi3">125 ta hayvoniy</h3>
                    </div>
                    <div className="col-md-6">
                        <div className="buttons4"></div>
                        <h3 className="ichi4">86 ta suyuq dorilar</h3>
                    </div>
                </div>






                <div className="row">

                    <div className="col-md-6">
                        <img className="gul d-inline" src={gul} alt=""/>
                        <p className="oz">
                            O‘zbekistonda hozirgi kunda <br/>
                            Ibn Sino qo‘llagan o‘simliklardan <br/>
                            70 tasi faol ishlatilmoqda
                        </p>
                    </div>

                    <div className="col-md-6">
                        <img className="gul d-inline" src={ukol} alt=""/>
                        <p className="oz">
                          Yngi Davr dori shunosligida Ibn <br/>
                          Sino ishlatgan dori shakilariga <br/>
                          faqat "INYEKSALAR" Qo'shilgan
                        </p>
                    </div>
                </div>











            </div>
        );
    }
}

export default Dori;