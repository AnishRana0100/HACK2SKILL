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
  ReferenceLine,
} from "recharts"

// Custom data: showing how full each hospital unit is
const bedData = [
  { unit: "ICU", filled: 85, total: 100 },
  { unit: "Emergency", filled: 70, total: 100 },
  { unit: "Pediatrics", filled: 60, total: 100 },
  { unit: "Surgery", filled: 90, total: 100 },
  { unit: "General", filled: 75, total: 100 },
  { unit: "Maternity", filled: 65, total: 100 },
]

export default function BedUsageGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={bedData}
        margin={{ top: 10, right: 15, bottom: 5, left: 0 }}
      >
        <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
        <XAxis
          dataKey="unit"
          stroke="#9ca3af"
          fontSize={13}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#9ca3af"
          fontSize={13}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #d1d5db",
            borderRadius: "0.5rem",
            boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
          }}
          formatter={(val) => [`${val}%`, "Occupied"]}
        />
        <Legend verticalAlign="top" height={30} />
        <ReferenceLine
          y={80}
          stroke="#dc2626"
          strokeDasharray="4 4"
          label={{ position: "right", value: "80% Limit", fill: "#dc2626", fontSize: 12 }}
        />
        <Bar
          dataKey="filled"
          name="Occupied Beds (%)"
          fill="#60a5fa"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
