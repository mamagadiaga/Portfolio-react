import React from "react";

const Section4 = () => {
  return (
    <div className="container mt-5 p-5">
      <h3 className="text-center text-info">MES COMPETENCES</h3>
      <div className="row mt-5 gx-5">
        <div className="col colonne text-end">
          <h5 className="bg-light text-warning p-2">OUTILS</h5>
          <div className="row mt-5">
            <div className="col-md-6 text-end">
              <div class="progress rounded-1">
                <div
                  class="progress-bar w-100"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="">BOOTSTRAP</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-end">
              <div class="progress rounded-1">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="">LARAVEL</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-end">
              <div class="progress rounded-1">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="">REACT</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-end">
              <div class="progress rounded-1">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="">Django</h5>
            </div>
          </div>
        </div>
        <div className="col colonne">
          <h5 className="bg-light text-warning p-2">LANGUAGES</h5>
          <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <h5 className="">HTML</h5>
            </div>
            <div className="col-md-6">
              <div class="progress rounded-1">
                <div
                  class="progress-bar w-100"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <h5 className="">CSS</h5>
            </div>
            <div className="col-md-6">
              <div class="progress rounded-1">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <h5 className="">JS</h5>
            </div>
            <div className="col-md-6">
              <div class="progress rounded-1">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <h5 className="">PHP</h5>
            </div>
            <div className="col-md-6">
              <div class="progress rounded-1">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-end">
          <h5 className="text-warning">LANGUES</h5>
          <p>Francais</p>
          <p>Anglais</p>
          <p>Wolof</p>
        </div>
        <div className="col">
          <h5 className="text-warning">HOBBIES</h5>
          <p>Lecture</p>
          <p>Ecriture</p>
          <p>Calculs distribues</p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
