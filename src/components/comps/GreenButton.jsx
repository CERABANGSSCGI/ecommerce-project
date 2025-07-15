import "../styles/GreenButton.css"

const GreenButton = (props) => {
  return (
    <div>
      <button id="green-button">{props.greenButtonDesc}</button>
    </div>
  )
}

export default GreenButton