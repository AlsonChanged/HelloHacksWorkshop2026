const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

// GET endpoint template: http://localhost:5001
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Pokemon Battle Assistant API is running!',
  })
})

// Example API route: http://localhost:5001/api/hello
app.get('/api/hello', (req, res) => {
  res.status(200).json({
    message: 'Hello from the backend!',
  })
})

// GET http://localhost:5001/api/type/fire
// The `type` parameter can be a Pokémon type name or ID.
app.get('/api/type/:type', async (req, res) => {
  const type = encodeURIComponent(req.params.type.toLowerCase())

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`)

    if (!response.ok) {
      return res.status(response.status).json({
        error: `Pokémon type "${req.params.type}" was not found.`,
      })
    }

    const data = await response.json()
    const { half_damage_to, double_damage_from } = data.damage_relations

    return res.status(200).json({
      half_damage_to: half_damage_to.map(({ name }) => name),
      double_damage_from: double_damage_from.map(({ name }) => name),
    })
  } catch (error) {
    console.error('Failed to fetch PokéAPI:', error)
    return res.status(502).json({
      error: 'Unable to reach PokéAPI. Please try again later.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
