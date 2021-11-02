import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import car from "../../../images/IbnSino.jpg";
import s from './IlmiyAsarlar.module.css';

import {NavLink} from "react-router-dom";
import ada from "../../../images/Кругадабиёт.png";
import ramka from "../../../images/2.png";

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
    crossOrigin="anonymous"
/>
const IjodiyAsarlar = () => {
    return (
        <div className={s.touch} style={{backgroundImage: `url(${car})`}}>
            <div className="container">
                <div className="row">
                    <div className="offset-4 col-md-4 d-flex pt-3">
                        <div className=""><img src={ada} alt="" style={{width: '100px'}}/></div>
                        <div className="pt-4 px-2" style={{fontSize: '30px'}}>ILMIY ASARLAR</div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className=" col-md-8 offset-2 text-center fw-bold" style={{fontSize: '21px'}}>
                        Ibn Sino Asarlarining umumiy soni 450 dan oshadi, <br/>
                        Lekin bizgacha 160 ga yaqin yetib kelgan.
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        "Tib qonunlari
                    </div>
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        "Yusuf qisasi"
                    </div>
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        "Qushlar risolasi"
                    </div>
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                       "Yurak dorilari kitobi"
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        "Donishnoma"
                    </div>
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        "Shifo kitobi"
                    </div>
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        "Najot kitobi"
                    </div>
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                       "Sharqliklar Hikmati"
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        "Tibbiy se'riy asar"
                    </div>
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        "Salomon va Ibsol"
                    </div>
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        "Inson kitobi"
                    </div>
                    <div className="col-md-3 px-5 fw-bold pt-3 " style={{
                        backgroundImage: `url(${ramka})`,
                        backgroundSize: '80% 70px',
                        height: '70px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <p className="ishora">
                            Ishora va ogohlantirishlar
                        </p>

                    </div>

                </div>
            </div>


        </div>

    )
}
export default IjodiyAsarlar