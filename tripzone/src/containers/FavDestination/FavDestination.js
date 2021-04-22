import React, { useEffect, useRef, useState } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import TextInput from "../../components/TextInput/TextInput";

function FavDestination({ showCityDetails }) {
  console.log("Fav Destination....");

  const [destination, setdestination] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [destination]);

  return (
    <PageContainer
      color="grey"
      heading="Travelling first leaves you speechless, then turns you into a story teller"
    >
      <p>
        Take every chance you get in your life, because something will happen
        only once. Once in a while, go somewhere you have never been before.
      </p>
      <p>
        With TripZone, you could book amazing holiday spots with low fares. We
        understand how travelling can impact your budget.
      </p>

      <TextInput
        placeholder="Type your favorite destination here!"
        value={destination}
        ref={inputRef}
        onChange={(value) => setdestination(value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            destination.length === 0
              ? alert("Enter Your Fav Destination")
              : showCityDetails(destination.toUpperCase());
          }
        }}
      />
      <style jsx>{`
        p {
          margin: 10px 0;
        }
      `}</style>
    </PageContainer>
  );
}

export default FavDestination;
