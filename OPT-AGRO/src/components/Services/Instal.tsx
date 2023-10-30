import "./ServiceStyle.scss"

function Instal() {
  return (
    <div className="container my-styl-service">
      <h1 className="text-center">Монтаж та ремонт трубопроводу</h1>
      <div className="row video-instal">
        <iframe
          className="container col-sm-12 col-lg-6 col-xl-4"
          src="https://www.youtube.com/embed/KM-BTuZD-I4"
          title='Монтаж трубопровода 2013 Закарпатье. Отчет о работе "Опт-Агро"'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className="container col-sm-12 col-lg-6 col-xl-4"
          src="https://www.youtube.com/embed/01HcQiyksQk"
          title='Прокладка магистральной водопроводной трубы диаметром 1000 мм. Отчет о работе компании "Опт-Агро"'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className="container col-sm-12 col-lg-6 col-xl-4"
          src="https://www.youtube.com/embed/h8sxuFpR1Ys"
          title="Прокладка водопроводной магистральной трубы 1000 мм в Криворожском районе Днепровской области"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <br></br>
      <ul>
        <h5>
          Монтажно-будівельна компанія «Опт – Агро», досвід робіт понад 20 років
          – пропонує:
        </h5>
        <li>Стикове зварювання ПЕ труб діаметром від 40 до 1200 мм включно</li>
        <li>Терморезисторне з'єднання ПЕ труб від 20 до 400 мм</li>
        <li>
          З'єднання розтрубного з'єднання трубопроводів для самопливного
          відведення та підведення рідин
        </li>
        <li>
          Розведення труб для питної води, опалення та відведення стічних вод
          всередині приміщення
        </li>
        <li>
          Робота з ПВХ плівкою та гео - мембраною для накопичувачів, каналів,
          зміцнення берегів
        </li>
        <li>Електрозварювальні роботи та послуги газорізання</li>
      </ul>
      <h6>
        Монтажники нашої компанії проводять монтаж, згідно проекту, дотримуючись
        усіх будівельних норм та технологій монтажу
      </h6>
    </div>
  )
}

export default Instal
