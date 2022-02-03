import './AutoComplete.css';



function getItemString(inputString, foundString) {

  let inputStringUp = inputString.toUpperCase();
  let foundStringUp = foundString.toUpperCase();

  return (
    <span>{
      foundString.split('').map((elem, i) => {
        if (foundStringUp[i] === inputStringUp[i]) {
          return <b key={i}>{foundString[i]}</b>;
        } else {
          return foundString[i];
        }
      })
    }</span>
  );
}

function AutoComplete(props) {
  let dataAutoComplete = props.data;
  let userInput = props.input;

  if (dataAutoComplete.length === 0) {
    return <div className='auto-complete'></div>;
  }

  return (
    <div className='auto-complete'>
      <ul className='auto-complete__list'>
        {dataAutoComplete.map((item) => {
          return (
            <li
              className='auto-complete__item'
              key={item}
              onMouseDown={props.onClick.bind(this, item)}
            >
              {getItemString(userInput, item)}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default AutoComplete;
