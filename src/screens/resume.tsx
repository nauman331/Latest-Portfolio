import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import cv from "../assets/Nauman_Cv.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { motion } from "motion/react";

const Resume = () => {
    const themecolor = useSelector((state: RootState) => state.theme.theme);
    const docs = [{ uri: cv }];

    return (
        <motion.div className={`min-h-screen flex flex-col items-center p-6 justify-center
        ${themecolor === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
            {/* Header Section */}
            <motion.h3
                className="text-center md:text-3xl text-xl font-extrabold my-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Full-Stack Engineer | MERN & React Native Developer 🚀
            </motion.h3>
            {/* Resume Container */}
            <motion.div
                className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <DocViewer
                    documents={docs}
                    initialActiveDocument={docs[0]}
                    pluginRenderers={DocViewerRenderers}
                    theme={{
                        secondary: themecolor === "dark" ? "#9C27B0" : "#1976D2",
                        tertiary: themecolor === "dark" ? "#9C27B0" : "#D32F2F",
                        textPrimary: themecolor === "dark" ? "#9C27B0" : "#D32F2F",
                        textSecondary: "#5296d8",
                        textTertiary: "#00000099",
                        disableThemeScrollbar: false,
                    }}
                    config={{
                        header: {
                            disableHeader: false,
                        },
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default Resume;
