import React from "react";
import Hero from "./Home/Hero";

export default function Header({ home }) {
  return (
    <section className="landing-hero pt-5">
      <div className="header__bg" />
      <div className="container mx-auto relative">
        <header className="flex items-center">
          <div style={{ height: 54 }} className="pr-5">
            <img
              src={"../assets/images/logopolos.png"}
              alt="logo"
              className="h-full"
            />
          </div>
          <ul className="flex items-center">
            <li>
              <a
                className="text-white hover:text-teal-500 text-lg px-4 py-3"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-teal-500 text-lg px-4 py-3"
                href="/projects.html"
              >
                Project
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-teal-500 text-lg px-4 py-3"
                href="/features.html"
              >
                Fitur
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-teal-500 text-lg px-4 py-3"
                href="/story.html"
              >
                Gallery
              </a>
            </li>
          </ul>
          <ul className="flex ml-auto items-center mt-2">
            <li>
              <a
                href="/daftar"
                className="
              inline-block
              bg-transparent
              border-white border
              hover:bg-white hover:bg-opacity-25
              text-white
              font-light
              w-40
              text-center
              px-6
              py-1
              text-lg
              rounded-full
              mr-4
            "
              >
                Daftar
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="
              inline-block
              bg-transparent
              border-white border
              hover:bg-white hover:bg-opacity-25
              text-white
              font-light
              w-40
              text-center
              px-6
              py-1
              text-lg
              rounded-full
            "
              >
                Login
              </a>
            </li>
          </ul>
        </header>
        {home ? <Hero></Hero> : ""}
      </div>
    </section>
  );
}
