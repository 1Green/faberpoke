import React from 'react'
import styles from './personalinfo.module.css'

export type PersonalInfoProps = {
    imageUrl: string,
    name: string,
    role: string,
    email: string,
}

export function PersonalInfo({ imageUrl, name, role, email }: PersonalInfoProps) {
    return (
        <div className={styles.personalInfoElement}>
            <img className={styles.personalImage} src={imageUrl} alt={name} />
            <div className={styles.personalDetails}>
                <div className={styles.name}>{name}</div>
                <div className={styles.role}>{role}</div>
                <div className={styles.email}>{email}</div>
            </div>
        </div>
    )
}
