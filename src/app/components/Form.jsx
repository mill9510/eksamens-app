import { useForm } from "react-hook-form";

export default function Form() {
  //const { register, handleSubmit } = useForm();
  //const onSubmit = (data) => console.log(data);

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <button type="submit">Send</button>
    </form>
  );
}
