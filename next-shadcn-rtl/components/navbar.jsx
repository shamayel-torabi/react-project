"use client";

import { MenuIcon, XIcon, ChevronDown, FileTextIcon, ImageUpIcon, FileVideo, AudioLines, LightbulbIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const links = [
    { name: "خانه", href: "#home" },
    { name: "سوابق", href: "#what_we_do" },
    { name: "دستاوردها", href: "#last_creation" },
    { name: "سفارش نامه", href: "#our_testimonial" },
    { name: "سوالات متداول", href: "#faq" },
    { name: "خبرنامه", href: "#news_letter" },
    {
      name: "محصولات",
      subLinks: [
        { name: "متن به اسلاید", href: "#products/text-to-slides", icon: FileTextIcon, description: "تبدیل متن به اسلاید" },

        { name: "تصویر به اسلاید", href: "#products/image-to-slides", icon: ImageUpIcon, description: "تبدیل تصویر به اسلاید" },
        { name: "ویدئو به اسلاید", href: "#products/video-to-slides", icon: FileVideo, description: "تبدیل ویدئو به اسلاید" },
        { name: "صدا به اسلاید", href: "#products/audio-to-slides", icon: AudioLines, description: "تبدیل صدا به اسلاید" },
        { name: "ایده به اسلاید", href: "#products/ideas-to-slides", icon: LightbulbIcon, description: "ایجاد اسلاید از ایده شما" },
      ],
    },
  ];

  return (
    <header className="shadow-2xl">
      <nav className="sticky top-0 z-50 flex w-full items-center justify-between dark:bg-white/10 bg-black/10 px-4 py-3.5 backdrop-blur-md md:px-16 lg:px-8">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="logo" className="h-8.5 w-auto" width={205} height={48} />
        </Link>

        <div className="hidden items-center space-x-7 text-gray-800 dark:text-gray-200 md:flex">
          {links.map((link) =>
            link.subLinks ? (
              <div key={link.name} className="group relative" onMouseEnter={() => setOpenDropdown(link.name)} onMouseLeave={() => setOpenDropdown(null)}>
                <div className="flex cursor-pointer items-center gap-1 hover:opacity-60">
                  {link.name}
                  <ChevronDown className={`mt-px size-4 transition-transform duration-200 ${openDropdown === link.name ? "rotate-180" : ""}`} />
                </div>

                <div
                  className={`absolute top-6  inset-x-auto z-40 w-lg rounded-md border border-gray-100 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 p-3 shadow-lg transition-all duration-200 ease-in-out ${openDropdown === link.name ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
                >
                  <p>کاوش در ابزار هوش مصنوعی</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {link.subLinks.map((sub) => (
                      <Link
                        href={sub.href}
                        key={sub.name}
                        className="group/link flex items-center gap-2 rounded-md p-2 transition hover:opacity-60 dark:hover:bg-gray-700"
                      >
                        <div className="w-max gap-1 rounded-md btn p-2">
                          <sub.icon className="size-4.5 text-gray-900 transition duration-300 group-hover/link:scale-110" />
                        </div>
                        <div>
                          <p className="font-medium">{sub.name}</p>
                          <p className="font-light text-gray-500">{sub.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.name} href={link.href} className="transition hover:opacity-60">
                {link.name}
              </Link>
            ),
          )}
          <ThemeToggle />
        </div>
        <div className="hidden md:flex md:items-center">
          <Link href="/login" className="rounded-full btn px-8 py-2.5 font-medium text-gray-800 dark:text-gray-200 transition hover:opacity-60">
            ورود
          </Link>
        </div>

        <button onClick={() => setIsOpen(true)} className="transition active:scale-90 md:hidden">
          <MenuIcon className="size-6.5" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white/20 dark:bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {links.map((link) => (
          <div key={link.name} className="text-center">
            {link.subLinks ? (
              <>
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                  className="flex items-center justify-center gap-1 text-gray-800 dark:bg-gray-200 hover:opacity-60"
                >
                  {link.name}
                  <ChevronDown className={`size-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === link.name && (
                  <div className="mt-2 flex flex-col gap-2 text-left text-sm">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block text-gray-800 dark:text-gray-200  transition hover:opacity-60"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link href={link.href} className="block text-gray-800 dark:text-gray-200 transition hover:opacity-60" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            )}
          </div>
        ))}

        <Link
          href="#!"
          className="rounded-full btn px-8 py-2.5 font-medium text-gray-800 dark:text-gray-200 transition hover:opacity-60"
          onClick={() => setIsOpen(false)}
        >
          ثبت نام
        </Link>

        <button onClick={() => setIsOpen(false)} className="rounded-md btn p-2 text-gray-800 dark:text-gray-200 ring-white active:ring-2">
          <XIcon />
        </button>
      </div>
    </header>
  );
}
