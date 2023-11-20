// store
import { useAppDispatch } from "store/hooks";
import {
  setInitialLayout,
  setScore,
  setZeroPosInit,
} from "store/reducers/rootReducer";

// hooks
import useMoveNum from "shared/hooks/useMoveNum";

// styles
import "./ui/Chip.styles.scss";

export default function Chip({ num }: { num: number }) {
  const dispatch = useAppDispatch();

  const { initialLayout, zeroPosInit, score } = useMoveNum(num);

  function moveNumBox() {
    dispatch(setZeroPosInit(zeroPosInit));
    dispatch(setInitialLayout(initialLayout));
    dispatch(setScore(score));
  }

  return (
    <div
      className={`chip ${num === 0 ? "chip_empty-num" : ""}`}
      onClick={() => moveNumBox()}
    >
      {num}
    </div>
  );
}
