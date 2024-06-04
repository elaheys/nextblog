import FormInput from "./FormInputs";

function Form({ form, setForm }) {

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <FormInput
        name="title"
        label="Title"
        type="text"
        value={form.title}
        onChange={changeHandler}
      />
      <FormInput
        name="body"
        label="Body"
        type="text"
        value={form.body}
        onChange={changeHandler}
      />
      
    </div>
  );
}

export default Form;