import React, { useEffect, useState } from "react";
import "./InfoCharacter.css";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import MenuConCasa from "../../Components/MenuConCasa/MenuConCasa";
const InfoCharacter = ({
  name,
  house,
  parents,
  siblings,
  alliances,
  episodes,
  titles,
  image,
  houseimg,
}) => {
  const {t} = useTranslation()
  const [houses, setHouses] = useState([]);
  const [houseFound, setHouseFound] = useState({});
  const getHouses = async () => {
    const results = await axios(`https://game-of-thrones-json-server.vercel.app/houses`);
    // console.log(results)
  setHouses(results.data);
  };

// console.log(houses)
  const findHouse =(valor)=>{
    const housesfound = houses.find((house) => house.name === valor)
    // console.log(housefound);
    // setHouseFound(housesfound);
    if (housesfound) {
      setHouseFound(housesfound);
    } else {
      setHouseFound({})
    }

  }
// console.log(houseFound.image)
  useEffect(()=>{
    getHouses()

  },[])

  useEffect(()=>{
    findHouse(house)

  },[houses])
  return (
    <>

    <div className="container_all">
    <div className="container_imagename">
            <figure className="img-figure">
          <img
            className="img-character"
            src={`https://game-of-thrones-json-server.vercel.app/${image}`}
            alt=""
          />
        </figure>
      <div className="container_name">
        <h2>{name}</h2>
      </div>
</div>
<div className="container_text">
      <div className="container_name">
        <h3>{t('translated-CASA')}</h3>
        <img
            className="img-house"
            src={`https://game-of-thrones-json-server.vercel.app/${houseFound ? houseFound.image : ''}`}
            alt=""
          />

      </div>

      <div className="container_name">
        <h3>{t('translated-ALIANZAS')}</h3>
        {alliances.map((alliance) => (
          <p>{alliance}</p>
        ))}
      </div>
      <div className="apariciones">
      <h3>{t('translated-APARICIONES')}</h3>         
      <div className="container_apariciones">
        {episodes.map((episode) => (
          <p>{episode}</p>
        ))}
      </div>
</div>
      <div className="container_name">
        <h3>{t('translated-PADRE')}</h3>
        {parents.map((parent) => (
          <p>{parent}</p>
        ))}
      </div>

      <div className="container_name">
        <h3>{t('translated-HERMANOS')}</h3>
        {siblings.map((sibling) => (
          <p>{sibling}</p>
        ))}
      </div>
<div className="titulos">
      <div className="container_titulos">
        <h3>{t('translated-TITULOS')}</h3>
        {titles.map((title) => (
          <p>{title}</p>
        ))}
      </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default InfoCharacter;