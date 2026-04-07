import { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}

export function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-white/10">
      <button
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-white/90">{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-white/50 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-white/60 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
