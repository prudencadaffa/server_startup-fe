import React from "react";

export default function CallToAction() {
  return (
    <section class="call-to-action bg-green-400 -mx-24 pt-64 pb-10">
      <div class="container mx-auto">
        <div class="w-full text-center">
          <h1 class="text-5xl text-white font-semibold">
            Cara mudah untuk membantu
            <br />
            dan berdonasi
          </h1>
          <button
            class="
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
            Donasi Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
