"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.75, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.75, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-[50%] scale-90"
          ></Image>
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 0.95 }}
          transition={{
            duration: 0.5,
          }}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#14FFEC"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0}}
            animate={{
              pathLength: 1.01,
              opacity: 0.75,
              transition: {
                pathLength: {
                  delay: 1.5,
                  type: "spring",
                  duration: 2.5,
                  bounce: 0,
                },
                opacity: {
                  delay: 1.5,
                  duration: 0.01,
                },
              },
            }}
            transform="rotate(-90 253 253)"
          />
          {/* <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#14FFEC"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          /> */}
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
