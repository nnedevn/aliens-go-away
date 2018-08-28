/**
 * Builds the cubic Bezier curve representation
 * @param {} cubicBezierCurve 
 */

export const pathFromBezierCurve = (cubicBezierCurve) => {
  const {
    initialAxis, initialControlPoint, endingControlPoint, endingAxis,} = cubicBezierCurve;
  
  return `
  M${initialAxis.x} ${initialAxis.y}
  c ${initialControlPoint.x} ${initialControlPoint.y}
  ${endingControlPoint.x} ${endingControlPoint.y}
  ${edingAxis.x} ${endingAxis.y}
  `;
};