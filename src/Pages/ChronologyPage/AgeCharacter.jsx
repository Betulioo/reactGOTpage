const AgeCharacter = ({ age, name, image, laclase, laclase2}) => {

 
    return (
      <div id={laclase2}>
        <p className="c-age">{age}</p>
        <p className="c-name">{name}</p>
        <div className={laclase}>
          <img className= "c-img" src={`https://game-of-thrones-json-server.vercel.app/${image}`} alt={name}/>
        </div>
      </div>
    ) 
  }
  export default AgeCharacter