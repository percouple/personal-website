import React from "react";
import LinkContainer from "./LinkContainer";

// TODO: Make collapsing description a user button
export default function Project({ entry, isRight }) {

  return (
    <>
      <h3 style={{textDecoration: "underline"}}>{entry.name}</h3>
      <h5 style={{fontStyle: "italic"}}>
        {entry.complete ? '' : "In progress"}
      </h5>
      <div style={{ marginBottom: "1rem" }}>
        {window.innerWidth > 425 && entry.description}
      </div>
      <h5>{entry.stack}</h5>
      <LinkContainer entry={entry} isRight={isRight}/>
    </>
  );
}
