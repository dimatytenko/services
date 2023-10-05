import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

interface ButtonProps {
  title: string | React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  roundType?: boolean;
  redStyle?: boolean;
  yellowStyle?: boolean;
  greenStyle?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
  type,
  roundType,
  redStyle,
  yellowStyle,
  greenStyle,
}) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.disabled]: disabled,
        [styles.roundType]: roundType,
        [styles.redStyle]: redStyle,
        [styles.yellowStyle]: yellowStyle,
        [styles.greenStyle]: greenStyle,
      })}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};
