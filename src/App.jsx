import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="card">
      <Info />
      <div className="container"> 
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}

export default App
