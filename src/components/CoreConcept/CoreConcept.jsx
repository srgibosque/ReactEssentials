import './CoreConcept.css'

export default function CoreConcept({title, description}){
  return(
    <li className="coreConcept-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}