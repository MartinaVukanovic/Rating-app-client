/* eslint-disable */
export default function hexToRGB(hex, alpha) {
  const rl = parseInt(hex.slice(2, 4), 16);
  const gl = parseInt(hex.slice(4, 6), 16);
  const bl = parseInt(hex.slice(6, 8), 16);

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (hex.length === 8) {
    // localhost
    if (alpha) {
      return `rgba(${rl},${gl},${bl},${alpha})`;
    }
    return `rgb(${rl},${gl},${bl})`;
  } else {
    // production
    if (alpha) {
      return `rgba(${r},${g},${b},${alpha})`;
    }
    return `rgb(${r},${g},${b})`;
  }
}
