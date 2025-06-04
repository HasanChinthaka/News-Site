import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState(["general"]);
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [language, setLanguage] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <div>
      <Navbar
        setCategory={(cat) => {
          setCategory(cat);
          setSelectedCategory(cat);
        }}
        selectedCategory={selectedCategory}
        setLanguage={(lang) => {
          setLanguage(lang);
          setSelectedLanguage(lang);
        }}
        selectedLanguage={selectedLanguage}
      />
      <NewsBoard category={category} language={language}/>
    </div>
  );
};

export default App;
