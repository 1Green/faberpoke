// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import NavigationBar from './bar/Bar';
// import fadeTransition from './fade.module.css';
import slideTransition from './slide.module.css';  
import styles from './navigation.module.css';

export type NavigationProps = {
    children: JSX.Element[];
}

const duration = 300;

const Navigation: FunctionComponent<NavigationProps> = ({
    children
}) => {
    const sectionArray = children;
    const [currentKey, setCurrentKey] = useState<string>(children[0] !== undefined ? children[0].key as string : '');
    const [currentView, setCurrentView] = useState<JSX.Element[] | undefined>();

    useEffect(() => {
        const newCurrentView = sectionArray.filter(elem => elem.key === currentKey);
        console.log("new current section : ", newCurrentView);
        setCurrentView(newCurrentView);
    }, [currentKey, sectionArray])

    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <NavigationBar setCurrentView={setCurrentKey} />
            <TransitionGroup
                className={styles.navigationWrapper}
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
