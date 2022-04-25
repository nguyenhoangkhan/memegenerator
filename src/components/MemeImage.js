import { useState } from "react";
function MemeImage(props) {
  return (
    <div className="meme-image">
      <img src={props.url}></img>
      <div className="title-top">
        {" "}
        <p>{props.top}</p>{" "}
      </div>
      <div className="title-bot">
        {" "}
        <p>{props.bot}</p>{" "}
      </div>
    </div>
  );
}
export default MemeImage;
