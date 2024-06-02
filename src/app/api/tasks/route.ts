export async function GET(request: Request) {
	return Response.json({ message: "Tasks" }, { status: 200 });
}
