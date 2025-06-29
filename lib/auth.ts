import { jwtVerify, SignJWT } from "jose"

// This would be stored in an environment variable in a real application
const JWT_SECRET = new TextEncoder().encode("your-secret-key")

export interface UserSession {
  id: string
  email: string
  name: string
  role: "parent" | "admin" | "staff"
}

/**
 * Create a JWT token for the user
 */
export async function createToken(user: UserSession): Promise<string> {
  return new SignJWT({ ...user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET)
}

/**
 * Verify a JWT token and return the user session
 */
export async function verifyToken(token: string): Promise<UserSession | null> {
  try {
    const verified = await jwtVerify(token, JWT_SECRET)
    return verified.payload as unknown as UserSession
  } catch (error) {
    return null
  }
}

/**
 * Social login handler for Google
 */
export async function handleGoogleLogin(token: string): Promise<{ user: UserSession; token: string } | null> {
  try {
    // In a real implementation, you would verify the Google token
    // and fetch user information from Google's API

    // Mock implementation
    const mockUser: UserSession = {
      id: "google-123",
      email: "user@example.com",
      name: "John Doe",
      role: "parent",
    }

    const authToken = await createToken(mockUser)

    return {
      user: mockUser,
      token: authToken,
    }
  } catch (error) {
    return null
  }
}

/**
 * Social login handler for Facebook
 */
export async function handleFacebookLogin(token: string): Promise<{ user: UserSession; token: string } | null> {
  try {
    // In a real implementation, you would verify the Facebook token
    // and fetch user information from Facebook's API

    // Mock implementation
    const mockUser: UserSession = {
      id: "facebook-123",
      email: "user@example.com",
      name: "John Doe",
      role: "parent",
    }

    const authToken = await createToken(mockUser)

    return {
      user: mockUser,
      token: authToken,
    }
  } catch (error) {
    return null
  }
}

/**
 * Email/password login handler
 */
export async function handleEmailLogin(
  email: string,
  password: string,
): Promise<{ user: UserSession; token: string } | null> {
  try {
    // In a real implementation, you would verify the email and password
    // against a database

    // Mock implementation - in production, NEVER hardcode credentials
    if (email === "admin@example.com" && password === "password") {
      const mockUser: UserSession = {
        id: "email-123",
        email: "admin@example.com",
        name: "Admin User",
        role: "admin",
      }

      const authToken = await createToken(mockUser)

      return {
        user: mockUser,
        token: authToken,
      }
    }

    if (email === "parent@example.com" && password === "password") {
      const mockUser: UserSession = {
        id: "email-456",
        email: "parent@example.com",
        name: "Parent User",
        role: "parent",
      }

      const authToken = await createToken(mockUser)

      return {
        user: mockUser,
        token: authToken,
      }
    }

    return null
  } catch (error) {
    return null
  }
}
