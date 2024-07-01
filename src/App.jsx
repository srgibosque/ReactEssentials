import './App.css';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept title="Components" description="This is the first description"/>
          <CoreConcept title="Components" description="This is the second description"/>
          <CoreConcept title="Components" description="This is the third description"/>
          <CoreConcept title="Components" description="This is the fourth description"/>
        </ul>
      </main>
    </div>
  )
}

export default App
