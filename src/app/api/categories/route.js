// import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

import database from "@/utils/database";

export const GET = async () => {
  try {
    // const categories = await prisma.category.findMany();
    const categories = database.readAll();
    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
