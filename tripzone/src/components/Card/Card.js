import PropTypes from "prop-types";
import React from "react";
import Constants from "../../constants/Constants";
import GlobalStyles from "../../constants/GlobalStyles";

function Card({ data }) {
  console.log("Card");
  return (
    <div className="card">
      <div className="card-img">
        <img
          onError={(e) => (e.target.src = Constants.DEFAULT_CARD_IMG)}
          src={data.photo}
          alt={data.landmark}
        />
      </div>
      <h4 className="landmark"> {data.landmark} </h4>
      <div className="location">{data.location} </div>
      <style jsx>
        {`
          .card {
            background: ${GlobalStyles.WHITE};
            text-align: center;
            margin: 5px;
            padding: 15px;
            width: calc(20% - 10px);
          }
          .card-img {
            width: 150px;
            height: 175px;
            margin-bottom: 10px;
          }
        `}
      </style>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    landmark: PropTypes.string,
    photo: PropTypes.string,
    location: PropTypes.string,
  }),
};

Card.defaultProps = {
  data: PropTypes.shape({
    photo: Constants.DEFAULT_CARD_IMG,
  }),
};

export default Card;
