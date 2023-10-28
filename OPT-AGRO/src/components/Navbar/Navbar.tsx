import "./Navbar.scss"
import {Link} from "react-router-dom"
import foto1 from "../../assets/img/Pipeline2022/montazh-truboprovoda-2022--2-.webp"
import foto2 from "../../assets/img/AccumulatorWoter/nakopitel--12-.webp"
import foto3 from "../../assets/img/PumpingStation/rekonstrukciya-nasosnoy--2-.webp"
import Provide from "./Provide/Provide"

function Navbar() {
  return (
    <div className="container text-center">
      <nav className="navbar navbar-expand-lg my-main-style">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="https://opt-agro.com.ua/index.php?option=com_gridbox&amp;task=gridbox.compressImage&amp;image=%2Fimages%2Flogo%2Flogo36w.png"
              className="logo"
              alt="logo"
            ></img>
            <h5>Будівельно-монтажна компанія</h5>
          </Link>
          <div className="foto_nav">
            <img className="img-first" src={foto1}></img>
            <img className="img-second" src={foto2}></img>
            <img className="img-three" src={foto3}></img>
          </div>
          <button
            className="navbar-toggler my-but-drop"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end my-style-but"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <Provide></Provide>
              <li className="nav-item btn btn-success mx-5 my-1">
                <Link to="/gallery" className="nav-link py-0 my-galery">
                  ГАЛЕРЕЯ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
