import "./Footer.scss"
import viber from "../../assets/img/viber.png"
import whatsapp from "../../assets/img/whatsapp.png"
import telegram from "../../assets/img/telegram.png"

function Footer() {
  return (
    <div>
      <div className="container text-center">
        <nav className="navbar navbar-expand-lg row my-footer-style">
          <div className="col-12 col-md-6 us-address">
            <h4>НАША АДРЕСА:</h4>
            <p>м. Херсон, пр-т Ушакова, 43</p>
            <img
              src="https://opt-agro.com.ua/index.php?option=com_gridbox&amp;task=gridbox.compressImage&amp;image=%2Fimages%2Flogo%2Flogo36w.png"
              className="logo"
            ></img>
          </div>
          <div className="col-12 col-md-6 contact-us">
            <h6>Контакти:</h6>
            <div>
              <img src={viber} alt="viber icon" width="30" height="30"></img>
              <img
                className="mx-2"
                src={whatsapp}
                alt="whatsapp icon"
                width="30"
                height="30"
              ></img>
              <img
                src={telegram}
                alt="telegram icon"
                width="30"
                height="30"
              ></img>
            </div>
            <p>+38 099 025 9526</p>
            <p>+38 097 216 1135</p>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Footer
