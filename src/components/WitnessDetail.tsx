import React from "react";
import { useParams, Link } from "react-router-dom";
import '../stylesheets/WitnessDetail.css';

type WitnessDetailProps = {
  testimonials: Array<{
    id: number;
    name: string;
    country: string;
    image: string;
    prosecution: string;
    company: string;
    witness: string;
  }>;
};

const WitnessDetail: React.FC<WitnessDetailProps> = ({ testimonials }) => {
  const { id } = useParams<{ id: string }>();
  const witness = testimonials.find((item) => item.id === parseInt(id!));

  if (!witness) {
    return <div>Testimone non trovato</div>;
  }

  return (
    <div className="witness-detail-container">
      {/* Pulsante per tornare indietro */}
      <Link to="/" className="back-button">← Torna Indietro</Link>

      <div className="witness-profile">
        <img
          className="witness-image"
          src={require(`../images/${witness.image}.png`)}
          alt={`Foto di ${witness.name}`}
        />
        <div className="witness-info">
          <h2>{witness.name} da {witness.country}</h2>
          <h4>{witness.prosecution} presso {witness.company}</h4>
          <p className="witness-text">"{witness.witness}"</p>
        </div>
      </div>
    </div>
  );
};

export default WitnessDetail;
