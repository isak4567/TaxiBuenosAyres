


function Modal({modal, functHandler, text}) {

  
  return (

    <div className={`${modal}`}>

      {text.map((elemt, index) => <p key={index}>{elemt}</p>)}
      <button onClick={()=> functHandler()}>Empezar</button>

    </div>

  );
}

export { Modal };
