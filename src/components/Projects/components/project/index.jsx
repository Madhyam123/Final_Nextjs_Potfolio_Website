'use client';
import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';
export default function index({index, title,stack,Feature, manageModal,href}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <div>
            <h3>{stack}</h3>
            <h5>{Feature}</h5>
            <button className={styles.btn}>View</button>
            </div>  
            <div>
             <Link href={href}><button  style={{backgroundColor:"#455CE9",padding:"6px",borderRadius:"20px"}}>View</button></Link>
            </div>
        </div>
    )
}
