import React, { useCallback, useMemo } from "react";
import Button from "../../components/Button/Button";
import PageContainer from "../../components/PageContainer/PageContainer";
import Select from "../../components/Select/Select";

function PlanMyTrip(props) {
  console.log("Plan my trip ....");

  return (
    <PageContainer color="blue" heading="PLAN MY TRIP">
      <React.Fragment>
        {useMemo(() => {
          return (
            <Select
              label="Source"
              options={props.cities.map((city) => ({
                label: city.name,
                value: city.code,
              }))}
              value={props.source}
              onChange={(city) => {
                props.onSourceChange(city);
              }}
              defaultValue={props.cities[0].value}
            />
          );
        }, [props.source])}

        {useMemo(() => {
          return (
            <Select
              label="Destination"
              options={props.cities.map((city) => ({
                label: city.name,
                value: city.code,
              }))}
              value={props.destination}
              onChange={(city) => props.onDestinationChange(city)}
              defaultValue={props.cities[0].value}
            />
          );
        }, [props.destination])}

        <Button
          text="SEARCH"
          onClick={useCallback(() => {
            props.onSearchClick();
          }, [props.source, props.destination])}
        />
      </React.Fragment>
    </PageContainer>
  );
}

export default PlanMyTrip;
