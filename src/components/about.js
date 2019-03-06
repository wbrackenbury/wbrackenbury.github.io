import React from 'react';

import {ABOUT, TECHNOLOGIES, INTERESTS, SKILLS, TOPICS, SKILL_LIST} from '../constants';

class AboutPage extends React.Component {
    render() {
	const skills = SKILL_LIST.map((skill) =>
				  <li>{skill}</li>);
	const topics = TOPICS.map((topic) =>
				  <li>{topic}</li>);
    
	return (
		<div className="page about-page">
		<div className="text-block">{ABOUT}</div>
		<div className="text-block">{TECHNOLOGIES}</div>
		<div className="text-block">{SKILLS}</div>
		<div><ul>{skills}</ul></div>
		<div className="text-block">{INTERESTS}</div>
		<div><ul>{topics}</ul></div>
		<div className="footer" />
		</div>
	);
    }
}
AboutPage.displayName = 'App';
export default AboutPage;
