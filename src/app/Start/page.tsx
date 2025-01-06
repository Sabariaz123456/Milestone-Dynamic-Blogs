"use client";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../../Pictures/OIP (2).jpeg"
import image2 from "../../../Pictures/OIP (1).jpeg"
import image3 from "../../../Pictures/nail art.jpeg"

export default function Start() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(https://th.bing.com/th/id/OIP.P7ob-PEVfdgnQYjxTLYKZQHaE7?w=626&h=417&rs=1&pid=ImgDetMain)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl font-semibold mb-4">Welcome to Beauty City</h2>
          <p className="text-lg mb-6">Where beauty meets excellence.</p>
          <Link href="#services">
            <li className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl">
              Explore Our Services
            </li>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 bg-white  bg-pink-200 text-center"
        
      >
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Beauty City is your go-to destination for all things beauty. Whether you’re looking for the latest skincare tips, makeup tutorials, or professional beauty services, we are here to help you look and feel your best.
          </p>
          <p className="text-gray-700">
            Our mission is to provide high-quality beauty services that cater to your individual needs. We believe in enhancing your natural beauty with customized treatments that fit your lifestyle.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={image1}
                alt="Facial Treatment"
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Facial Treatments</h3>
              <p className="text-gray-700">
                Our expert facial treatments are designed to rejuvenate your skin and leave you feeling refreshed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={image2}
                alt="Hair Styling"
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Hair Styling</h3>
              <p className="text-gray-700">
                From sleek cuts to glamorous styles, our hair styling services will make you shine at any occasion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={image3}
                alt="Nail Art"
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Nail Art</h3>
              <p className="text-gray-700">
                Get creative with your nails! Our nail artists can design unique looks tailored to your style.
              </p>
            </div>
          </div>
        </div>
      </section>

            
    </div>
  );
}
