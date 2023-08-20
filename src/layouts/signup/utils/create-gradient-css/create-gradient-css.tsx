export const createGradientCSS = (onlyTwoColor?: boolean) => {
  function randomColor() {
    return Math.floor(Math.random() * 256);
  }

  function rgbString() {
    return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  }

  const color1 = rgbString();
  const color2 = rgbString();
  const color3 = rgbString();

  const deg = Math.floor(Math.random() * 180);

  if (onlyTwoColor) {
    const css = `linear-gradient(${deg}deg, ${color1}, ${color2})`;
    return css;
  }

  const css = `linear-gradient(${deg}deg, ${color1}, ${color2}, ${color3})`;

  return css;
};
