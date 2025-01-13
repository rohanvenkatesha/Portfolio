const cards = [
    {
      src: '/portf.png', // Ensure you use unique images for each project
      title: 'License Plate Detection and Recognition',
      description: 'This project involves detecting and recognizing license plates from images using YOLOv5 for detection and PaddleOCR for recognition.',
      skills: ['YOLOv5', 'PaddleOCR', 'Flask', 'Database Storage', 'API Integration'],
      githubLink: 'https://github.com/rohanvenkatesha/License-Plate-Detection-using-Yolov5-and-Recognition-using-PaddleOCR',
    },
    {
      src: '/portf.png',
      "title": "Railway Reservation Flask Backend API Testing",
      "description": "This repository contains a Flask-based backend API for a railway reservation system. The API allows users to register, log in, view available trains, and reserve tickets. It demonstrates Flask integration with a MySQL database and is designed for testing purposes.",
      "skills": ["Flask", "REST API", "MySQL", "Backend Development", "API Testing"],
      "githubLink": "https://github.com/rohanvenkatesha/Railway-Reservation-Flask-Backend-API-Testing"
    },
    {
      src: '/portf.png', // Update with unique project image
      title: 'Retrieval Augmented Generation Chatbot',
      description: 'This project involves analyzing PDFs and images, allowing users to ask content-based questions using Streamlit, LangChain, FAISS, and Google Generative AI.',
      skills: ['Streamlit', 'LangChain', 'FAISS', 'Google Generative AI', 'Python', 'NLP'],      
      githubLink: 'https://github.com/rohanvenkatesha/Retrieval-Augmented-Generation-RAG-Chatbot',
    },
    {
      src: '/portf.png', // Update with unique project image
      title: ' Sarcasm Detection Using Natural Language Processing',
      description: 'This project implements a sarcasm detection system using Flask and NLP, allowing users to input sentences and check for sarcasm. It also includes a text-to-speech (TTS) system using Google TTS for auditory feedback.',
      skills: ['Flask', 'NLP', 'Google TTS', 'Python', 'Web Development', 'Text-to-Speech'],      
      githubLink: 'https://github.com/rohanvenkatesha/Sarcasm-Detection-using-Natural-Language-Processing',
    },
    {
      "src": "/portf.png",
      "title": "ClaimIT: Elevating Insurance and Simplifying Claims",
      "description": "ClaimIT is an innovative platform aimed at revolutionizing the insurance industry by automating claims processing and enhancing customer satisfaction. Leveraging AI-driven solutions for real-time decision-making, accurate damage assessments, and seamless integration with existing insurer platforms, ClaimIT simplifies the insurance claim experience, reduces operational costs, and builds customer trust. Watch the trailer on YouTube: [YouTube Link].",
      "skills": ["AI", "Machine Learning", "Insurance Technology", "Python", "React.js", "Cloud Computing", "Automation", "Fraud Detection"],
      "githubLink": "https://github.com/rohanvenkatesha/ClaimIT"
    },    
    {
      src: '/portf.png', // Ensure you use unique images for each project
      "title": "Face Mask Detection Using YOLOv5",
      "description": "This project implements a face mask detection system using YOLOv5. It utilizes the Kaggle dataset for face mask detection and provides a streamlined process for training, testing, and inference.",
      "skills": ["YOLOv5", "Computer Vision", "Kaggle Dataset", "Training and Testing"],
      "githubLink": "https://github.com/rohanvenkatesha/Face-Mask-Detection-Using-Yolov5"
    },
    {
      "src": "/portf.png",
      "title": "Market Basket Apriori Analysis",
      "description": "This project implements the Apriori Algorithm for Market Basket Analysis, aimed at identifying frequent itemsets and generating association rules from grocery store transaction data. It provides insights into customer purchasing behavior, helping businesses optimize product placement, promotions, and inventory management. This is also a big data project applying the Apriori algorithm to large datasets.",
      "skills": ["Apriori Algorithm", "Market Basket Analysis", "Big Data", "Python", "Data Mining", "mlxtend", "Pandas", "Matplotlib"],
      "githubLink": "https://github.com/rohanvenkatesha/MarketBasket-Apriori-Analysis"
    },    
    {
      src: '/portf.png', // Ensure you use unique images for each project
      "title": "Deep Learning Approach for Hate Speech Detection",
      "description": "This project demonstrates a deep learning-based approach for detecting hate speech in text using a Django web application. Users can input text, and the system will classify it as hate speech or not, providing a simple and effective interface for real-time predictions.",
      "skills": ["Deep Learning", "Django", "Text Classification", "Real-time Predictions"],
      "githubLink": "https://github.com/rohanvenkatesha/Deep-Learning-Approach-for-Hate-Speech-Detection"
    },
    {
      src: '/portf.png', // Ensure you use unique images for each project
      "title": "Basic Search Engine",
      "description": "This project involves building a simplified document search engine, similar in concept to major search engines like Google, Bing, and Yahoo. The search engine efficiently finds web pages matching user queries, providing a foundation for understanding the underlying technology used in modern search engines.",
      "skills": ["Search Engine", "Query Processing", "Document Indexing", "Information Retrieval"],
      "githubLink": "https://github.com/rohanvenkatesha/Basic-Search-Engine"
    },
    {
      src: "/portf.png",
      "title": "UDP Client-Server Interaction",
      "description": "This project demonstrates UDP client-server communication where the client sends message packets to the server. It includes steps for compiling and running the server and client programs, along with a test script for automation.",
      "skills": ["C Programming", "UDP", "Client-Server Communication", "Linux", "Networking"],
      "githubLink": "https://github.com/rohanvenkatesha/UDP-Client-Server-Interaction"
    },    
    {
      src: '/portf.png', // Ensure you use unique images for each project
      "title": "Lexical Analyzer for Cminus Programming Language",
      "description": "This repository implements a Lexical Analyzer for the Cminus programming language. It reads Cminus source code and outputs a sequence of tokens representing fundamental elements of the code, which are then passed to the parser for further analysis.",
      "skills": ["Lexical Analysis", "PLY (Python Lex-Yacc)", "Tokenization", "Compiler Design"],
      "githubLink": "https://github.com/rohanvenkatesha/Lexical-Analyzer-for-Cminus-Programming-Language"
    },
    {
      src: '/portf.png',
      "title": "Parser for Cminus Programming Language",
      "description": "This repository implements a lexical and syntactical analyzer for the Cminus programming language, a custom case-sensitive language. The parser generates an Abstract Syntax Tree (AST) representing the hierarchical structure of the code according to its grammar.",
      "skills": ["Lexical Analysis", "Compiler Design","Syntactic Analysis", "PLY (Python Lex-Yacc)", "Abstract-Syntax Tree"],
      "githubLink": "https://github.com/rohanvenkatesha/Parser-for-Cminus-Programming-Language"
    },
    {
      "src": "/portf.png",
      "title": "Shell Scripting for System Administration",
      "description": "This project includes various shell scripts for system administration tasks, such as user information retrieval, system health check, directory backup, batch file renaming, and process monitoring. It provides practical solutions for common administrative tasks.",
      "skills": ["Shell Scripting", "System Administration", "Process Monitoring", "Backup Automation", "Linux"],
      "githubLink": "https://github.com/rohanvenkatesha/Shell-Scripting-for-System-Administration"
    },
    {
      src: "/portf.png",
      "title": "Searching in Linked Lists and Arrays - Comparative Study",
      "description": "This Python application explores and compares the performance of linked lists and arrays by performing operations like adding, deleting, searching, changing, and sorting data. It includes theoretical complexity analysis and empirical measurements.",
      "skills": ["Python", "Data Structures", "Linked Lists", "Arrays", "Complexity Analysis"],
      "githubLink": "https://github.com/rohanvenkatesha/Searching-in-Linked-Lists-and-Arrays"
    },
    {
      "src": "/portf.png",
      "title": "Smart Supply Chain Knowledge Currency System (KCS) Proposal",
      "description": "This proposal presents the Knowledge Currency System (KCS), leveraging AI and blockchain to enhance data reliability, traceability, and operational transparency in global supply chains. It aims to transform unstructured data into actionable, validated insights, addressing data inconsistencies, limited visibility, and inefficiencies in supply chain decision-making.",
      "skills": ["AI", "Blockchain", "Supply Chain Management", "IoT", "NLP", "Big Data", "Ethereum", "AWS", "Machine Learning"],
      "githubLink": "https://github.com/rohanvenkatesha/Smart-Supply-Chain-Knowledge-Currency-System"
    },    
    
    // Add more projects
  ];

  export default cards;