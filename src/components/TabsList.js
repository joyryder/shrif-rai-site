import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./TabsList.css";
import Markdown from "markdown-to-jsx";
import React, { useState, useEffect } from "react";

const TabsList = () => {
	return (
		<Tabs>
			<TabList>
				<Tab>
					<p>Leidos</p>
				</Tab>
				<Tab>
					<p>Ortho</p>
				</Tab>
				<Tab>
					<p>Excellus</p>
				</Tab>
			</TabList>

			<TabPanel>
				<div className="panel-content">
					<h2>UI Engineer Co-op @ Leidos</h2>
					<h3>January - May 2022</h3>
					<br />
					<ul>
						<li>Under construction</li>
					</ul>
				</div>
			</TabPanel>
			<TabPanel>
				<div className="panel-content">
					<h2>Software Engineering Co-op @ Ortho Clinical Diagnostics</h2>
					<h3>May - August 2020</h3>
					<br />
					<ul>
						<li>
							Worked with a team of developers to test Ortho's Blood Analyzer
							Machine Software
						</li>
						<li>Automated and improved on pre-existing manual test cases</li>
						<li>
							Wrote and conducted unit testing using Lua and C++ on a bi-weekly
							sprint basis
						</li>
						<li>
							Conducted code reviews and validation meetings for all test
							scripts
						</li>
					</ul>
				</div>
			</TabPanel>
			<TabPanel>
				<div className="panel-content">
					<h2>HCM Technology Intern @ Excellus BCBS</h2>
					<h3>May - August 2019</h3>
					<br />
					<ul>
						<li>
							Revamped security roles and made an automated employee turnover
							report.
						</li>
						<li>
							Revision improved overall security and organization of roles.
						</li>
						<li>
							Used SQL and Cognos BI to write queries and automate reports for
							the HR team.
						</li>
					</ul>
				</div>
			</TabPanel>
		</Tabs>
	);
};

export default TabsList;
