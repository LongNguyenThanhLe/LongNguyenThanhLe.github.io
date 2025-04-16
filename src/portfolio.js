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
  resumeLink: "", // Set to empty to hide the button
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
  title: "What I do 💻",
  subTitle: "PASSIONATE DEVELOPER EXPLORING TECH AND BUILDING COOL STUFF 🔎",
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
      duration: "August 2022 - April 2026 (Expected)",
      desc: "Passionate about problem-solving and technology, I’ve maintained a 3.81 GPA while working part-time and actively engaging in campus life.",
      descBullets: [
        "Scholarships: Awarded a half-funded scholarship for academic excellence.",
        "Dean's List: Recognized for outstanding performance for 5 consecutive semesters.",
        "Extracurriculars: Active in the International Students Association and tech-related student groups."
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
      role: "Incoming Resident Advisor",
      company: "Housing & Residence Life",
      companylogo: require("./assets/images/housinglife.png"),
      date: "Start from August 2025",
      descBullets: [
        "Selected as a Resident Advisor for the 2025-2026 academic year, responsible for fostering a positive living environment and supporting residents' needs.",
        "Participated in a rigorous selection process, demonstrating strong leadership and communication skills.",
        "Awarded free single-occupancy room and meal plan in recognition of leadership, responsibility, and commitment tocampus life."
      ]
    },
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
      role: "SEEUS SAFETY TEAM MEMBER",
      company: "EMU Police Department",
      companylogo: require("./assets/images/images.jpeg"),
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
  title: "Recent Projects 🌋",
  subtitle: "SOME GITHUB PROJECTS I HAVE WORKED ON 💪",
  projects: [
    {
      image: require("./assets/images/2.webp"),
      projectName: "Drone Competition",
      projectDesc:
        "This is a group project that I worked on with my classmates. We built a friendly-user interface application that can synchronize the data from drone and display the ranking of the drone in the competition.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://joshrandall.net/projects/drone/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/3.webp"),
      projectName: "Engage",
      projectDesc:
        "Engage (name tentative) is a mobile/web application that aims to host short form video content similar to TikTok, but have more of a focus on privacy and customization. The app will allow users to create and share short videos with each other and the world, and will prioritize privacy by considering algorithms that respect the user's agency and privacy. This aims to give the user more control of what they see, by subscribing to categories/sub-categories. Features that may be included are custom theming, new customization options for profiles, and more as development progresses. The app website will be developed using TypeScript, React, SCSS, npm, git, docker, and mysql.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ngage.lol"
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
    "Milestones that reflect my dedication, growth, and passion for technology and learning 〽️",

  achievementsCards: [
    {
      title: "Computer Science Department's Scholarship Award",
      subtitle:
        "One of the three students in the Computer Science Department to receive this monetary award.",
      image: require("./assets/images/scholar.png"),
      imageAlt: "scholar Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/18BRd0Uzw3fI2fvmPWTmiFLxgv-UA5H_V/view?usp=sharing"
        }
      ]
    },
    {
      title: "Dean's List",
      subtitle:
        "Recognized for outstanding academic performance for 5 consecutive semesters.",
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
      title: "Promotion to IT Help Desk Technician",
      subtitle:
        "Earned a promotion for exceptional problem-solving skills and dedication.",
      image: require("./assets/images/technician.png"),
      imageAlt: "emu Logo",
      footerLink: [
        {
          name: "View Promotion Letter",
          url: "https://drive.google.com/file/d/1DOBL7mjTmw2PHeRX5ZACR4-zMoV4jdrq/view?usp=sharing"
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
    "Discuss a project or just want to say hi? My Inbox is open for all 📬",
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
