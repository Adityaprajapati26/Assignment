import React from 'react'
import styles from "./App.module.css"

const Navbar = () => {
  return (
    < div className={styles.navbar}>
        <div >
          <img src="https://images.pexels.com/photos/5898235/pexels-photo-5898235.jpeg?&w=100&h=35" alt="Bakery" />
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"5px",width:"250px",cursor: "pointer"}}>
        <a >Services</a>
        <a >Projects</a>
        <a >About</a>
        </div>
        <div>
        <button className={styles.button}>Contact</button>
        </div>
    </div>
  )
}

export default Navbar