import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image from "../../../Pictures/ai-generated-make-up-products-advertisment-background-with-copy-space-free-photo.jpg"

export default function About(){
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Beauty city"
          className="object-cover w-full h-full brightness-50"
          layout="fill"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full bg-black/30">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            {/* Main Title */}
            <h1 className="text-2xl  md:text-6xl lg:text-4xl font-bold text-pink-900 mb-4">
            "Redefining Beauty, One City at a Time"
 
              <span className="block mt-2">BeautyCity is where innovation meets elegance. .</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            At BeautyCity, we believe that true beauty is about confidence and self-expression.</p>
            {/* Description */}
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
           From timeless classics to modern trends, we bring your vision to life.            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/Blogs">
              <button
              type='button'
              className="md:px-8 px-4 py-3 bg-[#FAB12F] text-[#3B1C32] font-semibold rounded-lg 
                               hover:bg-[#FAB12F]/90 transition-colors duration-300 
                               text-lg shadow-lg">
                              
                              Discover a world of endless possibilities at BeautyCity.
              </button>
              </Link>
              <Link href="/Contact"><button
               type='button'
              className="md:px-8 px-4 py-3 border-2 border-[#FAB12F] text-[#FAB12F] 
                               font-semibold rounded-lg hover:bg-[#FAB12F]/10 
                               transition-colors duration-300 text-lg">
                              
                Join Community
              </button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                          animate-bounce hidden md:block">
              <div className="w-8 h-8 border-r-2 border-b-2 border-[#FAB12F] 
                            rotate-45 transform origin-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

