import { NextResponse } from "next/server";
import connect from "@/src/utils/db";
import Projets from "@/src/models/Projets";


export const GET = async (request) => {

  try {
    await connect();

    const projets = await Projets.find();

    // console.log(projets);

    return new NextResponse(JSON.stringify(projets), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

