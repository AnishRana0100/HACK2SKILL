//Metadata for SEO & browser tab
export const metadata: Metadata = {
    title: "Smart Hospital AI Dashboard",
    description: "Visualize and predict hospital operations in real-time using AI insights",
  }
  
  import React, { Suspense } from "react"
  import { CalendarClock, Bell, Users, BedDouble, Clock, Stethoscope } from "lucide-react"
  
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import { Button } from "@/components/ui/button"
  import { Badge } from "@/components/ui/badge"
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
  
  import Sidebar from "@/components/sidebar"
  import DashboardSkeleton from "@/components/dashboard/dashboard-skeleton"
  
  import PatientAdmissionChart from "@/components/dashboard/patient-admission-chart"
  import BedOccupancyChart from "@/components/dashboard/bed-occupancy-chart"
  import LengthOfStayChart from "@/components/dashboard/length-of-stay-chart"
  import ResourceUsageChart from "@/components/dashboard/resource-usage-chart"
  import AlertsList from "@/components/dashboard/alerts-list"
  
  export default function HospitalDashboard() {
    return (
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
  
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Top Bar with Title & Notifications */}
          <section className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Hospital Dashboard</h1>
              <p className="text-gray-500">Real-time updates powered by predictive AI</p>
            </div>
  
            <div className="flex space-x-2 items-center mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <CalendarClock className="mr-2 h-4 w-4" />
                Apr 11, 2025
              </Button>
              <Button variant="outline" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-4 w-4 flex justify-center items-center text-white text-[10px] bg-red-500 rounded-full">3</span>
              </Button>
            </div>
          </section>
  
          {/* Main Tabs */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="departments">Departments</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
  
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              {/* KPI Cards */}
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {renderStatCard("Total Patients", "243", "+12% from last week", <Users className="h-4 w-4 text-gray-500" />)}
                {renderStatCard("Bed Occupancy", "78%", "+5% from yesterday", <BedDouble className="h-4 w-4 text-gray-500" />)}
                {renderStatCard("Avg. Stay Length", "4.2 days", "-0.5 days from last month", <Clock className="h-4 w-4 text-gray-500" />)}
                {renderStatCard("Staff On Duty", "86", "32 doctors, 54 nurses", <Stethoscope className="h-4 w-4 text-gray-500" />)}
              </section>
  
              {/* Prediction Charts */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Suspense fallback={<DashboardSkeleton />}>
                  {renderChartCard("Patient Admission Forecast", "Predicted admissions for the next 7 days", ["Day", "Week", "Month"], <PatientAdmissionChart />)}
                </Suspense>
                <Suspense fallback={<DashboardSkeleton />}>
                  {renderChartCard("Bed Occupancy", "Predicted bed usage vs available", ["All", "ICU", "General"], <BedOccupancyChart />)}
                </Suspense>
              </section>
  
              {/* Advanced Analytics */}
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Suspense fallback={<DashboardSkeleton />}>
                  {renderChartCard("Length of Stay", "How long patients typically stay", [], <LengthOfStayChart />)}
                </Suspense>
                <Suspense fallback={<DashboardSkeleton />}>
                  {renderChartCard("Resource Usage Forecast", "Upcoming needs for equipment & supplies", [], <ResourceUsageChart />)}
                </Suspense>
                <Suspense fallback={<DashboardSkeleton />}>
                  {renderChartCard("Alerts & Suggestions", "AI-generated insights and warnings", [], <AlertsList />)}
                </Suspense>
              </section>
            </TabsContent>
  
            {/* Departments Tab */}
            <TabsContent value="departments">
              {renderInfoCard("Department Overview", "Select a department to view detailed performance metrics.")}
            </TabsContent>
  
            {/* Resources Tab */}
            <TabsContent value="resources">
              {renderInfoCard("Resource Management", "Visualize and manage available hospital resources.")}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    )
  }
  
  //Reusable Functions
  
  function renderStatCard(title: string, value: string, desc: string, icon: React.ReactNode) {
    return (
      <Card>
        <CardHeader className="flex justify-between items-center pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-gray-500">{desc}</p>
        </CardContent>
      </Card>
    )
  }
  
  function renderChartCard(title: string, description: string, tags: string[], chart: React.ReactNode) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {tags.length > 0 && (
            <div className="flex space-x-2 mt-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant={index === 0 ? "secondary" : "outline"}>{tag}</Badge>
              ))}
            </div>
          )}
        </CardHeader>
        <CardContent className="pl-2">{chart}</CardContent>
      </Card>
    )
  }
  
  function renderInfoCard(title: string, desc: string) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">This section is under development.</p>
        </CardContent>
      </Card>
    )
  }
  