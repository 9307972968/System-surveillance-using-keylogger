export interface User {
  id: string
  email: string
  name?: string
}

export interface Log {
  id: string
  user: string
  action: string
  type: "keypress" | "screenshot" | "system"
  content: string
  timestamp: string
}

export interface Metrics {
  totalUsers: number
  activeSessions: number
  logsCaptured: number
  errors: number
}

