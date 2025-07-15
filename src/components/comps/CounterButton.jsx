import "../styles/CounterButton.css";

const CounterButton = () => {
  return (
    <div>
      <div id="counter-button" class="btn-group" role="group" aria-label="3-button group">
        <button id="counter-button-inner" type="button" class="btn btn-dark">
          -
        </button>
        <button id="counter-button-inner" type="button" class="btn btn-dark">
          3
        </button>
        <button id="counter-button-inner" type="button" class="btn btn-dark">
          +
        </button>
      </div>
    </div>
  );
};

export default CounterButton;
