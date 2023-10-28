import Dropdown from "../../../../node_modules/react-bootstrap/Dropdown"
import {Link} from "react-router-dom"

function Provide() {
  return (
    <div>
      <div className="my-1">
        <Dropdown>
          <Dropdown.Toggle variant="success">НАДАЄМО ПОСЛУГИ</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/inginer" className="nav-link">
                <span className="my-li">Інжинера-проектанта</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/channel" className="nav-link">
                <span className="my-li">Будівництва та ремонту каналів</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/welding" className="nav-link">
                <span className="my-li">Стикового зварювання</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/instal" className="nav-link">
                <span className="my-li">Монтажу та ремонту трубопроводу</span>
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
    </div>
  )
}

export default Provide
