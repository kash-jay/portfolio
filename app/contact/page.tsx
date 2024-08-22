"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaCheck,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { sendEmail } from "@/utils/send-email";
import { useEffect, useState } from "react";

export type FormData = {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  message: string;
};

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+971543081778",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kashyapa.jayasekera@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Hong Kong (willing and able to relocate anywhere)",
  },
];

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(data: FormData) {
    setLoading(true);
    setMessage(null);
    // sendEmail(data);
    try {
      await sendEmail(data);
      setMessage("Email sent successfully!");
    } catch (err) {
      setMessage("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(message);
  }, [message]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Send me an email</h3>
              <p className="text-white/60">
                Feel free to send me a message about anything through this form!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="First Name"
                  {...register("firstName", { required: true })}
                />
                <Input
                  type="lastname"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <Input
                  type="subject"
                  placeholder="Subject"
                  {...register("subject", { required: true })}
                />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                {...register("message", { required: true })}
              />
              <div className="flex gap-6">
                <Button size="lg" className="max-w-40">
                  Send message
                </Button>
                <div className="flex items-center">
                  {loading ? (
                    <div
                      className="w-6 h-6 rounded-full animate-spin
                    border-2 border-solid border-accent border-t-transparent shadow-md"
                    ></div>
                  ) : (
                    <></>
                  )}
                  {message ? <FaCheck className="text-accent" /> : <></>}
                </div>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent flex rounded-md items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
