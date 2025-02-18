import React from "react";

export default function Details({ data }) {
  return (
    <section className="container mx-auto pt-8 ">
      <div className="flex justify-between items-center">
        <div>
          <div className="w-full md:w-3/4 mr-6">
            <h2 className="text-4xl text-gray-900 mb-2 font-medium">
              {data.short_description}
            </h2>
            <div className="relative progress-bar">
              <div
                className="
                overflow-hidden
                mb-4
                text-xs
                flex
                rounded-full
                bg-gray-200
                h-6
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
            <div className="flex progress-info mb-6">
              <div className="text-2xl">{`${data.backer_count}%`}</div>
              <div className="ml-auto font-semibold text-2xl">
                {`Rp. ${data.goal_amount}`}
              </div>
            </div>
            <p className="font-light text-xl mb-5">{data.description}</p>
          </div>
          <div className="w-1/4 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
