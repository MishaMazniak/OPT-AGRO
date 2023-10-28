import foto1 from "../../../assets/img/Sprinkler/montazh-dozhdevalnoy--1-.webp"
import foto2 from "../../../assets/img/Sprinkler/montazh-dozhdevalnoy--2-.webp"
import foto3 from "../../../assets/img/Sprinkler/montazh-dozhdevalnoy--3-.webp"
import foto5 from "../../../assets/img/Sprinkler/montazh-dozhdevalnoy--5-.webp"

import foto6 from "../../../assets/img/Drip/kapelnoe-oroshenie--1-.webp"
import foto7 from "../../../assets/img/Drip/kapelnoe-oroshenie--2-.webp"
import foto8 from "../../../assets/img/foto3.jpeg"

function Irrigation() {
  return (
    <div className="container text-center">
      <h1 className="text-center">Монтаж дощувальної машини</h1>
      <img src={foto1} alt="montazh-dozhdevalnoy" />
      <img src={foto2} alt="montazh-dozhdevalnoy" />
      <img src={foto3} alt="montazh-dozhdevalnoy" />
      <img src={foto5} alt="montazh-dozhdevalnoy" />
      <h1 className="text-center">Крапельне зрошення</h1>
      <img src={foto6} alt="kapelnoe-oroshenie" />
      <img src={foto7} alt="kapelnoe-oroshenie" />
      <img src={foto8} alt="kapelnoe-oroshenie" />
    </div>
  )
}
export default Irrigation
