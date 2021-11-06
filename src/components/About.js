import mypic from "../content/images/portrait.jpeg";
import "./About.css";
import { motion } from "framer-motion";
import Tabs from "./TabsList";

const About = () => {
	return (
		<div className="about">
			<div className="spacer"></div>
			<div className="greeting">
				<motion.h2
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
				>
					{" "}
					Hi, my name is
				</motion.h2>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
				>
					{" "}
					Shrif Rai.
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
				>
					I like making cool software.
				</motion.h1>
				<br />
				<motion.h3
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
				>
					I am a Comp Sci student at Rochester Institue of Technology in
					Rochester, NY. Currently, I am searching for a Summer 2022 Co-op
					and/or full time Software Engineering position. I expect to graduate
					December, 2022. Welcome to my website, feel free to take a look
					around...
				</motion.h3>
			</div>
			<div className="aboutcontent" id="aboutcontent">
				<div className="abouttitle">
					<h2>About me</h2>
					<div class="divider"></div>
				</div>
				<div className="abouttext">
					<p>
						Hi! My name is Shrif and I am currently a student at Rochester
						Institute of Technology majoring in Computer Science. I enjoying
						designing and building applications for mobile &amp; web. I am also
						interested in data mining and ML. I got my start at development
						programming python applications for fun in high school.
					</p>
				</div>
				<br />
				<div className="aboutpic">
					<img src={mypic} alt="mypic" />
				</div>
			</div>

			<div className="workcontent">
				<div className="worktitle">
					<h2>Work Experience</h2>
					<div class="divider"></div>
				</div>
				<Tabs />
			</div>
			<div className="spacer"></div>
		</div>
	);
};

export default About;
