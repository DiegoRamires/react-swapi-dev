import React, {useState, FormEvent} from 'react'

import { Form, ResultSearch } from './styles'
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
  const [planets, setPlanets] = useState<Planet[]>([])

  async function handleSearchPlanet(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    const response = await api.get<Planet>(`/${newPlanet}`)

    const planet = response.data

    setPlanets([...planets, planet])
    setNewPlanet('')
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

      <ResultSearch>
        {planets.map(planet => (

          <div key={planet.name}>
            <p>
              <strong>Nome:</strong>
              <span>{planet.name}</span>
            </p>
            <p>
              <strong>Período de rotação:</strong>
              <span>{planet.rotation_period}</span>
            </p>
            <p>
              <strong>Período de orbita:</strong>
              <span>{planet.orbital_period}</span>
            </p>
            <p>
              <strong>Clima:</strong>
              <span>{planet.climate}</span>
            </p>
            <p>
              <strong>terreno:</strong>
              <span>{planet.terrain}</span>
            </p>
            <p>
              <strong>agua superfície:</strong>
              <span>{planet.surface_water}</span>
            </p>
            <p>
              <strong>população:</strong>
              <span>{planet.population}</span>
            </p>
          </div>
        ))}
      </ResultSearch>
    </>
  )
}

export default Dashboard
