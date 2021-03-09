import React, { FunctionComponent } from 'react'
import Icon from 'stories/Icon/Icon';
import styles from './bar.module.css';

export type NavigationBarProps = {
    setCurrentView: (newViewKey: string) => void;
}

const NavigationBar: FunctionComponent<NavigationBarProps> = ({
    setCurrentView
}) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <button className={styles.button} onClick={() => setCurrentView('pokedex')}>
                    <Icon name="pokeball" size='large' />
                </button>
                <p className={styles.title}>Pokedex</p>
            </div>
        </div>
    )
}

export default NavigationBar
