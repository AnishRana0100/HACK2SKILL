"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Sample data for patient admissions
const data = [
  { day: "Mon", actual: 32, predicted: 35 },
  { day: "Tue", actual: 40, predicted: 42 },
  { day: "Wed", actual: 45, predicted: 48 },
  { day: "Thu", actual: 38, predicted: 36 },
  { day: "Fri", actual: 50, predicted: 52 },
  { day: "Sat", actual: 25, predicted: 28 },
  { day: "Sun", actual: 30, predicted: 32 },
  { day: "Mon", actual: null, predicted: 38 },
  { day: "Tue", actual: null, predicted: 45 },
  { day: "Wed", actual: null, predicted: 50 },
]

export default function PatientAdmissionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
          name="Actual"
        />
        <Line
          type="monotone"
          dataKey="predicted"
          stroke="#f97316"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ r: 4 }}
          name="Predicted"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}