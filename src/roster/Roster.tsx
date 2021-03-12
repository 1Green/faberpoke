import React, { FunctionComponent } from 'react'
import { useLocalStorage } from 'react-use';
import RosterCard, { RosterCardProps } from '../stories/rosterCard/RosterCard';
import styles from './roster.module.css';

export type RosterProps = {
};

export type RosterCardArray = [RosterCardProps, RosterCardProps, RosterCardProps, RosterCardProps, RosterCardProps];

export const Roster: FunctionComponent<RosterProps> = () => {
    const [rosterSlots] = useLocalStorage<RosterCardArray>('roster', [{ empty: true, }, { empty: true, }, { empty: true, }, { empty: true, }, { empty: true, }]);
    if (rosterSlots === undefined) {
        return null
    }
    return (
        <div className={styles.wrapper}>
            { rosterSlots.map((cardSlot, index) => {
                const evenIndex = index % 2;
                return <div key={index} className={styles.rosterCardWrapper}>
                    <RosterCard
                        {...cardSlot}
                        key={index}
                        className={evenIndex === 1 ? styles.rosterCardUp : ''}
                    />
                </div>
            })}
        </div>
    )
}

export default Roster
