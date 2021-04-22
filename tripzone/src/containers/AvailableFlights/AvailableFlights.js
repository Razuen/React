import React from "react";
import FlightList from "../../components/FlightsList/FlightList";
import NoData from "../../components/NoData/NoData";
import PageContainer from "../../components/PageContainer/PageContainer";

function AvailableFlights({ flights, bookFlight }) {
  console.log("Available Flights");

  return (
    <PageContainer heading="AVAILABLE FLIGHTS" color="green">
      {flights ? (
        flights.length ? (
          <FlightList
            dataList={flights}
            onClick={(data) => {
              bookFlight(data);
            }}
          />
        ) : (
            <NoData text="No Flights Found" />
          )
      ) : null}
    </PageContainer>
  );
}

export default AvailableFlights;
