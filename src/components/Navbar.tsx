import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { content } from '../content';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(false);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <motion.button
        className="fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2 hover:bg-white/60 transition-colors"
        onClick={() => setShowMenu(!showMenu)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu size={34} />
      </motion.button>

      <AnimatePresence>
        {showMenu && (
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-10 z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-navy-900"
          >
            {nav.map((item) => {
              const sectionId = item.link.replace('#', '');
              return (
                <motion.button
                  key={item.link}
                  onClick={() => scrollToSection(sectionId)}
                  className={`text-xl p-2.5 rounded-full transition-colors ${
                    activeSection === sectionId ? "bg-navy-900 text-white" : "hover:bg-slate-300/50"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon size={24} />
                </motion.button>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;