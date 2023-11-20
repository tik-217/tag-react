// store
import { useAppSelector } from "store/hooks";

// hooks
import usePreparingArray from "./usePreparingArray";

export function useGettingZeroPosition(num: number) {
  const x = useAppSelector((state) => state.zeroPosInit.x);
  const y = useAppSelector((state) => state.zeroPosInit.y);

  const { preparedArray, coord } = usePreparingArray(num);

  // North — север
  // South — юг
  // East — восток
  // West – запад
  const zeroEnvironment: IZeroEnvironment = {
    north: {
      x: 0,
      y: 0,
    },
    east: {
      x: 0,
      y: 0,
    },
    south: {
      x: 0,
      y: 0,
    },
    west: {
      x: 0,
      y: 0,
    },
  };

  // north
  if (y - 1 >= 0) {
    zeroEnvironment.north.y = y - 1;
    zeroEnvironment.north.x = x;
  }

  // east
  if (preparedArray.length - 1 >= x + 1) {
    zeroEnvironment.east.x = x + 1;
    zeroEnvironment.east.y = y;
  }

  // south
  if (preparedArray.length - 1 >= y + 1) {
    zeroEnvironment.south.y = y + 1;
    zeroEnvironment.south.x = x;
  }

  // west
  if (x - 1 >= 0) {
    zeroEnvironment.west.x = x - 1;
    zeroEnvironment.west.y = y;
  }

  if (x === 3 && y === 3) {
    zeroEnvironment.east.x = -1;
    zeroEnvironment.east.y = -1;

    zeroEnvironment.south.x = -1;
    zeroEnvironment.south.y = -1;
  }

  return { coord, zeroEnvironment };
}
