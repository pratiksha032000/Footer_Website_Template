import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer4 = () => {
  return (
    <footer className="bg-[#FFFFFF] text-[(#333333)] font-serif pt-12 mt-16">
      <div className="container mx-auto   lg:flex justify-center">
      <div className="w-1/3 text-center mx-auto mt-8 lg:mt-0">
          <h3 className="text-2xl mb-4">Follow Us</h3>
          <ul className="list-none flex justify-center space-x-4">
            <li><a href="#"><FaFacebookF className=" text-[#333333]  text-2xl hover:text-[#0056A0]" /></a></li>
            <li><a href="#"><FaTwitter className=" text-[#333333]  text-2xl hover:text-[#0056A0]" /></a></li>
            <li><a href="#"><FaInstagram className=" text-[#333333]  text-2xl hover:text-[#0056A0]" /></a></li>
            <li><a href="#"><FaLinkedinIn className=" text-[#333333]  text-2xl hover:text-[#0056A0]" /></a></li>
          </ul>
        </div>
        <div className="w-1/3 text-center mt-8 mx-auto lg:mt-0 ">
          <h3 className="text-2xl mb-4">Quick Links</h3>
          <ul className="list-none ">
            <li className="mb-2 hover:text-[#0056A0]"><a href="#">Home</a></li>
            <li className="mb-2 hover:text-[#0056A0]"><a href="#">About</a></li>
            <li className="mb-2 hover:text-[#0056A0]"><a href="#">Services</a></li>
            <li className="mb-2 hover:text-[#0056A0]"><a href="#">Products</a></li>
            <li className="mb-2 hover:text-[#0056A0]"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="w-1/3 text-center mx-auto lg:mt-0">
          <h3 className="text-2xl mb-4">Contact Us</h3>
          <p className="mb-2">Email: Info@example.com</p>
          <p className="mb-2">Phone: +121 56556 565556</p>
          <p>Address: Your Address 123 street</p>
        </div>
        
      </div>
      <div className="bg-[#FFFFFF] text-[(#708090)] text-center py-4 mt-12">
        <p>&copy; 2023 your company. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer4;