import mypic from '../content/images/portrait.jpeg'

const About = () => {
    return(
        <div className='about'>
            <div className='greeting'>
                <h2> Hi, my name is</h2>
                <h1> Shrif Rai.</h1>
                <h1>I like making cool software.</h1>
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
            </div>
        </div>
    )
}

export default About;