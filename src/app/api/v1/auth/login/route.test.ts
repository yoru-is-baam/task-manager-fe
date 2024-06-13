import { GET } from "./route";

describe("Login", () => {
	const createMockRequest = () =>
		new Request("http://localhost:3000/api/v1/auth/login", { method: "GET" });

	it('should return 200 and "Login" message for GET requests', async () => {
		const req = createMockRequest();
		const res = await GET(req);

		expect(res.status).toBe(200);
		const json: { message: string } = await res.json();
		expect(json).toEqual({ message: "Login" });
	});
});
