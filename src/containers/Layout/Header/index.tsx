import { useSelector, useDispatch } from "react-redux";

import { HeaderComponent } from "../../../components/Layout/Header";
import { zoomSelectors, zoomReducers } from "../../../redux/zoom";

interface HeaderProps {
  resetCoord: () => void;
}

export const Header: React.FC<HeaderProps> = ({ resetCoord }) => {
  const dispatch = useDispatch();
  const { zoomIncrement, zoomDecrement, zoomChange } = zoomReducers;
  const zoom = useSelector(zoomSelectors.getZoom);

  return (
    <HeaderComponent
      zoom={zoom}
      zoomIncrement={() => dispatch(zoomIncrement())}
      zoomDecrement={() => dispatch(zoomDecrement())}
      zoomChange={(value: number) => dispatch(zoomChange(value))}
      resetCoord={resetCoord}
    />
  );
};
