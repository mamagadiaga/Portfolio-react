import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Moi from '../img/WhatsApp Image 2022-11-25 at 12.53.15 PM (2)-PhotoRoom.png-PhotoRoom.png';
import {BsFillPhoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {FaMapMarkerAlt, FaHome} from 'react-icons/fa';


const Section1 = () => {
  return (
    <div className="container-fluid" id="section1">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
          <button
            class="navbar-toggler bg-white shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d--lg-flex justify-content-lg-center align-items-lg-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-white " aria-current="page" href="#">
                  ACCUEIL
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white " aria-current="page" href="#">
                  PRESENTATION
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white " href="#">
                  PORTFOLIO
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white " href="#">
                  COMPETENCES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white ">EXPERIENCES</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container border border-white mt-5">
        <div className="row">
            <div className="col-md-7 text-white p-5">
              <h1>Hello ! <br /> Je suis <span className="text-warning">MAMA GADIAGA</span> <br />
                 Développeuse frontend 
              </h1>
              <div className="degrade p-1 mt-5">
                  <p>
                    <span>
                      <BsFillPhoneFill className="text-warning"/> 77 670 00 66
                    </span>
                    <span className=" ms-4">
                      <MdEmail className="text-warning"/> mamagdg670@gmail.com
                    </span>
                    <span className=" ms-4">
                      <FaMapMarkerAlt className="text-warning"/> Colobane
                    </span>
                    <span className=" ms-4">
                      <FaHome className="text-warning"/> Bakeli
                    </span>
                  </p>
              </div>
            </div>
            <div className="col-md-4 pt-3">
                <img src={Moi} alt="moi" width='100%' height='100%' />
            </div>
        </div>
      </div>
      <div className="mt-5 text-secondary">.</div>
    </div>
    
  );
};

export default Section1;
