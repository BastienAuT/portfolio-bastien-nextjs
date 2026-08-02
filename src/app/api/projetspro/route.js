import { NextResponse } from "next/server";
import connect from "@/src/utils/db";
import ProjetsPro from "@/src/models/ProjetsPro";

export const GET = async (request) => {
  try {
    await connect();
    const projetspro = await ProjetsPro.find().sort({ createdAt: -1 });
    return new NextResponse(
      JSON.stringify({
        projetspro,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Database Error:", err);
    return new NextResponse(
      JSON.stringify({ projetspro: [], error: "Database Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
