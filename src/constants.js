/* eslint-disable max-len */
export const ABOUT = 'I\'m a PhD student in Computer Science at the University of Chicago, working at the intersection between Databases and Human-Computer Interaction. I\'m broadly interested in problems solving business challenges via human-in-the-loop systems.';

export const TECHNOLOGIES = 'I\'m most familiar with Python and C++, but I have varying amounts of experience in C, Java, Scala, and Go. Additionally, I have experience with Apache webservers, Docker containers (+ docker-compose), Databases and SQL (PostgreSQL, MySQL, MS SQL Server), web programming frameworks (Flask, Play) and git/svn/mercurial.';

export const INTERESTS = 'If you want to start a conversation, try these: ';

export const SKILLS = 'Aside from my technical skills, I am capable in the following: ';

export const TOPICS = [
    'Storefront theatre in Chicago',
    'Mathematics (Topology, Category Theory)',
    'Competitive Chess',
    'Comedic writing'
]

export const SKILL_LIST = [
    'Strong writing skills',
    'Strong presentation skills',
    'Italian (beginner / intermediate)'
]


export const PUBLICATIONS = [
  {
    link: '../assets/McNutt_Kindlmann_2018.pdf',
    title: 'Linting for Visualization: Towards a Practical Automated Visualization Guidance System',
    authors: 'Andrew McNutt, Gordon Kindlmann',
    journal: 'VisGuides (IEEE Workshop). 2018'
  },
  {
    link: 'https://link.springer.com/protocol/10.1007/978-1-4939-7724-6_14',
    title: 'Data Mining and Computational Modeling of High-Throughput Screening Datasets',
    authors: 'Sean Ekins, Alex M Clark, Krishna Dole, Kellan Gregory, Andrew M Mcnutt, Anna Coulon Spektor, Charlie Weatherall, Nadia K Litterman, Barry A Bunin',
    journal: 'Reporter Gene Assays. 2018'
  },
  {
    link: 'https://arxiv.org/abs/1501.07537',
    title: 'The Schrodinger-Newton System with Self-field Coupling',
    authors: 'Joel Franklin, Youdan Guo, Andrew McNutt, and Allison Morgan',
    journal: 'Classical and Quantum Gravity. 2015'
  },
  {
    link: 'http://pubs.acs.org/doi/abs/10.1021/acs.jcim.5b00143',
    title: 'Open source Bayesian models. 1. Application to ADME/Tox and drug discovery datasets.',
    authors: 'Alex M. Clark, Krishna Dole, Anna Coulon-Spektor, Andrew McNutt, George Grass, Joel S. Freundlich, Robert C. Reynolds, and Sean Ekins',
    journal: 'Journal of chemical information and modeling. 2015'
  },
  {
    link: '../assets/thesis.pdf',
    title: 'Nonequivalent Lagrangian Mechanics',
    authors: 'Andrew McNutt (Advised by Nelia Mann)',
    journal: 'Undergraduate thesis. Reed College. 2014.'
  }
];

export const PRESENTATIONS = [
  {
    title: 'Linting for Visualization: Towards a Practical Automated Visualization Guidance System',
    link: '../assets/vis-lint-talk.pdf',
    journal: 'VisGuides 2018. October 22, 2018'
  },
  {
    title: 'Design Patterns For Data Visualization in React',
    link: 'http://tinyurl.com/reactvisdesignpatterns',
    journal: 'React Chicago. August 29, 2018'
  },
  {
    link: '../assets/nlm-talk.pdf',
    title: 'Nonequivalent Lagrangian Mechanics',
    journal: 'Reed Physics Seminar. April 8, 2014'
  },
  {
    link: '../assets/QGravPresentation.pdf',
    title: 'The Schrodinger-Newton System with Self-field Coupling',
    authors: 'Varchas Gopalaswamy, Andrew McNutt, Allie Morgan, Carl Proepper.',
    journal: 'Reed Physics Seminar. September 18, 2013'
  }
];

export const BLOG_POSTS = [
  {
    title: 'A Brief Saga Concerning the Making of a Tarot Deck About the American Highway System',
    subtitle: 'A little essay about making',
    date: 'Personal Blog. December 10, 2018',
    link: 'https://medium.com/@mcnutt/a-brief-saga-concerning-the-making-of-a-tarot-deck-about-the-american-highway-system-2eaebf3320c8'
  },
  {
    title: 'Advanced Visualization with react-vis',
    subtitle: 'Using Voronois, single pass rendering, and canvas components for amazing user experiences',
    date: 'Towards Data Science. May 21, 2018',
    link: 'https://towardsdatascience.com/advanced-visualization-with-react-vis-efc5c6667b4'
  }
];

export const PROJECTS = [
  {
    title: 'Readability As A Service',
    dates: 'November 2018',
    sourceLink: 'https://github.com/mcnuttandrew/flesch-kincaid-as-a-service',
    link: 'https://www.mcnutt.in/flesch-kincaid-as-a-service/',
    imgLink: 'https://s3-us-west-1.amazonaws.com/mcnutt-static-images/readability.png',
    text: 'Have you ever wanted specific numerical quantification on how readable your prose is? This micro app wraps the textstat package as a webservice so that you can easily check.',
    section: 'tech'
  },
  {
    title: 'tap-react-browser',
    dates: 'Feburary - April 2018',
    sourceLink: 'https://github.com/mcnuttandrew/tap-react-browser/',
    imgLink: 'https://s3-us-west-1.amazonaws.com/mcnutt-static-images/tap-react-browser.png',
    text: 'In the process of building a variety of javascipt libraries in the coarse of my graduate research, I found myself needing a testing tool that played a particular role in relation to the browser, so I made one! tap-react-browser is a light wrapper on tape that spits out react components.',
    section: 'tech'
  },
  {
    title: 'Constellations of Home - XMAS CARDS 2017',
    dates: 'December 2017',
    link: 'http://www.mcnutt.in/home-graphs/',
    sourceLink: 'https://github.com/mcnuttandrew/home-graphs',
    imgLink: 'https://s3-us-west-1.amazonaws.com/mcnutt-static-images/home-graphs.png',
    text: 'Over the 2017 holidays I spent some time meditating on memory, home, and graph theory, which led to my making these christmas cards.',
    section: 'visualization'
  },
  {
    title: 'On The Shape of American Cities I/II',
    dates: 'July 2017',
    link: 'http://www.mcnutt.in/city-size/',
    sourceLink: 'https://github.com/mcnuttandrew/city-size',
    imgLink: 'https://s3-us-west-1.amazonaws.com/mcnutt-static-images/city-size.png',
    text: 'A print graphic describing the shape of the 100 most populous American cities.',
    section: 'visualization'
  },
  {
    title: 'Pantone: Color of the year',
    dates: 'Updated yearly, starting 2016',
    link: 'http://www.mcnutt.in/color-of-the-year/',
    sourceLink: 'https://github.com/mcnuttandrew/color-of-the-year',
    imgLink: 'https://s3-us-west-1.amazonaws.com/mcnutt-static-images/color-of-year.png',
    text: 'A small exploration of the glory and wonder that is pantones color of the year.',
    section: 'visualization'
  },
  {
    title: 'react-vis',
    dates: '2016 - ',
    link: 'http://uber.github.io/react-vis/#/',
    sourceLink: 'https://github.com/uber/react-vis',
    imgLink: 'https://s3-us-west-1.amazonaws.com/mcnutt-static-images/react-vis-image.png',
    text: 'A charting library for the react ecosystem.',
    section: 'visualization'
  },
  {
    title: 'CSV Conversion',
    dates: 'December 2016',
    link: 'http://www.mcnutt.in/csv-conversion/',
    sourceLink: 'https://github.com/mcnuttandrew/csv-conversion',
    imgLink: 'https://s3-us-west-1.amazonaws.com/mcnutt-static-images/csv-conversion.png',
    text: 'A handy client-side csv to json converter. I built this little app, because my favorite conversion site got knocked down and I wanted to improve the UI.',
    section: 'tech'
  },
  {
    title: 'Personal Timeline',
    dates: 'June 2016',
    link: 'http://www.mcnutt.in/personal-timeline/',
    sourceLink: 'https://github.com/mcnuttandrew/personal-timeline',
    imgLink: 'https://s3-us-west-1.amazonaws.com/mcnutt-static-images/personal-time.png',
    text: 'A brief timeline of my life, a resume through a dark mirror if you will.',
    section: 'visualization'
  },
  {
    title: 'Unnamed Tarot Deck',
    dates: 'June 2016',
    link: 'https://medium.com/@mcnutt/a-brief-saga-concerning-the-making-of-a-tarot-deck-about-the-american-highway-system-2eaebf3320c8',
    sourceLink: 'https://github.com/mcnuttandrew/tarot-deck',
    imgLink: 'https://s3-us-west-1.amazonaws.com/mcnutt-static-images/tarot-image.png',
    text: 'A tarot tech themed around the signage and spirit of the American highway system.',
    section: 'art'
  },
  {
    title: 'Why Not Ipsum',
    dates: 'September 2014',
    link: 'http://why-not-ipsum.herokuapp.com/',
    sourceLink: 'https://github.com/mcnuttandrew/Why-Not-Zoidberg',
    imgLink: 'https://s3-us-west-1.amazonaws.com/mcnutt-static-images/why-not-image.png',
    text: 'A Lorem Ipsum generator populated by Zoidberg quotes, built following RESTful design practices. Included a large series of data scrapes, which were necessarily followed by intensive data cleaning.',
    section: 'tech'
  },
  {
    title: 'N-Hedron',
    dates: 'September - December 2013',
    imgLink: 'https://s3-us-west-1.amazonaws.com/mcnutt-static-images/n-hydron.png',
    link: '../assets/nhedron.pdf',
    text: 'An independent college project regarding the effacy of various numerical algorithms for constructing the n-hedron.',
    // text: 'Throughout my undergraduate career I had a prevailing interest in the geometrically ambiguous shape, the N-Hedron. It is formed by taking an integer, N, number of points, placing them on the sphere and demanding that they be maximally far apart. This culminated in a independent project, in which I implemented three different algorithms for constructing these shapes. You can find out more about this project. One of the major aspects of this project was dealing with a large (for Mathematica) amount of data which reached up into the millions of data points.',
    section: 'tech'
  }

];
