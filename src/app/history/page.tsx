"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf } from "lucide-react"

export default function HistoryPage() {
  const scans = [
    { plant: "Tomato", deficiency: "Nitrogen", date: "2023-06-01" },
    { plant: "Cucumber", deficiency: "Magnesium", date: "2023-05-30" },
    { plant: "Pepper", deficiency: "Iron", date: "2023-05-28" },
    { plant: "Lettuce", deficiency: "Phosphorus", date: "2023-05-25" },
  ]

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Scan History</h2>
      {scans.map((scan, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">{scan.plant}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="flex items-center">
              <Leaf className="w-4 h-4 mr-2 text-green-500" />
              {scan.deficiency} Deficiency
            </p>
            <p className="text-sm text-muted-foreground mt-2">Scanned on {scan.date}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}