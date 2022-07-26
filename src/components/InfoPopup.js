import React from "react";

function InfoPopup(props) {
  return (
    <div
      className={props.className}
      style={{ position: "relative", left: "100px" }}
    >{`${props.user.firstName}  ${props.user.lastName} will be deleted`}</div>
  );
}

export default InfoPopup;
