'use client';

import { motion } from 'framer-motion';

const vinePaths = [
  // === LEFT SIDE VINES ===
  // Main thick trunk
  { d: 'M 0 900 C 120 750, 50 600, 180 450 C 280 330, 150 180, 100 0', stroke: '#2e4a30', strokeWidth: 4, delay: 0.2 },
  // Secondary winding branch
  { d: 'M -20 850 C 150 780, 100 550, 250 400 C 350 300, 250 150, 150 -20', stroke: '#3d6b45', strokeWidth: 2.5, delay: 0.5 },
  // Small elegant branches
  { d: 'M 100 680 C 180 650, 220 580, 280 550', stroke: '#4a7c52', strokeWidth: 1.5, delay: 0.8 },
  { d: 'M 180 450 C 250 430, 320 380, 380 320', stroke: '#4a7c52', strokeWidth: 1.5, delay: 1.0 },
  { d: 'M 150 250 C 220 230, 260 180, 290 120', stroke: '#4a7c52', strokeWidth: 1.2, delay: 1.2 },
  { d: 'M 130 100 C 190 90, 220 50, 250 0', stroke: '#4a7c52', strokeWidth: 1, delay: 1.4 },

  // === RIGHT SIDE VINES ===
  // Main thick trunk
  { d: 'M 1440 900 C 1320 750, 1390 600, 1260 450 C 1160 330, 1290 180, 1340 0', stroke: '#2e4a30', strokeWidth: 4, delay: 0.3 },
  // Secondary winding branch
  { d: 'M 1460 850 C 1290 780, 1340 550, 1190 400 C 1090 300, 1190 150, 1290 -20', stroke: '#3d6b45', strokeWidth: 2.5, delay: 0.6 },
  // Small elegant branches
  { d: 'M 1340 680 C 1260 650, 1220 580, 1160 550', stroke: '#4a7c52', strokeWidth: 1.5, delay: 0.9 },
  { d: 'M 1260 450 C 1190 430, 1120 380, 1060 320', stroke: '#4a7c52', strokeWidth: 1.5, delay: 1.1 },
  { d: 'M 1290 250 C 1220 230, 1180 180, 1150 120', stroke: '#4a7c52', strokeWidth: 1.2, delay: 1.3 },
  { d: 'M 1310 100 C 1250 90, 1220 50, 1190 0', stroke: '#4a7c52', strokeWidth: 1, delay: 1.5 },

  // === GOLD ACCENT VEINS ===
  { d: 'M 280 550 C 300 540, 310 520, 320 500', stroke: '#c9a84c', strokeWidth: 0.8, delay: 1.5 },
  { d: 'M 380 320 C 400 300, 420 280, 430 250', stroke: '#c9a84c', strokeWidth: 0.8, delay: 1.7 },
  { d: 'M 1160 550 C 1140 540, 1130 520, 1120 500', stroke: '#c9a84c', strokeWidth: 0.8, delay: 1.6 },
  { d: 'M 1060 320 C 1040 300, 1020 280, 1010 250', stroke: '#c9a84c', strokeWidth: 0.8, delay: 1.8 },
];

// Reusable leaf shape function to make it look like a real leaf instead of a simple ellipse
const LeafPath = ({ d, fill, opacity, rotate, cx, cy, delay }: any) => (
  <motion.path
    d={d}
    fill={fill}
    opacity={opacity}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.8, delay: delay, ease: [0.34, 1.56, 0.64, 1] }}
    style={{ transformOrigin: `${cx}px ${cy}px`, transform: `rotate(${rotate}deg)` }}
  />
);

const leafShapes = [
  // Left side
  { cx: 280, cy: 550, rotate: -35, delay: 2.0, fill: '#3d6b45', d: 'M 280 550 C 270 530, 290 510, 305 525 C 315 535, 300 560, 280 550 Z' },
  { cx: 320, cy: 500, rotate: 10, delay: 2.1, fill: '#4a7c52', d: 'M 320 500 C 310 480, 330 460, 345 475 C 355 485, 340 510, 320 500 Z' },
  { cx: 380, cy: 320, rotate: -25, delay: 2.2, fill: '#3d6b45', d: 'M 380 320 C 370 300, 390 280, 405 295 C 415 305, 400 330, 380 320 Z' },
  { cx: 290, cy: 120, rotate: -50, delay: 2.4, fill: '#4a7c52', d: 'M 290 120 C 280 100, 300 80, 315 95 C 325 105, 310 130, 290 120 Z' },
  { cx: 180, cy: 450, rotate: -15, delay: 1.9, fill: '#2e4a30', d: 'M 180 450 C 160 420, 190 390, 210 415 C 225 430, 205 465, 180 450 Z' },

  // Right side
  { cx: 1160, cy: 550, rotate: 35, delay: 2.1, fill: '#3d6b45', d: 'M 1160 550 C 1170 530, 1150 510, 1135 525 C 1125 535, 1140 560, 1160 550 Z' },
  { cx: 1120, cy: 500, rotate: -10, delay: 2.2, fill: '#4a7c52', d: 'M 1120 500 C 1130 480, 1110 460, 1095 475 C 1085 485, 1100 510, 1120 500 Z' },
  { cx: 1060, cy: 320, rotate: 25, delay: 2.3, fill: '#3d6b45', d: 'M 1060 320 C 1070 300, 1050 280, 1035 295 C 1025 305, 1040 330, 1060 320 Z' },
  { cx: 1150, cy: 120, rotate: 50, delay: 2.5, fill: '#4a7c52', d: 'M 1150 120 C 1160 100, 1140 80, 1125 95 C 1115 105, 1130 130, 1150 120 Z' },
  { cx: 1260, cy: 450, rotate: 15, delay: 2.0, fill: '#2e4a30', d: 'M 1260 450 C 1280 420, 1250 390, 1230 415 C 1215 430, 1235 465, 1260 450 Z' },
];

export default function HeroVines() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {vinePaths.map((vine, i) => (
        <motion.path
          key={`vine-${i}`}
          d={vine.d}
          fill="none"
          stroke={vine.stroke}
          strokeWidth={vine.strokeWidth}
          strokeLinecap="round"
          filter={vine.strokeWidth >= 2 ? 'url(#glow)' : undefined}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: vine.stroke === '#c9a84c' ? 0.6 : 0.85 }}
          transition={{ duration: 3, delay: vine.delay, ease: 'easeInOut' }}
        />
      ))}

      {leafShapes.map((leaf, i) => (
        <LeafPath key={`leaf-${i}`} {...leaf} opacity={0.85} />
      ))}
    </svg>
  );
}
