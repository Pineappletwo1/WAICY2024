"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Leaf, Settings, Home, Search, Flower2, Salad, Sprout, TreeDeciduous } from "lucide-react"

const plants = [
  { name: "Tomato", scientificName: "Solanum lycopersicum", category: "Vegetables" },
  { name: "Rose", scientificName: "Rosa", category: "Flowers" },
  { name: "Basil", scientificName: "Ocimum basilicum", category: "Herbs" },
  { name: "Ficus", scientificName: "Ficus benjamina", category: "Indoor Plants" },
  { name: "Lavender", scientificName: "Lavandula", category: "Herbs" },
  { name: "Sunflower", scientificName: "Helianthus annuus", category: "Flowers" },
  { name: "Mint", scientificName: "Mentha", category: "Herbs" },
  { name: "Spider Plant", scientificName: "Chlorophytum comosum", category: "Indoor Plants" },
]

const getCategoryIcon = (category) => {
  switch (category) {
    case "Vegetables":
      return <Salad className="w-8 h-8 text-green-600" />
    case "Flowers":
      return <Flower2 className="w-8 h-8 text-pink-500" />
    case "Herbs":
      return <Sprout className="w-8 h-8 text-teal-500" />
    case "Indoor Plants":
      return <TreeDeciduous className="w-8 h-8 text-emerald-600" />
    default:
      return <Leaf className="w-8 h-8 text-green-600" />
  }
}

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900">
      {/* Top Navigation */}

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Plant Library</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search plants..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
              <TabsTrigger value="flowers">Flowers</TabsTrigger>
              <TabsTrigger value="herbs">Herbs</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPlants.map((plant, index) => (
                  <Card key={index} className="bg-white border-gray-200">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        {getCategoryIcon(plant.category)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{plant.name}</h3>
                        <p className="text-sm text-gray-600">{plant.scientificName}</p>
                        <p className="text-xs text-gray-500 mt-1">{plant.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="vegetables" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPlants.filter(plant => plant.category === "Vegetables").map((plant, index) => (
                  <Card key={index} className="bg-white border-gray-200">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        {getCategoryIcon(plant.category)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{plant.name}</h3>
                        <p className="text-sm text-gray-600">{plant.scientificName}</p>
                        <p className="text-xs text-gray-500 mt-1">{plant.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="flowers" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPlants.filter(plant => plant.category === "Flowers").map((plant, index) => (
                  <Card key={index} className="bg-white border-gray-200">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        {getCategoryIcon(plant.category)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{plant.name}</h3>
                        <p className="text-sm text-gray-600">{plant.scientificName}</p>
                        <p className="text-xs text-gray-500 mt-1">{plant.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="herbs" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPlants.filter(plant => plant.category === "Herbs").map((plant, index) => (
                  <Card key={index} className="bg-white border-gray-200">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        {getCategoryIcon(plant.category)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{plant.name}</h3>
                        <p className="text-sm text-gray-600">{plant.scientificName}</p>
                        <p className="text-xs text-gray-500 mt-1">{plant.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}