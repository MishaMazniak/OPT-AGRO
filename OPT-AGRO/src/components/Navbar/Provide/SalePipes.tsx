import "./Provide.scss"
import foto1 from "../../../assets/img/Pipeline2022/montazh-truboprovoda-2022--2-.webp"

function SalePipes() {
  return (
    <div className="container text-center my-sale-style">
      <h1 className="text-center">Продаж ПЕ труб різних діаметрів</h1>
      <div className="row">
        <img className="col-sm-12 col-lg-6" src={foto1} alt="ledovyy-katok" />
        <div className="col-sm-12 col-lg-6 my-description">
          <p>
            <b>Будівельно-монтажна компанія OPT-AGRO</b> пропонує Вашій увазі ПЕ
            труби діаметром від 40 до 1200 мм включно
          </p>
          <button className="btn btn-success">Прайс-лист</button>
        </div>
      </div>
    </div>
  )
}

export default SalePipes
