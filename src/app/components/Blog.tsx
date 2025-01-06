// import React from "react";
// import {Card, CardContent, CardTittle } from "../components/ui/card";
// interface BlogCardProps {
//    post: { 
//     id: string;
//     tittle: string;
//     description: string;
//     date: string;
//     imageUrl: string;
// };
// isDarkBackground: boolean;
// }

// export default function BlogCard({post, isDarkBackground}: BlogCardProps) {
//     return(
//         <Card
//         className={`p-4 ${
//             isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
//             } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
//              >
//                 <img
//                 src={post.imageUrl}
//                 alt={post.tittle}
//                 className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <CardTittle className= "text-xl font-normal mt-4 text-center">
//                     {""}
//                     {post.tittle}
//                     </CardTittle>
//                     <br />
//                     <CardContent className='text-center'>
//                         <p>{post.description}</p>
//                     </CardContent>

//                     <div className="flex flex-col items-center mt-4">
//                      <p className={text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}}>
//                         Published on: {new.Date(post.date).toLocalDateString()}
//                         </p>

//                         <a 
//                         href={/posts/${post.id}}
//                         className={w-full px-6 text-white bg-blue-600 rounded hover:bg-blue-500 ${isDarkBackground ? 'bg-black hover:bg-red-500':}}>
//                         Read More
//                         </a>
//                     </Card>
//     )
// }

// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="bg-gray-50">


      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/beauty-hero.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl font-semibold mb-4">Welcome to Beauty City</h2>
          <p className="text-lg mb-6">Where beauty meets excellence.</p>
          <Link href="#services">
            <a className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl">Explore Our Services</a>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
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
              <Image src="/images/facial-treatment.jpg" alt="Facial Treatment" width={500} height={300} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Facial Treatments</h3>
              <p className="text-gray-700">Our expert facial treatments are designed to rejuvenate your skin and leave you feeling refreshed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/images/hair-styling.jpg" alt="Hair Styling" width={500} height={300} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hair Styling</h3>
              <p className="text-gray-700">From sleek cuts to glamorous styles, our hair styling services will make you shine at any occasion.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/images/nail-art.jpg" alt="Nail Art" width={500} height={300} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nail Art</h3>
              <p className="text-gray-700">Get creative with your nails! Our nail artists can design unique looks tailored to your style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative w-full h-64">
              <Image src="/images/beauty-1.jpg" alt="Beauty 1" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="relative w-full h-64">
              <Image src="/images/beauty-2.jpg" alt="Beauty 2" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="relative w-full h-64">
              <Image src="/images/beauty-3.jpg" alt="Beauty 3" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-8">We would love to hear from you! If you have any questions or would like to book a consultation, please get in touch.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md" />
            <textarea placeholder="Your Message" className="w-full px-4 py-2 rounded-md" rows="4"></textarea>
            <button type="submit" className="bg-blue-500 px-6 py-2 text-white rounded-lg">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; 2024 Beauty City. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
