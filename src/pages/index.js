/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Pessoa from '../../componentes/Pessoa';
import comAutorizacao from '../../hoc/comAutorizacao';

function Home() {
  const [idadeEliane, setIdadeEliane] = useState(17);
  const pessoas = [
    {
      nomePessoa:'Lais',
      nomePessoa: 16
    },
    {
      nomePessoa: 'Debora',
      idade: 17
    },
    {
      nomePessoa: 'Eliane',
      nomePessoa: 18
    },
    {
      nomePessoa: 'Ana',
      nomePessoa: 19
    }

  ];
  const incrementaIdadeEliane = () => {
    setIdadeEliane(idadeEliane + 1);
  }
  return (
    <>
      <h1>Ola Mundo! {process.env.NEXT_PUBLIC_TESTE}</h1>
      <Pessoa nome="Eliane" idade={idadeEliane} />
      <Pessoa nome="Ana" idade={40} />
      {pessoas.map(({ nomePessoa , idadePessoa }, index) => {
         return <Pessoa 
         nome ={nomePessoa} 
         idade={idadePessoa}
         key={index}
         />
          })}

      <button onClick={incrementaIdadeEliane}>
        Incrementa idade de Eliane
      </button>
    </>
  )
}

export default comAutorizacao(Home);
