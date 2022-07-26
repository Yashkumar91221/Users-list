import React, { useState } from "react";
import { Button } from "reactstrap";
import InfoPopup from "./InfoPopup";
import classes from "./UserListItem.module.css";

const UserListItem = ({ user, onDeleteClick }) => {
  const [ishovered, setIshovered] = useState(false);
  const stringToHslColor = (str = "") => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = hash % 360;
    return `hsl(${h},60%,80%)`;
  };

  return (
    <div style={{ display: "flex" }} className={classes.main}>
      <div
        style={{
          margin: "auto 0",
          textAlign: "center",
          height: "40px",
          width: "40px",
          lineHeight: "40px",
          borderRadius: "50%",
          color: "white",
          fontWeight: "bold",
          background: stringToHslColor(user.firstName + user.lastName),
        }}
      >
        {!!user && !!user.firstName && !!user.lastName
          ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()
          : ""}
      </div>
      <div style={{ margin: "auto 0", flexGrow: 1, paddingLeft: "10px" }}>
        {user.firstName} {user.lastName}
      </div>
      <div
        style={{ margin: "auto 0", position: "" }}
        onMouseEnter={() => setIshovered(true)}
        onMouseLeave={() => setIshovered(false)}
      >
        <Button
          size="sm"
          color="danger"
          outline
          onClick={() => onDeleteClick(user.id)}
        >
          Delete
        </Button>
        <div className={classes.popup}>
          {ishovered && (
            <InfoPopup user={user} className={classes.popupinner} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
