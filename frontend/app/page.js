"use client";
import { useEffect, useState } from "react";
import { getMensaje } from "../apicalls/apicalls";

export default function Home() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    getMensaje()
      .then((data) => setMensaje(data.mensaje))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Mensaje desde Flask:</h2>
      <div>{mensaje}</div>
    </div>
  );
}