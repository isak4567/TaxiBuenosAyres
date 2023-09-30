import { useState } from 'react';
import { Modal } from './components/modal';
import './style/style.css';


// ##### func de Tiempo #####
function TimerFT(setAccident, setChoque, setMoveWheel, setWhite) {

  const Timer = setTimeout(() => {
    setAccident("golpe");
    setChoque("choque");
    setMoveWheel("animDRlarge");
    setWhite("white");
  },3000);

  return Timer;
}

function App() {

  const textStart = [
    "Ahora mismo vas a experimentar lo que es ser un taxista en Buenos Aires.",
    "Tus incontables enemigos no quieren dejarte trabajar.",
    "Esos nefastos tacheros intentaran pegarte por tu ventana, que podrias subirla, pero hacerlo te quitaria la brisa del viernes por la mañana y eso no se negocia.",
    "Arrows o a y d para volantiar a la seguridad del peligro proviniente."
  ];

  // ##### var de Movimiento de Rueda #####
  const [moveWheel, setMoveWheel] = useState("");

  // ##### Modal #####
  const [modal, setModal] = useState("modal");
  const [lText, setLText] = useState([...textStart]);


  // ##### var de Pruebas #####
  const [firstTest, setFirstTest] = useState("failed");
  const [contFT, setContFT] = useState(0);
  const [F, setF] = useState(0);
  

  // ##### animaciones de Primer Final #####
  const [alert, setAlert] = useState("noDisplay");
  const [golpe, setGolpe] = useState("noDisplay");
  const [white, setWhite] = useState("noDisplay");
  const [choque, setChoque] = useState("");
  const [guy, setGuy] = useState("noDisplay");

  // ##### func de Movimiento de Rueda #####
  const moveCar = (e) => {

    if (e.key == "d") {
      setMoveWheel("animDR");
    } else if ( e.key == "a" ) {
      setMoveWheel("animDL");
    }

    if (e.key == "d" && contFT > 0) {
      setFirstTest("passed");
      clearTimeout(F);
    }
  }
  
  // ##### func de Comienzo #####
  const StartHandler = () => {

    setModal("noDisplay");

    setTimeout(() => {
      setContFT(1);
      setAlert("alert1");
      setF(TimerFT(setGolpe, setChoque, setMoveWheel, setWhite));
    },3000);

  }

  function Fin1(setModal) {

    setTimeout(() => {
      setModal("modal");
      setLText([
        "Chocaste un compatriotra del increible Partido Comunista Chino.",
        "Ahora tendras que enfrentarte a toda la misericordia del gran Emperador Xi Jinping, alabado sea su nombre.",
        "###### Final 1 ######"
    ])
    },9000);

  }

  return (
    <div>

      <div className={`App ${choque}`} onKeyUp={(e) => moveCar(e)} tabIndex="0">
        <main>
            <div onClick={()=> setMoveWheel("animDL")} className="direccion">Izquierda</div>
            <div onAnimationEnd={()=> setMoveWheel("")} className={`volante ${moveWheel}`} alt="volante" />
            <div onClick={()=> setMoveWheel("animDR")} className="direccion">Derecha</div>
        </main>
        
        <footer>
            <img src={require('./img/velCar1.png')} alt="velocimetro" />
        </footer>

        <Modal modal={modal} functHandler={StartHandler} text={lText} />

        {/*##### alerta #####*/}
        <div className={`${alert}`}>
          <img src={require('./img/alert.png')} alt="cartel de alerta" />
        </div>


      </div>

        {/*##### animacion de primera perdida #####*/}
        <div onAnimationEnd={()=> setGolpe("noDisplay")} className={`${golpe}`}>
          <img src={require('./img/PuñoI.png')} alt="cartel de alerta" />
        </div>

        <div onAnimationEnd={()=> {
          setWhite("noDisplay");
          setGuy("guy1");
          Fin1(setModal);
          }} className={`${white}`}></div>

        <div onAnimationEnd={()=> setGuy("friend1")}
        className={`${guy}`}></div>
    </div>
  );
}

export default App;
