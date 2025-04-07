"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function NotificationSettings() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [settings, setSettings] = useState({
    emailAlerts: true,
    suspiciousActivity: true,
    systemErrors: true,
    dailyReports: false,
  })

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleSave = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Notification settings updated",
      description: "Your notification preferences have been saved.",
    })

    setIsLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Configure how and when you receive notifications.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-alerts" className="flex flex-col space-y-1">
              <span>Email Alerts</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive email notifications for important events.
              </span>
            </Label>
            <Switch
              id="email-alerts"
              checked={settings.emailAlerts}
              onCheckedChange={() => handleToggle("emailAlerts")}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="suspicious-activity" className="flex flex-col space-y-1">
              <span>Suspicious Activity</span>
              <span className="font-normal text-sm text-muted-foreground">
                Get notified when suspicious activity is detected.
              </span>
            </Label>
            <Switch
              id="suspicious-activity"
              checked={settings.suspiciousActivity}
              onCheckedChange={() => handleToggle("suspiciousActivity")}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="system-errors" className="flex flex-col space-y-1">
              <span>System Errors</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive alerts for system errors and failures.
              </span>
            </Label>
            <Switch
              id="system-errors"
              checked={settings.systemErrors}
              onCheckedChange={() => handleToggle("systemErrors")}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="daily-reports" className="flex flex-col space-y-1">
              <span>Daily Reports</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive daily summary reports of all activity.
              </span>
            </Label>
            <Switch
              id="daily-reports"
              checked={settings.dailyReports}
              onCheckedChange={() => handleToggle("dailyReports")}
            />
          </div>
        </div>
        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Notification Settings"}
        </Button>
      </CardContent>
    </Card>
  )
}

