import "./Gallery.scss"
import Pipeline from "./Pipeline"
import Irrigation from "./Irrigation"
import Replacing from "./Replacing"
import IceRink from "./IceRink"
import AccumulatorWoter from "./AccumulatorWoter"
import PumpingStation from "./PumpingStation"
import PipelineWelder from "./PipelineWelder"
import SpecialMachines from "./SpecialMachines"
import SnailFarm from "./SnailFarm"

function Gallery() {
  return (
    <div className="container text-center my-gallery">
      <iframe
        className="container ifrem-video"
        src="https://www.youtube.com/embed/Bj9ryG0B3FI"
        title='"Опт-Агро" монтаж трубопровода, водоснабжение, строительство каналов подачи воды'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1 className="text-center">Галерея</h1>
      <Pipeline></Pipeline>
      <Irrigation></Irrigation>
      <Replacing></Replacing>
      <IceRink></IceRink>
      <AccumulatorWoter></AccumulatorWoter>
      <PumpingStation></PumpingStation>
      <PipelineWelder></PipelineWelder>
      <SpecialMachines></SpecialMachines>
      <SnailFarm></SnailFarm>
    </div>
  )
}

export default Gallery
