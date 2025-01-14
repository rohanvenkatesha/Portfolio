// timelineData.ts

export type TabKey = "Education" | "Experience" | "Awards";

export interface TimelineItem {
  date: string;
  title: string;
  details: string;
  achievements?: string[];
  additionalDetails?: string;  // New field for additional details like who awarded
  gpa?: number;
  maxGpa?: number;
  logo?:string;
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
      gpa: 3.2,
      maxGpa: 4,
      logo:"/vtu.png",
    },
  ],
  Experience: [
    {
      date: "Aug 2021 – Mar 2023",
      title: "Senior Software Engineer",
      details: "Adetrez Labs, India",
      achievements: [
        "Spearheaded retail software projects, achieving 100% on-time delivery, resulting in $30K annual support cost savings and $50K revenue growth.",
        "Directed web apps and invoice management services for 50+ clients, serving 100K+ active users monthly, significantly enhancing customer lifetime value.",
        "Designed code reviews and automated testing pipelines, reducing deployment errors and production issues, accelerating timelines, saving 100+ hours per quarter and improving client retention.",
      ],
    },
    {
      date: "Aug 2019 – Apr 2021",
      title: "Systems Engineer",
      details: "Infosys Limited, India",
      achievements: [
        "Automated Oracle XStore deployment using Python and PowerShell, reducing setup time from 2 hours to 4 minutes, significantly improving operational efficiency.",
        "Collaborated on software system design, contributing to increased client success rates and $300K quarterly revenue growth.",
        "Enhanced team communication workflows for tracking real-time issues and resolution, minimizing project delays and elevating client feedback scores from 4.0 to 4.8 out of 5.",
        "Streamlined legacy data migration with Python, improving reliability by 99% and reducing downtime by 80 hours per project.",
      ],
    },
    {
      date: "Jan 2019 – May 2019",
      title: "Systems Engineer Trainee",
      details: "Infosys Limited, India",
      achievements: [
        "Optimized the 'Foodzito' website's order management system to handle 1M+ concurrent transactions.",
        "Coordinated with training peers to debug issues, improving problem resolution efficiency and increasing project throughput by completing 10 additional tasks per month.",
      ],
    },
    {
      date: "Jul 2018 – Nov 2018",
      title: "Software Developer Intern",
      details: "Xorail, India",
      achievements: [
        "Pioneered the 'Employee Attendance and Salary Management' app using Python, Flask API, and MySQL, reducing manual work for HR teams by 8 hours weekly.",
        "Revamped app performance with Python, eliminating data loss across 1,000+ records.",
      ],
    },
  ],
  "Awards": [
    {
      date: "Nov 2021 – Dec 2021",
      title: "Python Search Handler for SOP at Amazon Development Center",
      details:
        "Crafted a Python search handler for SOP at Amazon Development Center, Hyderabad, reducing access time by 95%, and provided crucial moral support to overseas employees during the COVID-19 pandemic.",
    },
    {
      date: "Apr 2020",
      title: "Insta Award",
      details:
        "Rohan is a budding talent. He is very committed and does his own analysis of requirements before starting the development. It is very important and rare quality one possesses as a fresher. His sense of responsibility is commendable. He is a pride of our team. Well done Rohan! Way to go....",
      additionalDetails:
        "Awarded by Dayananda Rai U P (Senior Technology Architect at Infosys Technologies Ltd).",
    },
    {
      date: "Jan 2017",
      title: "Runner-up at Open Day Project Exhibition",
      details: "Issued by Industry Institute Interaction Cell, Visvesvaraya Technological University",
      additionalDetails: "INDUSTRY INSTITUTE INTERACTION CELL proudly presents this CERTIFICATE OF EXCELLENCE to Rohan V in recognition of their outstanding achievement in winning the SECOND PRIZE in the PROJECT EXHIBITION for their exceptional project titled 'System Hacking.'"
    },    
  ],
};
