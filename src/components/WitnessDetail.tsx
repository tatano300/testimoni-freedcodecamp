import { useParams } from "react-router-dom";

function WitnessDetail() {
  const { id } = useParams(); // Ottieni l'id del testimone dalla URL

  return (
    <div>
      <h1>Dettagli del Testimone</h1>
      <p>Testimone ID: {id}</p>
      {/* Aggiungi qui i dettagli aggiuntivi per il testimone */}
    </div>
  );
}

export default WitnessDetail;
