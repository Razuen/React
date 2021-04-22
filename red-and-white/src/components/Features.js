import React, { useEffect, useState } from "react";
import FeatureService from "../services/FeatureService";
import FeatureCard from "./FeatureCard";
import Loader from "./Loader";

function Features(props) {
  let [featureList, setfeatureList] = useState(null);
  let [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    getFeatures();
  }, []);

  const getFeatures = async () => {
    setisLoading(true);
    let response = await FeatureService.getAllFeatures();
    setfeatureList(response);
    setisLoading(false);
  };

  return (
    <div className="feature-wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        featureList &&
        featureList.map((feature, i) => {
          return <FeatureCard key={i} feature={feature} />;
        })
      )}
      <style>
        {`
          .feature-wrapper{
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
          }
          `}
      </style>
    </div>
  );
}

export default Features;
