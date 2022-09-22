import { useState } from "react"
import "./App.css"
import MiApp from "./component/MiApp"
import NavbarMarvel from "./component/NabvarMarvel"

function App() {
  const [searchInput, setSearchInput] = useState("")

  return (
    <div>
      <NavbarMarvel searchInput={searchInput} setSearchInput={setSearchInput} />
      <MiApp searchInput={searchInput} />
    </div>
  )
}

export default App
