import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';


import car from "../../images/IbnSino.jpg";
import {Dropdown} from "react-bootstrap";
import s from './MainInformation.module.css';
import sino from './../../images/ИбнСино.png';
import iyonalish from './../../images/ижодйщналишлари.svg';
import ilmfan from './../../images/илмфан.svg';
import adabyot from './../../images/Кругадабиёт.png';
import {NavLink} from "react-router-dom";

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
    crossOrigin="anonymous"
/>
const MainInformation21 = () => {
    return (
        <div className={s.touch} style={{backgroundImage: `url(${car})`}}>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-3 pt-2">
                        <div className="">
                            <img src={sino} alt="" className="w-100"/>
                        </div>
                        <div className="text-center fw-bold" style={{fontSize: '25px'}}>ABU ALI IBN SINO</div>
                        <div className="text-center" style={{fontSize: '20px', color: '#5E5D5C'}}>(980-1037) <br/>BUXORODA
                            TUG'ILGAN
                        </div>

                    </div>
                    <div className="col-md-9 pt-3" style={{paddingLeft: '90px'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="pt-5 fw-bold" style={{fontSize: '20px'}}>
                                      Ibn Sino - buyuk ensiklopedik olim, tabib, musiqashunos. O'rta Osiyo va <br/>
                                      Eronda yashagan, turli hukumdorlar payitida tabib va vazir bo'lgan. Ibn Sino <br/>
                                      asarlari Sharq va G'arbda bag'oyat mashhur. <br/>
                                      "Tib qonunlari" allomaning shoh asari bo'lib, u Yunon, Rim, Hind, hamda <br/>
                                      Musulmon sharqi tabiblari tajribasining tandqidiy tahlili va ijodiy mahsulidir

                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5 mt-3">
                                <div className="col-md-4 text-center">
                                    <NavLink to='/ijodiyyonalish'> <img src={iyonalish} alt=""/></NavLink>

                                    <div className="text-center fw-bold pt-2"
                                         style={{fontSize: '22px'}}>IJOD <br/> YO'NALISHLARI
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <NavLink to='/asarlar'><img src={adabyot} alt="" style={{width: '95px'}}/></NavLink>

                                    <div className="text-center fw-bold pt-4" style={{fontSize: '22px'}}>ILMIY ASARLAR
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <NavLink to='/contribute'> <img src={ilmfan} alt=""/></NavLink>

                                    <div className="text-center fw-bold pt-2" style={{fontSize: '22px'}}>JAHON
                                        ILM-FANIGA <br/> QO'SHGAN HISSASI
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



        </div>

    )
}
export default MainInformation21