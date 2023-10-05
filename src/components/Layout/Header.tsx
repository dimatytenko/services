import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

import styles from "./Layout.module.scss";
import { ValueModifier } from "../ValueModifier";
import { Button } from "../Button";

interface HeaderComponentProps {
  zoom: number;
  zoomIncrement: () => void;
  zoomDecrement: () => void;
  zoomChange: (value: number) => void;
  resetCoord: () => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  zoom,
  zoomIncrement,
  zoomDecrement,
  zoomChange,
  resetCoord,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.title}>services</p>
        <div className={styles.right_side}>
          <Button onClick={resetCoord} title={<FaLocationArrow />} />

          <ValueModifier
            currentValue={zoom}
            handleIncrement={zoomIncrement}
            handleDecrement={zoomDecrement}
            handleZoom={zoomChange}
          />
        </div>
      </div>
    </header>
  );
};
