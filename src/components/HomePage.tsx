import React from "react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Utensils, GlassWater, Languages } from "lucide-react";
import logo from "../assets/images/logo.png";
import carouselImg from "../assets/images/carousal-1.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-start gap-3 p-4">
        <img src={logo} alt="Sukiya Logo" className="w-14 h-14 object-contain" />
        <div className="flex-1">
          <div className="text-xs text-gray-700 leading-tight">
            Nekoza...<br />Ur...shi<br />Table: <span className="font-semibold">24</span>
          </div>
        </div>
        <button className="p-1" aria-label="Change Language">
          <Languages className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      {/* Welcome */}
      <div className="px-4 mt-2">
        <div className="text-lg text-gray-700">Welcome to <span className="font-bold">SUKIYA</span></div>
      </div>
      {/* Dine-In / Take Away */}
      <div className="flex gap-4 justify-center mt-6">
        <Button className="bg-[#E59A07] hover:bg-[#d18a00] text-white flex-col w-40 h-24 text-lg font-semibold rounded-xl shadow-none" onClick={() => navigate('/menu')}>
          <Utensils className="w-7 h-7 mb-2" />
          Dine-In
        </Button>
        <Button className="bg-[#E59A07] hover:bg-[#d18a00] text-white flex-col w-40 h-24 text-lg font-semibold rounded-xl shadow-none" onClick={() => navigate('/menu')}>
          <GlassWater className="w-7 h-7 mb-2" />
          Take Away
        </Button>
      </div>
      {/* Deals For You */}
      <div className="mt-8 px-4 text-center text-xs text-gray-400 font-semibold tracking-wide">DEALS FOR YOU</div>
      <div className="flex justify-center mt-2">
        <div className="w-full max-w-xs">
          <Carousel>
            <CarouselContent>
              {[0, 1, 2].map((i) => (
                <CarouselItem key={i}>
                  <img src={carouselImg} alt="Deal" className="w-full h-40 object-cover" />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Indicators */}
            <div className="flex justify-center gap-1 mt-2">
              {[0, 1, 2].map((i) => (
                <span key={i} className={`inline-block w-2 h-2 rounded-full bg-gray-300 data-[active=true]:bg-[#E59A07]`} data-active={i === 0} />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
      {/* Closing soon */}
      <div className="mt-auto mb-4 text-center text-sm text-gray-600">
        We are closing soon, <span className="font-semibold underline cursor-pointer">view operating hours</span>
      </div>
    </div>
  );
} 