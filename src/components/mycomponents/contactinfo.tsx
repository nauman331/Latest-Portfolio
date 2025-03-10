import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ContactInfo = () => {
    const theme = useSelector((state: RootState) => state.theme.theme);

    return (
        <motion.div
            className="w-full max-w-md flex flex-col items-start gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center gap-4 text-gray-500">
                <MapPin size={24} color={theme === "dark" ? "#9C27B0" : "#C62828"} />
                <p>Lahore, Punjab Pakistan</p>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
                <Phone size={24} color={theme === "dark" ? "#9C27B0" : "#C62828"} />
                <a href="tel:+923318388805" target="_blank" rel="noopener noreferrer" className={theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"}>
                    +92 331 83 888 05</a>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
                <Mail size={24} color={theme === "dark" ? "#9C27B0" : "#C62828"} />
                <a href="mailto:nauman33183@gmail.com" target="_blank" rel="noopener noreferrer" className={theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"}>
                    nauman33183@gmail.com</a>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
                <Linkedin size={24} color={theme === "dark" ? "#9C27B0" : "#C62828"} />
                <a href="https://linkedin.com/in/nauman331" target="_blank" rel="noopener noreferrer" className={theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"}>
                    nauman331
                </a>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.960716295626!2d74.28100337462637!3d31.525238874211684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903004a1bf821%3A0x6a91fd904b61077e!2sScheme%20mor%20Allama%20Iqbal%20town%20Lahore%20Pakistan!5e0!3m2!1sen!2s!4v1741594315071!5m2!1sen!2s"
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
