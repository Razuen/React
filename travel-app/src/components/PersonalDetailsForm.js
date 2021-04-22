import React, { useState } from "react";
import { globalStyles } from "../constants/globalStyles";
import Title from "./Title";
import TextInput from "./TextInput";

const PersonalDetailsForm = () => {
  const [name, setname] = useState("");
  const [homeTown, sethomeTown] = useState("");
  const [placeToVisit, setplaceToVisit] = useState("");
  const saveForm = () => {
    let formData = {
      name: name,
      homeTown: homeTown,
      placeToVisit: placeToVisit,
    };
    alert(
      "Name:" +
        formData.name +
        "\nHome Town:" +
        formData.homeTown +
        "\nPlace To Visit:" +
        formData.placeToVisit
    );
    setname("");
    sethomeTown("");
    setplaceToVisit("");
  };
  return (
    <div className="personal-details-form-wrapper">
      <Title text="Like To Travel? Contact Us" />
      <form className="personal-details-form" autoComplete={"off"}>
        <TextInput
          label="Name"
          name="name"
          value={name}
          onChange={(value) => {
            setname(value);
          }}
        />

        <TextInput
          label="Your Home Town"
          name="home-town"
          value={homeTown}
          onChange={(value) => {
            sethomeTown(value);
          }}
        />
        <TextInput
          label="Where would you like to go?"
          name="place-to-visit"
          value={placeToVisit}
          onChange={(value) => {
            setplaceToVisit(value);
          }}
        />

        <button
          type="button"
          className="primary"
          onClick={(event) => {
            event.preventDefault();
            saveForm();
          }}
        >
          submit interest
        </button>
      </form>
      <style>
        {`
        .personal-details-form-wrapper{
          width: 50%;
          margin: 0 auto;
        }
        .personal-details-form-wrapper h2{
          color:${globalStyles.THEME_PURPLE};
          margin-bottom: 50px;
          text-align: center;
        }
        .personal-details-form{
          width: 55%;
          margin: 0 auto
        }
        .personal-details-form > input[type="text"] {
          margin-bottom: 20px;
        }
        `}
      </style>
    </div>
  );
};

export default PersonalDetailsForm;
