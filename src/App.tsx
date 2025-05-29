
import { useState } from 'react'
import './App.css'
import DrinkList from './components/DrinkList'
import { SearchBar } from './components/SearchBar'

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
     
      <SearchBar onSearch={setSearchTerm}/>
      <DrinkList searchTerm={searchTerm}/>
    </>
  )
}

export default App
