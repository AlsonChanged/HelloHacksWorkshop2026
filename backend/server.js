const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// GET endpoint to fetch Pokemon type matchup details from PokeAPI
app.get("/api/matchup/:pokemonType", async (req, res) => {
  try {
    const { pokemonType } = req.params;
    const response = await fetch(
      `https://pokeapi.co/api/v2/type/${encodeURIComponent(pokemonType.toLowerCase())}`
    );
    if (!response.ok) {
      return res.status(response.status).json({ error: "Pokemon type not found" });
    }

    const data = await response.json();
    const half_damage_to = data.damage_relations?.half_damage_to?.map((t) => t.name) || [];
    const double_damage_from = data.damage_relations?.double_damage_from?.map((t) => t.name) || [];

    res.json({
      half_damage_to,
      double_damage_from,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});