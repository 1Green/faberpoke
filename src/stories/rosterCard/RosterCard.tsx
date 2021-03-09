import React, { FunctionComponent } from 'react'
import styles from './rosterCard.module.css'
import cx from 'classnames';
import Icon from '../Icon/Icon';

export type RosterCardProps = {
    color: 'red' | 'blue' | 'orange' | 'yellow' | 'green';
}

export const RosterCard: FunctionComponent<RosterCardProps> = ({
    color
}) => {
    const wrapperStyles = cx(styles.wrapper, styles[color]);
    return (
        <div className={wrapperStyles}>
            <Icon name='pokeball-outline' className={styles.bgIcon} />
            <div className={styles.imageWrapper}>
                <img alt='pokemon' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' className={styles.image} />
            </div>
            <p className={styles.title}>Charizard</p>
        </div>
    )
}

export default RosterCard
