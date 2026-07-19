import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Inventions from "./Components/Inventions"
import Timeline from "./Components/Timeline"
import Footer from "./Components/Footer"
import Lightning from "./Components/Lightning"
import Products from "./Components/Products"
import { useState } from "react"

function App(){
const [darkMode,setdarkMode]=useState(true);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar
        darkMode={darkMode}
        setdarkMode={setdarkMode}
      />


    <Hero/>
    <About/>
    <Inventions/>
    <Timeline/>
    <Products/>
    <Lightning/>
    <Footer/>
     </div>
 
  ); 
}
export default App;