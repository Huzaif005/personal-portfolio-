import React, { useState, useEffect, useRef } from 'react';
import { USER_INFO } from '../data/portfolioData';
import { Camera, RefreshCw } from 'lucide-react';

interface ProfilePhotoCardProps {
  className?: string;
  badgeText?: string;
  subTitle?: string;
  aspectRatio?: string; // 'h-88' | 'h-64'
}

export const ProfilePhotoCard: React.FC<ProfilePhotoCardProps> = ({
  className = '',
  badgeText = 'ML Intern @ Flyrank',
  subTitle = 'AI & DS Student',
  aspectRatio = 'h-88',
}) => {
  const [photoUrl, setPhotoUrl] = useState<string>(USER_INFO.avatarUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved profile photo from localStorage if available
  useEffect(() => {
    const savedPhoto = localStorage.getItem('user_profile_photo_data');
    if (savedPhoto) {
      setPhotoUrl(savedPhoto);
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoUrl(result);
        try {
          localStorage.setItem('user_profile_photo_data', result);
        } catch (err) {
          console.error('Failed to save image to localStorage', err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('user_profile_photo_data');
    setPhotoUrl(USER_INFO.avatarUrl);
  };

  return (
    <div className={`relative group ${className}`}>
      <div
        className={`relative w-full ${aspectRatio} rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-900/40 via-indigo-900/20 to-slate-900/60 border border-slate-800 shadow-2xl transition-all duration-300`}
      >
        {/* Background glow effects */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Profile Image */}
        <img
          src={photoUrl}
          alt={USER_INFO.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 pointer-events-none" />

        {/* Top Floating Badge */}
        {badgeText && (
          <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-blue-400/30 shadow-lg tracking-wide z-10">
            {badgeText}
          </div>
        )}

        {/* Top Right Quick Upload / Reset Action Buttons */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10 opacity-80 group-hover:opacity-100 transition-opacity">
          {photoUrl !== USER_INFO.avatarUrl && (
            <button
              onClick={handleResetImage}
              title="Reset to default image"
              className="p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={() => fileInputRef.current?.click()}
            title="Upload/Change Profile Photo"
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/80 hover:bg-blue-600 text-slate-200 hover:text-white border border-slate-700 hover:border-blue-400 text-[10px] font-medium backdrop-blur-md transition-all"
          >
            <Camera className="w-3 h-3" />
            <span>Photo</span>
          </button>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 bg-slate-950/85 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-800/80 shadow-md z-10">
          <span className="flex items-center gap-2 font-bold text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
            {USER_INFO.name}
          </span>
          <span className="text-[10px] text-blue-400 font-mono font-bold">
            {subTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

