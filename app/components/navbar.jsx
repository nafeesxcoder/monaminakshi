"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";

export default function NavbarDemo() {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About Us",
            link: "/about",
        },
        {
            name: "Property",
            link: "/property",
            // dropdownItems: [
            //     { name: "Full Truckload (FTL)", link: "/services/full-truckload-ftl" },
            //     { name: "Less Truckload (LTL)", link: "/services/less-truckload-ltl" },
            //     { name: "Refrigerated Transport", link: "/services/refrigerated-transport" },
            // ],
        },
        {
            name: "Pages",
            link: "#",
            dropdownItems: [
                { name: "Client Gallery", link: "/clientgallery" },
                { name: "Testimonials", link: "/testimonials" },
            ],
        },
        {
            name: "Contact Us",
            link: "/contactus",
        },
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="container mx-auto fixed inset-x-0 top-0 z-50 h-16 md:h-20 lg:h-24 2xl:h-32 w-full transition-all duration-700">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
                        <NavbarButton href="tel:+15551234567" variant="gradient">Get in Touch <br /> <span className="text-xs font-light">+1 (555) 123-4567</span></NavbarButton>
                        {/* <a href="/contact">
                            <AnimatedFormButton className="w-40 h-12 bg-white/80 rounded-full font-semibold">
                                <div className="flex items-center gap-1 justify-center text-black">
                                    Get a Quote
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </AnimatedFormButton>
                        </a> */}
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                    </MobileNavHeader>

                    <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                        {navItems.map((item, idx) => (
                            <div key={`mobile-link-${idx}`}>
                                <a
                                    href={item.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="relative text-gray block py-2">
                                    <span className="block">{item.name}</span>
                                </a>
                                {item.dropdownItems && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        {item.dropdownItems.map((dropdownItem, dropdownIdx) => (
                                            <a
                                                key={`mobile-dropdown-${idx}-${dropdownIdx}`}
                                                href={dropdownItem.link}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="relative text-gray/80 block py-1 text-sm">
                                                <span className="block">{dropdownItem.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            {/* <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full">
                                Login
                            </NavbarButton> */}
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full rounded-full bg-[linear-gradient(90deg,_#656162_0%,_#B3C1C8_100%)]">
                                Get a Quote
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            {/* <DummyContent /> */}
            {/* Navbar */}
        </div>
    );
}
