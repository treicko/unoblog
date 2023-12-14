import { db } from "@/lib/server/db";
import { getServerAuthSession } from "@/lib/server/auth";

// GET COLORS
export const GET = async () => {
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    return new Response(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const colors = await db.color.findMany({
      skip: 0,
      // take: 10, // uncomment this line to limit the number of categories returned
    });

    return new Response(JSON.stringify(colors));
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      status: 500,
    });
  }
};
