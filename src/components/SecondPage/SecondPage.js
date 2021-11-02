import React from 'react';
import s from './SecondPage.module.css';
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


import car from "../../images/IbnSino.jpg";
import {Dropdown} from "react-bootstrap";

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
    crossOrigin="anonymous"
/>
const SecondPage = () => {
    return (
        <div className={s.touch} style={{backgroundImage: `url(${car})`}}>

            <div className={s.size}>BIRINCHI RENESSANS DAVRI MADRASALARI BUXORO MISOLIDA</div>
            <Dropdown className={s.dropdown1} autoClose="outside">
                <Dropdown.Toggle className={s.dropdown2}
                                 id="dropdown-autoclose-true">
                    <b className={s.son}>IX asr</b>
                    <p className="write">5 ta MADRASA</p>
                </Dropdown.Toggle>

                <Dropdown.Menu className={s.menu}>
                    <Dropdown.Item className={s.timachi} href="/mainInformation11"><p>Timchai
                        Xon</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation12" className={s.timachi}><p>Abu Bakr
                        IBN AL-fazil</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation13" className={s.timachi}><p
                    >G'aribiya</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation14" className={s.timachi}><p
                    >Kalabod</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation15" className={s.timachi}><p>Abu
                        hafs Al-Kabir</p></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className={s.dropdown1} autoClose="outside">
                <Dropdown.Toggle className={s.dropdown2}
                                 id="dropdown-autoclose-true">
                    <b className={s.son}>IX asr</b>
                    <p className="write">5 ta MADRASA</p>
                </Dropdown.Toggle>

                <Dropdown.Menu className={s.menu}>
                    <Dropdown.Item  href="/mainInformation21" className={s.timachi1}><p className="timchai">Dor ul
                        mirza</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation22" className={s.timachi1}><p
                        className="timchai">Farjak</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation23" className={s.timachi}><p className="timchai">Timchai
                        Xon</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation24" className={s.timachi}><p className="timchai">Abu Bakr
                        IBN AL-fazil</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation25" className={s.timachi}><p
                        className="timchai">G'aribiya</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation26" className={s.timachi}><p
                        className="timchai">kalabod</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation27" className={s.timachi}><p className="timchai">Abu
                        hafs Al-Kabir</p></Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className={s.dropdown1} autoClose="outside">
                <Dropdown.Toggle className={s.dropdown2}
                                 id="dropdown-autoclose-true">
                    <b className={s.son}>IX asr</b>
                    <p className="write">5 ta MADRASA</p>
                </Dropdown.Toggle>

                <Dropdown.Menu className={s.menu}>
                    <Dropdown.Item className={s.timachi1} href="/mainInformation31"><p
                        className="timchai">Kulartegin</p></Dropdown.Item>
                    <Dropdown.Item className={s.timachi} href="/mainInformation32"><p className="timchai">Dor ul
                        mirza</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation33" className={s.timachi}><p
                        className="timchai">Farjak</p></Dropdown.Item>
                    <Dropdown.Item className={s.timachi} href="/mainInformation34"><p className="timchai">Timchai
                        Xon</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation35" className={s.timachi}><p className="timchai">Abu Bakr
                        IBN AL-fazil</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation36" className={s.timachi}><p
                        className="timchai">G'aribiya</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation37" className={s.timachi}><p
                        className="timchai">Kalabod</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation37" className={s.timachi}><p className="timchai">Abu
                        hafs Al-Kabir</p></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className={s.dropdown1} autoClose="outside">
                <Dropdown.Toggle className={s.dropdown2}
                                 id="dropdown-autoclose-true">
                    <b className={s.son}>IX asr</b>
                    <p className="write">5 ta MADRASA</p>
                </Dropdown.Toggle>

                <Dropdown.Menu className={s.menu}>
                    <Dropdown.Item className={s.timachi1}   href="/mainInformation41"><p className="timchai">Shayx
                        ul-olam Boharziy</p></Dropdown.Item>
                    <Dropdown.Item className={s.timachi1} href="/mainInformation42" ><p className="other">Imom al
                        Muhammad G'</p></Dropdown.Item>
                    <Dropdown.Item className={s.timachi} href="/mainInformation43"><p
                        className="timchai">Kulartegin</p></Dropdown.Item>
                    <Dropdown.Item className={s.timachi} href="/mainInformation44"><p className="timchai">Dor ul
                        mirza</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation45" className={s.timachi}><p
                        className="timchai">Farjak</p></Dropdown.Item>
                    <Dropdown.Item className={s.timachi} href="/mainInformation46"><p className="timchai">Timchai
                        Xon</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation47" className={s.timachi}><p className="timchai">Abu Bakr
                        IBN AL-fazil</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation48" className={s.timachi}><p
                        className="timchai">G'aribiya</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation49" className={s.timachi}><p
                        className="timchai">Kalabod</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation50" className={s.timachi}><p className="timchai">Abu
                        hafs Al-Kabir</p></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className={s.dropdown1} autoClose="outside">
                <Dropdown.Toggle className={s.dropdown2}
                                 id="dropdown-autoclose-true">
                    <b className={s.son}>IX asr</b>
                    <p className="write">5 ta MADRASA</p>
                </Dropdown.Toggle>

                <Dropdown.Menu className={s.menu}>
                    <Dropdown.Item className={s.timachi+` bg-danger`} href="#"
                                   ><p className="secondd">Mo'g'ullar
                        istilosidan song</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation52" className={s.timachi1}><p className="timchai">Hoja
                        Bulg'or</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation53" className={s.timachi1}><p
                        className="timchai">Honiya</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation54" className={s.timachi1}><p
                        className="timchai">Mas'udiya</p></Dropdown.Item>
                    <Dropdown.Item href="/mainInformation55" className={s.timachi1}><p className="timchai">Hazrat ho'ja orif</p></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        </div>

    )
}
export default SecondPage