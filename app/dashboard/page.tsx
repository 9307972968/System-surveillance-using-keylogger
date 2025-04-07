import type { Metadata } from "next"
import { DashboardMetrics } from "@/components/dashboard/dashboard-metrics"
import { RecentLogs } from "@/components/dashboard/recent-logs"
import { getMetrics } from "@/lib/data"
// Import the PageTransition component
import { PageTransition } from "@/components/ui/page-transition"

export const metadata: Metadata = {
  title: "Dashboard - System Surveillance",
  description: "System Surveillance Dashboard",
}

export default async function DashboardPage() {
  const metrics = await getMetrics()

  // Wrap the return content with PageTransition
  return (
    <PageTransition>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your system surveillance metrics and recent logs.</p>
        </div>

        <DashboardMetrics metrics={metrics} />
        <RecentLogs />
      </div>
    </PageTransition>
  )
}

