import linkedInIcon from "./icons/linkedin.svg";
import githubIcon from "./icons/github-small-blue.svg";

export const projectsData = [
  {
    id: 5,
    date: "05-02-2024",
    complete: true,
    name: "Asylum Information Display",
    url: false,
    githubUrl: "https://github.com/percouple/asylum-rg-fe-starter",
    description:
      "A platform for asylum seekers, government officials, and statisticians to interact with publicly available statistics on the grant rates of asylum seekers in the US.",
    imgUrl: "",
    stack: "JS, CSS, React, Jest, HRF API, Axios",
  },
  {
    id: 4,
    date: "01-30-2024",
    complete: false,
    name: "Metronome App",
    url: false,
    githubUrl: "https://github.com/percouple/desktop-met",
    description:
      "Easily accessible metronome for universal use on desktops. Utilizing primarily Java for this build, I'm constructing a product that aims to be quick, efficient, effective, and easy to use.",
    imgUrl: "",
    stack: "Java, Maven",
  },
  {
    id: 2,
    date: "01-30-2024",
    complete: false,
    name: "NASA Image Generator",
    url: false,
    githubUrl: "https://github.com/percouple/NASA-photo-of-the-day",
    description:
      "Generates publicly available images of NASA, astronauts, space, and more using axios to fetch from the NASA API.",
    imgUrl: "./projects-files/NASA.png",
    stack: "JS, React.js, HTML, CSS, Axios, Jest",
  },

  {
    id: 1,
    date: "03-14-2024",
    complete: false,
    name: "Browser Timesheet",
    url: false,
    githubUrl: "https://github.com/percouple/personal-timesheet.1",
    description:
      "A browser application for keeping track of weekly time spent on projects. This was developed shortly after I moved to freelance work.",
    imgUrl: "",
    stack: "JS, React.js, HTML, CSS, Node, Auth0",
  },
];

export const iconLinks = [
  {
    id: 0,
    name: "github",
    icon: githubIcon,
    alt: "github link",
    url: "https://github.com/percouple",
  },
  {
    id: 1,
    name: "linkedIn",
    icon: linkedInIcon,
    alt: "linkedIn link",
    url: "https://www.linkedin.com/in/calebsevan/",
  },
];

export const blogData = [
  {
    id: 1,
    date: "02-01-2024",
    title: "Locality through Globality",
    text: '"The man who lives in a small community lives in a much larger world." Through the increasing connectivity of our world through technology, huge distances are cut to mere fractions of what they once were. Where once a person waited days for letters to arrive from the next town over, we have almost instant communication from anywhere in the world at any time. Where once people needed to go to a local library or school to access the internet, many (if not most) now have a port to the outside world from the comfort of their homes. We obviously gain much through this improved technology, and many people’s lives are vastly improved by the use of these technologies. The question I’d like to pose (rather bluntly) is, “What have we lost? And how can we get it back?”. The rise of internet subcultures on message boards/youTube/whatever else seems like it is predicting a decay of local, that is to say, neighborly culture. This is 100% an anecdotal thought, so take it with a grain of salt, but it seems that we’ve lost a grounding in the “local” culture of their world. We have a decreased awareness of our next-door neighbors and their lives - instead socializing with those whom we are more like-minded who may physically be in the next town, the next state, or the next country over. No doubt, the ability to faceTime and send messages across far distances to people that we care about is not a negative thing. But, to honestly answer the question posed: at the very least, if we gave a little more attention to these relationships, we would live in a slightly more selfless and compassionate world. Most people have an easier time doing a good thing for “Greg, the software developer with two kids and a collie” than doing something nice for “the bad-hydrangeas and noisy house guy.” So, how do we do maintain the advantages of globalized connectivity without sacrificing the local connectivity that helps us be human? It’s a good question, that doesn’t have a lot of easy answers. I’ve got a couple ideas floating around that I hope will help address this. If this piques your interest, let me know, and we can brainstorm something together! “The man who lives in a small community lives in a much larger world. He knows much more of the fierce variety and uncompromising divergences of men…In a large community, we can choose our companions. In a small community, our companions are chosen for us. Thus in all extensive and highly civilized society groups come into existence founded upon sympathy, and shut out the real world more sharply than the gates of a monastery. There is nothing really narrow about the clan; the thing which is really narrow is the clique.” - G.K. Chesterton',
    imgUrl: "",
  },
  {
    id: 2,
    date: "01-30-2024",
    title: "We're Live!",
    text: "Relic relic relic opus Dei diocese transubstantiation monsignor vicar of Christ dogma Paschal mystery seal of confession Papal enclave Cistercian saint medal. Catechesis opus Dei monk encyclical vicar of Christ saint triduum seal of confession saint medal priest saint medal priest transubstantiation.",
    imgUrl: "https://picsum.photos/200/200",
  },
];
