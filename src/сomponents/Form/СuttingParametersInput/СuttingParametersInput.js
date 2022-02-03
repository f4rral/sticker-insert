import './СuttingParameters.css';

function СuttingParametersInput(props) {

  return (
    <div className='form__cut-par'>
      <div className='form__cut-par-row-head'>
        <div className='form__cut-par-cell'>
          <span>Область</span>
        </div>
        <div className='form__cut-par-cell'>
          <span>Скорсть<br/>резания V<sub>c</sub></span>
        </div>
        <div className='form__cut-par-cell'>
          <span>Подача<br/>на зуб f<sub>z</sub></span>
        </div>
        <div className='form__cut-par-cell'>
          <span>Применение</span>
        </div>
      </div>

      <div className='form__cut-par-row'>
        <div className='form__cut-par-cell'>
          <span>Группа P</span>
        </div>
        <div className='form__cut-par-cell'>
          <input id='pSpeed' type='text'></input>
        </div>
        <div className='form__cut-par-cell'>
          <input id='fSpeed' type='text'></input>
        </div>
        <div className='form__cut-par-cell'>
          <select name="cars" id="pApp">
            <option value="">Нет</option>
            <option value="main">Осн-е</option>
            <option value="addit">Доп-е</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default СuttingParametersInput;
