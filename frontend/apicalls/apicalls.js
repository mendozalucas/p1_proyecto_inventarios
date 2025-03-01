export async function getMensaje() {
    const res = await fetch("http://localhost:5000/mensaje");
    if (!res.ok) throw new Error("Error al obtener mensaje de Flask");
    return res.json();
  }