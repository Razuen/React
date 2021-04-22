import React from "react";

function Prime() {
  console.log("Prime");

  return (
    <div className="prime">
      <img src={require("../../assets/images/prime.png")} alt="prime" />
      <style>
        {`
    .prime{
      width: 45px;
      height: fit-content;
    }
    
    `}
      </style>
    </div>
  );
}

export default React.memo(Prime);
