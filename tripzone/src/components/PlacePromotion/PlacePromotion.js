import React from "react";
import CardList from "../CardList.js/CardList";
import LargeText from "../LargeText/LargeText";
import NoData from "../NoData/NoData";
import PageContainer from "../PageContainer/PageContainer";

function PlacePromotion(props) {
  console.log("Place Promotion");

  return (
    <PageContainer
      heading={props.heading}
      color={props.color}
      showButton={props.showButton}
      onHeadingButtonClick={() => props.showPreviousCityDetails()}
      buttonText={"PREVIOUS"}
    >
      {Object.keys(props.placeInfo).length !== 0 ? (
        <React.Fragment>
          {props.placeInfo.cityDetails && (
            <React.Fragment>
              <LargeText
                text={props.placeInfo.cityDetails.weather}
                temp={true}
              />
              <p>{props.placeInfo.cityDetails.description}</p>
            </React.Fragment>
          )}
          {props.placeInfo.touristSpot && (
            <CardList dataList={props.placeInfo.touristSpot} />
          )}{" "}
        </React.Fragment>
      ) : (
          (console.log("no data"), (<NoData text={props.noDataText} />))
        )}
    </PageContainer>
  );
}

export default PlacePromotion;
