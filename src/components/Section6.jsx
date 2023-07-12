import React from "react";
import Moi from "../img/WhatsApp Image 2022-11-25 at 12.53.15 PM (2)-PhotoRoom.png-PhotoRoom.png";

const Section6 = () => {
  return (
    <div className="container p-5 pb-0" id="section6">
      <h3 className="text-center text-info">RESTONS EN CONTACT</h3>
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
