import { useRef, useState } from "react";

/**
 * An input component used by user to enter data
 * @component
 * @param type - the type of input element
 * @param id - the id for the element
 * @param placeText - the placeholder text for the input element
 * @param handleChange - sets the state of the input element in parent form
 */
const FormInput = ({ type, id, placeText, handleChange }) => {
  const [hasError, setHasError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null!);
  const divRef = useRef<HTMLInputElement>(null!);

  /**
   * Sets the state of input element in the parent form
   */
  const handleInputChange = () => {
    const curValue = inputRef.current.value;
    handleChange(curValue);
  };

  /**
   * Toggles the error state whenever the input field is empty
   */
  const toggleError = () => {
    const curValue = inputRef.current.value;
    if (curValue !== "") {
      divRef.current.classList.remove("form-error");
      setHasError(false);
    } else {
      divRef.current.classList.add("form-error");
      setHasError(true);
    }
  };

  return (
    <div id={`${id}-error`} ref={divRef} className="form-input">
      <label htmlFor={id} hidden>
        {type}:
      </label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        placeholder={placeText}
        onChange={handleInputChange}
        onInput={toggleError}
        onBlur={toggleError}
      />
      <div className="form-input__error">Can't be empty</div>
    </div>
  );
};

export default FormInput;
