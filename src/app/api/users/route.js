import dbConnect from "../../../_lib/dbConnection";
import User from "../../../models/user";
import { validationSchema } from "./schema";
import { updateUser } from "../../../_lib/data-service";
import { NextResponse } from "next/server";
import { getUserById } from "../../../_lib/data-service";

export async function GET(req) {
  try {
    await dbConnect();

    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (id) {
      const user = await getUserById(id); // ✅ استخدمتي الفنكشن اللي عاوزاها
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      return NextResponse.json(user);
    }

    const users = await User.find(); // عرض كل المستخدمين لو مفيش id
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
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

export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const data = await req.json();

  if (!id) return new Response("Missing id", { status: 400 });

  // تحديث الحقول مع imageBase64
  const updateData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    website: data.website,
    city: data.city,
    country: data.country,
    companyName: data.companyName,
    catchPhrase: data.catchPhrase,
    imageBase64: data.imageBase64 // الصورة الجديدة أو القديمة حسب حالة الفورم
  };

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true
    });
    if (!updatedUser) return new Response("User not found", { status: 404 });
    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await dbConnect();

    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required" }), {
        status: 400
      });
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404
      });
    }

    return new Response(
      JSON.stringify({ message: "User deleted successfully" }),
      {
        status: 200
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
  }
}


// export async function DELETE(req) {
//   try {
//     await dbConnect();

//     const url = new URL(req.url);
//     const id = url.searchParams.get("id");

//     if (!id) {
//       return new Response(JSON.stringify({ error: "ID is required" }), {
//         status: 400,
//       });
//     }

//     const deletedUser = await User.findByIdAndDelete(id);

//     if (!deletedUser) {
//       return new Response(JSON.stringify({ error: "User not found" }), {
//         status: 404,
//       });
//     }

//     return new Response(
//       JSON.stringify({ message: "User deleted successfully" }),
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }
