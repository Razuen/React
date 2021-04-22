import React from "react";

function Banner(props) {
  return (
    <div className={"banner " + props.className}>
      <img src={require("../assets/images/" + props.img)} alt="banner" />
      <style>
        {`
          .banner{
              width: 100%;
              height: 160px;
          }
          .banner.large{
            width: 100%;
            height: 350px;
          }
          .banner img{
            width: 100%;
            height: 100%;
          }
          `}
      </style>
    </div>
  );
}

export default Banner;
