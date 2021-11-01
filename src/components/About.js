import mypic from '../content/images/portrait.jpeg'
import './About.css'
import { motion } from 'framer-motion'

const About = () => {
    return(
        <div className='about'>
            <div className='greeting'>
                <motion.h2 
                initial={{opacity: 0, y:-100}} 
                animate={{opacity: 1, y: 0}}
                transition={{type: 'tween', delay: .2, duration: .5}}> Hi, my name is</motion.h2>
                <motion.h1 
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                transition={{delay: .4}}> Shrif Rai.</motion.h1>
                <motion.h1 
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                transition={{delay: .6}}>I like making cool software.</motion.h1>
            </div>
            <div className='aboutcontent' id='aboutcontent'>
                <div className='titlecontent'>
                    <div className='abouttitle'>
                        <h2> About me</h2>
                        <div class="divider"></div>
                    </div>
                    <p>
                        Hi! My name is Shrif and I am currently a student at Rochester Institute of Technology 
                        majoring in Computer Science. I enjoying designing and building applications for mobile 
                        &amp; web. I am also interested in data mining and ML. I got my start at development 
                        programming python applications for fun in high school. 
                    </p>
                    <br/>
                </div>
                <img src={mypic} alt='mypic'/>
                <div class="spacer"></div>
            </div>
        </div>
    )
}

export default About;