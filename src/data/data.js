const generateImageUrls = (basePath, type, count) => {
  return Array.from(
    { length: count },
    (_, i) => `${basePath}/${i + 1}.${type}`
  );
};
export const projects = [
  {
    title: "CASSI (Convenient Assistant for Space Sharing Interactions)",
    description: "A full-stack web app for managing shared living spaces.",
    details:
      "CASSI is a full-stack web application designed to help house occupants manage their shared living space more efficiently. It includes features like user authentication, occupant management, activity trackers, task creation, reminders, to-do lists, and announcements. Currently in development are features such as automated alerts for upcoming due dates and the ability to upload and store important files.",
    images: generateImageUrls("/assets/cassi", "png", 5),
    stack: [
      "html",
      "css",
      "javascript",
      "reactjs",
      "nodejs",
      "express",
      "mongodb",
      "mongoose",
      "mui",
      "git",
    ],
    gitLink: "https://github.com/aramind/cassi",
    liveLink: "https://cassi-fbe1.onrender.com",
  },
  {
    title: "iLMS (Integrative Learning Management System)",
    description:
      "A platform for teachers and students to manage courses and learning materials.",
    details:
      "iLMS is a full-stack web application I developed for use in my classes at PUP-M. It provides a centralized platform where teachers can create and manage courses, invite students, upload materials (PDFs, links, exams, and video lectures), and monitor student performance. Students can enroll in courses, access all learning materials in one place—anytime and anywhere—and track their progress through each course. Progress is individually saved, allowing both teachers and students to monitor completion, submissions, and activity over time.Currently in development are additional features such as notifications, announcements, calendar integration, and file upload/download functionality.",
    images: generateImageUrls("/assets/ilms", "png", 4),
    stack: [
      "html",
      "css",
      "javascript",
      "reactjs",
      "nodejs",
      "express",
      "mongodb",
      "mongoose",
      "mui",
      "git",
    ],
    liveLink: "https://ilms-6l0w.onrender.com",
    gitLink: "https://github.com/aramind/ilms",
  },
  {
    title: "QueBEE Admin Portal",
    description:
      "A content management system for maintaining a reusable question pool designed to serve connected applications that require exam questions.",
    details:
      "QueBEE Admin Portal is a full-stack web application built primarily for administrators managing a centralized question bank. This system is intended to serve as a backend API for various web and mobile apps needing quality exam questions. Currently, the portal supports features such as user authentication, role-based access levels, and a robust interface for creating and managing questions. Each question can include detailed metadata such as correct answers, explanations, difficulty levels, tags, and topics for efficient filtering and organization. Admins can create questions individually or in bulk through import/export functionality using Excel or CSV files. Higher-level admins have additional privileges, including managing user accounts and permissions. While the portal currently functions as a comprehensive question management system, the next phase of development will enable API-based delivery of questions to client applications.",
    images: generateImageUrls("/assets/quebee", "png", 3),
    stack: [
      "html",
      "css",
      "javascript",
      "reactjs",
      "nodejs",
      "express",
      "mongodb",
      "mongoose",
      "mui",
      "git",
    ],
    liveLink: "https://quebee-admin.onrender.com",
    gitLink: "https://github.com/aramind/quebee-admin-portal",
  },
];

export const experiences = [
  {
    company: "PERCDC Learnhub",
    location: "Manila, Cebu, and Cavite, Philippines",
    roles: [
      { title: "Asst. Review Director", period: "May 2015 - Apr 2025" },
      { title: "Review Mentor", period: "May 2013 - Apr 2025" },
    ],
    highlights: [
      "Mentored over 5,000 Electronics Engineering (ECE) graduates, guiding them in preparation for the ECE and/or ECT licensure examinations with a high success rate.",
      "Played a central role in designing and continuously improving review programs across 20+ batches, directly contributing to increased student engagement and performance.",
      "Led the development of customized learning materials to address review-related challenges, enhancing content effectiveness and relevance.",
      "Spearheaded the digital transformation of the review process, integrating web and mobile technologies to improve accessibility and learner experience.",
      "Developed content for the mobile app and online review platform, ensuring consistent and high-quality learning experiences across channels.",
      "Contributed to the writing and enhancement of multiple review books, including practice problems and supplemental materials tailored to licensure exam standards.",
    ],
  },
  {
    company: "PUP Manila",
    location: "Manila, Philippines",
    roles: [
      { title: "Full-time Instructor", period: "Jun 2022 – Feb 2025" },
      { title: "Part-time Instructor", period: "Jun 2016 – Jun 2022" },
    ],
    highlights: [
      "Taught and mentored over 3,000 students in Electronics, Electrical, and Mechanical Engineering programs, delivering in-depth instruction in electronics and communication systems.",
      "Collaborated with the ECE department to evaluate and prepare graduating students for licensure exams, helping maintain a consistent record of topnotchers and above-average national passing rates for both the ECE and ECT board exams.",
      "Took initiative in creating targeted review content and pre-board assessments, identifying gaps in student readiness and tailoring instruction to meet professional standards.",
      "Actively contributed to curriculum enhancement by incorporating real-world problem-solving exercises, fostering analytical thinking and applied technical skills.",
    ],
  },
  {
    company: "Universal College of Parañaque",
    location: "Parañaque, Philippines",
    roles: [{ title: "Part-time Instructor", period: "Jan 2017 – Mar 2023" }],
    highlights: [
      "Delivered instruction in mathematics, allied sciences, electronics, and communication systems to students in the ECE, EE, IE, and CpE programs, fostering both theoretical understanding and practical application.",
      "Played a key role in preparing graduating students—especially in the ECE and EE departments—for licensure exams, contributing to the school’s consistently above-national average passing rates.",
      "Developed and implemented board-exam readiness activities and diagnostic evaluations tailored to student needs, supporting improved academic outcomes.",
    ],
  },
  {
    company: "QuexBook",
    location: "Cavite, Philippines",
    roles: [
      {
        title: "Academic Content Developer & Evaluator",
        period: "Jan 2016 – Dec 2023",
      },
    ],
    highlights: [
      "Contributed educational content for the QuexBook app, designed to support high school and college students in mastering core academic subjects.",
      "Reviewed and evaluated content of the mobile app to ensure accuracy, clarity, and alignment with target outcomes.",
      "Played a key role in planning and enhancing the app’s educational structure, improving user experience and learning effectiveness.",
    ],
  },
  {
    company: "ACLC College of Manila",
    location: "Manila, Philippines",
    roles: [{ title: "Part-Time Instructor", period: "Jun 2019 – Mar 2020" }],
    highlights: [
      "Taught foundational Math and Science courses to students in the Information Systems program.",
      "Helped students in their understanding and academic success in core subjects.",
    ],
  },
  // {
  //   company:
  //     "Various Colleges and Universities across NCR, Region III, IV, and V",
  //   location:
  //     "Various Colleges and Universities across NCR, Region III, IV, and V",
  //   roles: [{ title: "Visiting Lecturer", period: "May 2013 – June 2023" }],
  //   highlights: [
  //     "Partnered with academic institutions to strengthen board exam readiness among graduating engineering students.",
  //     "Conducted intensive review sessions and strategy-based lectures tailored to institutional needs and student performance trends.",
  //     "Contributed to improved licensure exam outcomes, with many partner schools.",
  //   ],
  // },
];

export const about = {};
