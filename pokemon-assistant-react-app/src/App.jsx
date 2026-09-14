import { useState } from "react";
import TypeButton from "./components/TypeButton";


const pokemonTypes = [
  { name: "Fire", color: "bg-red-600" },
  { name: "Grass", color: "bg-green-600" },
  { name: "Water", color: "bg-blue-600" },
  { name: "Ground", color: "bg-amber-700" },
];

function App() {
  const [result, setResult] = useState("");

  async function getMatchup(type) {
    try {
      const response = await fetch(`http://localhost:3001/api/matchup/${type}`);

      if (!response.ok) {
        return `Sorry, couldn't find data for type "${type}".`;
      }

      const data = await response.json();

      return `You're fighting a ${data.opponentType}-type Pokémon. Effective against it: ${data.effectiveAgainstOpponent.join(", ")}`;
    } catch (error) {
      console.error(error);
      return "Something went wrong reaching the server. Is the backend running?";
    }
}

  async function handleTypeClick(type) {
    const response = await getMatchup(type);
    setResult(response);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-black">

      <section className="w-full max-w-2xl text-center">

        <h1 className="mb-10 text-4xl font-bold">
          Pokémon Battle Assistant
        </h1>

        <p className="mb-8 text-lg">
          What type of Pokémon are you fighting?
        </p>

        <div className="grid gap-5">
          {pokemonTypes.map((pokemonType) => (
            <TypeButton
              key={pokemonType.name}
              type={pokemonType.name}
              color={pokemonType.color}
              onTypeClick={handleTypeClick}
            />
          ))}
        </div>
        <h2 className="mt-10 text-4xl font-bold">
          {result}
        </h2>

      </section>
    </main>
  );
}

export default App;