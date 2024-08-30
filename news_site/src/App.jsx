import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"

const App = () => {
  const [category, setCategory] = useState(['general']);
  // const [language, setLanguage] = useState("default")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category} />
    </div>
  )
}

export default App