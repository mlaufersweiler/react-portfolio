import React from "react";

let context = require.context("../../images", true, /\.(jpg|png|PNG)$/);
let images = {};

context.keys().forEach(filename => {
  let key = filename.replace(/-/g, "_").split(/[^A-Za-z0-9_]/)[2];
  images[key] = context(filename);
});
export default [
  {
    title: "Hiker",
    link: "http://hiker.world/#/",
    github: "https://github.com/mlaufersweiler/hiker1",
    techs:
      "React | Redux | Node | Express | Massive | PostgreSQL | Axios | Bcrypt | Node-Cron | Twilio | TwiML | Nodemailer | Moment.js | HTML5 | Styled Components | CSS3",
    info: (
      <div>
        Responsive hiking trip planning tool with alert notification SMS messages to keep yourself safe in the backcountry. <i>More images on Github</i>
      </div>
    ),
    details: `Hiker is a responsive trip planning tool & alert system to keep hikers safe in the backcountry. It allows hikers to browse resources, review a trip checklist, set up an alert that will check on them via text to see if they've returned on their expected end date. If the hiker doesn't respond within the hour, Hiker will text and email the hiker's designated contact with the full trip itinerary, along with directions on how to report a missing hiker.`,
    image: [images.hikerlanding],
    tag: "#61DAFB",
    type: "Full Stack React, Node, Express, PostgreSQL"
  },
  {
    title: "Fantasy Football Legacy",
    link: "http://www.fantasy-legacy-tracker.club/#/",
    github: "https://github.com/legacy-tracker/legacy-tracker",
    techs:
      "React | Redux | Node | Express | Massive | PostgreSQL | Axios | Bcrypt | NFL Fantasy API | Chart.js | SASS | Crypess | JEST | HTML5 | CSS3",
    info: (
      <div>
        The Fantasy Football Legacy app allows users to easily track NFL teams, players, and news around the league. <i>More images on Github</i>.
      </div>
    ),
    details: `You can quickly step up your fantasy football teams from years past, dating back to 2016, or simply track 12 specific players to add to a roster. With current news loading daily, you can keep yourself updated on all things fantasy football around the league, or filter your news specifically to your favorite team. Once you create your first team, a user can access individual player cards that showcase the players 2019 game log, their news, and charts showing their main stats from 2016 to projected 2019.`,
    image: [images.ffteamsdash],
    tag: "#61DAFB",
    type: "Full Stack React, Node, Express, PostgreSQL"
  },
  {
    title: "WhatToWatch",
    link: "https://mlaufersweiler.github.io/WhatToWatch/#/",
    github: "https://github.com/mlaufersweiler/WhatToWatch",
    techs: "React | Redux | Bootstrap | OMDb API | Redux-Thunk | Axios | Github Pages |",
    info: (
      <div>
        Search for your favorite movie or TV show to find out all sorts of
        information with a click of a button, using the open movie database API.
         <i>More images on Github</i>.
      </div>
    ),
    details: `Search for your favorite movie or TV show to find out all sorts of
        information with a click of a button, using the open movie database API.`,
    image: [images.W2Wlanding],
    tag: "#DB211C",
    type: "React-Redux"
  }
];
