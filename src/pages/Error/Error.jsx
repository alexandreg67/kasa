import { Link } from "react-router-dom"
import "./Error.css"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function Error() {
  return (
    <div className="container_home">
    <Header />
    <div className="container-error">
      <h1 className="error-title">404</h1>
      <h2 className="error-txt">Oups! La page que vous demandez n&apos;existe pas.</h2>
      <Link to="/" className="error-link">Retourner sur la page d&apos;accueil</Link>
    </div>
    <Footer />
  </div>
  )
}