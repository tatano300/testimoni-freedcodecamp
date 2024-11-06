import React from "react";
import { Link } from "react-router-dom"; // Importa Link per la navigazione
import '../stylesheets/Witness.css';

type WitnessProps = {
  id: number;
  name: string;
  country: string;
  image: string;
  prosecution: string;
  company: string;
  witness: string;
};

function Witness({
  id,
  name,
  country,
  image,
  prosecution,
  company,
  witness,
}: WitnessProps) {
  return (
    <div className="container-witness">
      <Link to={`/witness/${id}`}> {/* Usa Link per navigare alla pagina del testimone */}
        <img
          className="image-witness"
          src={require(`../images/${image}.png`)} // Carica l'immagine del testimone
          alt="foto del testimone"
        />
        <div className="container-text-witness">
          <p className="name-witness">
            <strong>{name}</strong> en {country}
          </p>
          <p className="prosecution-testimony">
            {prosecution} en <strong>{company}</strong>
          </p>
          <p className="text-witness">"{witness}"</p>
        </div>
      </Link>
    </div>
  );
}

export default Witness;
