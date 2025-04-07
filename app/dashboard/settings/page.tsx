import type { Metadata } from "next"
import { SettingsForm } from "@/components/settings/settings-form"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { ApiSettings } from "@/components/settings/api-settings"
import { PageTransition } from "@/components/ui/page-transition"

export const metadata: Metadata = {
  title: "Settings - System Surveillance",
  description: "System Surveillance Settings",
}

export default function SettingsPage() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Configure your system surveillance settings.</p>
        </div>
        <div className="grid gap-6">
          <SettingsForm />
          <NotificationSettings />
          <ApiSettings />
        </div>
      </div>
    </PageTransition>
  )
}

