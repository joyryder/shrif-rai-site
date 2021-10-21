import GithubIcon from "./Icons/Github"
import LinkedinIcon from "./Icons/Linkedin"

const Social = () => {
    return(
        <div className='social'>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/joyryder'><GithubIcon/></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/shrif-rai'><LinkedinIcon/></a>
        </div>
    )
}

export default Social