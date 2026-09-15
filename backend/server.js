const express = require("express");
const cors = require("cors");

const app = express();

// Allow the React frontend to call this backend.
app.use(cors());

app.get("/api/matchup/:pokemonType", async (req, res) => {
  try {
    const pokemonType = req.params.pokemonType.toLowerCase();
    const url = `https://pokeapi.co/api/v2/type/${pokemonType}`;

    const pokeapiResponse = await fetch(url);

    if (!pokeapiResponse.ok) {
      return res.status(404).json({ error: `Type "${pokemonType}" not found` });
    }

    const pokeapiData = await pokeapiResponse.json();

    const damageRelations = pokeapiData.damage_relations;

    const effectiveTypes = [];
    for (let i = 0; i < damageRelations.double_damage_from.length; i++) {
      const typeData = damageRelations.double_damage_from[i];
      effectiveTypes.push(typeData.name);
    }

    const halfDamageTypes = [];
    for (let i = 0; i < damageRelations.half_damage_to.length; i++) {
      const typeData = damageRelations.half_damage_to[i];
      halfDamageTypes.push(typeData.name);
    }

    const response = {
      opponentType: pokemonType,
      effectiveAgainstOpponent: effectiveTypes,
      halfDamageFromOpponent: halfDamageTypes,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch Pokémon type data" });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});