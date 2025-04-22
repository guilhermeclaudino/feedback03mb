import { useState } from "react"
import { CardInicial } from "./components/CardInicial.jsx"
import { CardFinal } from "./components/CardFinal.jsx"


export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleSubmit() {
    if (notaAvaliacao !== 0) {
      setSubmited(true)
      return
    }

    alert("Please, choose a note!")
  }

  return (
    submited === false ? (
      <CardInicial setNotaAvaliacao={setNotaAvaliacao} handleSubmit={handleSubmit} />
    ) : (
      <CardFinal notaAvaliacao={notaAvaliacao}/>
    )
  )
}