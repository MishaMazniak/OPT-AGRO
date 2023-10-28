import foto1 from "../../../assets/img/SnailFarm/ferma-ulitok--10-.webp"
import foto2 from "../../../assets/img/SnailFarm/ferma-ulitok--4-.webp"
import foto3 from "../../../assets/img/SnailFarm/ferma-ulitok--5-.webp"
import foto4 from "../../../assets/img/SnailFarm/ferma-ulitok--6-.webp"
import foto5 from "../../../assets/img/SnailFarm/ferma-ulitok--7-.webp"
import foto6 from "../../../assets/img/SnailFarm/ferma-ulitok--8-.webp"

function SnailFarm() {
  return (
    <div className="container text-center">
      <h1 className="text-center">
        Льодова ковзанка у Києві - Терморезисторне зварювання
      </h1>
      <img src={foto1} alt="ferma-ulitok" />
      <img src={foto2} alt="ferma-ulitok" />
      <img src={foto3} alt="ferma-ulitok" />
      <img src={foto4} alt="ferma-ulitok" />
      <img src={foto5} alt="ferma-ulitok" />
      <img src={foto6} alt="ferma-ulitok" />
      <div>
        <iframe
          className="mx-2 my-2"
          width="260"
          height="260"
          src="https://www.youtube.com/embed/lOj8iE0K6Fg"
          title="Строительство фермы улиток в Харькоской области  Компания Опт Агро  часть 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className="mx-2 my-2"
          width="260"
          height="260"
          src="https://www.youtube.com/embed/260jUT79808"
          title="Будівництво ферми равликів у Харківській області Компанія Опт Агро частина 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default SnailFarm
