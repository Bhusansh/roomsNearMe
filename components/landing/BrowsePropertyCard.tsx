"use client";

import { useState } from "react";
import Image from "next/image";
import { Bed, Bath, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  id: string;
  title: string;
  price: string;
  location: string;
  images?: string[];
  type: string;
  beds: number | null;
  baths: number | null;
}

export default function BrowsePropertyCard({
  title,
  price,
  location,
  images = [],
  type,
  beds,
  baths,
}: Props) {

  const safeImages = images.length ? images : ["/ronaldo.jpg"];

  const [index, setIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % safeImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  return (
    <div className="group cursor-pointer">

      {/* Image Slider */}
      <div className="relative overflow-hidden rounded-2xl">

        <Image
          src={safeImages[index]}
          alt={title}
          width={500}
          height={400}
          className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Type Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium rounded-full shadow-sm text-gray-800">
          {type}
        </div>

        {/* Arrows */}
        {safeImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Dots */}
        {safeImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {safeImages.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

      </div>

      {/* Content */}
      <div className="pt-4 space-y-2">

        <p className="text-lg font-semibold text-black">
          {price}
        </p>

        <h3 className="font-medium text-gray-900 line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center text-gray-500 text-sm gap-1">
          <MapPin size={14} />
          {location}
        </div>

        {(beds || baths) && (
          <div className="flex items-center gap-4 text-gray-600 text-sm pt-2">

            {beds && (
              <div className="flex items-center gap-1">
                <Bed size={16} />
                {beds} Beds
              </div>
            )}

            {baths && (
              <div className="flex items-center gap-1">
                <Bath size={16} />
                {baths} Baths
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}