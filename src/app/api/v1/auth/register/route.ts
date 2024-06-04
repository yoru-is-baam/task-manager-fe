import jwt from "jsonwebtoken";

type RegisterDto = {
	email: string;
};

export async function POST(request: Request) {
	const { email }: RegisterDto = await request.json();

	const accessToken = jwt.sign({ email }, "shhh");

	return Response.json({ data: { accessToken } }, { status: 200 });
}
