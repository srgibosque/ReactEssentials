import './App.css';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPT } from './data.js';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Core Concepts</h2>
        <ul class="coreConcept-list">
          <CoreConcept title={CORE_CONCEPT[0].title} description={CORE_CONCEPT[0].description}/>
          <CoreConcept title={CORE_CONCEPT[1].title} description={CORE_CONCEPT[1].description}/>
          <CoreConcept title={CORE_CONCEPT[2].title} description={CORE_CONCEPT[2].description}/>
          <CoreConcept title={CORE_CONCEPT[3].title} description={CORE_CONCEPT[3].description}/>
        </ul>
      </main>
    </div>
  )
}

export default App
