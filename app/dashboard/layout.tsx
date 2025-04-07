import type React from "react"
import { redirect } from "next/navigation"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SidebarProvider, Sidebar, SidebarContent, SidebarInset, SidebarRail } from "@/components/ui/sidebar"
import { getSession } from "@/lib/session"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  const user = session?.user

  // Make sure we're using the SidebarProvider to maintain sidebar state across routes
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <Sidebar>
          <SidebarContent>
            <DashboardNav />
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <div className="flex flex-col min-h-screen">
            <DashboardHeader user={user} />
            <main className="flex-1 p-4 md:p-6 transition-all duration-200 ease-in-out">{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

