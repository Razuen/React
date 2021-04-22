import React from "react";

function LargeText({ text, temp }) {
  return (
    <span className={"large-text"}>
      {text}
      {temp && <sup> o </sup>}
      <style jsx>
        {`
          .large-text {
            font-size: 2.5rem;
            position: relative;
          }
          .large-text sup {
            position: absolute;
            right: 20px;
          }
        `}
      </style>
    </span>
  );
}

export default React.memo(LargeText);
