# Workshop Cheat Sheet

Use the numbers below to find the code or prompts you need during the workshop.

---

## Git

### Save your work

Mac:

```text
Cmd + S
```

Windows:

```text
Ctrl + S
```

### Add and commit your changes

```bash
git add .
git commit -m "Message"
git push
```

### Pull the latest changes

```bash
git pull
```

### Check your Git status

```bash
git status
```

---

## #1 Create a website

Run this in your terminal:

```bash
npm create vite@latest my-react-app -- --template react
```

---

## #2 Open your website

Once your website is running, open:

```text
http://localhost:5173/
```

---

## #3 Run your website

If your website isn't already running:

```bash
npm run dev
```

---

## #4 Go to the parent folder

```bash
cd ..
```

---

## #5 Go into a folder

Replace `<folder_name>` with your folder's name:

```bash
cd <folder_name>
```

---

## #6 App.jsx

Replace the contents of `App.jsx` with:

```jsx
import './App.css'

function App() {
  return (
    <>
    </>
  )
}

export default App
```

---

## #7 Heading

Add this inside your component:

```jsx
<h1>Pokemon Battle Assistant</h1>
```

---

## #8 Paragraph

Add this inside your component:

```jsx
<p>What type of pokemon are you fighting?</p>
```

---

## #9 Buttons

Add these buttons:

```jsx
<button>Fire</button>
<button>Water</button>
<button>Grass</button>
<button>Ground</button>
```

---

## #10 Install Tailwind

Run this in your terminal:

```bash
npm install tailwindcss@tailwindcss/vite
```

---

## #11 Replace index.css

Replace the contents of `index.css` with:

```css
@import "tailwindcss";
```

Replace your `vite.config.js` file with:

```js
import react from ‘@vitejs/plugin-react’
import { defineConfig } from ‘vite’
import tailwindcss from ‘@tailwindcss/vite’

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

## #12 Ask AI to add Tailwind styling

Copy and paste this prompt into your AI tool:

```text
Add TailwindCSS for the site in a clean Pokemon-themed format. Use minimal styles.
```

---

## #13 Ask AI to make the buttons do something

Copy and paste this prompt into your AI tool:

```text
Make clicking a button display the type clicked as simple text.
```

---

## #14 Set up the code for later

### Update the button

Within the button, update the `onClick` to look like this:

```jsx
onClick={() => handleTypeClick(type.name)}
```

### Add these functions

At the top of your component, before `return` and underneath the state:

```jsx
function getMatchup(type) {
  // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
  return `Fake API response: You are fighting a ${type}-type Pokémon.`;
}

function handleTypeClick(type) {
  const response = getMatchup(type);
  setResult(response);
}
```

---

## #15 Set up the backend

Within the backend folder, run:

```bash
npm init -y
```

```bash
npm install express cors
```

```bash
npm install --save-dev nodemon
```

---

## #16 Ask AI to set up a template backend

Copy and paste this prompt into your AI tool:

```text
Set up template code for a simple GET endpoint.
```

---

## #17 Test the route

To run our backend, within the backend folder run:

```bash
npx nodemon server.js
```

Then open:

```text
http://localhost:5001
```

Your URL will likely have something added to the end.

---

## #18 Update our GET endpoint to call the API

Copy and paste this prompt into your AI tool:

```text
Update our GET endpoint to call this API and return the response:

GET https://pokeapi.co/api/v2/type/{id or name}/
```

---

## #19 Ask AI to simplify the response

Copy and paste this prompt into your AI tool:

```text
Update the response of our GET endpoint to only contain this data from the Poke API:

half_damage_to
double_damage_from

Only return the names.
```

---

## #20 Ask AI to connect our frontend to our backend

Copy and paste this prompt into your AI tool:

```text
Update getMatchup to call our route and return the response with a try catch.

http://localhost:5001/ROUTE

Remember to change ROUTE to your actual route, e.g. api/type/:name
```

---

## #21 Ask AI to format our response

Copy and paste the entire prompt below into your AI tool:

```text
This is what our API returns:

{
  "half_damage_to": ["rock", "fire", "water", "dragon"],
  "double_damage_from": ["ground", "rock", "water"]
}

Format this in a way that's useful to the user in a Pokemon Battle in plain text.
```

## Additional Links:

https://ubcbiztech.notion.site/HelloHacks-Laptop-Setup-Guide-3d9d13df991180f7b3fbe8f558d65041

https://tailwindcss.com/docs/installation/using-vite

https://pokeapi.co/docs/v2

https://pokeapi.co/
