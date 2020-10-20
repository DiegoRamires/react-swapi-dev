import React from 'react'
import {render} from '@testing-library/react'

import Dashboard from '../../pages/Dashboard'
import Axios from 'axios'

const apiURL = 'https://swapi.dev/api/'

jest.mock('react-router-dom', () => {
  return {
    Link: jest.fn(),
  }
})

describe('Home page', () => {
  it('Should be render Home Page', () => {
    const {debug} = render(<Dashboard />)

    debug()
  })

  it('Should be return status code 200 when fetch API', async () => {
    Axios.get(apiURL).then((data) => {
      const result = data

      expect(result.status).toEqual(200)
    })
  })
})
