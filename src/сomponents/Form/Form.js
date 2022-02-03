import AutoComplete from './AutoComplete/AutoComplete';
import './Form.css';

function Form(props) {
  let insert = props.data.insert;
  let listGrades = props.data.listGrades;
  let quantity = props.data.quantity;
  let orderNumber = props.data.orderNumber;
  let fuseSearchInsertResult = props.data.fuseSearchInsert;

  return (
    <form className='form'>
      <div className='form__main-info'>
        <div>
          <label 
            className='form__main-info-label-input'
            htmlFor='inputInsert'
          >
            Обозначение пластины
          </label>
          <input
            id='inputInsert'
            className='form__main-info-input'
            name='insert'
            value={insert}
            type='text'
            autoComplete='off'
            onChange={props.onChangeForm}
          />

          <div className='form__auto-complete-wrapper'>
            <AutoComplete
              input={insert}
              data={fuseSearchInsertResult}
              onClick={props.choiceFuseSearchInsert}
            />
          </div>
        </div>

        <div>
          <label 
            className='form__main-info-label-input'
            htmlFor='inputGrade'
          >
            Сплав
          </label>
          <select
            id='inputGrade'
            className='form__main-info-input'
            name='grade'
            onChange={props.onChangeForm}
          >
            <option value=''></option>
            {listGrades.map(
              (grade) => {
                return <option key={grade} value={grade}>{grade}</option>
              }
            )}
          </select>
        </div>

        <div>
          <label
            className='form__main-info-label-input'
            htmlFor='inputQuantity'
          >
            Количество
          </label>
          <input
            id='inputQuantity'
            name='quantity'
            className='form__main-info-input'
            type='number'
            min='1'
            max='99'
            value={quantity}
            placeholder='Кол-во'
            onChange={props.onChangeForm}
          />
        </div>        
        
        <div>
          <label 
            className='form__main-info-label-input'
            htmlFor='inputOrderNumber'
          >
            Номер заказа
          </label>
          <input
            id='inputOrderNumber'
            name='orderNumber'
            className='form__main-info-input'
            type='text'
            value={orderNumber}
            onChange={props.onChangeForm}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
