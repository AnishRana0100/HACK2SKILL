"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  CalendarClock,
  Settings,
  Menu,
  X,
  BedDouble,
  ClipboardList,
  BarChart4,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const [menuVisible, setMenuVisible] = useState(false)

  const handleToggle = () => {
    setMenuVisible((prev) => !prev)
  }

  return (
    <>
      {/* Toggle button for small screens */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={handleToggle}
      >
        {menuVisible ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Overlay when sidebar is open */}
      <div
        className={cn("fixed inset-0 bg-black/50 z-40 md:hidden", menuVisible ? "block" : "hidden")}
        onClick={handleToggle}
      />

      {/* Sidebar content */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transition-transform",
          menuVisible ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo / Header */}
          <div className="h-16 flex items-center justify-center border-b border-gray-200">
            <span className="text-lg font-bold text-blue-600">MediPredict</span>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            <SidebarLink href="/" icon={<LayoutDashboard className="w-5 h-5" />} active>
              Dashboard
            </SidebarLink>
            <SidebarLink href="/patients" icon={<Users className="w-5 h-5" />}>
              Patient Flow
            </SidebarLink>
            <SidebarLink href="/beds" icon={<BedDouble className="w-5 h-5" />}>
              Bed Management
            </SidebarLink>
            <SidebarLink href="/planning" icon={<CalendarClock className="w-5 h-5" />}>
              Resource Planning
            </SidebarLink>
            <SidebarLink href="/reports" icon={<BarChart4 className="w-5 h-5" />}>
              Reports
            </SidebarLink>
            <SidebarLink href="/tasks" icon={<ClipboardList className="w-5 h-5" />}>
              Tasks
            </SidebarLink>

            {/* Settings */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <SidebarLink href="/settings" icon={<Settings className="w-5 h-5" />}>
                Settings
              </SidebarLink>
            </div>
          </nav>

          {/* Footer / Profile Info */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                DR
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium leading-none">Dr. Roberts</p>
                <p className="text-xs text-gray-500">Chief Medical Officer</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

function SidebarLink({
  href,
  icon,
  children,
  active = false,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
        active
          ? "bg-blue-50 text-blue-700"
          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      )}
    >
      <span className={cn("mr-3", active ? "text-blue-700" : "text-gray-500")}>{icon}</span>
      {children}
    </Link>
  )
}
