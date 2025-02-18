import React from "react";

export default function HowToUse() {
  return (
    <div>
      <section className="container mx-auto mt-60">
        <div className="flex justify-between items-center mb-10">
          <div className="w-auto">
            <h2 className="text-3xl text-gray-900 mb-8">
              Hanya butuh 3 langkah untuk <br />
              menjalankan ide cemerlang Anda!
            </h2>
          </div>
        </div>
        <div className="flex">
          <div className="w-full px-56 mb-5">
            <img src="assets/images/line-step.svg" alt className="w-full" />
          </div>
        </div>
        <div className="flex justify-between items-center text-center">
          <div className="w-1/3">
            <figure className="flex justify-center items-center">
              <img
                src="assets/images/step-1-illustration.svg"
                alt
                className="h-30 mb-8"
              />
            </figure>
            <div className="step-content">
              <h3 className="font-medium">Daftar</h3>
              <p className="font-light">
                Daftarkan akun Anda dan mulailah <br />
                mendanai project
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <figure className="flex justify-center items-center -mt-24">
              <img
                src="assets/images/step-2-illustration.svg"
                alt
                className="h-30 mb-8"
              />
            </figure>
            <div className="step-content">
              <h3 className="font-medium">Buka Project</h3>
              <p className="font-light">
                Pilih beberapa ide project, <br />
                dan mulailah mendanai
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <figure className="flex justify-center items-center -mt-48">
              <img
                src="assets/images/step-3-illustration.svg"
                alt
                className="h-30 mb-8"
              />
            </figure>
            <div className="step-content">
              <h3 className="font-medium">Jalankan</h3>
              <p className="font-light">
                Saatnya buat mimpi Anda <br />
                menjadi nyata
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
