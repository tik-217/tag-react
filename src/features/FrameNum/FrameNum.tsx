// store
import { useAppSelector } from "store/hooks";

// components
import Chip from "entities/Chip/Chip";

// styles
import "./ui/FrameNum.styles.scss";

export default function FrameNum() {
  const initialLayout = useAppSelector((state) => state.initialLayout);

  return (
    <div className="frame-num">
      {initialLayout.map((el) => {
        return <Chip num={el} key={el} />;
      })}
    </div>
  );
}
