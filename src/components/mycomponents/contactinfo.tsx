import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
    return (
        <motion.div
            className="w-full max-w-md flex flex-col items-start gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center gap-4 text-gray-700">
                <MapPin size={24} color="#C62828" />
                <p>123 Street, City, Country</p>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
                <Phone size={24} color="#C62828" />
                <p>+123 456 7890</p>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
                <Mail size={24} color="#C62828" />
                <p>email@example.com</p>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
                <Linkedin size={24} color="#C62828" />
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-[#C62828]">
                    LinkedIn Profile
                </a>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9556510153207!3d-37.81731397975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfc9ed8f5%3A0x5030bfbca7b32a0!2sMelbourne%2C+Australia!5e0!3m2!1sen!2sus!4v1630483173423!5m2!1sen!2sus"
                width="100%"
                height="220"
                className="rounded-lg border border-gray-300 shadow-lg"
                allowFullScreen={true}
                loading="lazy"
            ></iframe>
        </motion.div>
    )
}

export default ContactInfo