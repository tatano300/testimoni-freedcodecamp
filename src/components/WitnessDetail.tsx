import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../stylesheets/WitnessDetail.css';

const WitnessDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // Ottieni l'ID dalla URL

  // Funzione per tornare indietro
  const handleBack = () => {
    navigate(-1); // Torna alla pagina precedente
  };

  return (
    <div className="witness-detail">
      <button onClick={handleBack} className="back-button">
        Indietro
      </button>
      
      {/* Contenuto della pagina del testimone */}
      <h2>Dettagli del Testimone {id}</h2>
      {/* Mostra altri dettagli del testimone qui */}
    </div>
  );
};

export default WitnessDetail;
