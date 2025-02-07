import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideoSection from "./videoSection/VideoSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendations";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Details = () => {
  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div className="detailsContainer">
      <Header />
      <div className="movieDetails">
        <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
        <Cast data={credits?.cast} loading={creditsLoading} />
        <VideoSection loading={loading} data={data} />
        <Similar mediaType={mediaType} id={id} />
        <Recommendation mediaType={mediaType} id={id} />
      </div>
      <div className={`bookButtonContainer`}>
        <button type="button">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/booktickets"
          >
            Book Tickets
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
