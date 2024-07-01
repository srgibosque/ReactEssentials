import reactImage from '../../assets/react.svg';
import './Header.css'

export default function Header(){
  return (
    <header>
      <img src={reactImage} alt="reactImage" />
      <h1>React Essentials</h1>
      <p>Fundamental React components for any you will build</p>
      </header>
  )
}