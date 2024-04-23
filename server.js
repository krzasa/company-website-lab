const express = require('express');
const app = express();
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'
require('dotenv').config();


// Attribution: Most of the paragraphs were provided by ChatGPT
const home = "Welcome to Notes – where your ideas find a home. Whether you're a student, professional, or creative thinker, our note-taking app is your companion in capturing and organizing thoughts seamlessly. With intuitive design and powerful features, Notes empowers you to transform inspiration into action effortlessly. Say hello to a clutter-free mind and hello to productivity. Join us, and let's embark on a journey of creativity, organization, and success together. Welcome to your new favorite note-taking app.";
const about = "At Notes, we're passionate about helping you capture your thoughts, ideas, and inspirations effortlessly. Our mission is to provide intuitive, innovative notetaking solutions that empower individuals and teams to organize, collaborate, and succeed. Whether you're a student, professional, or creative thinker, our tools are designed to adapt to your unique needs, enhancing productivity and creativity along the way. Join us on the journey to unlock the full potential of your notes, and make every moment count with Notes.";
const us = ["Innovative Technology: We pride ourselves on staying ahead of the curve, leveraging cutting-edge technology to deliver notetaking solutions that are intuitive, efficient, and reliable.", "Customizable Experience: Our platform offers a range of customization options, allowing you to tailor your notetaking experience to suit your specific preferences and workflow.", "Seamless Collaboration: Whether you're working solo or as part of a team, our tools facilitate seamless collaboration, enabling you to share, edit, and brainstorm ideas effortlessly."];

const testimonials = [
  {
    name: "Sarah Johnson",
    desc: `"I've tried numerous notetaking apps, but none have come close to the functionality and simplicity of Note's app. It's intuitive, easy to use, and has truly revolutionized the way I organize my thoughts and ideas. Highly recommend!"`
  },
  {
    name: "Michael Chang",
    desc: `"As a student, staying organized is crucial, and Note's app has been a game-changer for me. Its seamless integration across all my devices means I can access my notes anytime, anywhere, and its collaboration features have been invaluable for group projects. Thank you, Note, for making my academic life so much easier!"`
  },
  {
    name: "Emily Rodriguez",
    desc: `"I've been using Note's notetaking app for both personal and professional purposes, and I couldn't be happier with it. The ability to customize my notes to fit my workflow, coupled with its robust features like tagging and search functionality, has significantly boosted my productivity. It's a must-have tool for anyone looking to streamline their workflow and stay organized."`
  }
];

const staffMem = [
  {
    name: "Michael Roberts",
    nickname: `Visionary`,
    position: `CEO`,
    favFeature: `Tagging system for organizing and quickly finding specific notes`,
    bio: `As the CEO, Michael provides the overarching vision and direction for the note-taking app company. With his leadership skills and business acumen, he sets ambitious goals and leads the team toward achieving them. Michael fosters a culture of innovation and collaboration, empowering team members to strive for excellence.`,
  },
  {
    name: "Jennifer Wu",
    nickname: `TechGenius`,
    position: `CTO (Chief Technology Officer)`,
    favFeature: `Optical Character Recognition (OCR) for scanning and digitizing text from images in notes`,
    bio: `Jennifer, the CTO, is the technical genius behind the note-taking app's architecture and development process. With her deep knowledge of technology and software development best practices, she drives the technical strategy and ensures that the app is built to scale and perform flawlessly. Jennifer is constantly exploring new technologies and methodologies to keep the app ahead of the curve.`,
  },
  {
    name: "Ryan Lee",
    nickname: `MarketMaestro`,
    position: `Marketing Manager`,
    favFeature: `Audio recording with synchronized note-taking for capturing meeting discussions`,
    bio: `Ryan is the mastermind behind the marketing strategy for the note-taking app. With his creative ideas and strategic thinking, he drives user acquisition, engagement, and retention through various channels. Ryan keeps a pulse on market trends and user feedback to tailor marketing efforts and ensure the app's success in a competitive landscape.`,
  },
  {
    name: "Alex Johnson",
    nickname: `SupportWhiz`,
    position: `Customer Support Specialist`,
    favFeature: `Handwriting recognition for converting handwritten notes to digital text`,
    bio: `Alex is the friendly face behind customer support for the note-taking app. With his patient demeanor and technical expertise, he assists users with any questions or issues they encounter while using the app. Alex goes above and beyond to ensure that every user has a positive experience and gets the help they need.`,
  },
  {
    name: "Emily Nguyen",
    nickname: `ProdMaster`,
    position: `Product Manager`,
    favFeature: `Integration with cloud storage platforms for seamless access across devices`,
    bio: `As the Product Manager, Emily oversees the development and enhancement of the note-taking app. She is responsible for setting the product roadmap, prioritizing features, and ensuring that the app meets the needs of its users. Emily works closely with the development team, designers, and other stakeholders to deliver a product that exceeds expectations.`,
  },
  {
    name: "David Patel",
    nickname: `DesignGuru`,
    position: `UX/UI Designer`,
    favFeature: `Customizable color themes for organizing notes`,
    bio: `David is the creative force behind the user interface and experience of the note-taking app. His eye-catching designs and intuitive user interfaces make the app visually appealing and easy to navigate. With a keen understanding of user behavior, David ensures that every interaction with the app is smooth and intuitive`,
  },
  {
    name: "Sarah Chang",
    nickname: `CodeSavvy`,
    position: `Senior Software Engineer`,
    favFeature: `Markdown support for formatting notes`,
    bio: `As a Senior Software Engineer, Sarah is the backbone of the development team. With her expertise in coding and problem-solving skills, she ensures that the note-taking app's software is robust, efficient, and bug-free. She's passionate about optimizing the app's performance and enhancing its features for a seamless user experience.`,
  },
];

app.get('/sitemap', (req, res) => {
  let links = [] // each decalered object property will go here
  staffMem.forEach(element => {

    if (element.nickname === "Visionary") {
      links.push("/staff/Visionary")
    }
    if (element.nickname === "TechGenius") {
      links.push("/staff/TechGenius")
    }
    if (element.nickname === "MarketMaestro") {
      links.push("/staff/MarketMaestro")
    }
    if (element.nickname === "SupportWhiz") {
      links.push("/staff/SupportWhiz")
    }
    if (element.nickname === "ProdMaster") {
      links.push("/staff/ProdMaster")
    }
    if (element.nickname === "DesignGuru") {
      links.push("/staff/DesignGuru")
    }
    if (element.nickname === "CodeSavvy") {
      links.push("/staff/CodeSavvy")
    }
  });

  res.render('sitemap.ejs', {
    michael: links[0],
    jennifer: links[1],
    ryan: links[2],
    alex: links[3],
    emily: links[4],
    david: links[5],
    sarah: links[6],
  });
})

app.get('/contact', (req, res) => {
  res.render('contact.ejs');
})

app.get('/staff/:member', (req, res) => {
  const mem = req.params.member //members are categorized by their nicknames
  let membs = [] // each decalered object property will go here
  staffMem.forEach(element => {

    if (mem === "Visionary" && element.nickname === "Visionary") {
      membs.push(element)
    }
    if (mem === "TechGenius" && element.nickname === "TechGenius") {
      membs.push(element)
    }
    if (mem === "MarketMaestro" && element.nickname === "MarketMaestro") {
      membs.push(element)
    }
    if (mem === "SupportWhiz" && element.nickname === "SupportWhiz") {
      membs.push(element)
    }
    if (mem === "ProdMaster" && element.nickname === "ProdMaster") {
      membs.push(element)
    }
    if (mem === "DesignGuru" && element.nickname === "DesignGuru") {
      membs.push(element)
    }
    if (mem === "CodeSavvy" && element.nickname === "CodeSavvy") {
      membs.push(element)
    }
  });

  res.render('member.ejs', {
    name: membs[0].name,
    nickname: membs[0].nickname,
    position: membs[0].position,
    feature: membs[0].favFeature,
    bio: membs[0].bio,
  })
})

app.get('/staff', (req, res) => {
  res.render('staff.ejs', {
    staffList: staffMem
  });
})


app.get('/testimonials', (req, res) => {
  res.render('testimonials.ejs', {
    testi: testimonials
  });
})

app.get('/about', (req, res) => {
  res.render('about.ejs', {
    aboutUs: about,
    whyUs: us,
  });
});

app.get('/', (req, res) => {
  res.render('home.ejs', {
    homeDesc: home
  })
});

app.listen(3000);
