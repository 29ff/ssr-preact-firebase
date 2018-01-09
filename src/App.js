import { h } from 'preact'

const App = (props) => {

  const facts = props.facts.map((fact, index) => {
    return <li key={index}>{fact.text}</li>
  })

  return (
    <ul>
      {facts}
    </ul>
  )
}

export default App
