import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import cv from "../assets/Nauman_Cv.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useMemo } from "react";

const Resume = () => {
    const themecolor = useSelector((state: RootState) => state.theme.theme);
    const docs = useMemo(() => [{ uri: cv }], []);

    return (
        <motion.div
            className={`min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300 
            ${themecolor === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
        >
            {/* Download Resume Button */}
            <div className="flex justify-center mt-6">
                <a
                    href={cv}
                    download="Nauman_Cv.pdf"
                    className={`flex items-center gap-2 font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
                    ${themecolor === "dark"
                            ? "bg-gradient-to-r from-[#9C27B0] to-[#1A237E] hover:from-[#C62828] hover:to-[#9C27B0] text-white"
                            : "bg-gradient-to-r from-[#C62828] to-[#9C27B0] hover:from-[#9C27B0] hover:to-[#1A237E] text-white"}`}
                >
                    <Download size={20} /> Download Resume
                </a>
            </div>

            {/* Resume Viewer */}
            <motion.div
                className="relative w-full max-w-4xl mt-6 bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 sm:p-6 overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Scrollable PDF Viewer */}
                <div className="relative w-full h-[550px] sm:h-[700px] overflow-y-auto border-2 border-gray-300 dark:border-gray-600 rounded-lg shadow-inner">
                    <DocViewer
                        documents={docs}
                        initialActiveDocument={docs[0]}
                        pluginRenderers={DocViewerRenderers}
                        theme={{
                            secondary: themecolor === "dark" ? "#9C27B0" : "#1976D2",
                            tertiary: themecolor === "dark" ? "#9C27B0" : "#D32F2F",
                            textPrimary: "#212121",
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
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Resume;
