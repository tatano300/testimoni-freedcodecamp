import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import Witness from './components/Witness';
import WitnessDetail from './components/WitnessDetail'; 

function App() {
  const testimonials = [
    {
      id: 1,
      name: 'Shawn Wang',
      country: 'Singapur',
      image: 'testimoneshaw',
      prosecution: 'Ingeniero de Software',
      company: 'Amazon',
      witness: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
    },
    {
      id: 2,
      name: 'Sarah Chima',
      country: 'Nigeria',
      image: 'Sarahfreedcodecamp',
      prosecution: 'Ingeniera de Software',
      company: 'ChatDesk',
      witness: 'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
    },
    {
      id: 3,
      name: 'Emma Bostian',
      country: 'Suecia',
      image: 'Emmafreedcodecamp',
      prosecution: 'Ingeniera de Software',
      company: 'Spotify',
      witness: 'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
    }
  ];

  return (
    <div className="App">
      <div className="container-principal">
        <h1>Questo e quello che dicono i nostri dipendenti di freedcodecamp</h1>
        <Routes>
          <Route path="/" element={testimonials.map(({ id, name, country, image, prosecution, company, witness }) => (
            <Witness
              key={id}
              id={id}
              name={name}
              country={country}
              image={image}
              prosecution={prosecution}
              company={company}
              witness={witness}
            />
          ))} />
          
          {/* Passa 'testimonials' al componente WitnessDetail */}
          <Route 
            path="/witness/:id" 
            element={<WitnessDetail testimonials={testimonials} />} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
