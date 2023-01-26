import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <div className="profile-info"> 
      <Info />
      <About />
      <Interests />
      </div>
      <Footer />
    </div>
  )
}

export default App
