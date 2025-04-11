"use client"

import { AlertTriangle, Info, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

type Alert = {
  id: string
  type: "warning" | "info" | "success"
  message: string
  time: string
}

const alerts: Alert[] = [
  {
    id: "1",
    type: "warning",
    message: "ICU likely to reach 90% capacity by Thursday",
    time: "2 hours ago",
  },
  {
    id: "2",
    type: "info",
    message: "Increase nurse shift by 2 on Monday",
    time: "4 hours ago",
  },
  {
    id: "3",
    type: "success",
    message: "Patient discharge rate improved by 15%",
    time: "Yesterday",
  },
  {
    id: "4",
    type: "warning",
    message: "Ventilator shortage predicted next week",
    time: "Yesterday",
  },
]

export default function AlertsList() {
  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={cn(
            "flex items-start p-3 rounded-md text-sm",
            alert.type === "warning" && "bg-amber-50 text-amber-800",
            alert.type === "info" && "bg-blue-50 text-blue-800",
            alert.type === "success" && "bg-green-50 text-green-800",
          )}
        >
          <div className="mr-3 mt-0.5">
            {alert.type === "warning" && <AlertTriangle className="h-4 w-4 text-amber-500" />}
            {alert.type === "info" && <Info className="h-4 w-4 text-blue-500" />}
            {alert.type === "success" && <TrendingUp className="h-4 w-4 text-green-500" />}
          </div>
          <div>
            <p className="font-medium">{alert.message}</p>
            <p
              className={cn(
                "text-xs mt-1",
                alert.type === "warning" && "text-amber-600",
                alert.type === "info" && "text-blue-600",
                alert.type === "success" && "text-green-600",
              )}
            >
              {alert.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
