// store
import { useAppSelector } from "store/hooks";

// styles
import "./ui/Score.styles.scss";

export default function Score() {
  const score = useAppSelector((state) => state.score);
  const bestScore = useAppSelector((state) => state.bestScore);

  return (
    <div className="score">
      <h3 className="score__title">{score}</h3>
      <p className="score__best">Best score: {bestScore}</p>
    </div>
  );
}
