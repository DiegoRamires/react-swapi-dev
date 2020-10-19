import React from 'react'

import { Form, ResultSearch } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <Form>
        <input placeholder="Digite o planeta que gostaria de buscar na API" />
        <button>Pesquisar</button>
      </Form>

      <ResultSearch>
        <a href='test'>
          <p>
            <strong>Nome:</strong>
            <span>tattoine</span>
          </p>
          <p>
            <strong>Período de rotação:</strong>
            <span>23 horas</span>
          </p>
          <p>
            <strong>Período de orbita:</strong>
            <span>341 dias</span>
          </p>
          <p>
            <strong>Clima:</strong>
            <span>murky</span>
          </p>
          <p>
            <strong>terreno:</strong>
            <span>swamp, jungles</span>
          </p>
          <p>
            <strong>agua superfície:</strong>
            <span>8</span>
          </p>
          <p>
            <strong>população:</strong>
            <span>desconhecida</span>
          </p>
        </a>
      </ResultSearch>
    </>
  )
}

export default Dashboard
