interface ICoord {
  x: number;
  y: number;
}

interface IState {
  initialLayout: number[];
  bestScore: string;
  zeroPosInit: ICoord;
  assembleQuickly: boolean;
  score: number;
}

interface IZeroEnvironment {
  north: ICoord;
  east: ICoord;
  south: ICoord;
  west: ICoord;
}
