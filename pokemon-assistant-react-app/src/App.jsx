import { useState } from "react";

const types = [
  { name: "Fire", className: "bg-fire text-white hover:brightness-95" },
  { name: "Water", className: "bg-water text-white hover:brightness-95" },
  { name: "Grass", className: "bg-grass text-white hover:brightness-95" },
  { name: "Ground", className: "bg-ground text-stone-800 hover:brightness-95" },
];

function App() {
  const [selectedType, setSelectedType] = useState(null);

  async function getMatchup(type) {
    try {
      const response = await fetch(
        `http://localhost:5001/api/matchup/${type.toLowerCase()}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch matchup:", error);
    }
  }

  async function handleTypeClick(type) {
    const response = await getMatchup(type);
    setSelectedType(response);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 p-6 text-stone-800">
      <section className="w-full max-w-md overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <div className="h-1.5 bg-poke-red" />
        <div className="p-8">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="relative h-8 w-8 shrink-0 rounded-full border-2 border-stone-800 bg-[linear-gradient(to_bottom,#ee1515_50%,white_50%)]"
              aria-hidden="true"
            >
              <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-stone-800" />
              <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-stone-800 bg-white" />
            </span>
            <h1 className="text-xl font-semibold tracking-tight">
              Pokemon Battle Assistant
            </h1>
          </div>
          <p className="mb-4 text-sm text-stone-500">
            What type of pokemon are you fighting?
          </p>
          <div className="grid grid-cols-2 gap-3">
            {types.map((type) => (
              <button
                key={type.name}
                type="button"
                onClick={() => handleTypeClick(type.name)}
                className={`${type.className} cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium transition`}
              >
                {type.name}
              </button>
            ))}
          </div>
          {selectedType && (
            <div className="mt-4 space-y-1 text-sm text-stone-700">
              {typeof selectedType === "object" ? (
                <>
                  <p>
                    Attack with (2× damage):{" "}
                    {selectedType.double_damage_from?.length
                      ? selectedType.double_damage_from.join(", ")
                      : "None"}
                  </p>
                  <p>
                    Defend with (0.5× damage):{" "}
                    {selectedType.half_damage_to?.length
                      ? selectedType.half_damage_to.join(", ")
                      : "None"}
                  </p>
                </>
              ) : (
                <p>{selectedType}</p>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
