import React, { FunctionComponent } from "react";
import styles from "./rosterCard.module.css";
import cx from "classnames";
import Icon from "../Icon/Icon";
import { capitalizeFirstLetter } from "pokemon/functions";

export type RosterCardProps = {
    empty: boolean;
    pokemonName?: string;
    pokemonImageUrl?: string;
    className?: string;
    color?: string;
    onAdd?: () => void;
};

export const RosterCard: FunctionComponent<RosterCardProps> = ({
    pokemonName,
    pokemonImageUrl,
    color,
    empty,
    onAdd,
    className,
}) => {
    return empty ? (
        <div
            className={cx(styles.wrapper, styles.empty, className)}
            onClick={onAdd}
        >
            <Icon name="add" className={styles.addIcon} />
            <p className={styles.addTitle}>Add Pokemon</p>
        </div>
    ) : (
        <div
            className={cx(
                styles.wrapper,
                color !== undefined && styles[color],
                className
            )}
        >
            <Icon name="pokeball-outline" className={styles.bgIcon} />
            <div className={styles.imageWrapper}>
                <img alt="pokemon" src={pokemonImageUrl} className={styles.image} />
            </div>
            <p className={styles.title}>
                {capitalizeFirstLetter(pokemonName ?? "No Name").replace("-", " ")}
            </p>
        </div>
    );
};

export default RosterCard;
