// store
import { useAppSelector } from "store/hooks";

// hooks
import { useGettingZeroPosition } from "./useGettingZeroPosition";

export default function useMoveNum(num: number) {
  let initialLayout = useAppSelector((state) => state.initialLayout);
  let zeroPosInit = useAppSelector((state) => state.zeroPosInit);
  let score = useAppSelector((state) => state.score);

  const { coord, zeroEnvironment } = useGettingZeroPosition(num);
  let isZeroZero = false;

  Object.values(zeroEnvironment).forEach((el: ICoord) => {
    const elArr = Object.values(el);
    const coordArr = Object.values(coord);
    const posNum = initialLayout.indexOf(num);
    const posZero = initialLayout.indexOf(0);

    // Filtering of all available numbers to change the position. The number selected by the user is returned
    const choosenClickELem = elArr.filter(
      (value, index) => value === coordArr[index]
    );

    if (choosenClickELem.length !== 2) return;

    if (isZeroZero === false) {
      score++;

      const zeroZero = choosenClickELem.every(
        (el: number, i: number, arr: number[]) =>
          i === 0 || (el === 0 && arr[i - 1] === 0)
      );

      if (zeroZero) {
        isZeroZero = zeroZero;
        return;
      }
    }

    zeroPosInit = {
      x: el.x,
      y: el.y,
    };

    initialLayout = initialLayout.map((el, i) => (i === posNum ? 0 : el));
    initialLayout = initialLayout.map((el, i) => (i === posZero ? num : el));
  });

  return { initialLayout, zeroPosInit, score };
}
