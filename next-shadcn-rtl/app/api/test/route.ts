import { auth } from "@/auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const session = await auth();

  if (session) {
    return Response.json({ data: "Protected data" });
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 });
}
