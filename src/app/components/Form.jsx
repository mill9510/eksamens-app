"use client";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import "../components/Form.css";
import Link from "next/link";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const supabaseUrl = "https://pgsftrrsbbbudldfziuu.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnc2Z0cnJzYmJidWRsZGZ6aXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0OTIyNjYsImV4cCI6MjAxODA2ODI2Nn0.AUcunLPhO_tW_3HzvOCDOsR0hdBnyDVpQNyKqmRO3t0";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const onSubmit = async (data) => {
    try {
      // Send a POST request to Supabase
      const { data: response, error } = await supabase.from("FormData").upsert([data]);

      if (error) {
        console.error("Error submitting data to Supabase:", error.message);
      } else {
        console.log("Data submitted successfully:", response);
        router.push("/checkout");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <form className="formGrid" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fornavn">Fornavn</label>
          <input {...register("fornavn")} />
        </div>
        <div>
          <label htmlFor="efternavn">Efternavn</label>
          <input {...register("efternavn")} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} />
        </div>
        <div>
          <label htmlFor="telefon">Telefon Nummer</label>
          <input {...register("telefon")} />
        </div>
        <div>
          <button type="submit">Check out</button>
        </div>
      </form>
    </>
  );
}
