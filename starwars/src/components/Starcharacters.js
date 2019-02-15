import React from "react";
import Character from "./Character";

const Starcharacters = props => {
  return (
    <div>
      {props.charData.map(character => {
        return <Character charData={character} />;
      })}
    </div>
  );
};

export default Starcharacters;
