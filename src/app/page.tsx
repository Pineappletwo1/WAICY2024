"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Leaf, Book, History, Settings, Home } from "lucide-react"

export default function HomeScreen() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900">


      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Welcome Section */}
          <Card className="bg-white border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to LeafLens</h2>
              <p className="text-gray-600">Identify and diagnose plant health issues with ease using our AI-powered tool.</p>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Camera className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Scan Plant</h3>
                <p className="text-gray-600 mb-4">Analyze your plant's health instantly</p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Start Scan
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Book className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Plant Library</h3>
                <p className="text-gray-600 mb-4">Browse common plants and issues</p>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  Explore
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Scans */}
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-800">Recent Scans</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  { name: "Tomato Plant", issue: "Nitrogen Deficiency", date: "2 hours ago" },
                  { name: "Orchid", issue: "Overwatering", date: "Yesterday" },
                  { name: "Basil", issue: "Healthy", date: "3 days ago" },
                ].map((scan, index) => (
                  <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Leaf className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">{scan.name}</p>
                        <p className="text-sm text-gray-600">{scan.issue}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{scan.date}</span>
                  </li>
                ))}
              </ul>
              <Button variant="link" className="w-full mt-4 text-gray-600">
                <History className="w-4 h-4 mr-2" />
                View All Scans
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}