import { db } from "@/lib/server/db";

import { getServerAuthSession } from "@/lib/server/auth";

// GET CATEGORIES
export const GET = async () => {
  try {
    const categories = await db.category.findMany({
      skip: 0,
      // take: 10, // uncomment this line to limit the number of categories returned
    });

    return new Response(JSON.stringify(categories));
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      status: 500,
    });
  }
};

// CREATE A CATEGORY
export const POST = async (req: Request): Promise<Response> => {
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    return new Response(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const category = await db.category.create({
      data: {...body}
    });
    const resp = new Response(JSON.stringify(category));
    return resp 
  } catch (err: unknown) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      status: 500,
    });
  }
};