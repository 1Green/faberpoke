import React, { FunctionComponent } from 'react'
import styles from './rosterCard.module.css'
import cx from 'classnames';
import Icon from '../Icon/Icon';

export type RosterCardProps = {
    empty?: boolean;
    className?: string;
    color?: 'red' | 'blue' | 'orange' | 'yellow' | 'green';
    onAdd?: () => void;
}

export const RosterCard: FunctionComponent<RosterCardProps> = ({
    color,
    empty,
    onAdd,
    className
}) => {
    if (empty === true) return (
        <div className={cx(styles.wrapper, styles.empty, className)} onClick={onAdd}>
            <Icon name='add' className={styles.addIcon} />
            <p className={styles.addTitle}>Add Pokemon</p>
        </div>
    )

    return (
        <div className={cx(styles.wrapper, color !== undefined && styles[color], className)}>
            <Icon name='pokeball-outline' className={styles.bgIcon} />
            <div className={styles.imageWrapper}>
                <img alt='pokemon' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' className={styles.image} />
            </div>
            <p className={styles.title}>Charizard</p>
        </div>
    )
}

export default RosterCard
