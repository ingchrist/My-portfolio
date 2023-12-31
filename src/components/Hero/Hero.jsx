import React from "react";

import styles from "./Hero.module.css";
import { getImageurl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.content}>Hi I'm ing christian</h1>
                <p className={ styles.title}>
                    I'm a full-stack developer, reach out if you will like to know more!
                </p>
                <a href="my email: noumeyouflorian2@gmail.com">contact Me</a>
            </div>
            <img src={getImageurl("Hero/heroImage.png")}> alt="Hero image of me"
             className={styles.heroimg}
             </img>
             <div className={styles.topblur}/>
             <div className={styles.bottomblur}/>

        </section>

    );
};