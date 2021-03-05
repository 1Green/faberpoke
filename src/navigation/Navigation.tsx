import React, { FunctionComponent, useRef } from 'react'
import './navigation.css';

export type NavigationProps = {
    children: React.ReactNodeArray;
}

const Navigation: FunctionComponent<NavigationProps> = ({
    children
}) => {
    const refs = useRef<HTMLDivElement>(null);
    const navigatorRef = useRef<HTMLDivElement>(null);

    const scrollTo = () => {
        console.log("scroll to: ", refs.current?.offsetTop)
        navigatorRef.current?.scrollTo({ behavior: 'smooth', top: refs.current?.offsetTop })
    }

    console.log("refs: ", refs)
    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', right: '0px'}}>
                <div>
                    <button onClick={scrollTo}>
                        <p>Scroll to</p>
                    </button>
                </div>
            </div>
            <div ref={navigatorRef} className='navigation-wrapper'>
                {children.map((child, index) => {
                    if (child === undefined || child === null) return null;
                    console.log("index: ", index);
                    return (
                        <div ref={refs} className='navigation-item' key={index}>
                            {child}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navigation
