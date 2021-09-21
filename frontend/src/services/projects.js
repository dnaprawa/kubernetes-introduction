async function getAll() {
  const response = await fetch( `${window._env_.API_URL}/services/projects` )
  const json = await response.json()
  return json.payload
  
}

export default {
getAll
}