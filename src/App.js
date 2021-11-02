import React from 'react';
import './App.css';

import {Route} from "react-router-dom";

import MainPage from "./components/MainPage/MainPage";
import SecondPage from "./components/SecondPage/SecondPage";
import MainInformation21 from "./components/MainInformations/MainInformation21";
import IjodiyDirection from "./components/IjodiyDirection/IjodiyDirection";
import Tibiyot from "./components/IjodiyDirection/Tibiyot/Tibiyot";
import IjodiyAsarlar from "./components/IjodiyDirection/IlmiyAsarlar/IlmiyAsarlar";
import Talim from "./components/Talim";
import Dori from "./components/Dori";
import Contribute from "./components/contribute";



const App = () => {
    return (
        <div className='app-wrapper'>

            {/*<Navbar />*/}
            <div className='app-wrapper-content '>

                <Route exact={true} path='/'
                       render={() => <MainPage/>}/>
                <Route path='/SecondPage'
                       render={() => <SecondPage/>}/>
                <Route path='/mainInformation21'
                       render={() => <MainInformation21/>}/>
                <Route path='/ijodiyyonalish'
                       render={() => <IjodiyDirection/>}/>
                <Route path='/tibiyot'
                       render={() => <Tibiyot/>}/>
                <Route path='/asarlar'
                       render={() => <IjodiyAsarlar/>}/>
                <Route path='/Talim'
                       render={() => <Talim/>}/>
                <Route path='/Dori'
                       render={() => <Dori/>}/>
                <Route path='/contribute'
                       render={() => <Contribute/>}/>








            </div>
        </div>
    )
}

export default App;