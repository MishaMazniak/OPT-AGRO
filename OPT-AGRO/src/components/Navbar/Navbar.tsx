import "./Navbar.scss"
import Dropdown from "../../../node_modules/react-bootstrap/Dropdown"
import {Link} from "react-router-dom"
import foto1 from "../../assets/img/foto1.jpeg"
import foto2 from "../../assets/img/foto2.jpeg"
import foto3 from "../../assets/img/foto3.jpeg"

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
              <div className="my-1">
                <Dropdown>
                  <Dropdown.Toggle variant="success">
                    НАДАЄМО ПОСЛУГИ
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/inginer" className="nav-link">
                        <span className="my-li">Інжинера-проектанта</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/channel" className="nav-link">
                        <span className="my-li">
                          Будівництва та ремонту каналів
                        </span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/welding" className="nav-link">
                        <span className="my-li">Стикового зварювання</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/instal" className="nav-link">
                        <span className="my-li">
                          Монтажу та ремонту трубопроводу
                        </span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/bank" className="nav-link">
                        <span className="my-li">Зміцнення берегів</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/pomps" className="nav-link">
                        <span className="my-li">
                          Будівництва та ремонту насосних станцій
                        </span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/accumulat" className="nav-link">
                        <span className="my-li">Будівництва накопичувачів</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <li>
                        <hr className="dropdown-divider"></hr>
                      </li>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/" className="nav-link">
                        <span className="my-li">
                          <b>Продаж труб</b>
                        </span>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <li className="nav-item btn btn-success mx-5 my-1">
                <a className="nav-link py-0 my-galery">ГАЛЕРЕЯ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
