export default function keyboardControl(
  keyboardCode: string,
  initialLayout: number[]
) {
  if (keyboardCode === "ArrowUp" || keyboardCode === "KeyW") {
    const posNumIndex = initialLayout.findIndex((el) => el === 0) + 4;
    const posNum = initialLayout[posNumIndex];
    if (posNumIndex > 15) return;

    return posNum;
  }
  if (keyboardCode === "ArrowDown" || keyboardCode === "KeyS") {
    const posNumIndex = initialLayout.findIndex((el) => el === 0) - 4;
    const posNum = initialLayout[posNumIndex];

    if (posNumIndex < 0) return;

    return posNum;
  }
  if (keyboardCode === "ArrowLeft" || keyboardCode === "KeyA") {
    const posNumIndex = initialLayout.findIndex((el) => el === 0) + 1;
    const posNum = initialLayout[posNumIndex];

    if (
      posNumIndex < 0 ||
      posNumIndex === 4 ||
      posNumIndex === 8 ||
      posNumIndex === 12 ||
      posNumIndex >= 16
    )
      return;

    return posNum;
  }
  if (keyboardCode === "ArrowRight" || keyboardCode === "KeyD") {
    const posNumIndex = initialLayout.findIndex((el) => el === 0) - 1;
    const posNum = initialLayout[posNumIndex];

    if (
      posNumIndex < 0 ||
      posNumIndex === 3 ||
      posNumIndex === 7 ||
      posNumIndex === 11
    ) {
      return;
    }

    return posNum;
  }
}
