import React, { FunctionComponent, FC, SVGProps } from "react";
import cx from "classnames";
import { ReactComponent as SearchIcon } from "./iconSvgs/search.svg";
import { ReactComponent as CloseIcon } from "./iconSvgs/close.svg";
import { ReactComponent as PokeBallIcon } from "./iconSvgs/poke-ball.svg";
import { ReactComponent as SuperBallIcon } from "./iconSvgs/super-ball.svg";
import { ReactComponent as MegaBallIcon } from "./iconSvgs/mega-ball.svg";
import { ReactComponent as UltraBallIcon } from "./iconSvgs/ultra-ball.svg";
import "./icon.css";

export type IconKeys =
  | "search"
  | "close"
  | "pokeball"
  | "superball"
  | "megaball"
  | "ultraball";
type Icons = { [key in IconKeys]: FC<SVGProps<SVGSVGElement>> };
const icons: Icons = {
  search: SearchIcon,
  close: CloseIcon,
  pokeball: PokeBallIcon,
  superball: SuperBallIcon,
  megaball: MegaBallIcon,
  ultraball: UltraBallIcon,
};

export interface IconProps {
  name: IconKeys;
  color?: string;
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
  className?: string;
}

export const Icon: FunctionComponent<IconProps> = ({
  name,
  color,
  className,
  size = "medium",
}) => {
  const CustomIcon = icons[name];
  const iconClasses = cx(`icon--${size}`, className);

  return <CustomIcon fill={color} className={iconClasses} />;
};

export default Icon;
