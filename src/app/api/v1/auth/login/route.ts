export async function GET(request: Request) {
	return Response.json({ message: "Login" }, { status: 200 });
}
