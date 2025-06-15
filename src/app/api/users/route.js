import dbConnect from "../../../_lib/dbConnection";
import User from "../../../models/user";
import { validationSchema } from "./validation";

export async function GET(req) {
  try {
    await dbConnect();

    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (id) {
      const user = await User.findById(id);
      if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), {
          status: 404
        });
      }
      return new Response(JSON.stringify(user), { status: 200 });
    }

    const users = await User.find();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    const data = await req.json();

    // test matching with validation:
    const validation = validationSchema.safeParse(data);

    // to chek the (success) key
    if (!validation.success) {
      return new Response(
        JSON.stringify({
          message: `validation faild! with ${validation.error.message}`
        }),
        {
          status: 400
        }
      );
    }

    const user = new User(data);

    await user.save();

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message, message: "something went wrong" }),
      {
        status: 500
      }
    );
  }
}
