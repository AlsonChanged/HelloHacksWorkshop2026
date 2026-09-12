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
    // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
    return `Fake API response: You are fighting a ${type}-type Pokémon.`;
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