import React from "react";
import PropTypes from "prop-types";
import { gameHeight } from "../utils/constants";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonBore from "./CannonBore";
import CannonBase from "./CannonBase";
import CannonBall from "./CannonBall";
import CurrentScore from "./CurrentScore";
import FlyingObject from "./FlyingObject";
import Heart from "./Heart";
import StartGame from "./StartGame";
import Title from "./Title";

const Canvas = props => {
  const viewBox = [
    window.innerWidth / -2,
    100 - gameHeight,
    window.innerWidth,
    gameHeight,
  ];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>

      <Sky />
      <Ground />
      <CannonBore rotation={props.angle} />
      <CannonBase />
      <CannonBall position={{ x: 0, y: -100 }} />
      <CurrentScore score={15} />

      {!props.gameState.started && (
        <g>
          <StartGame onClick={() => props.startGame()} />
          <Title />
        </g>
      )}

      
        <g>
          {props.gameState.flyingObjects.map(flyingObject => (
           <FlyingObject
            key={flyingObject.id}
            position={flyingObject.position}
          />
          ))}
          <Heart position={{ x: -300, y: 45 }} />
        </g>
      
      <FlyingObject 
        key={3}
        position={{x: -300, y: 50}}
      />
      
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired
};

export default Canvas;
