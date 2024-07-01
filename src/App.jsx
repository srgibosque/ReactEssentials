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

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        Time to get started
      </main>
    </div>
  )
}

export default App
