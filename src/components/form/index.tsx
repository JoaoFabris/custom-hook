import Swal from "sweetalert2";
import useFormInput from "../../hooks/useFormInput";
import './form.css'

function Form() {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const email = useFormInput("");

  function resetForm() {
    firstName.onChange("");
    lastName.onChange("");
    email.onChange("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // won't allow page to be refresh
    if (firstName.value && lastName.value && email.value) {
      Swal.fire(
        "Form sended",
        JSON.stringify({
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
        }),
        "success"
      );
      resetForm();
    } else {
      Swal.fire({
        icon: "error",
        title: "Ooops",
        text: "Form input is required",
      });
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input
            value={firstName.value}
            onChange={({ target }) => firstName.onChange(target.value)}
          />
        </label>
        <label>
          Last name:
          <input
            value={lastName.value}
            onChange={({ target }) => lastName.onChange(target.value)}
          />
        </label>
        <label>Email:</label>
        <input
          value={email.value}
          onChange={({ target }) => email.onChange(target.value)}
        />
        <button>Send Form</button>
      </form>
    </div>
  );
}

export default Form;
