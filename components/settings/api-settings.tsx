"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Copy, Eye, EyeOff, RefreshCw } from "lucide-react"

export function ApiSettings() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [apiKey, setApiKey] = useState("sk_test_51HG8s4JKHJHGFDSAjkhdsajkh")
  const [apiEndpoint, setApiEndpoint] = useState("https://api.surveillance-system.com/v1")

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
    toast({
      title: "API key copied",
      description: "The API key has been copied to your clipboard.",
    })
  }

  const handleRegenerateApiKey = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Generate a random API key
    const newApiKey =
      "sk_test_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    setApiKey(newApiKey)

    toast({
      title: "API key regenerated",
      description: "Your API key has been regenerated successfully.",
    })

    setIsLoading(false)
  }

  const handleSaveEndpoint = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "API endpoint updated",
      description: "Your API endpoint has been updated successfully.",
    })

    setIsLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Settings</CardTitle>
        <CardDescription>Manage your API keys and endpoints for integration.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="api-key">API Key</Label>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Input id="api-key" value={apiKey} type={showApiKey ? "text" : "password"} readOnly />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-8 top-0"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            <Button variant="outline" size="icon" onClick={handleCopyApiKey}>
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={handleRegenerateApiKey} disabled={isLoading}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Regenerate
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Your API key is used to authenticate API requests. Keep it secure.
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="api-endpoint">API Endpoint</Label>
          <div className="flex space-x-2">
            <Input id="api-endpoint" value={apiEndpoint} onChange={(e) => setApiEndpoint(e.target.value)} />
            <Button onClick={handleSaveEndpoint} disabled={isLoading}>
              Save
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">The base URL for all API requests.</p>
        </div>
      </CardContent>
    </Card>
  )
}

