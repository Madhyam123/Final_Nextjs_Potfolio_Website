import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#1095F1",
        src: "gdsc.jpg"
    },
    {
        color: "#147B15",
        src: "hackover.jpg"
    },
    {
        color: "#4F7CC4",
        src: "ibm.jpg"
    },
    {
        color: "#21242b",
        src: "firebase.jpg"
    }
]

const slider2 = [
    {
        color: "#4823CA",
        src: "flipr.jpg"
    },
    {
        color: "#006CB7",
        src: "prodigy.jpg"
    },
    {
        color: "#03C599",
        src: "deep.jpg"
    },
    {
        color: "#A173D6",
        src: "devtown.jpg"
    }
]

const slider3 = [
    {
        color: "#000000",
        src: "oasis.jpg"
    },
    {
        color: "#F38846",
        src: "upgrade.jpg"
    },
    {
        color: "#7D34DA",
        src: "udemy.jpg"
    },
    {
        color: "#4286F2",
        src: "dsc.jpg"
    }
]

const slider4 = [
    {
        color: "#77C2CF",
        src: "react.jpg"
    },
    {
        color: "#F6CF13",
        src: "ml.jpg"
    },
    {
        color: "#013153",
        src: "microsoft.jpg"
    },
    {
        color: "#506EC2",
        src: "gl.jpg"
    }
]

function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 200])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -200])
    const x3 = useTransform(scrollYProgress, [0, 1], [0, 200])
    const x4 = useTransform(scrollYProgress, [0, 1], [0, -200])
    const height = useTransform(scrollYProgress, [0, 1], [20, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    sizes={50}
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div  className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x3}} className={styles.slider}>
                    {
                        slider3.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div  className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x4}} className={styles.slider}>
                    {
                        slider4.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div  className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}

export default Index;