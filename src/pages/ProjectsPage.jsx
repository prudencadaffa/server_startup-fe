import React from "react";
import Header from "../components/Header";
import Details from "../components/Projects/Details";
import Footer from "../components/Footer";
import ImageDetails from "../components/Projects/ImageDetails";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";

export default function HomePage() {
  const { id } = useParams();

  const params = {
    id: { _eq: id },
  };

  const getDetailCampaigns = gql`
    query MyQuery($id: Int_comparison_exp!) {
      data: db_berkah_campaigns(where: { id: $id }) {
        id
        short_description
        description
        goal_amount
        backer_count
        campaign_images {
          image_url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(getDetailCampaigns, {
    variables: params,
  });

  return (
    <div className="px-24">
      <Header></Header>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ImageDetails data={data.data[0].campaign_images}></ImageDetails>
          <Details data={data.data[0]}></Details>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
}
