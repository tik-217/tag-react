// store
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  setAssembleQuickly,
  setInitialLayout,
} from "store/reducers/rootReducer";

// components
import getRandom from "shared/services/getRandom";

// styles
import "./ui/ControlBtn.styles.scss";

export default function ControlBtn() {
  const dispatch = useAppDispatch();
  let initialLayout = useAppSelector((state) => state.initialLayout);

  function collect() {
    const zero = initialLayout.indexOf(0);

    initialLayout = initialLayout.filter((_, i) => i !== zero);
    initialLayout.sort((a, b) => a - b);
    initialLayout.push(0);

    dispatch(setInitialLayout(initialLayout));
    dispatch(setAssembleQuickly(true));
  }

  function mixNum() {
    dispatch(setInitialLayout(getRandom([])));
  }

  return (
    <div className="btns">
      <button onClick={() => collect()} className="btns__collect">
        Собрать
      </button>
      <button onClick={() => mixNum()} className="btns__mix">
        Размешать
      </button>
    </div>
  );
}
