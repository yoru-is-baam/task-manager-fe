// __tests__/route.test.ts

import { POST } from "./route";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

// Mock jwt
jest.mock("jsonwebtoken", () => ({
	sign: jest.fn().mockReturnValue("mocked-jwt-token"),
}));

describe("/api/login API route", () => {
	const mockEmail = "test@example.com";

	it("should return 200 and a JWT token for valid POST requests", async () => {
		// Mock Next.js API request object
		const mockRequest: Partial<NextRequest> = {
			json: jest.fn().mockResolvedValue({ email: mockEmail }),
		};

		// Call the POST function directly with the mock request
		const response = await POST(mockRequest as NextRequest);

		// Verify the response
		expect(response.status).toBe(200);
		const json = await response.json();
		expect(json.data).toHaveProperty("accessToken", "mocked-jwt-token");
		expect(jwt.sign).toHaveBeenCalledWith({ email: mockEmail }, "shhh");
	});

	it("should return 500 for invalid POST requests", async () => {
		// Mock Next.js API request object with invalid input (missing email)
		const mockRequest: Partial<NextRequest> = {
			json: jest.fn().mockRejectedValue(new Error("Invalid request")),
		};

		// Call the POST function directly with the mock request
		const response = await POST(mockRequest as NextRequest);

		// Verify the response
		expect(response.status).toBe(500);
		const json = await response.json();
		expect(json.error).toBe("Internal Server Error");
		expect(jwt.sign).not.toHaveBeenCalled();
	});
});
