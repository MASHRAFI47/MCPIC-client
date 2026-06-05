import React from 'react'
import styles from "./marquee.module.css"

const Marquee = () => {
    return (
        <div className={`${styles.marqueeWrap} bg-[#0c1917] py-6`}>
            <div className={styles.marqueeTrack}>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Website Development</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Cybersecurity</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Multimedia Presentation</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Photoshop &amp; Design</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Microsoft Excel</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> CyberSprint 3.0</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> MegaFest</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Innovation · Technology · Community</div>
                {/* duplicate for seamless loop */}
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Website Development</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Cybersecurity</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Multimedia Presentation</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Photoshop &amp; Design</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Microsoft Excel</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> CyberSprint 3.0</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> MegaFest</div>
                <div className={styles.marqueeItem}><span className={styles.marqueeDot}></span> Innovation · Technology · Community</div>
            </div>
        </div>
    )
}

export default Marquee