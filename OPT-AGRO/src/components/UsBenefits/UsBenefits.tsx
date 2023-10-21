import "./UsBenefits.scss"
import wether from "../../assets/img/wether.jpeg"
import tools from "../../assets/img/tools.jpg"
import supply from "../../assets/img/supply.jpeg"
import welder from "../../assets/img/welder.jpeg"
import machinery from "../../assets/img/machinery.jpeg"
import mapa from "../../assets/img/mapa.jpeg"

function UsBenefits() {
  return (
    <div className="container text-center my-style-about-us">
      <h1 className="mt-4">
        "Опт-Агро" на ринку будівельних послуг понад 20 років
      </h1>
      <h2 className="my-4">Перевага співробітництва з нами </h2>
      <div className="row my-style-benefit">
        <div className="col">
          <h4>Сезон</h4>
          <img src={wether} alt="foto" width="100" height="100"></img>

          <p>Здійснюємо монтаж труб цілий рік незалежно від погоди</p>
        </div>
        <div className="col">
          <h4>Обладнання</h4>
          <img src={tools} alt="foto" width="100" height="100"></img>
          <p>
            Апарати стикового та термозварювання діаметром від 40 до 630 мм
            включно
          </p>
        </div>
        <div className="col">
          <h4>Постачання</h4>
          <img src={supply} alt="foto" width="100" height="100"></img>
          <p>Постачання труб та сполучних фітингів для подачі води</p>
        </div>
        <div className="col">
          <h4>Фахівці</h4>
          <img src={welder} alt="foto" width="100" height="100"></img>
          <p>
            Сертифіковані спеціалісти зі спеціальності
            <i> «Зварювальник поліетиленових труб»</i>
          </p>
        </div>
        <div className="col">
          <h4>Спецтехніка</h4>
          <img src={machinery} alt="foto" width="100" height="100"></img>
          <p>Устаткування для риття/укладання/засипання трубопроводу</p>
        </div>
        <div className="col">
          <h4>Доступність</h4>
          <img src={mapa} alt="foto" width="100" height="100"></img>
          <p>
            Працюємо по всій Україні, своїми бригадами та на своєму обладнанні
          </p>
        </div>
      </div>
    </div>
  )
}

export default UsBenefits
