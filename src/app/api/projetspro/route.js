import { NextResponse } from "next/server";
import connect from "@/src/utils/db";
import ProjetsPro from "@/src/models/ProjetsPro";

export const GET = async (request) => {
  try {
    await connect();
    const projetspro = await ProjetsPro.find();
    return new NextResponse(
      JSON.stringify({
        projetspro,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Database Error:", err);
   return new NextResponse(JSON.stringify({ projetspro }), {
     status: 200,
     headers: {
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*", // Autoriser toutes les origines pour le test
     },
   });
  }
};
