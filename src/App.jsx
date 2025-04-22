import { useState } from "react"
import { CardInicial } from "./components/CardInicial.jsx"
import { CardFinal } from "./components/CardFinal.jsx"


export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  return (
    submited === false ? (
      <CardInicial setNotaAvaliacao={setNotaAvaliacao} setSubmited={setSubmited} notaAvaliacao={notaAvaliacao} />
    ) : (
      <CardFinal notaAvaliacao={notaAvaliacao} />
    )
  )
}