import foto1 from "../../assets/img/Pipeline2017/montazh-truboprovoda-2017--18-.webp"
import foto2 from "../../assets/img/AccumulatorWoter/nakopitel--15-.webp"
import foto3 from "../../assets/img/PipelineRepair/remont-truboprovoda--7-.webp"
import "./BoxCarousel.scss"

function BoxCarousel() {
  return (
    <div className="container text-center my-style-carusele">
      <div
        id="carouselExampleIndicators"
        className="carousel slide  my-style-img"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={foto1} className="d-block w-100" alt="foto"></img>
            <h2 className="position-absolute top-0 start-0">
              Монтаж трубопроводу
            </h2>
          </div>
          <div className="carousel-item">
            <img src={foto2} className="d-block w-100" alt="foto"></img>
            <h2 className="position-absolute top-0 start-0">Накопичувачі</h2>
          </div>
          <div className="carousel-item">
            <img src={foto3} className="d-block w-100" alt="foto"></img>
            <h2 className="position-absolute top-0 start-0">Спецобладнання</h2>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default BoxCarousel
