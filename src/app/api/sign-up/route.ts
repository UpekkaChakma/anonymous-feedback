import dbConnect from "@/lib/db-connect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();
}
