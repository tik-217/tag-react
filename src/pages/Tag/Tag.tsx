// react
import { useEffect } from "react";

// store
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  setBestScore,
  setInitialLayout,
  setScore,
} from "store/reducers/rootReducer";

// components
import Board from "widgets/Board/Board";
import getRandom from "shared/services/getRandom";

// styles
import "./ui/Tag.styles.scss";

export default function Tag() {
  const dispatch = useAppDispatch();
  const initialLayout = useAppSelector((state) => state.initialLayout);
  const assembleQuickly = useAppSelector((state) => state.assembleQuickly);
  const score = useAppSelector((state) => state.score);

  const bestScoreStorage = localStorage.getItem("best-score");
  const bestScore = bestScoreStorage ? +bestScoreStorage : 0;

  useEffect(() => {
    dispatch(setInitialLayout(getRandom(initialLayout)));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!assembleQuickly) {
      dispatch(setBestScore(bestScore));
    }

    // eslint-disable-next-line
  }, [score]);

  useEffect(() => {
    function winningResult() {
      const result = initialLayout.every(
        (el: number, i: number, arr: number[]) =>
          i === 15 || i === 0 || el >= arr[i - 1]
      );

      if (result && initialLayout.length !== 0) {
        setTimeout(() => {
          alert("Game complete");
        }, 100);

        if (!assembleQuickly) {
          if (score > bestScore) {
            localStorage.setItem("best-score", JSON.stringify(score));
          }
        }

        dispatch(setScore(0));
      }
    }

    winningResult();

    // eslint-disable-next-line
  }, [initialLayout]);

  return (
    <div className="tag">
      <Board />
    </div>
  );
}
