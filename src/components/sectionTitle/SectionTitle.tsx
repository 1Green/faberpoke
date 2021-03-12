import React, { FunctionComponent } from "react";
import cx from "classnames";
import styles from "./sectionTitle.module.css";

export type SectionTitleProps = {
  title: string;
  color?: string;
  className?: string;
};

export const SectionTitle: FunctionComponent<SectionTitleProps> = ({
  title,
  className,
  color = "black",
}) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.line} style={{ backgroundColor: color }} />
    </div>
  );
};

export default SectionTitle;
