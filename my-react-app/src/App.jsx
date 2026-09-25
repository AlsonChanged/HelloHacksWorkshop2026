import { useState } from 'react'
import './App.css'

const types = [
  { name: 'Fire', icon: '🔥', color: 'border-orange-200 bg-orange-50 text-orange-700' },
  { name: 'Water', icon: '💧', color: 'border-sky-200 bg-sky-50 text-sky-700' },
  { name: 'Fairy', icon: '✨', color: 'border-pink-200 bg-pink-50 text-pink-700' },
  { name: 'Dragon', icon: '🐉', color: 'border-violet-200 bg-violet-50 text-violet-700' },
]

function App() {
  const [selectedType, setSelectedType] = useState(null)

  function handleTypeClick(type) {
    setSelectedType(type)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-10 text-slate-900">
      <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <div className="mb-8 flex items-center gap-4">
          <div
            className="grid size-14 shrink-0 place-items-center rounded-full border-4 border-slate-900 bg-linear-to-b from-red-500 from-45% via-slate-900 via-45% to-white to-55%"
            aria-hidden="true"
          >
            <span className="size-4 rounded-full border-4 border-slate-900 bg-white" />
          </div>

          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-500">Trainer tool</p>
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Battle Assistant</h1>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-lg font-bold">What type are you fighting?</h2>
          <p className="mt-1 text-sm text-slate-500">Choose your opponent's primary type.</p>
        </div>

        <div className="grid grid-cols-2 gap-3" aria-label="Pokémon types">
          {types.map((type) => {
            const isSelected = selectedType === type.name

            return (
              <button
                key={type.name}
                type="button"
                onClick={() => handleTypeClick(type.name)}
                aria-pressed={isSelected}
                className={`flex items-center gap-3 rounded-2xl border p-4 text-left font-semibold transition hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${type.color} ${
                  isSelected ? 'ring-2 ring-slate-900 ring-offset-2' : ''
                }`}
              >
                <span className="text-xl" aria-hidden="true">{type.icon}</span>
                {type.name}
              </button>
            )
          })}
        </div>

        <div className="mt-7 min-h-6 border-t border-slate-100 pt-5 text-sm text-slate-500" aria-live="polite">
          {selectedType
            ? <p><span className="font-semibold text-slate-900">{selectedType}</span> selected. Ready to build your strategy.</p>
            : <p>Select a type to get started.</p>}
        </div>
      </section>
    </main>
  )
}

export default App
