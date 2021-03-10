import React from 'react'
import styles from './contact.module.css'
import { PersonalInfo, PersonalInfoProps } from './PersonalInfo'

export type ContactProps = {
    contactArray: PersonalInfoProps[];
    imageUrl: string;
    alt: string;
}

export const contactDetails: PersonalInfoProps[] =
    [
        {
            imageUrl: `img/ruben.png`,
            name: 'Ruben de Andrade',
            role: 'Junior Software Engineer',
            email: 'ruben.deandrade@fabernovel.com',
        },
        {
            imageUrl: `img/william.png`,
            name: 'William Goulois',
            role: 'Junior Software Engineer',
            email: 'william.goulois@fabernovel.com',
        },
    ]

export const squirtleImage = 'img/squirtle.png'
export const squirtleAlt = "squirtle"

export function Contact({ contactArray = contactDetails, imageUrl = squirtleImage, alt = squirtleAlt }: ContactProps) {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.personalInfoContainer}>
                {
                    contactArray.map(((contact) => {
                        return <PersonalInfo {...contact} />
                    }))
                }
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={imageUrl} alt={alt} />
            </div>
        </div>
    )
}
