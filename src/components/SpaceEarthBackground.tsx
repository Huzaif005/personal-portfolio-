import React from 'react';

export const SpaceEarthBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 3D Rotating Earth Container Positioned gracefully in space background */}
      <div className="absolute top-12 sm:top-20 right-4 sm:right-12 md:right-24 lg:right-32 scale-75 sm:scale-90 md:scale-100 opacity-60 sm:opacity-85 hover:opacity-100 transition-opacity duration-700">
        <div className="section-banner shadow-2xl">
          {/* Twinkling Curved Stars around Earth */}
          <div className="curved-corner-star" id="star-1">
            <div id="curved-corner-topleft" />
            <div id="curved-corner-topright" />
            <div id="curved-corner-bottomleft" />
            <div id="curved-corner-bottomright" />
          </div>

          <div className="curved-corner-star" id="star-2">
            <div id="curved-corner-topleft" />
            <div id="curved-corner-topright" />
            <div id="curved-corner-bottomleft" />
            <div id="curved-corner-bottomright" />
          </div>

          <div className="curved-corner-star" id="star-3">
            <div id="curved-corner-topleft" />
            <div id="curved-corner-topright" />
            <div id="curved-corner-bottomleft" />
            <div id="curved-corner-bottomright" />
          </div>

          <div className="curved-corner-star" id="star-4">
            <div id="curved-corner-topleft" />
            <div id="curved-corner-topright" />
            <div id="curved-corner-bottomleft" />
            <div id="curved-corner-bottomright" />
          </div>

          <div className="curved-corner-star" id="star-5">
            <div id="curved-corner-topleft" />
            <div id="curved-corner-topright" />
            <div id="curved-corner-bottomleft" />
            <div id="curved-corner-bottomright" />
          </div>

          <div className="curved-corner-star" id="star-6">
            <div id="curved-corner-topleft" />
            <div id="curved-corner-topright" />
            <div id="curved-corner-bottomleft" />
            <div id="curved-corner-bottomright" />
          </div>

          <div className="curved-corner-star" id="star-7">
            <div id="curved-corner-topleft" />
            <div id="curved-corner-topright" />
            <div id="curved-corner-bottomleft" />
            <div id="curved-corner-bottomright" />
          </div>
        </div>
      </div>
    </div>
  );
};
