import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { reviews } from "@/utils/exports";
import { motion } from "motion/react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Testinomials = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <section className="container my-28">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="text-4xl mt-28 font-bold text-center mb-14 text-gray-900 tracking-tight"
        aria-label="Testimonials from my Clients"
      >
        My <span className={theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"}>Clients</span>
      </motion.h2>

      <div className="flex w-full items-center justify-around flex-wrap gap-10 mb-20 px-5">
        {[
          { label: "Happy Clients", value: 15 },
          { label: "Projects Completed", value: 20 },
          { label: "Positive Reviews", value: 10 },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-3 flex-col">
            <div className="flex items-center">
              <NumberTicker
                value={item.value}
                className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
                aria-label={item.label}
              />
              <span className="text-5xl font-bold text-black dark:text-white">+</span>
            </div>
            <p className="text-lg font-semibold dark:text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>


      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:15s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}

export default Testinomials;