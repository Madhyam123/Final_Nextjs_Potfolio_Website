import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import Image from 'next/image';
import skills from '../../../public/images/Frame 2.png'
function Index() {

    const phrase = "I am a skilled MERN stack developer and software engineer with a passion for creating robust web applications and solving complex problems in the digital realtime world.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index} >{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                  
                    <Image style={{marginTop:"-20%"}} src={skills} width="350px"
      height="300px"
      layout="responsive" />
                </motion.p>
                <div className="mobile-btn" data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
export default Index;
