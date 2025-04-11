import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// This component shows a placeholder while dashboard content is loading
export default function LoadingCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        {/* Placeholder for the main title */}
        <Skeleton className="h-6 w-1/3" />
        {/* Placeholder for the subtitle or description */}
        <Skeleton className="h-4 w-1/2 mt-2" />
      </CardHeader>

      <CardContent>
        {/* Placeholder for chart, table, or major content block */}
        <Skeleton className="h-[200px] w-full" />
      </CardContent>
    </Card>
  )
}
