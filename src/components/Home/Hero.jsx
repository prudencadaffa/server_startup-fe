import React from "react";

export default function Hero() {
  return (
    <div className="flex items-center pt-10 px-5 md:px-0">
      <div className="w-1/2">
        <h1 className="text-4xl text-white mb-5">
          Kami siap membantu orang yang{" "}
          <u className="hero-underline"> kurang mampu</u> &amp;{" "}
          <u className="hero-underline">membutuhkan</u> <br />
          bantuan kehidupan
        </h1>
        <p className="text-white text-xl font-light mb-8">
          Jadilah bagian dari kami
          <br />
          dengan membantu yang membutuhkan
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
          Temukan Project
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src="assets/images/hero.png" alt="crowdfunding project" />
      </div>
    </div>
  );
}
