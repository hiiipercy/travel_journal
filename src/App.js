import React,{useEffect,useState} from "react";
import data from "./data";
import Style from "./Style.css";
import Header from "./Header";
import Content from "./Content"

function App() {
  const dataElement = data.map(item=>{
    return <Content
            title={item.title}
            location={item.location}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
            />
  })
  const [isDarkMode, setDarkMode] = useState(false);

  // Effect to check for dark mode preference in local storage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    setDarkMode(storedDarkMode === 'true');
  }, []);

  // Effect to update local storage when dark mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header
      dark={isDarkMode}
      mode={toggleDarkMode}
      />
      {dataElement}
    </div>
  );
}
export default App;