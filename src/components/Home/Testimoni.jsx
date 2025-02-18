import React from "react";

export default function Testimoni() {
  return (
    <section class="container mx-auto pt-24">
      <div class="flex justify-between items-center">
        <div class="w-auto">
          <h2 class="text-3xl text-gray-900 mb-8">
            Lihat Apa Yang Dikatakan <br />
            Oleh Klien Kami
          </h2>
        </div>
      </div>
      <div class="flex mb-10">
        <div class="w-2/12 flex justify-center items-start">
          <img src="assets/images/testimonial-line.svg" alt="" />
        </div>
        <div class="w-8/12 mt-16">
          <h2 class="text-3xl text-gray-900 font-light">
            “Pendanaan di Berkah sangat mudah dan nyaman. <br />
            Hanya perlu mencari ide, klik dan silahkan mendanai.”
          </h2>
          <div class="testimonial-info mt-8">
            <div class="name text-xl font-semibold">
              Prudenca Ahmad Daffa Kurnia
            </div>
            <div class="title text-xl font-light text-gray-400">
              Project Manager
            </div>
          </div>
          <div class="testimonial-icon mt-10">
            <img
              src="assets/images/profile.png"
              alt=""
              class="w-20 mr-5 inline-block testimonial-user rounded-full"
            />
            <img
              src="/assets/images/profile.png"
              alt=""
              class="w-20 mr-5 inline-block testimonial-user rounded-full"
            />
            <img
              src="/assets/images/profile.png"
              alt=""
              class="
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
        <div class="w-2/12"></div>
      </div>
    </section>
  );
}
