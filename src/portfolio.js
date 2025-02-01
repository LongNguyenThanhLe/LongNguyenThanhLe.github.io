/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation // 3sec
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "LongNguyenThanhLe",
  title: "Hello, I'm Long (Jackson) Le",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1WXiRgywf7ZTFiRji1uNjqGkSa-Qep9Dk/edit", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/LongNguyenThanhLe",
  linkedin: "https://www.linkedin.com/in/long-nguyen-thanh-le/",
  gmail: "tlenguye@emich.edu",
  gitlab: "https://gitlab.com/LongNguyenThanhLe",
  facebook: "https://www.facebook.com/",
  instagram:
    "https://www.instagram.com/jackson.le_?igsh=ZHZmbGN3c2w0YXN1&utm_source=qr",
  stackoverflow:
    "https://stackoverflow.com/users/29304223/long-nguyen-thanh-le",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DEVELOPER EXPLORING TECH AND BUILDING COOL STUFF",
  skills: [
    emoji("⚡ Creating interactive and user-friendly front-end experiences"),
    emoji("⚡ Building dynamic web apps with modern frameworks and tools"),
    emoji("⚡ Integrating third-party services like Firebase, AWS, and more")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Eastern Michigan University",
      logo: require("./assets/images/emu1.png"),
      subHeader: "Bachelor of Science in Computer Science Applied",
      duration: "August 2022 - April 2026",
      desc: "Maintained a 3.81 GPA while working part-time and participating in extracurricular activities.",
      descBullets: [
        "Scholarships: Half funded scholarship at Eastern Michigan University.",
        "Dean's List: 5 semesters in a row."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT HELP DESK TECHNICIAN",
      company: "Eastern Michigan University",
      companylogo: require("./assets/images/emu1.png"),
      date: "January 2023 – Present",
      desc: "Provide prompt technical support to university students, faculty, and staff, resolving issues with hardware, software, and network connectivity to ensure optimal system performance and user satisfaction.",
      descBullets: [
        "Enhanced prompt access to university systems and resources by resolving technical issues for over 200 students, faculty, and staff each month, reducing downtime and boosting productivity for campus users.",
        "Boosted first-call resolution rates by 30% through effective collaboration with IT professionals to escalate complex issues, resulting in faster problem resolution and enhanced user satisfaction across the university."
      ]
    },
    {
      role: "HOUSING ENGAGEMENT SPECIALIST",
      company: "Police Department",
      companylogo: require("./assets/images/seeus.png"),
      date: "January 2023 – May 2023",
      desc: "Maintained a 95% guest satisfaction rate by ensuring a welcoming check-in process and strict adherence to security protocols."
    },
    {
      role: "SEEUS SAFETY TEAM MEMBER",
      company: "Police Department",
      companylogo: require("./assets/images/seeus.png"),
      date: "September 2022 – May 2023",
      desc: "Increased campus safety by providing escorts to over 200 individuals, contributing to a 30% improvement in student satisfaction with campus security."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Recent Projects",
  subtitle: "SOME GITHUB PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/drone.jpeg"),
      projectName: "Drone Competition",
      projectDesc:
        "This is a group project I am currently working on for my database course. The end goal is to create an “obstacle course”, and have users compete to get the lowest time and see if they can reach the leaderboard for the fastest completion.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://joshrandall.net/projects/drone/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/emu.png"),
      projectName: "Engage",
      projectDesc:
        "Short video sharing platform for students to share their daily life and thoughts.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://engage.joshrandall.net"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "4WARD Graduation Scholarship",
      subtitle: "Half funded scholarship.",
      image: require("./assets/images/scholar.webp"),
      imageAlt: "scholar Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1m6Cj3_gi3zK1W5w51D9uh29f8KVgP5UE/view?usp=sharing"
        }
      ]
    },
    {
      title: "Dean's List",
      subtitle: "5 semesters in a row.",
      image: require("./assets/images/emu1.png"),
      imageAlt: "EMU Logo",
      footerLink: [
        {
          name: "View Dean's List",
          url: "https://www.emich.edu/deans-list/index.php"
        }
      ]
    },

    {
      title: "Technician Promotion",
      subtitle:
        "Provide support, troubleshooting, and training regarding end user software and hardware, and answer network inquiries from the entire university community including students, faculty, and staff.",
      image: require("./assets/images/emu1.png"),
      imageAlt: "emu Logo",
      footerLink: [
        {
          name: "Promotion Letter",
          url: "https://drive.google.com/file/d/12fkK8BLolINR39mJdvhi_qJXQfdGTt90/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (734) 219-1857",
  email_address: "tlenguye@emich.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
