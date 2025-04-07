import type { Metadata } from "next"
import { LogsTable } from "@/components/logs/logs-table"
import { LogsFilter } from "@/components/logs/logs-filter"
import { PageTransition } from "@/components/ui/page-transition"

export const metadata: Metadata = {
  title: "Logs - System Surveillance",
  description: "System Surveillance Logs",
}

export default function LogsPage() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Logs</h1>
          <p className="text-muted-foreground">View and filter all captured logs from the system.</p>
        </div>
        <LogsFilter />
        <LogsTable />
      </div>
    </PageTransition>
  )
}

