import React from 'react'
import {useRouteMatch} from 'react-router-dom'

interface SearchParams {
  search: string;
}

const CSV: React.FC = () => {
  const { params } = useRouteMatch<SearchParams>()

  return <h1>CSV: {params.search}</h1>
}

export default CSV
