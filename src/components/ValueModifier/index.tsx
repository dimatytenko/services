import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { BiPlus, BiMinus } from "react-icons/bi";

import styles from "./ValueModifier.module.scss";
import { Button } from "../Button";
import { ZOOM_INITIAL_VALUES } from "../../constants/common";

interface ValueModifierProps {
  currentValue: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleZoom: (value: number) => void;
}

export const ValueModifier: React.FC<ValueModifierProps> = ({
  currentValue,
  handleIncrement,
  handleDecrement,
  handleZoom,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleZoomChange = (value: number) => {
    handleZoom(value);
    setIsVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <Button
        onClick={handleDecrement}
        title={<BiMinus />}
        disabled={ZOOM_INITIAL_VALUES.indexOf(currentValue) === 0}
      />
      <div className={styles.value}>
        <Button
          onClick={() => setIsVisible(!isVisible)}
          title={currentValue.toString() + "%"}
        />
        {isVisible && (
          <ul className={styles.zoom_list}>
            {ZOOM_INITIAL_VALUES.map((value, i) => {
              return (
                <li
                  key={value.toString()}
                  className={styles.zoom_item}
                  onClick={() => handleZoomChange(value)}
                >
                  {value}%{" "}
                  {ZOOM_INITIAL_VALUES.indexOf(currentValue) === i && (
                    <BsCheck />
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Button
        onClick={handleIncrement}
        title={<BiPlus />}
        disabled={
          ZOOM_INITIAL_VALUES.indexOf(currentValue) ===
          ZOOM_INITIAL_VALUES.length - 1
        }
      />
    </div>
  );
};
