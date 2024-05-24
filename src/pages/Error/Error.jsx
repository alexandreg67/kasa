import { Link } from "react-router-dom"

export default function Error() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">Retour à l accueil</Link>
    </div>
  )
}