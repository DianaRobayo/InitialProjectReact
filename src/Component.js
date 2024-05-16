import React, { useState } from 'react'

export default function Component() {
  //propiedad
  const [text, setText] = useState();
  const [updated, setUpdated] = useState();

  //enf o nfn permite crear la funcion flecha
  const textOnChange = (event) => {
    setText(event.target.value)
  }

  //Se le envia el texto
  const buttonOnClick = () => { 
    setUpdated(text)
  }

  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={buttonOnClick}>Actualizar</button>
      <p>Texto input {text}</p>
      <p>Texto actualizado {updated}</p>
    </div>
  )
}
