import React, { FunctionComponent } from 'react'
import styles from './sectionTitle.module.css'

export type SectionTitleProps = {
    title: string
    color?: string
}

export const SectionTitle: FunctionComponent<SectionTitleProps> = ({
    title,
    color = 'black',
}) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.line} style={{ backgroundColor: color }} />
        </div>
    )
}

export default SectionTitle
