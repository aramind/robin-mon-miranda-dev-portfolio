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
    // images: [
    //   "/assets/cassi/1.png",
    //   "/assets/cassi/2.png",
    //   "/assets/cassi/3.png",
    //   "/assets/cassi/4.png",
    //   "/assets/cassi/5.png",
    // ],
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
