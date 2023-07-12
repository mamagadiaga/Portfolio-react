import React from 'react';
import Carte from '../components/compUsed/Card';
import P1 from '../img/g172.png';
import P2 from '../img/g296.png';
import P3 from '../img/WWW.png';
import P4 from '../img/Group 2086.png';
import P5 from '../img/Group 7 1.png';
import P6 from '../img/g312 1.png';

const Section3 = () => {
    return (
        <div className='container-fluid bg-light mt-5 p-5'>
            <h3 className="text-center text-info">MON PORTFOLIO</h3>
            <div className="row mt-3">
                <div className="col mt-sm-5 colonne">
                    <Carte projet={P1}/>
                </div>
                <div className="col mt-sm-5 colonne">
                    <Carte projet={P2}/>
                </div>
                <div className="col mt-sm-5 colonne">
                    <Carte projet={P3}/>
                </div>
            </div>
            <div className="row">
                <div className="col mt-sm-5 colonne">
                    <Carte projet={P4}/>
                </div>
                <div className="col mt-sm-5 colonne">
                    <Carte projet={P5}/>
                </div>
                <div className="col mt-sm-5 colonne">
                    <Carte projet={P6}/>
                </div>
            </div>
        </div>
    );
};

export default Section3;