// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
// import fadeTransition from './fade.module.css';  
import slideTransition from './slide.module.css';  
import styles from './navigation.module.css';

export type NavigationProps = {
    children: JSX.Element[];
}

const duration = 300
//     onEnter = (node: { style: { marginTop: string; marginBottom: string; }; offsetHeight: number; }) => {
//         node.style.marginTop = `-${node.offsetHeight}px`;
//         node.style.marginBottom = `0px`;
//     },
//     onEntering = (node: { style: { marginTop: string; marginBottom: string; }; }) => {
//         node.style.marginTop = "";
//         node.style.marginBottom = "";
//     },
//     onExit = (node: { style: { marginTop: string; marginBottom: string; }; }) => {
//         node.style.marginTop = "";
//         node.style.marginBottom = "";
//     },
//     onExiting = (node: { style: { marginTop: string; marginBottom: string; }; offsetHeight: number; }) => {
//         node.style.marginTop = `-${node.offsetHeight}px`;
//         node.style.marginBottom = `0px`;
//     };

const Navigation: FunctionComponent<NavigationProps> = ({
    children
}) => {
    const sectionArray = children;
    const [currentKey, setCurrentKey] = useState<string>(children[0] !== undefined ? children[0].key as string : '');
    const [currentSection, setCurrentSection] = useState<JSX.Element[] | undefined>();

    useEffect(() => {
        const newCurrentSection = sectionArray.filter(elem => elem.key === currentKey);
        console.log("new current section : ", newCurrentSection);
        setCurrentSection(newCurrentSection)
    }, [currentKey, sectionArray])


    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', right: '0px'}}>
                <div>
                    <button onClick={() => setCurrentKey('pokedex')}>
                        <p>Pokedex</p>
                    </button>
                    <button onClick={() => setCurrentKey('roaster')}>
                        <p>Roaster</p>
                    </button>
                </div>
            </div>
            <TransitionGroup
                className={styles.navigationWrapper}
                timeout={duration}
                // onEnter={onEnter}
                // onEntering={onEntering}
                // onExit={onExit}
                // onExiting={onExiting}
            >
                {currentSection?.map((child: React.ReactChild) => (
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
