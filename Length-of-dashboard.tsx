"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts"

// Visualization data for patient stay durations
const stayDurations = [
  { name: "1-2 days", value: 35, color: "#3b82f6" },
  { name: "3-5 days", value: 40, color: "#60a5fa" },
  { name: "6-10 days", value: 15, color: "#93c5fd" },
  { name: "10+ days", value: 10, color: "#bfdbfe" },
]

export default function PatientStayPieChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={stayDurations}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={2}
          dataKey="value"
          label={({ name, percent }) =>
            `${name} (${Math.round(percent * 100)}%)`
          }
          labelLine={false}
        >
          {stayDurations.map((slice, idx) => (
            <Cell key={`slice-${idx}`} fill={slice.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(val) => [`${val}%`, "Patient Share"]}
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </ResponsiveContainer>
  )
}
