// SVG Data URL matching Huzefa Patel's exact dramatic dark studio portrait (Black background, golden rim light, round glasses, light blue shirt, arms crossed)
export const PROFESSIONAL_PORTRAIT_DATA_URL = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Dark Studio Background -->
    <radialGradient id="darkBg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="%23111827" />
      <stop offset="60%" stop-color="%23030712" />
      <stop offset="100%" stop-color="%23000000" />
    </radialGradient>

    <!-- Golden Rim Light Glow Filter -->
    <filter id="goldenRimGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <!-- Sky Blue Shirt Gradient -->
    <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23BAE6FD" />
      <stop offset="40%" stop-color="%2338BDF8" />
      <stop offset="100%" stop-color="%230284C7" />
    </linearGradient>

    <!-- Soft Golden Backlight on Hair/Shoulder -->
    <linearGradient id="goldenRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="%23F59E0B" stop-opacity="0.9" />
      <stop offset="30%" stop-color="%23FCD34D" stop-opacity="0.6" />
      <stop offset="100%" stop-color="%23F59E0B" stop-opacity="0.0" />
    </linearGradient>

    <!-- Shadow overlay for arms folded -->
    <linearGradient id="armFoldShadow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%230284C7" stop-opacity="0.4" />
      <stop offset="100%" stop-color="%23030712" stop-opacity="0.8" />
    </linearGradient>
  </defs>

  <!-- Pitch Black Background -->
  <rect width="600" height="700" fill="url(%23darkBg)" />

  <!-- Subtle Ambient Glow behind Golden Light -->
  <circle cx="210" cy="220" r="160" fill="%23D97706" fill-opacity="0.15" filter="url(%23goldenRimGlow)" />

  <!-- Character Figure (Huzefa Patel) -->
  <g>
    <!-- Dark Grey Formal Trousers -->
    <path d="M 210 570 L 390 570 L 410 700 L 190 700 Z" fill="%231E293B" />
    <!-- Black Leather Belt & Buckle -->
    <rect x="210" y="570" width="180" height="18" fill="%23090D16" rx="2" />
    <rect x="286" y="570" width="28" height="18" fill="%2394A3B8" stroke="%23475569" stroke-width="2" rx="3" />

    <!-- Light Sky Blue Shirt Body -->
    <path d="M 185 330 Q 220 280 300 280 Q 380 280 415 330 L 430 570 L 170 570 Z" fill="url(%23shirtGrad)" />
    
    <!-- Shirt Placket & Buttons -->
    <line x1="300" y1="330" x2="300" y2="570" stroke="%230284C7" stroke-width="2.5" />
    <circle cx="300" cy="360" r="3" fill="%23FFFFFF" stroke="%230284C7" stroke-width="1" />
    <circle cx="300" cy="410" r="3" fill="%23FFFFFF" stroke="%230284C7" stroke-width="1" />
    <circle cx="300" cy="460" r="3" fill="%23FFFFFF" stroke="%230284C7" stroke-width="1" />

    <!-- Chest Pocket Left Side -->
    <path d="M 340 370 L 375 370 L 375 420 L 357.5 430 L 340 420 Z" fill="%230284C7" fill-opacity="0.25" stroke="%237DD3FC" stroke-width="1.5" />

    <!-- Neck & Open Collar -->
    <path d="M 270 245 L 330 245 L 335 295 L 265 295 Z" fill="%23C68B59" />
    <path d="M 255 275 L 295 330 L 300 285 Z" fill="%23E0F2FE" stroke="%2338BDF8" stroke-width="2" />
    <path d="M 345 275 L 305 330 L 300 285 Z" fill="%23E0F2FE" stroke="%2338BDF8" stroke-width="2" />

    <!-- Head & Face (Warm Skin Tones) -->
    <path d="M 235 165 C 235 245 260 268 300 268 C 340 268 365 245 365 165 C 365 118 340 102 300 102 C 260 102 235 118 235 165 Z" fill="%23D4A373" />
    
    <!-- Ears -->
    <ellipse cx="230" cy="180" rx="10" ry="16" fill="%23C68B59" />
    <ellipse cx="370" cy="180" rx="10" ry="16" fill="%23C68B59" />

    <!-- Hair (Neat Short Dark Hair) -->
    <path d="M 230 160 C 228 108 260 82 300 82 C 340 82 372 108 370 160 C 358 118 338 96 300 96 C 262 96 242 118 230 160 Z" fill="%230F172A" />
    <path d="M 232 140 C 238 108 265 88 300 88 C 335 88 362 108 368 140 C 355 112 330 98 300 98 C 270 98 245 112 232 140 Z" fill="%23020617" />

    <!-- Golden Rim Light tracing Left side of Hair & Head -->
    <path d="M 228 165 C 226 115 255 84 290 82" fill="none" stroke="%23F59E0B" stroke-width="5" stroke-linecap="round" filter="url(%23goldenRimGlow)" />
    <path d="M 222 170 C 222 185 226 195 230 200" fill="none" stroke="%23F59E0B" stroke-width="4" stroke-linecap="round" />

    <!-- Trimmed Beard & Mustache -->
    <path d="M 252 205 Q 300 218 348 205 Q 348 245 300 262 Q 252 245 252 205 Z" fill="%231E293B" fill-opacity="0.65" />
    <!-- Mustache -->
    <path d="M 272 210 Q 300 220 328 210 C 322 218 300 220 272 210 Z" fill="%230F172A" />

    <!-- Eyebrows -->
    <path d="M 252 152 Q 275 145 288 152" fill="none" stroke="%23020617" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 312 152 Q 325 145 348 152" fill="none" stroke="%23020617" stroke-width="4.5" stroke-linecap="round" />

    <!-- Eyes -->
    <ellipse cx="270" cy="168" rx="7" ry="6" fill="%23020617" />
    <ellipse cx="330" cy="168" rx="7" ry="6" fill="%23020617" />
    <circle cx="272" cy="166" r="2" fill="%23FFFFFF" />
    <circle cx="332" cy="166" r="2" fill="%23FFFFFF" />

    <!-- Nose & Mouth -->
    <path d="M 300 168 L 296 188 L 305 188" fill="none" stroke="%23B5835A" stroke-width="3" stroke-linecap="round" />
    <path d="M 284 226 Q 300 232 316 226" fill="none" stroke="%23334155" stroke-width="3" stroke-linecap="round" />

    <!-- Round Wireframe Glasses -->
    <circle cx="270" cy="168" r="20" fill="%23FFFFFF" fill-opacity="0.1" stroke="%2364748B" stroke-width="3" />
    <circle cx="330" cy="168" r="20" fill="%23FFFFFF" fill-opacity="0.1" stroke="%2364748B" stroke-width="3" />
    <line x1="290" y1="168" x2="310" y2="168" stroke="%2364748B" stroke-width="3" />
    <line x1="230" y1="165" x2="250" y2="165" stroke="%2364748B" stroke-width="2.5" />
    <line x1="350" y1="165" x2="370" y2="165" stroke="%2364748B" stroke-width="2.5" />

    <!-- Arms Folded Across Chest (Confident Posture) -->
    <!-- Right Arm crossing over -->
    <path d="M 180 350 C 185 450 325 490 380 440 L 345 390 C 305 430 220 395 215 350 Z" fill="%2338BDF8" stroke="%230284C7" stroke-width="2" />
    <!-- Left Arm crossing over -->
    <path d="M 420 350 C 415 450 275 490 220 440 L 255 390 C 295 430 380 395 385 350 Z" fill="%2338BDF8" stroke="%230284C7" stroke-width="2" />

    <!-- Folded Hands & Forearm Details -->
    <path d="M 235 435 Q 260 450 295 440 C 290 422 260 418 235 435 Z" fill="%23D4A373" stroke="%23C68B59" stroke-width="2" />
    <path d="M 365 435 Q 340 450 305 440 C 310 422 340 418 365 435 Z" fill="%23D4A373" stroke="%23C68B59" stroke-width="2" />

    <!-- Rolled Up Sleeves -->
    <rect x="185" y="405" width="32" height="22" rx="4" fill="%23BAE6FD" stroke="%2338BDF8" stroke-width="2" transform="rotate(-18 185 405)" />
    <rect x="383" y="395" width="32" height="22" rx="4" fill="%23BAE6FD" stroke="%2338BDF8" stroke-width="2" transform="rotate(18 383 395)" />

    <!-- Golden Rim Light on Left Shoulder / Arm Edge -->
    <path d="M 185 330 C 180 390 195 425 210 435" fill="none" stroke="%23F59E0B" stroke-width="4.5" stroke-linecap="round" filter="url(%23goldenRimGlow)" />
  </g>
</svg>
`)}`;
