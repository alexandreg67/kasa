import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Error from "./pages/Error/Error"
import Apropos from "./pages/Apropos/Apropos"
import Logement from "./pages/Logement/Logement"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
        </Routes>          
      </BrowserRouter>
    </>
  )
}

export default App
