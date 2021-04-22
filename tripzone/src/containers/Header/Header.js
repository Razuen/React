import React, { useContext } from "react";
import { User } from "../../App";
import Chip from "../../components/chip/Chip";
import Logo from "../../components/Logo/Logo";
import Prime from "../../components/prime/Prime";
import Timer from "../../components/Timer/Timer";
import UserDetail from "../../components/UserDetail/UserDetail";
import GlobalStyles from "../../constants/GlobalStyles";
import { useCounter } from "../../customHooks/useCounter";
import useTime from "../../customHooks/useTime";

function Header() {
  console.log("Header.......");
  const user = useContext(User);
  const session = useCounter(0, 1);
  const [estTime, istTime] = useTime();

  return (
    <header>
      <div className="logoContainer">
        <Logo />
        {user.prime === "true" && <Prime />}
      </div>
      <div className="rightContainer">
        {/* <Chip heading="SESSION TIME" text={session + " MIN"} /> */}
        <Timer initialValue={0} countDown={1} timeInterval={60000} />
        {istTime && <Chip heading={istTime.date} text={istTime.time} />}
        {estTime && <Chip heading={estTime.date} text={estTime.time} />}
        {/* <div className="user">Hi, {user.name ? user.name : "User"} </div> */}
        <UserDetail userDetails={user ? user : "User"} />
      </div>
      <style jsx>
        {`
          header,
          .logoContainer,
          .rightContainer {
            display: flex;
            justify-content: space-between;
          }
          header {
            background: ${GlobalStyles.PINK};
            color: ${GlobalStyles.WHITE};
          }
          .logoContainer {
            width: 14%;
            margin: 20px;
          }
          .user {
            display: flex;
            align-items: center;
            padding: 5px;
          }
        `}
      </style>
    </header>
  );
}

export default Header;
