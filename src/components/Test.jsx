import React from "react";

export default function Test() {
  return (
    <div>
      <div className="landing-page">
        <section className="landing-hero pt-5">
          <div className="header__bg" />
          <div className="container mx-auto relative">
            <header className="flex items-center">
              <div style={{ height: 54 }} className="pr-5">
                <img src="/logo.svg" alt="logo" className="h-full" />
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
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-teal-500 text-lg px-4 py-3"
                    href="/story.html"
                  >
                    Success Stories
                  </a>
                </li>
              </ul>
              <ul className="flex ml-auto items-center mt-2">
                <li>
                  <a
                    href="/register.html"
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
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href="/login.html"
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
                    My Account
                  </a>
                </li>
              </ul>
            </header>
            <div className="flex items-center pt-10 px-5 md:px-0">
              <div className="w-1/2">
                <h1 className="text-4xl text-white mb-5">
                  We helps <u className="hero-underline">startup</u> to <br />
                  getting started &amp;{" "}
                  <u className="hero-underline">funding</u> <br />
                  their truly needs
                </h1>
                <p className="text-white text-xl font-light mb-8">
                  Fund the best idea to become <br />a real product and be the
                  contributor
                </p>
                <button
                  className="
            block
            bg-blue-600
            hover:bg-green-button
            text-white
            font-semibold
            px-12
            py-3
            text-xl
            rounded-full
          "
                >
                  Find a Project
                </button>
              </div>
              <div className="w-1/2 flex justify-center">
                <img src="/hero-image@2x.png" alt="crowdfunding project" />
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <div className="flex justify-between items-center mb-10">
            <div className="w-auto">
              <h2 className="text-3xl text-gray-900 mb-8">
                Only 3 steps to execute <br />
                your bright ideas
              </h2>
            </div>
          </div>
          <div className="flex">
            <div className="w-full px-56 mb-5">
              <img src="/line-step.svg" alt className="w-full" />
            </div>
          </div>
          <div className="flex justify-between items-center text-center">
            <div className="w-1/3">
              <figure className="flex justify-center items-center">
                <img src="/step-1-illustration.svg" alt className="h-30 mb-8" />
              </figure>
              <div className="step-content">
                <h3 className="font-medium">Sign Up</h3>
                <p className="font-light">
                  Sign Up account and start <br />
                  funding project
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <figure className="flex justify-center items-center -mt-24">
                <img src="/step-2-illustration.svg" alt className="h-30 mb-8" />
              </figure>
              <div className="step-content">
                <h3 className="font-medium">Open Project</h3>
                <p className="font-light">
                  Choose some project idea, <br />
                  and start funding
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <figure className="flex justify-center items-center -mt-48">
                <img src="/step-3-illustration.svg" alt className="h-30 mb-8" />
              </figure>
              <div className="step-content">
                <h3 className="font-medium">Execute</h3>
                <p className="font-light">
                  Time to makes dream <br />
                  comes true
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <div className="flex justify-between items-center">
            <div className="w-auto">
              <h2 className="text-3xl text-gray-900 mb-8">
                New projects you can <br />
                taken care of
              </h2>
            </div>
            <div className="w-auto mt-5">
              <a
                className="text-gray-900 hover:underline text-md font-medium"
                href
              >
                View All
              </a>
            </div>
          </div>
          <div className="flex mt-3 -mx-6">
            <div
              className="
        card-project
        w-1/3
        mx-6
        my-4
        p-5
        border border-gray-500
        rounded-20
      "
            >
              <div className="item">
                <figure className="item-image">
                  <img
                    src="/project-thumbnail-1.jpg"
                    alt
                    className="rounded-20 w-full"
                  />
                </figure>
                <div className="item-meta">
                  <h4 className="text-3xl font-medium text-gray-900 mt-5">
                    Robotic Hand
                  </h4>
                  <p className="text-md font-light text-gray-900">
                    Creating robotic hand for better movement
                  </p>
                  <div className="relative pt-4 progress-bar">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                      <div
                        style={{ width: "20%" }}
                        className="
                  shadow-none
                  flex flex-col
                  text-center
                  whitespace-nowrap
                  text-white
                  justify-center
                  bg-purple-progress
                  progress-striped
                "
                      />
                    </div>
                  </div>
                  <div className="flex progress-info">
                    <div>20%</div>
                    <div className="ml-auto font-semibold">Rp 100.000.000</div>
                  </div>
                </div>
                <a
                  href="/projects.html"
                  className="
            text-center
            mt-5
            button-cta
            block
            w-full
            bg-blue-600
            hover:bg-green-button
            text-white
            font-semibold
            px-6
            py-2
            text-lg
            rounded-full
          "
                >
                  Fund Now
                </a>
              </div>
            </div>
            <div
              className="
        card-project
        w-1/3
        mx-6
        my-4
        p-5
        border border-gray-500
        rounded-20
      "
            >
              <div className="item">
                <figure className="item-image">
                  <img
                    src="/project-thumbnail-2.jpg"
                    alt
                    className="rounded-20 w-full"
                  />
                </figure>
                <div className="item-meta">
                  <h4 className="text-3xl font-medium text-gray-900 mt-5">
                    Auto Pilot Drone
                  </h4>
                  <p className="text-md font-light text-gray-900">
                    Self driving drone, no worry to drive again
                  </p>
                  <div className="relative pt-4 progress-bar">
                    <div
                      className="
                overflow-hidden
                h-2
                mb-4
                text-xs
                flex
                rounded
                bg-gray-200
                h-3
                rounded-lg
              "
                    >
                      <div
                        style={{ width: "45%" }}
                        className="
                  shadow-none
                  flex flex-col
                  text-center
                  whitespace-nowrap
                  text-white
                  justify-center
                  bg-purple-progress
                  progress-striped
                "
                      />
                    </div>
                  </div>
                  <div className="flex progress-info">
                    <div>45%</div>
                    <div className="ml-auto font-semibold">Rp 80.000.000</div>
                  </div>
                  <a
                    href="/projects.html"
                    className="
              text-center
              mt-5
              button-cta
              block
              w-full
              bg-blue-600
              hover:bg-green-button
              text-white
              font-semibold
              px-6
              py-2
              text-lg
              rounded-full
            "
                  >
                    Fund Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="
        card-project
        w-1/3
        mx-6
        my-4
        p-5
        border border-gray-500
        rounded-20
      "
            >
              <div className="item">
                <figure className="item-image">
                  <img
                    src="/project-thumbnail-3.jpg"
                    alt
                    className="rounded-20 w-full"
                  />
                </figure>
                <div className="item-meta">
                  <h4 className="text-3xl font-medium text-gray-900 mt-5">
                    Wireboard
                  </h4>
                  <p className="text-md font-light text-gray-900">
                    The new era of mechanical keyboard
                  </p>
                  <div className="relative pt-4 progress-bar">
                    <div
                      className="
                overflow-hidden
                h-2
                mb-4
                text-xs
                flex
                rounded
                bg-gray-200
                h-3
                rounded-lg
              "
                    >
                      <div
                        style={{ width: "80%" }}
                        className="
                  shadow-none
                  flex flex-col
                  text-center
                  whitespace-nowrap
                  text-white
                  justify-center
                  bg-purple-progress
                  progress-striped
                "
                      />
                    </div>
                  </div>
                  <div className="flex progress-info">
                    <div>80%</div>
                    <div className="ml-auto font-semibold">Rp 40.000.000</div>
                  </div>
                  <a
                    href="/projects.html"
                    className="
              text-center
              mt-5
              button-cta
              block
              w-full
              bg-blue-600
              hover:bg-green-button
              text-white
              font-semibold
              px-6
              py-2
              text-lg
              rounded-full
            "
                  >
                    Fund Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-3 -mx-6">
            <div
              className="
        card-project
        w-1/3
        mx-6
        my-4
        p-5
        border border-gray-500
        rounded-20
      "
            >
              <div className="item">
                <figure className="item-image">
                  <img
                    src="/project-thumbnail-4.jpg"
                    alt
                    className="rounded-20 w-full"
                  />
                </figure>
                <div className="item-meta">
                  <h4 className="text-3xl font-medium text-gray-900 mt-5">
                    Wireless Earphone
                  </h4>
                  <p className="text-md font-light text-gray-900">
                    Just pair to phone and ready to set
                  </p>
                  <div className="relative pt-4 progress-bar">
                    <div
                      className="
                overflow-hidden
                h-2
                mb-4
                text-xs
                flex
                rounded
                bg-gray-200
                h-3
                rounded-lg
              "
                    >
                      <div
                        style={{ width: "45%" }}
                        className="
                  shadow-none
                  flex flex-col
                  text-center
                  whitespace-nowrap
                  text-white
                  justify-center
                  bg-purple-progress
                  progress-striped
                "
                      />
                    </div>
                  </div>
                  <div className="flex progress-info">
                    <div>45%</div>
                    <div className="ml-auto font-semibold">Rp 55.000.000</div>
                  </div>
                  <a
                    href="/projects.html"
                    className="
              text-center
              mt-5
              button-cta
              block
              w-full
              bg-blue-600
              hover:bg-green-button
              text-white
              font-semibold
              px-6
              py-2
              text-lg
              rounded-full
            "
                  >
                    Fund Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="
        card-project
        w-1/3
        mx-6
        my-4
        p-5
        border border-gray-500
        rounded-20
      "
            >
              <div className="item">
                <figure className="item-image">
                  <img
                    src="/project-thumbnail-5.jpg"
                    alt
                    className="rounded-20 w-full"
                  />
                </figure>
                <div className="item-meta">
                  <h4 className="text-3xl font-medium text-gray-900 mt-5">
                    Auto Heater
                  </h4>
                  <p className="text-md font-light text-gray-900">
                    Make the room keep warm automatically
                  </p>
                  <div className="relative pt-4 progress-bar">
                    <div
                      className="
                overflow-hidden
                h-2
                mb-4
                text-xs
                flex
                rounded
                bg-gray-200
                h-3
                rounded-lg
              "
                    >
                      <div
                        style={{ width: "70%" }}
                        className="
                  shadow-none
                  flex flex-col
                  text-center
                  whitespace-nowrap
                  text-white
                  justify-center
                  bg-purple-progress
                  progress-striped
                "
                      />
                    </div>
                  </div>
                  <div className="flex progress-info">
                    <div>70%</div>
                    <div className="ml-auto font-semibold">Rp 75.000.000</div>
                  </div>
                  <a
                    href="/projects.html"
                    className="
              text-center
              mt-5
              button-cta
              block
              w-full
              bg-blue-600
              hover:bg-green-button
              text-white
              font-semibold
              px-6
              py-2
              text-lg
              rounded-full
            "
                  >
                    Fund Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="
        card-project
        w-1/3
        mx-6
        my-4
        p-5
        border border-gray-500
        rounded-20
      "
            >
              <div className="item">
                <figure className="item-image">
                  <img
                    src="/project-thumbnail-6.jpg"
                    alt
                    className="rounded-20 w-full"
                  />
                </figure>
                <div className="item-meta">
                  <h4 className="text-3xl font-medium text-gray-900 mt-5">
                    Smart Lock
                  </h4>
                  <p className="text-md font-light text-gray-900">
                    Open the door with just one tap and click
                  </p>
                  <div className="relative pt-4 progress-bar">
                    <div
                      className="
                overflow-hidden
                h-2
                mb-4
                text-xs
                flex
                rounded
                bg-gray-200
                h-3
                rounded-lg
              "
                    >
                      <div
                        style={{ width: "10%" }}
                        className="
                  shadow-none
                  flex flex-col
                  text-center
                  whitespace-nowrap
                  text-white
                  justify-center
                  bg-purple-progress
                  progress-striped
                "
                      />
                    </div>
                  </div>
                  <div className="flex progress-info">
                    <div>10%</div>
                    <div className="ml-auto font-semibold">Rp 35.000.000</div>
                  </div>
                  <a
                    href="/projects.html"
                    className="
              text-center
              mt-5
              button-cta
              block
              w-full
              bg-blue-600
              hover:bg-green-button
              text-white
              font-semibold
              px-6
              py-2
              text-lg
              rounded-full
            "
                  >
                    Fund Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <div className="flex justify-between items-center">
            <div className="w-auto">
              <h2 className="text-3xl text-gray-900 mb-8">
                See What Our <br />
                Happy Clients Say
              </h2>
            </div>
          </div>
          <div className="flex mb-10">
            <div className="w-2/12 flex justify-center items-start">
              <img src="/testimonial-line.svg" alt />
            </div>
            <div className="w-8/12 mt-16">
              <h2 className="text-3xl text-gray-900 font-light">
                “Funding at Bucker is very easy and comfortable. <br />
                Just need to find an idea, click and already funding.”
              </h2>
              <div className="testimonial-info mt-8">
                <div className="name text-xl font-semibold">Shopie Nicole</div>
                <div className="title text-xl font-light text-gray-400">
                  Project Manager
                </div>
              </div>
              <div className="testimonial-icon mt-10">
                <img
                  src="/testimonial-1-icon.png"
                  alt
                  className="w-20 mr-5 inline-block testimonial-user rounded-full"
                />
                <img
                  src="/testimonial-2-icon.png"
                  alt
                  className="w-20 mr-5 inline-block testimonial-user rounded-full"
                />
                <img
                  src="/testimonial-3-icon.png"
                  alt
                  className="
            w-20
            mr-5
            inline-block
            testimonial-user
            active
            rounded-full
          "
                />
              </div>
            </div>
            <div className="w-2/12" />
          </div>
        </section>
        <div className="cta-clip -mt-20" />
        <section className="call-to-action bg-purple-progress pt-64 pb-10">
          <div className="container mx-auto">
            <div className="w-full text-center">
              <h1 className="text-5xl text-white font-semibold">
                Easy way to funding
                <br />
                best idea and innovation
              </h1>
              <button
                className="
          inline-block
          bg-blue-600
          hover:bg-green-button
          text-white
          font-semibold
          px-6
          py-4
          mt-8
          text-lg
          rounded-full
        "
              >
                Getting Start
              </button>
            </div>
          </div>
        </section>
        <footer className="bg-purple-progress py-20 text-white text-lg">
          <div className="container mx-auto">
            <div className="sm:flex mb-4">
              <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
                <img src="/logo-footer.svg" alt className="mb-3" />
                <p className="font-light">
                  Helps people execute their <br />
                  bright ideas
                </p>
              </div>
              <div className="sm:w-1/4 h-auto">
                <div className="mb-8 font-bold">Explore</div>
                <ul className="font-light">
                  <li className="mb-3">Our Services</li>
                  <li className="mb-3">Equity System</li>
                  <li className="mb-3">Refund</li>
                  <li className="mb-3">Shareholder</li>
                </ul>
              </div>
              <div className="sm:w-1/4 h-auto">
                <div className="mb-8 font-bold">Investor</div>
                <ul className="font-light">
                  <li className="mb-3">My Account</li>
                  <li className="mb-3">Top Startups</li>
                  <li className="mb-3">How-to Tutorials</li>
                  <li className="mb-3">Withdrawl</li>
                </ul>
              </div>
              <div className="sm:w-1/4 h-auto">
                <div className="mb-8 font-bold">Office</div>
                <ul className="font-light">
                  <li className="mb-3">+021 2208 1996</li>
                  <li className="mb-3">KBP, Bandung</li>
                  <li className="mb-3">No.12 (Backer)</li>
                  <li className="mb-3">support@backer.id</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
