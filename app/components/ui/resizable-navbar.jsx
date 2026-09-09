/* eslint-disable @next/next/no-img-element */
"use client";;
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";


export const Navbar = ({
    children,
    className
}) => {
    const ref = useRef(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
            className={cn("sticky inset-x-0 z-40 max-w-6xl mx-auto", className)}>
            {React.Children.map(children, (child) =>
                React.isValidElement(child) ? React.cloneElement(child, { visible }) : child,
            )}
        </motion.div>
    );
};

export const NavBody = ({
    children,
    className,
    visible
}) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "40%" : "100%",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: "900px",
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-6xl flex-row items-center justify-between self-start rounded-full bg-transparent lg:flex",
                visible && "bg-white/80 px-4",
                className
            )}>
            {/* Pass visible prop to children of NavBody */}
            {React.Children.map(children, (child) =>
                React.isValidElement(child) ? React.cloneElement(child, { visible }) : child,
            )}
        </motion.div>
    );
};

export const NavItems = ({
    items,
    className,
    onItemClick,
    visible = false
}) => {
    const [hovered, setHovered] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(null)

    return (
        <motion.div
            onMouseLeave={() => {
                setHovered(null)
                setDropdownOpen(null)
            }}
            className={cn(
                `absolute inset-0 hidden flex-1 flex-row items-center justify-center text-sm font-medium text-white transition duration-200 hover:text-black lg:flex ${visible ? 'space-x-0' : 'space-x-2 lg:space-x-2'}`,
                className
            )}>
            {items.map((item, idx) => (
                <>
                    <a
                        onMouseEnter={() => {
                            setHovered(idx)
                            if (item.dropdownItems) {
                                setDropdownOpen(idx)
                            }
                        }}
                        onMouseLeave={() => {
                            if (!item.dropdownItems) {
                                setDropdownOpen(null)
                            }
                        }}
                        onClick={onItemClick}
                        className={`relative px-4 py-2 flex items-center gap-1 transition-colors duration-300 ${
                            visible 
                                ? (hovered === idx ? 'text-white' : 'text-black')
                                : (hovered === idx ? 'text-black' : 'text-white')
                        }`}
                        key={`link-${idx}`}
                        href={item.link}>
                        {hovered === idx && (
                            <motion.div
                                layoutId="hovered"
                                className="absolute inset-0 h-full w-full rounded-full bg-[#b3c1c8]" />
                        )}
                        <span className="relative z-20">{item.name}</span>
                        {item.dropdownItems && (
                            <svg className="relative z-20 w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        )}

                        {item.dropdownItems && dropdownOpen === idx && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-gray-200 dark:border-neutral-700 py-2 z-50"
                            >
                                {item.dropdownItems.map((dropdownItem, dropdownIdx) => (
                                    <a
                                        key={`dropdown-${idx}-${dropdownIdx}`}
                                        href={dropdownItem.link}
                                        className="block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                                        onClick={onItemClick}
                                    >
                                        {dropdownItem.name}
                                    </a>
                                ))}
                            </motion.div>
                        )}
                    </a>
                </>
            ))}
        </motion.div>
    );
};

export const MobileNav = ({
    children,
    className,
    visible
}) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "90%" : "100%",
                paddingRight: visible ? "12px" : "0px",
                paddingLeft: visible ? "12px" : "0px",
                borderRadius: visible ? "4px" : "2rem",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
                visible && "bg-white/80",
                className
            )}>
            {/* Pass visible prop to children of MobileNav */}
            {React.Children.map(children, (child) =>
                React.isValidElement(child) ? React.cloneElement(child, { visible }) : child,
            )}
        </motion.div>
    );
};

export const MobileNavHeader = ({ children, className, visible }) => {
    return (
        <div
            className={cn("flex w-full flex-row items-center justify-between", className)}>
            {/* Pass visible prop to children of MobileNavHeader */}
            {React.Children.map(children, (child) =>
                React.isValidElement(child) ? React.cloneElement(child, { visible }) : child,
            )}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onClose
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        "absolute inset-x-0 top-full mt-2 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                        className
                    )}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick
}) => {
    return isOpen ? (
        <IconX className="text-black" onClick={onClick} />
    ) : (
        <IconMenu2 className="text-black" onClick={onClick} />
    );
};

export const NavbarLogo = ({ visible = false }) => {
    console.log("Logo visible state:", visible) // Debug line

    return (
        <a href="/" className="relative z-20 flex items-center space-x-2 px-2 text-sm font-normal text-black">
            {visible ? (
                // Scrolled state - small logo
                <img
                    className="h-12 md:h-16 lg:h-20 w-auto transition-all duration-300"
                    src="/logo.png"
                    alt="Monameenakshi Logo"
                    width={500}
                    height={500}
                />
            ) : (
                // Normal state - big logo
                <img
                    className="h-16 md:h-20 lg:h-24 w-auto transition-all duration-300"
                    src="/logo.png"
                    alt="Monameenakshi Logo"
                    width={500}
                    height={500}
                />
            )}
        </a>
    )
}

export const NavbarButton = ({
    href,
    as: Tag = "a",
    children,
    className,
    variant = "primary",
    ...props
}) => {
    const baseStyles =
        "px-8 py-2 rounded-full bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

    const variantStyles = {
        primary:
            "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
        secondary: "bg-transparent shadow-none",
        dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
        gradient:
            "bg-[linear-gradient(90deg,_#656162_0%,_#B3C1C8_100%)] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
    };

    return (
        <Tag
            href={href || undefined}
            className={cn(baseStyles, variantStyles[variant], className)}
            {...props}>
            {children}
        </Tag>
    );
};
