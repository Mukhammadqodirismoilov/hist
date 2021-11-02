import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import car from "../../images/IbnSino.jpg";
import s from './IjodiyDirection.module.css';
import iyonalish from './../../images/ижодйщналишлариt.svg';
import tibbiyot from './../../images/кругтиббиёт.png';
import astronomiya from './../../images/кругастрономия.png';
import musiqa from './../../images/кругмусиқа.png';
import mexanika from './../../images/кругмеханика.png';
import adbiyot from './../../images/Кругадабиёт.png';
import psix from './../../images/кругпсихология.png';
import matem from './../../images/кругматем.png';
import talim from './../../images/кругtalim.png';
import dorichi from './../../images/Кругфалсафа.png';
import fizika from './../../images/кругfizika.png';
import {NavLink} from "react-router-dom";

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
    crossOrigin="anonymous"
/>
const IjodiyDirection = () => {
    return (
        <div className={s.touch} style={{backgroundImage: `url(${car})`}}>


            <div className="container">
                <div className="row">
                    <div className="offset-4 col-md-4 d-flex pt-3">
                        <div className=""><img src={iyonalish} alt=""/></div>
                        <div className="pt-4" style={{fontSize: '26px'}}>IJODIY YO'NALISHLAR</div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-5">
                        <div className="container">
                            <div className="row mt-4 pt-4">
                                <div className="col-md-6 text-center">
                                    <NavLink to='/tibiyot'><img src={tibbiyot} alt=""
                                                                style={{width: '100px'}}/></NavLink>

                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>Tibbiyot</div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <NavLink to='/Talim'><img src={talim} alt="" style={{width: '100px'}}/></NavLink>

                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>TALIM</div>
                                </div>
                            </div>
                            <div className="row mt-5 pt-5">
                                <div className="col-md-6 text-center">
                                    <img src={musiqa} alt="" style={{width: '100px'}}/>
                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>MUSIQA</div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <img src={astronomiya} alt="" style={{width: '100px'}}/>
                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>ASTRONOMIYA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="container">
                            <div className="row pt-2">
                                <div className="col-md-4 text-center">


                                    <NavLink to='/tibiyot'><img src={tibbiyot} alt=""
                                                                style={{width: '80px'}}/></NavLink>


                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>Tibbiyot</div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <NavLink to='/Talim'><img src={talim} alt="" style={{width: '80px'}}/></NavLink>

                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>TALIM</div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <NavLink to='/Dori'><img src={dorichi} alt="" style={{width: '80px'}}/></NavLink>

                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>DORISHUNOSLIK</div>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-md-4 text-center">
                                    <img src={matem} alt="" style={{width: '80px'}}/>
                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>MATEMATIKA</div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={fizika} alt="" style={{width: '80px'}}/>
                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>FIZIKA</div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={musiqa} alt="" style={{width: '80px'}}/>
                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>MUSIQA</div>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-md-4 text-center">
                                    <img src={mexanika} alt="" style={{width: '80px'}}/>
                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>MEXANIKA</div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={astronomiya} alt="" style={{width: '80px'}}/>
                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>ASTRONOMIYA</div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={psix} alt="" style={{width: '80px'}}/>
                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>PSIXOLOGIYA</div>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-md-4 text-center">
                                    <img src={fizika} alt="" style={{width: '80px'}}/>
                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>FIZIKA</div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={tibbiyot} alt="" style={{width: '80px'}}/>
                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>Tibbiyot</div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={adbiyot} alt="" style={{width: '80px'}}/>
                                    <div className="text-center fw-bold" style={{fontSize: '19px'}}>ADABIYOT</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}
export default IjodiyDirection