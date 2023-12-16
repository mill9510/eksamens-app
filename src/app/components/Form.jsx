"use client";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { BasketValueContext, BasketUpdaterContext } from "../contexts/basketContext";
import "../components/Form.css";
import Link from "next/link";

export default function BasketForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  // Use useContext to get the basket state and updater function
  const basket = useContext(BasketValueContext);
  const setBasket = useContext(BasketUpdaterContext);

  const supabaseUrl = "https://pgsftrrsbbbudldfziuu.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnc2Z0cnJzYmJidWRsZGZ6aXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0OTIyNjYsImV4cCI6MjAxODA2ODI2Nn0.AUcunLPhO_tW_3HzvOCDOsR0hdBnyDVpQNyKqmRO3t0"; // Replace with your actual Supabase key
  const supabase = createClient(supabaseUrl, supabaseKey);

  const submitFormData = async (ticket, data) => {
    console.log("Submitting data for ticket:", ticket);
    try {
      const formData = {
        fornavn: data[`fornavn_${ticket.id}`],
        efternavn: data[`efternavn_${ticket.id}`],
        email: data[`email_${ticket.id}`],
        telefon: data[`telefon_${ticket.id}`],
      };

      const { data: response, error } = await supabase.from("FormData").upsert(formData);

      if (error) {
        console.error("Error submitting data to Supabase:", error.message);
      } else {
        console.log("Data submitted successfully:", response);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const onSubmit = async (data) => {
    try {
      // Use an asynchronous loop to submit each form independently
      for (const ticket of basket) {
        await submitFormData(ticket, data);
      }

      // Navigate to the checkout page after successful submission
      router.push("/checkout");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleOverallCheckout = (data) => {
    // Trigger the onSubmit function for each ticket in the basket
    onSubmit(data);
  };

  return (
    <>
      {basket.map((ticket) => (
        <form key={ticket.id} className="formGrid" onSubmit={handleSubmit(onSubmit)}>
          <h2>{ticket.ticket}</h2>
          <label typeof="text" htmlFor={`fornavn_${ticket.id}`}>
            Fornavn
          </label>
          <input {...register(`fornavn_${ticket.id}`)} />

          <label typeof="text" htmlFor={`efternavn_${ticket.id}`}>
            Efternavn
          </label>
          <input {...register(`efternavn_${ticket.id}`)} />

          <label typeof="email" htmlFor={`email_${ticket.id}`}>
            Email
          </label>
          <input {...register(`email_${ticket.id}`)} />

          <label typeof="numeric" htmlFor={`telefon_${ticket.id}`}>
            Telefon Nummer
          </label>
          <input {...register(`telefon_${ticket.id}`)} />
        </form>
      ))}
      <form className="formGrid" onSubmit={handleSubmit(handleOverallCheckout)}>
        <button type="submit">Checkout</button>
      </form>
    </>
  );
}
