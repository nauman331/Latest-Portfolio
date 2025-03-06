"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/mycomponents/contactform";
import ContactInfo from "@/components/mycomponents/contactinfo";

const Contact = () => {
  return (
    <motion.section
      className="container w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="text-4xl mt-28 font-bold text-center mb-14 text-gray-900 tracking-tight"
        aria-label="Testimonials from my Clients"
      >
        My <span className="text-[#C62828]">Contacts</span>
      </motion.h2>


      {/* Contact Section Layout */}
      <motion.div
        className="px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-14 w-full"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }, // Stagger effect
          },
        }}
        
      >
        {/* Contact Form with Fixed Width */}
        <motion.div
          className="w-full md:w-1/2 flex-grow"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.02 }}
          
        >
          <ContactForm />
        </motion.div>

        {/* Contact Info with Fixed Width */}
        <motion.div
          className="w-full md:w-1/2 flex-grow"
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <ContactInfo />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
