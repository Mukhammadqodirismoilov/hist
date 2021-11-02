import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import car from "../../../images/IbnSino.jpg";
import s from './Tibiyot.module.css'
import iyonalish from "../../../images/кртиббиёт.svg";
import nur from "../../../images/nur.png"
import paper from "../../../images/paper.png"
import kasal from "../../../images/kasal.png"
import pis from "../../../images/pis.png"
import odam from "../../../images/odam.png"
import brain from "../../../images/brain.png"
import pasha from "../../../images/pasha.png"
import tamog from "../../../images/tamog.png"
import qol from "../../../images/qol.png"


const Tibiyot = () => {
    return (
        <div className={s.touch} style={{backgroundImage: `url(${car})`}}>
            <div className="container">
                <div className="row">
                    <div className="offset-4 col-md-4 d-flex pt-3">
                        <div className=""><img src={iyonalish} alt=""/></div>
                        <div className="pt-3" style={{fontSize: '45px'}}>TIBBIYOT</div>
                    </div>
                </div>





                <div className=" row my-2">
                    <div className="col-md-6">
                        <img className="pis d-inline" src={pis} style={{width:'150px'}}/>
                        <img className="paper" src={paper} style={{width:'400px',height:'150px'}}/>

                        <p className="s.bir" style={{margin:'-130px 30%',}}>Ibn Sinonig tabobat sohasidagi eng <br/>
                        katta hizmati o'z Davrining tibbiy <br/>
                        bilimlarini tizimlashtirdi va tibbiyot <br/>
                        nazariyasini shakilinlantirdi
                        </p>
                    </div>

                    <div className="col-md-6">
                        <img className="brain d-inline" src={brain} style={{width:'150px'}}/>
                        <img className="paper" src={paper} style={{width:'400px',height:'130px'}}/>

                        <p className="s.bir" style={{margin:'-100px 30%',}}>
                           Meningit (miyianig yalig'lanishi) <br/>
                           kasaligi belgilarini aniqlagan
                        </p>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>




                <div className=" row ">
                    <div className="col-md-6">
                        <img className="nur d-inline" src={nur} style={{width:'150px'}}/>
                        <img className="paper" src={paper} style={{width:'400px',height:'120px'}}/>

                        <p className="s.bir" style={{margin:'-110px 30%',}}>
                            Ibn Sino ko'z anatomyasini iolmiy <br/>
                            tafsiflagan va ko'rish funksiyasini <br/>
                            to'gri chuntirgan
                        </p>
                    </div>

                    <div className="col-md-6">
                        <img className="pasha d-inline" src={pasha} style={{width:'150px'}}/>
                        <img className="paper" src={paper} style={{width:'400px',height:'140px'}}/>

                        <p className="s.bir" style={{margin:'-122px 30%',}}>
                            Qutilishning hususiyatlari, uning
                            boshqalarga yuqishi va bu kassalik bilan
                            og'rigan bemorning holatini nixoyatda
                            anig'lik bilan tasvirlab bergan .
                        </p>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>



                <div className=" row ">
                    <div className="col-md-6">
                        <img className="nur d-inline" src={kasal} style={{width:'150px'}}/>
                        <img className="paper" src={paper} style={{width:'400px',height:'110px'}}/>

                        <p className="s.bir" style={{margin:'-90px 30%',}}>
                           Dunyoda birinchilardan <br/>
                           jarrohlik amaliyotini o'tkazgan
                        </p>
                    </div>

                    <div className="col-md-6">
                        <img className="tamog d-inline" src={tamog} style={{width:'150px'}}/>
                        <img className="paper" src={paper} style={{width:'400px',height:'130px'}}/>

                        <p className="s.bir" style={{margin:'-110px 30%',}}>
                           Traxeootomiya (Tomog'ni teshib naycha
                           orqali nafas oldirish) davolash usulini
                           kashf etgan
                        </p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>




                <div className=" row ">
                    <div className="col-md-6">
                        <img className="odam d-inline" src={odam} style={{width:'150px'}}/>
                        <img className="paper" src={paper} style={{width:'400px',height:'110px'}}/>

                        <p className="s.bir" style={{margin:'-90px 30%',}}>
                           ibn Sino O'lat va Vabo kasaliklarini <br/>
                           birinchi bo'lib bir-biridan farqlagan
                        </p>
                    </div>

                    <div className="col-md-6">
                        <img className="qol d-inline" src={qol} style={{width:'150px'}}/>
                        <img className="paper" src={paper} style={{width:'400px',height:'130px'}}/>

                        <p className="s.bir" style={{margin:'-110px 30%',}}>
                           Perkussiya (A'zoga urib tekshirish) usuli
                           bilan tashhis qo'yishni  kashf etgan
                        </p>
                    </div>
                </div>
















            </div>


        </div>

    )
};
export default Tibiyot