import React from "react";
import styles from "./styles.module.scss";
import Section from "../../components/Section/index";
import { Link } from "react-router-dom";

const Home = () => (
    <div className={styles.container}>
        <div className={styles.intro}>
            <div className={styles.element}>
                <Section
                    title="IFRC Community Sampling Tool"
                    text="The IFRC Community Sampling Tool is a web-based application that allows users to create and manage sampling plans for community-based surveys."
                />
            </div>
            <div className={styles.element}>
                <Section
                    text="The tool is designed to be used by IFRC staff and partners to support the implementation of the IFRC Monitoring and Evaluation Framework."
                />
            </div>
            <div className={styles.element}>
                <Section
                    text="The Red Cross Red Crescent runs community surveys in nearly all their programming. It is critical for understanding the views of affected populations, and how effective programmes are."
                />
            </div>
            <div className={styles.element}>
                <Section
                    text="It is critical for understanding the views of affected populations, and how effective programmes are. Often times, country-level teams do not have technical expertise in sampling."
                />
            </div>
            <div className={[styles.element]} id={styles.home}>
                <button className={styles.homeButton}>
                    <Link to="/sampling" className={styles.homeButtonText}>Get Started</Link>
                </button>
            </div>
        </div>
        <div className={styles.teaser}>
            <div className={styles.element}>
                <Section
                    title="Features"
                    text="An intuitive tool that can guide as well as educate the IFRC volunteers via informational sections throughout the sampling process."
                />
            </div>
            <div className={styles.element}>
                <Section
                    subtitle="The features of the tool include:"
                    text1="1) the ability to create sampling plans for community-based surveys; "
                    text2="2) the ability to manage sampling plans;"
                    text3="3) the ability to generate sampling frames;"
                />
            </div>
        </div>
        <div className={styles.howto}>
            <div className={styles.element}>
                <Section
                    title="How to use the tool"
                    text="The IFRC Community Sampling Tool is a web-based application that allows users to create and manage sampling plans for community-based surveys."
                />
            </div>
            <div className={styles.element}>
                <Section
                    text="..."
                />
            </div>
            <div className={[styles.element]} id={styles.how}>
                <button className={styles.howButton}>
                    <Link to="/sampling" className={styles.howButtonText}>Get Started</Link>
                </button>
            </div>
        </div>
    </div>
);

export default Home;