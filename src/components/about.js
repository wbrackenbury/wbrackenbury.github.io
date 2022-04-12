import React from 'react';

import {ABOUT, TECHNOLOGIES, INTERESTS, SKILLS, TOPICS, SKILL_LIST, NEWS} from '../constants';

class AboutPage extends React.Component {
    render() {
	// const skills = SKILL_LIST.map((skill) =>
	// 			  <li>{skill}</li>);
	// const topics = TOPICS.map((topic) =>
	// 			  <li>{topic}</li>);

	const news = NEWS.map((n) =>
	     			            <li>{n}</li>);


	return (
		<div className="page about-page">
		  <div className="text-block">{ABOUT}</div>
      <h3>News</h3>
      <div className="text-block">{news}</div>
		<div className="footer" />
		</div>
	);
    }
}
AboutPage.displayName = 'App';
export default AboutPage;
