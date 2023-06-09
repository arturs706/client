
import styles from './sectionthree.module.css';
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import getRecentIphone from '@/lib/getRecentIphones';
import {use} from 'react'


async function getRecentIphone() {
  return await (await fetch ("http://127.0.0.1:10010/api/v1/products/apple/featured")).json();
}


export const metadata = {
  title: 'Iphone Pro Max 14',
  description: 'Iphone Pro Max 14 London',
  date: '2023-03-01',
  slug: 'iphone-pro-max-14',
  tags: ['iphone', 'apple', 'pro', 'max', '14', 'london', 'uk', 'united kingdom', 'west london'],
}

export default function Sectionthree() {
  const [data, setData] = useState([]);
  const [widthSize, setWidthSize] = useState(0);
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const [errormessage, setErrormessage] = useState('');


  useEffect(() => {
    try {
      getRecentIphone().then((data) => {
        setData(data.products);
      }); 
    } catch (error) {
      setErrormessage(error);
    }
  }, []);


  useEffect(() => {
    if (widthSize < 880 && (widthSize !== 0)) {
      setW(355);
      setH(438);
    } else {
      setW(355); 
      setH(438); 
    }
  }, [widthSize]);

    const handleResize = () => {
      setWidthSize(window.innerWidth);
    }
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);

  if (errormessage.length > 0) {
    return (
      <div className={styles.sectionthree}>
        <h1>{errormessage}</h1>
      </div>
    )
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
        <div className={styles.sectionthreediv}>
        {data.map((item, index) => (
          <div key={index} className={styles.glassmorphdiv}>
              <div className={styles.imgdiv}>
                  <Image
                      src={item.imagetwo}
                      alt="Picture of the author"
                      width={w}
                      height={h}
                      quality={100}
                      priority={true}
                  />
                <span>{item.prodname}</span>
                <span className={styles.pricespan}>{"£"+ item.price}</span>
                <div className={styles.button}>
              <Link href="/products/[category]/[brand]/[id]" as={`/products/${item.category}/${item.brand}/${item.productid}`}>Check Now</Link>
            </div>
        </div>
    </div>
        ))}
    </div>

  )
}
