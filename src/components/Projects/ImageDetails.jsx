import React from "react";

export default function ImageDetails({ data }) {
  console.log(data);
  return (
    <section className="container project-container mx-auto mt-8 relative">
      <div className="flex mt-3">
        <div className="w-3/4 mr-6">
          <div className="bg-white p-3 mb-3 border border-gray-400 rounded-20">
            <figure className="item-image z-100 ">
              <img
                src={data[0].image_url}
                alt
                className="rounded-20 object-cover max-h-96 w-full"
              />
            </figure>
          </div>
          <div class="flex -mx-2">
            {data.map((item) => {
              return (
                <div
                  class="
                relative
                w-1/4
                bg-white
                m-2
                p-2
                border border-gray-400
                rounded-20
                "
                >
                  <figure class="item-thumbnail">
                    <img
                      src={item.image_url}
                      alt={item.image_url}
                      class="rounded-20 object-cover w-full"
                    />
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/4">
          <div
            className="
          bg-white
          w-full
          p-5
          border border-gray-400
          rounded-20
          sticky
        "
            style={{ top: 15 }}
          >
            <h3>Project Leader:</h3>
            <div className="flex mt-3">
              <div className="w-1/4">
                <img
                  src="../assets/images/profile.png"
                  alt
                  className="w-full inline-block rounded-full"
                />
              </div>
              <div className="w-3/4 ml-5 mt-1">
                <div className="font-semibold text-xl text-gray-800">
                  Prudenca Ahmad Daffa
                </div>
                <div className="font-light text-md text-gray-400">
                  19.123 Donatur
                </div>
              </div>
            </div>
            <h4 className="mt-5 font-semibold">Yang akan anda dapatkan:</h4>
            <ul className="list-check mt-3">
              <li>-Ekuitas startup secara langsung dari pendiri</li>
              <li>-Layanan atau produk khusus startup itu memiliki</li>
              <li>-Terpercaya sejak 2021</li>
            </ul>
            <input
              type="number"
              className="
            border border-gray-500
            block
            w-full
            px-6
            py-3
            mt-4
            rounded-full
            text-gray-800
            transition
            duration-300
            ease-in-out
            focus:outline-none focus:shadow-outline
          "
              placeholder="Masukkan Nominal Rp."
              defaultValue
            />
            <a
              href="/fund-success.html"
              className="
            text-center
            mt-3
            button-cta
            block
            w-full
            bg-blue-600
            hover:bg-green-button
            text-white
            font-medium
            px-6
            py-3
            text-md
            rounded-full
          "
            >
              Donasi Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
