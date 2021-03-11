// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import NavigationBar from './bar/Bar';
import { slideTransition } from './transitions';
import styles from './navigation.module.css';

export type NavigationProps = {
    children: JSX.Element[];
}

const duration = 300;

export const Navigation: FunctionComponent<NavigationProps> = ({
    children
}) => {
    const sectionArray = children;
    const [currentKey, setCurrentKey] = useState<string>(children[0] !== undefined ? children[0].key as string : '');
    const [currentView, setCurrentView] = useState<JSX.Element[] | undefined>();

    useEffect(() => {
        const newCurrentView = sectionArray.filter(elem => elem.key === currentKey);
        setCurrentView(newCurrentView);
    }, [currentKey, sectionArray])

    return (
        <div className={styles.navigationWrapper}>
            <NavigationBar currentView={currentKey} setViewName={setCurrentKey} />
            <TransitionGroup
                className={styles.viewWrapper}
                timeout={duration}
            >
                {currentView?.map((child: React.ReactChild) => (
                    <CSSTransition key={currentKey} timeout={500} classNames={slideTransition}>
                        <div className={styles.navigationItem}>
                            {child}
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default Navigation
