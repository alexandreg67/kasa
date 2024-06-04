import "./Tag.css"
import propTypes from "prop-types"

export default function Tag({ tagName }) {
  return (
    <div className="tagName">{tagName}</div>
  )
}

Tag.propTypes = {
  tagName: propTypes.string,
}