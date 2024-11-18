import React from "react";
import { Link } from "react-router-dom";
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

const Witness: React.FC<WitnessProps> = ({
  id,
  name,
  country,
  image,
  prosecution,
  company,
  witness
}) => {
  return (
    <div className="container-witness">
      {/* Foto a sinistra */}
      <img
        className="image-witness"
        src={require(`../images/${image}.png`)}
        alt={`Foto di ${name}`}
      />

      {/* Testo a destra */}
      <div className="container-text-witness">
        <p className="name-witness">
          <strong>{name}</strong> da {country}
        </p>
        <p className="prosecution-testimony">
          {prosecution} presso <strong>{company}</strong>
        </p>
        <p className="text-witness">"{witness}"</p>
        <Link to={`/witness/${id}`} className="btn-read-more">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Witness;
