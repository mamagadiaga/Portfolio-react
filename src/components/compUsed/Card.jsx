import React from "react";

const Carte = (prop) => {
  return (
    <div>
      <div class="card border-0 shadow p-5 text-center">
        <img src={prop.projet} class="card-img-top" alt="..." width='100%' height='150px' />
        <div class="card-body">
          <h5 class="card-title text-warning bakeli">Bakeli</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-transparent text-warning border-warning bouton">
            Voir le projet github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carte;
