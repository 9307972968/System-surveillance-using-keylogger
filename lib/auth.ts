import type { User } from "@/types"

// Mock authentication functions
// In a real application, these would interact with a backend API

export async function login({ email, password }: { email: string; password: string }) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // For demo purposes, accept any email/password
  // In a real app, you would validate credentials against a backend

  const user = {
    id: "1",
    email,
    name: email.split("@")[0],
  }

  // Store user in localStorage
  localStorage.setItem("user", JSON.stringify(user))

  return user
}

export async function register({ email, password }: { email: string; password: string; confirmPassword: string }) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // For demo purposes, just return success
  // In a real app, you would create a user in your backend

  return { success: true }
}

export async function logout() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Remove user from localStorage
  localStorage.removeItem("user")
}

export async function getUser(): Promise<User | null> {
  // In a client component, get user from localStorage
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
  }

  return null
}

