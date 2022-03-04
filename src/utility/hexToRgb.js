export default function hexToRGB(hex, alpha) {
  const r = parseInt(hex.slice(2, 4), 16);
  const g = parseInt(hex.slice(4, 6), 16);
  const b = parseInt(hex.slice(6, 8), 16);
  if (alpha) {
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return `rgb(${r},${g},${b})`;
}
