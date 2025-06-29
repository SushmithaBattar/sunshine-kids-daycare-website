import { NextResponse } from "next/server"
import { handleEmailLogin, handleGoogleLogin, handleFacebookLogin } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { provider, email, password, token } = body

    let result

    switch (provider) {
      case "email":
        if (!email || !password) {
          return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
        }
        result = await handleEmailLogin(email, password)
        break

      case "google":
        if (!token) {
          return NextResponse.json({ error: "Google token is required" }, { status: 400 })
        }
        result = await handleGoogleLogin(token)
        break

      case "facebook":
        if (!token) {
          return NextResponse.json({ error: "Facebook token is required" }, { status: 400 })
        }
        result = await handleFacebookLogin(token)
        break

      default:
        return NextResponse.json({ error: "Invalid provider" }, { status: 400 })
    }

    if (!result) {
      return NextResponse.json({ error: "Authentication failed" }, { status: 401 })
    }

    // In a real application, you would set an HTTP-only cookie with the token
    // For this example, we'll just return the token in the response
    return NextResponse.json({
      user: result.user,
      token: result.token,
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
