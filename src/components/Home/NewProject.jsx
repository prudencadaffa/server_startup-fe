import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export default function NewProject() {
  const getCampaigns = gql`
    query GetCampaigns {
      data: db_berkah_campaigns {
        id
        short_description
        description
        goal_amount
        backer_count
        campaign_images(limit: 1) {
          image_url
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(getCampaigns);
  console.log(loading);
  console.log(data);
  return (
    <section className="container mx-auto pt-24">
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-3xl text-gray-900 mb-8">
            Pilih beberapa ide project <br />
            dan mulailah mendanai
          </h2>
        </div>
        <div className="w-auto mt-5">
          <a className="text-gray-900 hover:underline text-md font-medium" href>
            Lihat Semua
          </a>
        </div>
      </div>
      {loading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-3 gap-4 mt-3 -mx-6">
            {data.data.map((item) => {
              console.log(item);
              return (
                <div className="card-project  mx-4 my-4 p-5 border border-gray-500 rounded-20">
                  <div className="item">
                    <figure className="item-image ">
                      <img
                        src={item.campaign_images[0].image_url}
                        alt
                        class="rounded-20 object-cover h-64 w-full"
                      />
                    </figure>
                    <div className="item-meta">
                      <h4 className="text-xl  font-medium text-gray-900 mt-5 capitalize truncate ">
                        {item.short_description}
                      </h4>
                      {/* <p className="text-md font-light text-gray-900">
                        Creating robotic hand for better movement
                      </p> */}
                      <div className="relative pt-4 progress-bar">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                          <div
                            style={{ width: "20%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                          />
                        </div>
                      </div>
                      <div className="flex progress-info">
                        <div>{`${item.backer_count} %`}</div>
                        <div className="ml-auto font-semibold">
                          {`Rp. ${item.goal_amount}`}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/projects/${item.id}`}
                      className="text-center mt-5  button-cta block w-full bg-blue-600 hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"
                    >
                      Donasi
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
