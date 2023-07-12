import React from "react";
import Moi from "../img/WhatsApp Image 2022-11-25 at 12.53.15 PM (2)-PhotoRoom.png-PhotoRoom.png";
import {SlNote} from 'react-icons/sl';
import {TbMathSymbols} from 'react-icons/tb';
import {VscDebugConsole} from 'react-icons/vsc';
import {BsFire} from 'react-icons/bs';

const Section6 = () => {
  return (
    <div className="container-fluid p-5 pb-0" id="section6">
        <div className="row text-white p-5 sondage text-center">
            <div className="col-md-3 border-end border-3 colonne">
                <h4>
                    <SlNote /> <br />
                    18 projets
                </h4>
            </div>
            <div className="col-md-3 border-end border-3 colonne">
                <h4>
                    <TbMathSymbols /> <br />
                    30 algorithmes
                </h4>
            </div>
            <div className="col-md-3 border-end border-3 colonne">
                <h4>
                    <VscDebugConsole /> <br />
                    10 console.log()
                </h4>
            </div>
            <div className="col-md-3 border-end border-3 colonne">
                <h4>
                    <BsFire /> <br />
                    16 border: solid red 1px;
                </h4>
            </div>
        </div>
      <h3 className="text-center text-info mt-5">RESTONS EN CONTACT</h3>
      <div className="row mt-5">
        <div className="col-md-6">
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Prenom"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Nom"
                aria-label="Last name"
              />
            </div>
            <div class="form-floating mt-3">
              <textarea
                class="form-control"
                id="floatingTextarea2"
                ></textarea>
              <label for="floatingTextarea2" className="ms-2">
                Votre message
              </label>
            </div>
            <div className="row mt-5 d-flex justify-content-center align-items-center">
            <button type="button" class="btn w-50 btn-warning text-white">Envoyer</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-end">
          <img src={Moi} alt="moi" width="50%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
