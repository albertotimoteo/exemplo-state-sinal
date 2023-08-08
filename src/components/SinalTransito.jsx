import { useState } from "react"

const commonStyle = {
  width: 150,
  height: 150,
  borderRadius: 100,
  border: "1px solid black",
}

const SinalTransito = () => {
  // "VERDE", "VERMELHO", "AMARELO"
  const [luz, setLuz] = useState("VERDE")

  const mudarSinal = () => {
    if (luz === "VERMELHO") {
      setLuz("VERDE")
    }
    if (luz === "VERDE") {
      setLuz("AMARELO")
    }
    if (luz === "AMARELO") {
      setLuz("VERMELHO")
    }
  }

  return (
    <div>
      <div
        style={{
          ...commonStyle,
          background: luz === "VERMELHO" ? "red" : "none",
        }}
      ></div>
      <div
        style={{
          ...commonStyle,
          background: luz === "AMARELO" ? "yellow" : "none",
        }}
      ></div>
      <div
        style={{
          ...commonStyle,
          background: luz === "VERDE" ? "green" : "none",
        }}
      ></div>
      <button onClick={mudarSinal}>Mudar sinal</button>
    </div>
  )
}

export default SinalTransito
