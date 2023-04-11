import { useRef } from "react";

/**
 * An input component used by user to enter data
 * @component
 * @param type - the type of input element
 * @param id - the id for the element
 * @param placeText - the placeholder text for the input element
 * @param handleChange - sets the state of the input element in parent form
 */
const FormInput = ({ type, id, placeText, handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null!);

  /**
   * Sets the state of input element in the parent form
   */
  const handleInputChange = () => {
    handleChange(inputRef.current.value);
  };

  return (
    <div className="form-input">
      <label htmlFor={id} hidden>
        {type}:
      </label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        placeholder={placeText}
        onChange={handleInputChange}
      />
      <div id={`${id}-error`} className="form-input__error">
        Can't be empty
      </div>
    </div>
  );
};

export default FormInput;
