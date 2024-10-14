import "../Addmember/Pages/Addmembers.css";

function FormInput({ label, type = "text", onChange }) {


  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  const id = label.toLowerCase();


  return (
    <div className="formColumn">
      <div className="formGroup">
        <label htmlFor={id} className="formLabel">
          {label}
        </label>

        <input
          type={type}
          id={id}
          className="formInput"
          aria-label={label}
          onChange={handleChange}
        />
        
      </div>
    </div>
  );
}

export default FormInput;