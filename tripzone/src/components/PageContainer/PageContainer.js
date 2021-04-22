import React, { useMemo } from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import Heading from "../Heading/Heading";

function PageContainer(props) {
  console.log("Page Container...");

  const heading = useMemo(() => {
    return (
      <Heading
        text={props.heading}
        showButton={props.showButton}
        buttonText={props.buttonText}
        isPrime={props.isPrime}
        onButtonClick={() => props.onHeadingButtonClick()}
      />
    );
  }, [props.heading, props.headingContent]);

  return (
    <div className={"wrapper " + props.color}>
      {heading}
      {props.children}
      <style jsx>
        {`
          .wrapper {
            margin: 20px;
            padding: 20px;
          }
          .blue {
            background: ${GlobalStyles.BLUE};
          }
          .grey {
            background: ${GlobalStyles.GREY};
          }
          .yellow {
            background: ${GlobalStyles.YELLOW};
          }
          .green {
            background: ${GlobalStyles.GREEN};
          }
        `}
      </style>
    </div>
  );
}

export default PageContainer;
