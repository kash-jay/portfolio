"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";

const text =
  "I was born in France and moved to Sri Lanka at eight years old, where I completed high school. After briefly studying at the Chinese University of Hong Kong, I transferred to New York University Abu Dhabi, earning a Bachelor of Science in Computer Science with a minor in Applied Mathematics. I've developed a solid foundation in software engineering, exploring areas like full-stack development and machine learning. I'm also passionate about basketball, having played on my high school and college teams. Now, I'm excited to apply my skills in software engineering and make an impact in the tech industry.".split(
    " "
  );

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "lots of text",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "lots of text",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "lots of text",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description: "lots of text",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-start py-12 md:py-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="flex flex-col gap-12 justify-between text-justify"
        >
          <div className="text-center text-4xl font-semibold">About Me</div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: 1 + i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                  {el.at(-1) == "." ? (
                    <>
                      <br />
                      <br />
                    </>
                  ) : (
                    ""
                  )}
                </motion.span>
              ))}
            </div>
            <div className="md:max-w-1/2 max-h-fit grid auto-rows-auto gap-3 justify-center">
              <Image
                src="/assets/basketball.jpeg"
                priority
                quality={100}
                width={400}
                height={400}
                alt=""
                className="object-contain"
              />
              <Image
                src="/assets/grad.jpeg"
                priority
                quality={100}
                width={400}
                height={400}
                alt=""
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
