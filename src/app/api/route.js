import { NextResponse } from "next/server";
import connect from "@/src/utils/db";
import Projets from "@/src/models/Projets";

export const GET = async (request) => {
  try {
    await connect();

    const projets = await Projets.find();

    return new NextResponse(projets, { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
