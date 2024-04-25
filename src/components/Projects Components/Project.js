import React from "react";
import LinkContainer from "./LinkContainer";

export default function Project({ entry, isRight }) {

  return (
    <>
      <h3 style={{textDecoration: "underline"}}>{entry.name}</h3>
      <h5 style={{fontStyle: "italic"}}>
        {entry.complete ? '' : "In progress"}
      </h5>
      <div style={{ marginBottom: "1rem", backgroundImage: entry.imgUrl }}>
        {entry.description}
      </div>
      <h5>{entry.stack}</h5>
      <LinkContainer entry={entry} isRight={isRight}/>
    </>
  );
}