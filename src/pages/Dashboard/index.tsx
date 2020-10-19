import React, {useState, FormEvent} from 'react'
import {Link} from 'react-router-dom'

import { Form, ResultSearch, Error } from './styles'
import api from '../../services/api'

interface Planet {
  climate: "string",
  diameter: "number",
  gravity: "number",
  name: "string",
  orbital_period: "number",
  population: "number",
  residents: "string",
  rotation_period: "number",
  surface_water: "number",
  terrain: "string",
  url: "string"
}

const Dashboard: React.FC = () => {
  const [newPlanet, setNewPlanet] = useState('')
  const [inputError, setInputError] = useState('')
  const [planets, setPlanets] = useState<Planet[]>([])

  async function handleSearchPlanet(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    if(!newPlanet) {
      setInputError('Digite o id do Planeta que deseja buscar')
      return
    }

    try {
      const response = await api.get<Planet>(`/${newPlanet}`)

      const planet = response.data

      setPlanets([...planets, planet])
      setNewPlanet('')
      setInputError('')
    } catch (err) {
      setInputError('Erro na busca pelo planeta')
    }

  }

  return (
    <>
      <Form onSubmit={handleSearchPlanet}>
        <input
          value={newPlanet}
          onChange={e => setNewPlanet(e.target.value)}
          placeholder="Digite o número do planeta que gostaria de buscar na API"
        />
        <button>Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error> }

      <ResultSearch>
        {planets.map(planet => (

          <Link key={planet.name} to={`/details/${planet.name}`}>
            <p>
              <strong>Nome:</strong>
              <span>{planet.name}</span>
            </p>
          </Link>
        ))}
      </ResultSearch>
    </>
  )
}

export default Dashboard
