import React, { FunctionComponent } from "react";
import cx from "classnames";
import Icon, { IconKeys } from "components/Icon/Icon";
import styles from "./bar.module.css";

export type NavigationBarProps = {
  currentView: string;
  setViewName: (newViewKey: string) => void;
};

export type NavigationButtonArray = {
  key: string;
  title: string;
  icon: IconKeys;
};

const buttons: NavigationButtonArray[] = [
  {
    key: "pokedex",
    title: "Pokedex",
    icon: "pokeball",
  },
  {
    key: "roaster",
    title: "Roaster",
    icon: "superball",
  },
  {
    key: "fight",
    title: "Fight",
    icon: "megaball",
  },
  {
    key: "contact",
    title: "Contact",
    icon: "ultraball",
  },
];

const NavigationBar: FunctionComponent<NavigationBarProps> = ({
  currentView,
  setViewName,
}) => {
  return (
    <div className={styles.wrapper}>
      {buttons.map((button, index) => {
        const itemClasses = cx(
          styles.barItem,
          currentView !== button.key ? styles.inactive : undefined
        );
        return (
          <div key={index} className={itemClasses}>
            <button
              className={styles.button}
              onClick={() => setViewName(button.key)}
            >
              <Icon name={button.icon} className={styles.icon} />
              <p className={styles.title}>{button.title}</p>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NavigationBar;
