import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  const [imageError, setImageError] = useState(false);

  // Handle kasus ketika ProjectLink kosong
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };
  
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };
  
  const handleImageError = () => {
    setImageError(true);
    console.error("ছবি লোড করতে সমস্যা:", Img);
  };

  // ইমেজ না থাকলে স্থির ইমেজ ব্যবহার করি
  const fallbackImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000", 
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000",
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000"
  ];
  
  // ইমেজের জন্য একটি নির্দিষ্ট সোর্স নির্বাচন করি
  const getFallbackImage = () => {
    const index = Math.floor(Math.random() * fallbackImages.length);
    return fallbackImages[index];
  };
  
  // ইমেজ সোর্স নির্ধারণ
  const imageSource = imageError ? getFallbackImage() : (Img || getFallbackImage());

  return (
    <div className="group relative w-full">
            
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg" style={{ height: "200px", backgroundColor: "#1a1e2e" }}>
            <img
              src={imageSource}
              alt={Title}
              onError={handleImageError}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          
          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {Title}
            </h3>
            
            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>
            
            <div className="pt-4 flex items-center justify-between">
              {ProjectLink ? (
                <a
                href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm">Demo Not Available</span>
              )}
              
     

              {id ? (
                <Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-gray-500 text-sm">Details Not Available</span>
              )}
            </div>
          </div>
          
          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;