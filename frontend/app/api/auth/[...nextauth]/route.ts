import { handlers } from "@/auth"

export const GET = async (req: Request) => {
  try {
    const response = await handlers.GET(req);
    return response;
  } catch (error) {
    console.error('GET Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const response = await handlers.POST(req);
    return response;
  } catch (error) {
    console.error('POST Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};