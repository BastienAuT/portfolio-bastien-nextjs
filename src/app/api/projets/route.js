import { NextResponse } from "next/server";
import connect from "@/src/utils/db";
import Projets from "@/src/models/Projets";
import ProjetsPro from "@/src/models/ProjetsPro"; 

export const GET = async (request) => {
  try {
    await connect();

    // Fetch data from both collections
    const projets = await Projets.find();
    // Return them separately in the response
    return new NextResponse(
      JSON.stringify({
        projets,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};