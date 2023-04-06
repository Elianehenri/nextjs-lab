import { useState } from 'react';
import Pessoa from '../../componentes/Pessoa';

export default function Home() {
  const [idadeEliane, setIdadeEliane] = useState(24);

  const incrementaIdadeEliane = () => {
    setIdadeEliane(idadeEliane++);
  }
  return (
    <>
      <h1>Ola Mundo!</h1>
      <Pessoa nome="Eliane" idade={idadeEliane} />
      <Pessoa nome="Ana" idade={40} />
      <button onClick={incrementaIdadeEliane}>
        Incrementa idade de Eliane
      </button>
    </>
  )
}
