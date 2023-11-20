// components
import BoardNum from "features/FrameNum/FrameNum";
import ControlBtn from "features/ControlBtn/ControlBtn";
import Score from "features/Score/Score";

// styles
import "./ui/Board.styles.scss";

export default function Board() {
  return (
    <div className="board">
      <Score />
      <BoardNum />
      <ControlBtn />
    </div>
  );
}
