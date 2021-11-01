import GithubIcon from "./Icons/Github"
import LinkedinIcon from "./Icons/Linkedin"

const Social = () => {
    return(
        <div>
            <div className='social'>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/joyryder'><GithubIcon/></a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/shrif-rai'><LinkedinIcon/></a>
                <div class="dividerVertical"></div>
            </div>

            <div className= 'email'>
                <a href="mailto:shrifrai@gmail.com">shrifrai@gmail.com</a>
                <div class="dividerVertical"></div>
            </div>
        </div>
    )
}

export default Social