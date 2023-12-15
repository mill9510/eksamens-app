"use client";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useContext } from "react"; // Import useContext
import { BasketValueContext, BasketUpdaterContext } from "../contexts/basketContext"; // Update the path accordingly
import "../components/Form.css";
import Link from "next/link";

export default function BasketForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  // Use useContext to get the basket state and updater function
  const basket = useContext(BasketValueContext);
  const setBasket = useContext(BasketUpdaterContext);

  const supabaseUrl = "https://pgsftrrsbbbudldfziuu.supabase.co";
  const supabaseKey = "YOUR_SUPABASE_KEY"; // Replace with your actual Supabase key
  const supabase = createClient(supabaseUrl, supabaseKey);

  const onSubmit = async (data) => {
    try {
      // Send a POST request to Supabase for each ticket
      const promises = basket.map(async (ticket) => {
        const { data: response, error } = await supabase.from("FormData").upsert({ ...data, ticketId: ticket.id }); // Assuming you want to associate each form data with a ticket
        if (error) {
          console.error("Error submitting data to Supabase:", error.message);
        } else {
          console.log("Data submitted successfully:", response);
        }
      });

      // Wait for all requests to complete before navigating
      await Promise.all(promises);

      // Navigate to the checkout page after successful submission
      router.push("/checkout");

      // Clear the basket after submission
      setBasket([]);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      {basket.map((ticket) => (
        <form key={ticket.id} className="formGrid" onSubmit={handleSubmit(onSubmit)}>
          <h2>{ticket.name}</h2>
          <label htmlFor={`fornavn_${ticket.id}`}>Fornavn</label>
          <input {...register(`fornavn_${ticket.id}`)} />

          <label htmlFor={`efternavn_${ticket.id}`}>Efternavn</label>
          <input {...register(`efternavn_${ticket.id}`)} />

          <label htmlFor={`email_${ticket.id}`}>Email</label>
          <input {...register(`email_${ticket.id}`)} />

          <label htmlFor={`telefon_${ticket.id}`}>Telefon Nummer</label>
          <input {...register(`telefon_${ticket.id}`)} />

          <button type="submit">Check out {ticket.name}</button>
        </form>
      ))}
    </>
  );
}
