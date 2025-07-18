import "../styles/GreenButton.css"

const GreenButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick} id="green-button">{props.greenButtonDesc}</button>
    </div>
  )
}

export default GreenButton