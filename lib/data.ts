import type { Log, Metrics } from "@/types"

// Mock data functions
// In a real application, these would fetch data from an API

export async function getMetrics(): Promise<Metrics> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    totalUsers: 24,
    activeSessions: 8,
    logsCaptured: 15782,
    errors: 3,
  }
}

export async function fetchRecentLogs(): Promise<Log[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: "log_1",
      user: "user1@example.com",
      action: "Typed password",
      type: "keypress",
      content: "********",
      timestamp: new Date().toISOString(),
    },
    {
      id: "log_2",
      user: "user2@example.com",
      action: "Opened file explorer",
      type: "system",
      content: "C:/Users/Documents",
      timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
    },
    {
      id: "log_3",
      user: "admin@example.com",
      action: "Captured screenshot",
      type: "screenshot",
      content: "screenshot_20230401_120000.png",
      timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    },
    {
      id: "log_4",
      user: "user1@example.com",
      action: "Visited website",
      type: "system",
      content: "https://example.com",
      timestamp: new Date(Date.now() - 30 * 60000).toISOString(),
    },
    {
      id: "log_5",
      user: "user2@example.com",
      action: "Typed email",
      type: "keypress",
      content: "contact@example.com",
      timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
    },
  ]
}

export async function fetchLogs(page = 1): Promise<{ data: Log[]; totalPages: number }> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Generate 20 logs per page
  const logs: Log[] = Array.from({ length: 20 }, (_, i) => {
    const id = `log_${(page - 1) * 20 + i + 1}`
    const userIndex = i % 3
    const users = ["user1@example.com", "user2@example.com", "admin@example.com"]
    const types = ["keypress", "system", "screenshot"]
    const actions = [
      "Typed password",
      "Opened file explorer",
      "Captured screenshot",
      "Visited website",
      "Typed email",
      "Copied text",
      "Pasted text",
      "Opened application",
      "Closed application",
      "Downloaded file",
    ]

    return {
      id,
      user: users[userIndex],
      action: actions[i % actions.length],
      type: types[i % types.length],
      content: `Content for log ${id}`,
      timestamp: new Date(Date.now() - i * 15 * 60000).toISOString(),
    }
  })

  return {
    data: logs,
    totalPages: 10, // Simulate 10 pages of logs
  }
}

