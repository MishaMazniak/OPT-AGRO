import "./App.scss"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import BoxCarousel from "./components/BoxCarousel/BoxCarousel"
import UsBenefits from "./components/UsBenefits/UsBenefits"
import Footer from "./components/Footer/Footer"
import Inginer from "./components/Services/Inginer"
import Channel from "./components/Services/Channel"
import Welding from "./components/Services/Welding"
import Instal from "./components/Services/Instal"
import Bank from "./components/Services/Bank"
import Pomps from "./components/Services/Pomps"
import Accumulat from "./components/Services/Accumulat"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<BoxCarousel></BoxCarousel>}></Route>
        <Route path="/inginer" element={<Inginer></Inginer>}></Route>
        <Route path="/channel" element={<Channel></Channel>}></Route>
        <Route path="/welding" element={<Welding></Welding>}></Route>
        <Route path="/instal" element={<Instal></Instal>}></Route>
        <Route path="/bank" element={<Bank></Bank>}></Route>
        <Route path="/pomps" element={<Pomps></Pomps>}></Route>
        <Route path="/accumulat" element={<Accumulat></Accumulat>}></Route>
      </Routes>
      <UsBenefits></UsBenefits>
      <Footer></Footer>
    </>
  )
}

export default App
