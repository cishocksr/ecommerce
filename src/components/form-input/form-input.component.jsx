import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherFormProps }) => (
  <div className='group'>
    <input onChange={handleChange} {...otherFormProps} className='form-input' />
    {label ? (
      <label
        className={`${
          otherFormProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
