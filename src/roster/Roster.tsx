import React, { FunctionComponent } from 'react'
import RosterCard from '../stories/rosterCard/RosterCard';
import styles from './roster.module.css';
import { roster3, RosterType } from './__mocks';

export type RosterProps = {
};

export const Roster: FunctionComponent<RosterProps> = () => {
    const getRosterSlots = (roster: RosterType[]): Array<RosterType | undefined> => {
        const slots: Array<RosterType | undefined> = new Array(...roster);
    
        for (let i = 0; i < 5; ++i) {
            if (slots[i] === undefined) {
                slots.push(undefined)
            }
        }
        return slots;
    }

    const rosterSlots = getRosterSlots(roster3);
    return (
        <div className={styles.wrapper}>
            { rosterSlots.map((elem, index) => {
                const evenIndex = index % 2;
                if (elem === undefined) return (
                    <div className={styles.rosterCardWrapper}>
                        <RosterCard
                            empty
                            key={index}
                            className={evenIndex === 1 ? styles.rosterCardUp : ''}
                        />
                    </div>
                )
                return (
                    <div className={styles.rosterCardWrapper}>
                        <RosterCard
                            key={index}
                            color={elem.type}
                            className={evenIndex === 1 ? styles.rosterCardUp : ''}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Roster
