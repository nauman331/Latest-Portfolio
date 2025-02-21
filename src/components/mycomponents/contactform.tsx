import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Mail, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };
  return (
    <motion.div
                    className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-200"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-extrabold mb-8 text-center md:text-left text-gray-800">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="relative">
                            <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
                            <Input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C62828] focus:outline-none"
                                required
                            />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} />
                            <Input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C62828] focus:outline-none"
                                required
                            />
                        </div>
                        <div className="relative">
                            <MessageSquare className="absolute left-4 top-3.5 text-gray-400" size={20} />
                            <Textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="pl-12 pt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C62828] focus:outline-none"
                                required
                            />
                        </div>
                        <InteractiveHoverButton
                            type="submit"
                            className="py-3 text-lg font-semibold self-end transition-all duration-300"
                        >
                            Send Message
                        </InteractiveHoverButton>
                    </form>
                </motion.div>

  )
}

export default ContactForm