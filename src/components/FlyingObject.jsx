import React from "react";
import PropTypes from "prop-types";
import FlyingObjectTop from "./FlyingObjectTop";
import FlyingObjectBase from "./FlyingObjectBase";

const FlyingObject = props => (
  <g>
    <FlyingObjectBase position={props.position} />
    <FlyingObjectTop position={props.position} />
  </g>
);

FlyingObjec.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default FlyingObject;