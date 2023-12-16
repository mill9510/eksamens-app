"use client";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { BasketValueContext, BasketUpdaterContext } from "../contexts/basketContext";
import "../components/Form.css";
import Link from "next/link";

export default function BasketForm() {
  // Hent register og handleSubmit fra react-hook-form biblioteket
  const { register, handleSubmit } = useForm();
  // Hent router fra next/navigation
  const router = useRouter();

  // Brug useContext til at få adgang til basket state og updater function
  const basket = useContext(BasketValueContext);
  const setBasket = useContext(BasketUpdaterContext);

  // URL og nøgle til Supabase
  const supabaseUrl = "https://pgsftrrsbbbudldfziuu.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnc2Z0cnJzYmJidWRsZGZ6aXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0OTIyNjYsImV4cCI6MjAxODA2ODI2Nn0.AUcunLPhO_tW_3HzvOCDOsR0hdBnyDVpQNyKqmRO3t0"; // Replace with your actual Supabase key
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Funktion til at håndtere indsendelse af formulardata til Supabase
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

  // Funktion til at håndtere indsendelse af alle formularer og navigere til checkout-siden
  const onSubmit = async (data) => {
    try {
      // Brug Promise.all for at indsende hver formular
      await Promise.all(basket.map((ticket) => submitFormData(ticket, data)));

      // Naviger til checkout-siden efter vellykket indsendelse
      router.push("/checkout");
    } catch (error) {
      console.error("Fejl:", error.message);
    }
  };
  // Funktion til at håndtere samlet checkout for alle billetter
  const handleOverallCheckout = (data) => {
    // Udløs onSubmit-funktionen for hver billet i kurven
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
