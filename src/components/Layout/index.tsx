import React from "react";

import styles from "./Layout.module.scss";

interface Props {
  header: React.ReactNode;
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<Props> = ({ children, header }) => {
  return (
    <div className={styles.layout}>
      {header}
      <main className={styles.main}>{children}</main>
    </div>
  );
};
