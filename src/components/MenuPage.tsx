import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import logo from "../assets/images/logo.png";
import item1 from "../assets/images/item-1.png";
import item2 from "../assets/images/item-2.png";
import item3 from "../assets/images/item-3.png";
import item4 from "../assets/images/item-4.png";
import { Search } from "lucide-react";

const categories = [
  "All",
  "Appetisers",
  "Soups",
  "Salads",
  "Sea Food",
  "Main Course",
  "Beverages",
  "Desserts",
];

const menuItems = [
  {
    id: 1,
    name: "Gyudon with 3 Cheeses",
    price: 6.3,
    img: item1,
    recommended: true,
    discount: 10,
    outOfStock: false,
  },
  {
    id: 2,
    name: "Gyudon with 3 Cheeses",
    price: 6.3,
    img: item2,
    recommended: false,
    discount: 10,
    outOfStock: false,
  },
  {
    id: 3,
    name: "Gyudon with 3 Cheeses",
    price: 6.3,
    img: item3,
    recommended: false,
    discount: 0,
    outOfStock: true,
  },
  {
    id: 4,
    name: "Gyudon with 3 Cheeses",
    price: 6.3,
    img: item4,
    recommended: true,
    discount: 0,
    outOfStock: false,
  },
  {
    id: 5,
    name: "Gyudon with 3 Cheeses",
    price: 6.3,
    img: item1,
    recommended: true,
    discount: 10,
    outOfStock: false,
  },
  {
    id: 6,
    name: "Gyudon with 3 Cheeses",
    price: 6.3,
    img: item2,
    recommended: false,
    discount: 10,
    outOfStock: false,
  },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 p-4">
        <img src={logo} alt="Sukiya Logo" className="w-14 h-14 object-contain" />
        <div className="flex-1">
          <div className="text-xs text-gray-700 leading-tight">
            Nekozane,<br />Urayasu-shi<br />Table: <span className="font-semibold">24</span>
          </div>
        </div>
        <button className="p-1" aria-label="Search">
          <Search className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      {/* Categories */}
      <div className="flex gap-2 px-4 mt-2 overflow-x-auto hide-scrollbar">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? undefined : "outline"}
            className={`rounded-lg px-4 py-1 text-sm font-medium ${selectedCategory === cat ? "bg-gray-700 text-white" : "bg-white text-gray-700"}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>
      {/* Menu Items */}
      <div className="grid grid-cols-2 gap-4 px-4 mt-4">
        {menuItems.map((item, idx) => (
          <Card key={item.id} className="p-0 overflow-hidden relative">
            {/* Badges */}
            <div className="absolute top-2 left-2 flex gap-1 z-10">
              {item.recommended && (
                <span className="bg-[#3B3B3B] text-white text-[10px] px-2 py-0.5 rounded font-semibold">Recommended</span>
              )}
              {item.discount > 0 && (
                <span className="bg-[#3B3B3B] text-white text-[10px] px-2 py-0.5 rounded font-semibold">{item.discount}% off</span>
              )}
            </div>
            {/* Out of Stock Overlay (image only) */}
            <div className="relative">
              <img
                src={item.img}
                alt={item.name}
                className={`w-full h-32 object-cover ${item.outOfStock ? "grayscale" : ""}`}
              />
              {item.outOfStock && (
                <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center">
                  <span className="bg-[#3B3B3B] text-white text-xs px-4 py-1 rounded font-semibold">Out of Stock</span>
                </div>
              )}
            </div>
            <div className={`px-3 py-2 flex flex-col gap-1 ${item.outOfStock ? "text-gray-400" : ""}`}>
              <div className={`text-sm font-medium leading-tight line-clamp-2 ${item.outOfStock ? "text-gray-400" : "text-gray-900"}`}>
                {item.name}
              </div>
              <div className={`text-xs ${item.outOfStock ? "text-gray-300" : "text-gray-700"}`}>S$ {item.price}</div>
            </div>
            <div className="px-3 pb-3">
              <Button
                className={`w-full font-semibold rounded-lg ${item.outOfStock ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[#E59A07] hover:bg-[#d18a00] text-white"}`}
                disabled={item.outOfStock}
              >
                + Add
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 