"use client";

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

export const MobileNav = () => {
  return (
    <div className="h-screen bg-neutral-100">
      <Nav />
    </div>
  );
};

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </>
  );
};

const LinksOverlay = () => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-scroll">
      <h1>Menu</h1>
      <LinksContainer />
    </nav>
  );
};

const LinksContainer = () => {
  return (
    <motion.div className="space-y-6 p-12 pl-4 md:pl-20">
      {LINKS.map((link) => (
        <div key={link.title}>
          <NavLink href={link.href} idx={0}>
            <div className="flex items-center justify-between">
              <p>{link.title}</p>
            </div>
          </NavLink>

          {link.subHeaders && (
            <div className="ml-4 space-y-2 mt-2">
              {link.subHeaders.map((sub) => (
                <NavLink key={sub.title} href={sub.href} idx={0} isSubHeader>
                  {sub.title}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

const NavLink = ({
  children,
  href,
  isSubHeader = false,
  isSubLink = false,
  onClick,
  hasDropdown = false,
}: {
  children: ReactNode;
  href: string;
  idx: number;
  isSubHeader?: boolean;
  isSubLink?: boolean;
  onClick?: () => void;
  hasDropdown?: boolean;
}) => {
  return (
    <motion.a
      href={hasDropdown ? "#" : href}
      onClick={(e) => {
        if (hasDropdown && onClick) {
          e.preventDefault(); // prevent navigation
          onClick();
        }
      }}
      className={`block cursor-pointer  ${isSubLink
          ? "text-base font-normal text-white transition-colors hover:text-[#8C7246] md:text-lg hover:underline"
          : isSubHeader
            ? "text-xl font-medium text-white transition-colors hover:text-[#8C7246] md:text-2xl"
            : "text-2xl font-semibold text-white transition-colors  md:text-3xl"
        }`}
    >
      {children}
      {!isSubLink && !isSubHeader}
    </motion.a>
  );
};

const HamburgerButton = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 16, right: 16 }}
        className={`fixed z-10 rounded-xl -mt-2  
          ${active
            ? "bg-gradient-to-br from-[#D6B072] to-[#B08E5C]"
            : "bg-white/0"
          }`}
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`group fixed right-4 top-2 z-50 h-12 w-12 bg-white/0 transition-all hover:bg-white/20 ${active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
          }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className={`absolute block h-[2px] w-8 bg-primary
            ${active ? "bg-white" : ""}`}
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className={`absolute block h-[2px] w-8 bg-primary
            ${active ? "bg-white" : ""}`}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className={`absolute block h-[2px] w-3 bg-primary
            ${active ? "bg-white" : ""}`}
          style={{ x: "-50%", y: "50%" }}
        />
      </motion.button>
    </>
  );
};

const LINKS = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Group Business",
    href: "#",
    subHeaders: [
      {
        title: "Real Estate Development",
        href: "/real-estate",
      },
      {
        title: "Financial Investment",
        href: "/financial-investment",
      },
      {
        title: "Property Management",
        href: "/property-management",
      },
      {
        title: "Catering & Entertainment",
        href: "/catering-entertainment",
      },
      {
        title: "Architectural Design",
        href: "/architectural-design",
      },
      {
        title: "Cultural Communication",
        href: "/cultural-communication",
      },
      {
        title: "Charity & Public Welfare",
        href: "/charity-public-welfare",
      },
    ],
  },
  {
    title: "Oversea Branches",
    href: "#",
    subHeaders: [
      {
        title: "GC Hong Kong",
        href: "/hongkong",
      },
      {
        title: "GC Japan",
        href: "/japan",
      },
    ],
  },
  {
    title: "Investment Q&A",
    href: "/investmentqa",
  },
  {
    title: "Social Responsibility",
    href: "/socialresponsibility",
  },
];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100vh - 32px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "49px",
    height: "49px",
    transition: {
      delay: 0.75,
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
