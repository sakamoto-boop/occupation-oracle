import { motion } from "framer-motion";

const stars = [
  { id: 1, top: "10%", left: "15%", size: 2, delay: 0 },
  { id: 2, top: "25%", left: "80%", size: 1, delay: 0.5 },
  { id: 3, top: "60%", left: "10%", size: 3, delay: 1 },
  { id: 4, top: "80%", left: "75%", size: 2, delay: 1.5 },
  { id: 5, top: "40%", left: "90%", size: 1, delay: 0.3 },
  { id: 6, top: "15%", left: "60%", size: 2, delay: 0.8 }
];

export default function StarField() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
