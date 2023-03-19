import React from 'react'
import styles from './sectionfour.module.css'
import Image from 'next/image'


export const metadata = {
    title: 'Iphone Pro Max 14',
    description: 'Iphone Pro Max 14 London',
    date: '2023-03-01',
    slug: 'iphone-pro-max-14',
    tags: ['iphone', 'apple', 'pro', 'max', '14', 'london', 'uk', 'united kingdom', 'west london'],
  }
  

export default function Sectionfour(props) {
    const sectionFiveRef = props.sectionFiveref;
    const handleClick = () => {
        sectionFiveRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      };
  return (
    <div className={styles.sectionfour}>
        <div className={styles.sectionfourdiv}>
      <h1>APPLE PHONES</h1>
      <Image
          src="https://res.cloudinary.com/dttaprmbu/image/upload/v1678030287/arrowdown_xtrut2.svg"
          alt="arrow-down"
          width={200}
          height={148}
          className={styles.rotateonhover} // add a class to trigger the rotation on hover
          onClick={handleClick}
      />
    </div>
    <div className={styles.ovalblurtwo}></div>
    </div>
  )
}

