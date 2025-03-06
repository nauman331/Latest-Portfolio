import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Mail, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill out all fields!");
            return;
        }

        setLoading(true);
        const serviceId = "nauman3254";
        const templateId = "nauman3254";
        const publicKey = "uF1Avn19LD8NOiuo5";

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: "Muhammad Nauman",
            message: formData.message,
        };

        try {
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            toast.success("Email sent successfully! 😎");
            setFormData({ name: "", email: "", message: "" });
            console.log("Success:", response);
        } catch (error) {
            toast.error("Error sending message, try again! 😥");
            console.error("EmailJS Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <h2 className="text-4xl font-extrabold mb-8 text-center md:text-left text-gray-800">
                Get in Touch
            </h2>
            <form onSubmit={sendEmail} className="flex flex-col gap-6">
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
                    className="py-3 text-lg font-semibold self-end transition-all duration-300 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </InteractiveHoverButton>
            </form>
        </motion.div>
    );
};

export default ContactForm;
