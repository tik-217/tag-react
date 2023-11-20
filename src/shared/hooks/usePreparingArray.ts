import { useAppSelector } from "store/hooks";

export default function usePreparingArray(num: number) {
  const initialLayout = useAppSelector((state) => state.initialLayout);

  const preparedArray: number[][] = [];

  const coord = {
    x: 0,
    y: 0,
  };

  // cut the array into 4 parts
  const chunkSize = 4;

  for (let i = 0; i < initialLayout.length; i += chunkSize) {
    const chunk = initialLayout.slice(i, i + chunkSize);

    // getting a position y in chank
    const existInChank = chunk.indexOf(num);

    // getting click by x and y
    if (existInChank >= 0) {
      coord.x = existInChank;
      coord.y = i / 4;
    }

    preparedArray.push(chunk);
  }

  return { preparedArray, coord };
}
