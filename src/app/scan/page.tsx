"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Home, Leaf, Settings, Menu } from "lucide-react"

export default function LeafLensApp() {
  const [predictions, setPredictions] = useState<string[]>([])

  const handleCapture = () => {
    // Simulate prediction process
    setPredictions([
      "Nitrogen Deficiency - 85% confidence",
      "Iron Deficiency - 10% confidence",
      "Magnesium Deficiency - 5% confidence"
    ])
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900">

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden p-6">
        {/* Camera Viewfinder */}
        <div className="w-1/2 pr-3">
          <Card className="h-full bg-white border-gray-200">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-24 h-24 text-white opacity-50" />
                </div>
                <Button 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 hover:bg-gray-200"
                  size="lg"
                  onClick={handleCapture}
                >
                  <Camera className="w-6 h-6 mr-2" />
                  Capture
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Predictions */}
        <div className="w-1/2 pl-3">
          <Card className="h-full bg-white border-gray-200">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="text-gray-800">Analysis Results</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {predictions.length > 0 ? (
                <ul className="space-y-4">
                  {predictions.map((prediction, index) => (
                    <li key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <Leaf className="w-6 h-6 mr-3 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-800">{prediction.split(' - ')[0]}</p>
                        <p className="text-sm text-gray-600">{prediction.split(' - ')[1]}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Leaf className="w-16 h-16 mb-4 text-green-300" />
                  <p className="text-lg font-medium text-gray-800">No analysis yet</p>
                  <p className="text-sm text-gray-600 mt-2">Capture an image to start analyzing</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}