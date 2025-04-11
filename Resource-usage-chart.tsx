"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

// Resource data showing current vs predicted usage
const usageStats = [
  { resource: "Doctors", now: 32, expected: 35 },
  { resource: "Nurses", now: 54, expected: 60 },
  { resource: "ICU Beds", now: 18, expected: 22 },
  { resource: "Ventilators", now: 12, expected: 15 },
  { resource: "OR Rooms", now: 8, expected: 10 },
]

export default function StaffAndEquipmentUsage() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart
        data={usageStats}
        layout="vertical"
        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
        <XAxis
          type="number"
          fontSize={12}
          stroke="#9ca3af"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="resource"
          type="category"
          fontSize={12}
          stroke="#9ca3af"
          tickLine={false}
          axisLine={false}
          width={90}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        />
        <Legend verticalAlign="top" height={36} />
        <Bar dataKey="now" name="Current" fill="#2563eb" barSize={10} radius={[0, 4, 4, 0]} />
        <Bar dataKey="expected" name="Forecast" fill="#fb923c" barSize={10} radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
