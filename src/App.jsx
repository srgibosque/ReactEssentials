import './App.css'
import reactImage from './assets/react.svg';

function Header(){
  return (
    <header>
      <img src={reactImage} alt="reactImage" />
      <h1>React Essentials</h1>
      <p>Fundamental React components for any you will build</p>
      </header>
  )
}

function CoreConcept({title, description}){
  return(
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

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
