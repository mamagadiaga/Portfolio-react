import React from "react";
// import Wave1 from "../img/Vector 2.png";
import {Bs1CircleFill, Bs2CircleFill, Bs3CircleFill, Bs4CircleFill, Bs5CircleFill} from 'react-icons/bs';

const Section2 = () => {
  return (
    <div className="container mt-5" id="section2">
      {/* <img src={Wave1} alt="wave1" width='100%' height='auto'/> */}
      <h2 className="text-center text-info">PRESENTATION</h2>
      <div className="row mt-5">
        <div className="col-md-6">
            <p> <Bs1CircleFill className="text-warning"/> Capacite d'adaptation</p>
            <p> <Bs2CircleFill className="text-warning"/> Collaboration</p>
            <p> <Bs3CircleFill className="text-warning"/> Responsabilite</p>
            <p> <Bs4CircleFill className="text-warning"/> Prise de decision</p>
            <p> <Bs5CircleFill className="text-warning"/> Gestion de temps</p>
        </div>
        <div className="col-md-6">
          <h4 className="text-warning">Triforce !</h4>
          <p>
            À l'écoute, je suis FORCE de proposition, j'aime chercher des
            solutions et ainsi rendre services. Passionné par l'apprentissage et
            la découverte intellectuelle, j'ai développé une FORCE de travail
            afin de toujours progresser au quotidien. FORCE tranquille, j'ai
            toujours su collaborer et pleinement m'intégrer au sein du
            collectif.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
