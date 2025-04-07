import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metrics } from "@/types"
import { Users, Activity, FileText, AlertTriangle } from "lucide-react"

interface DashboardMetricsProps {
  metrics: Metrics
}

export function DashboardMetrics({ metrics }: DashboardMetricsProps) {
  const items = [
    {
      title: "Total Users",
      value: metrics.totalUsers,
      icon: Users,
      description: "Total registered users",
    },
    {
      title: "Active Sessions",
      value: metrics.activeSessions,
      icon: Activity,
      description: "Currently active monitoring sessions",
    },
    {
      title: "Logs Captured",
      value: metrics.logsCaptured,
      icon: FileText,
      description: "Total logs captured",
    },
    {
      title: "Errors",
      value: metrics.errors,
      icon: AlertTriangle,
      description: "System errors detected",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

