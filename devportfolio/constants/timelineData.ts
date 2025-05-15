// timelineData.ts

export type TabKey = "Education" | "Experience" | "Awards";

export interface TimelineItem {
  date: string;
  title: string;
  details: string;
  achievements?: string[];
  additionalDetails?: string;  // New field for additional details like who awarded
  additionalImage?: string;
  gpa?: number;
  maxGpa?: number;
  logo?:string;
  workType?: string;
  startDate?:string;
  endDate?:string;
  // yearsOfExperience?:number;
  internshipYears?:number;
  fullTimeYears?:number;
  partTimeYears?:number;
}

export const timelineData: Record<TabKey, TimelineItem[]> = {
  Education: [
    {
      date: "Aug 2023 – Apr 2025",
      title: "Masters in Computer Science",
      details: "Western Michigan University, USA",
      gpa: 3.75,
      maxGpa: 4,
      logo:"/wmu.png",
    },
    {
      date: "Aug 2015 – Jul 2019",
      title: "B.E. in Computer Science & Engineering",
      details: "Visvesvaraya Technological University, India",
      gpa: 3.3,
      maxGpa: 4,
      logo:"/vtu.png",
    },
  ],
"Experience": [
  {
    "date": "May 2025 – Present",
    "title": "Full Stack Engineer",
    "details": "Gabriel AI, United States",
    "achievements": [
      "Collaborating with cross-functional teams to build scalable digital solutions and responsive UIs using TypeScript and React/Next.js.",
      "Contributing to technical architecture and early-stage development of an AI-powered SaaS platform using Django, FastAPI, Docker, and AWS (Lambda, S3).",
      "Participating in design discussions, leveraging object-oriented design principles to ensure code efficiency, scalability, and maintainability across the stack.",
      "Supporting seamless integration of AI voice agents and automation features to enhance user engagement and overall product capability."
    ],
    "workType": "Full-time",
    "startDate": "May 2025",
    "partTimeYears": 0,
    "internshipYears": 0,
    "fullTimeYears": 0.1
  },
  {
    "date": "Aug 2023 – Apr 2025",
    "title": "Student Manager (Part-time On Campus)",
    "details": "Western Michigan University, Kalamazoo, Michigan, United States",
    "achievements": [
      "Demonstrated strong team leadership and management skills by supervising daily operations and coordinating tasks effectively.",
      "Enhanced interpersonal communication and critical thinking abilities by resolving student concerns and ensuring a smooth workflow.",
      "Successfully managed time-sensitive projects, balancing academic responsibilities with part-time work."
    ],
    "workType": "Part-time",
    "startDate": "Aug 2023",
    "partTimeYears": 1.8,
    "internshipYears": 0,
    "fullTimeYears": 0
  },
  {
    "date": "Aug 2021 – Mar 2023",
    "title": "Senior Software Engineer",
    "details": "Adetrez Labs, India",
    "achievements": [
      "Optimized real-time object detection pipelines with YOLOv5 and OpenCV, reducing over 70,000 daily server calls via client-side Redis caching.",
      "Spearheaded cloud migration of 15+ applications to AWS and Azure, saving monthly costs by $1,200 and saving over $14,000 annually.",
      "Streamlined CI/CD pipelines using Jenkins, GitLab, Python scripts, and Terraform, improving deployment time from over an hour to under 15 minutes.",
      "Established structured code reviews and component-based design patterns, saving 100+ hours per quarter through effective collaboration and problem-solving."
    ],
    "workType": "Full-time",
    "startDate": "Aug 2021",
    "partTimeYears": 0,
    "internshipYears": 0,
    "fullTimeYears": 1.7
  },
  {
    "date": "Nov 2021 – Dec 2021",
    "title": "CRC Senior Associate",
    "details": "Amazon Development Center, India",
    "achievements": [
      "Crafted a Python search handler for SOP, reducing access time by 90%, while providing crucial moral support to overseas employees during the Covid-19 pandemic.",
      "Provided on-call support, handling inquiries related to pay slips, leave requests, and document approval.",
      "Utilized Kronos to support and address billing-related queries from Amazon employees."
    ],
    "workType": "Full-time",
    "startDate": "Nov 2021",
    "partTimeYears": 0,
    "internshipYears": 0,
    "fullTimeYears": 0.1
  },
  {
    "date": "Jan 2019 – Apr 2021",
    "title": "Systems Engineer",
    "details": "Infosys Limited, India",
    "achievements": [
      "Developed scalable RESTful APIs handling 500K+ requests per hour, ensuring security and access control using OAuth2 and JWT.",
      "Designed and deployed 12+ microservices with Python (FastAPI, Flask, Django) and Node.js, maintaining 99.98% uptime and supporting 1M+ daily requests.",
      "Accelerated API performance (200ms to 80ms) through load balancing, query tuning, and debugging to enhance system stability.",
      "Recognized with the 'Insta Award' for driving development efficiency and delivering high-quality code early in the project lifecycle."
    ],
    "workType": "Full-time",
    "startDate": "Jan 2019",
    "partTimeYears": 0,
    "internshipYears": 0,
    "fullTimeYears": 2.3
  },
  {
    "date": "Jul 2018 – Nov 2018",
    "title": "Software Developer Intern (Internship)",
    "details": "Xorail - A Wabtec Corporation, India",
    "achievements": [
      "Pioneered the 'Employee Attendance and Salary Management' app using Python, Flask API, and MySQL, reducing manual work for HR teams by 8 hours weekly.",
      "Revamped app performance with Python, eliminating data loss across 1,000+ records."
    ],
    "workType": "Internship",
    "startDate": "Jul 2018",
    "partTimeYears": 0,
    "internshipYears":0.4,
    "fullTimeYears":0,
  },
  {
    "date": "Aug 2017",
    "title": "Intern (Internship)",
    "details": "LIVEWIRE, India",
    "achievements": [
      "Gained expertise in Kali Linux and Metasploit framework, improving threat detection accuracy by 30%.",
      "Strengthened digital asset protection strategies by 20% and increased phishing threat awareness by 15%."
    ],
    "workType": "Internship",
    "startDate": "Aug 2017",
    "partTimeYears": 0,
    "internshipYears":0.1,
    "fullTimeYears":0,
  }
],
  "Awards": [
    {
      date: "Apr 2025",
      title: "Celebration of Excellence",
      additionalDetails:
        "Celebration of Excellence in honor of your outstanding excellence, we hereby present 'Rohan Venkatesha' for contributing to the cultural diversity of the WMU community as a scholar and person.",
      details:
        "Issued by Office of Diversity and Inclusion, Western Michigan University",
      additionalImage: "/awards/coe_rv.jpg"
    },
    {
      date: "Apr 2020",
      title: "Insta Award",
      additionalDetails:
        "Rohan is a budding talent. He is very committed and does his own analysis of requirements before starting the development. It is very important and rare quality one possesses as a fresher. His sense of responsibility is commendable. He is a pride of our team. Well done Rohan! Way to go....",
      details:
        "Awarded by Dayananda Rai U P (Senior Technology Architect at Infosys)",
      additionalImage: "/awards/infosys_insta_award.png"
    },
    {
      date: "Jan 2017",
      title: "Runner-up at Open Day Project Exhibition",
      details: "Issued by Industry Institute Interaction Cell, Visvesvaraya Technological University",
      additionalImage: "/awards/openday.jpeg",
      additionalDetails: "Awarded the Certificate of Excellence by the Industry Institute Interaction Cell for securing the Second Prize in the Project Exhibition. Recognized for outstanding performance and innovation in the development of the project titled 'System Hacking.'",
    },    
  ],
};
