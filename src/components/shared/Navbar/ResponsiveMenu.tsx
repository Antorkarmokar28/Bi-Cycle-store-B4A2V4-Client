/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "framer-motion";
import { MenuItems } from "./MenuItems";
const ResponsiveMenu = ({ openMenu }: any) => {
  return (
    <AnimatePresence mode="wait">
      {openMenu && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary py-10 m-6 rounded-3xl text-white">
            <ul className="flex flex-col justify-center items-center gap-10">
              {MenuItems.map((item) => {
                return (
                  <li key={item?.id}>
                    <a href={item?.link}>{item?.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
