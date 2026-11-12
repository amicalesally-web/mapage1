import { motion } from "framer-motion"

export const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Subtle moving grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #a3e635 1px, transparent 1px),
            linear-gradient(to bottom, #a3e635 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "64px 64px"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35,
        }}
      />

      {/* Gentle floating glow orbs in the background */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#a3e635]/[0.04] blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#a3e635]/[0.03] blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
      />

      {/* Faint geometric accents */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" aria-hidden="true">
        <defs>
          <pattern id="dot-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#a3e635" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>

      {/* Vignette fade to dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090a0d]/60 to-[#090a0d]" />
    </div>
  )
}
