// Enhanced Question Pool - 50+ questions across all difficulties
const quizData = {
  easy: [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
      answer: "H",
      hint: "It's about marking up text for web pages",
      type: "multiple"
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "P",
      hint: "City of Light",
      type: "multiple"
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Microsoft", "Google", "Apple"],
      answer: "N",
      hint: "They also made the first popular web browser",
      type: "multiple"
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      answer: "C",
      hint: "It's about styling web pages",
      type: "multiple"
    },
    {
      question: "HTML is a programming language.",
      answer: false,
      hint: "HTML is a markup language, not a programming language",
      type: "boolean"
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["<h1>", "<h6>", "<header>", "<heading>"],
      answer: "<",
      hint: "The number 1 indicates the largest",
      type: "multiple"
    },
    {
      question: "What does URL stand for?",
      options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Reference Locator", "Universal Reference Locator"],
      answer: "U",
      hint: "It's about locating resources uniformly",
      type: "multiple"
    },
    {
      question: "Which symbol is used to denote comments in JavaScript?",
      options: ["//", "/*", "#", "<!--"],
      answer: "/",
      hint: "Two forward slashes",
      type: "multiple"
    },
    {
      question: "CSS can be written inside HTML documents.",
      answer: true,
      hint: "CSS can be internal, external, or inline",
      type: "boolean"
    },
    {
      question: "What is the correct HTML tag for inserting a line break?",
      options: ["<br>", "<break>", "<lb>", "<newline>"],
      answer: "<",
      hint: "Short for 'break'",
      type: "multiple"
    },
    {
      question: "Which company owns GitHub?",
      options: ["Microsoft", "Google", "Facebook", "Amazon"],
      answer: "M",
      hint: "They acquired it in 2018",
      type: "multiple"
    },
    {
      question: "What does API stand for?",
      options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Advanced Process Interface"],
      answer: "A",
      hint: "It's about how applications communicate",
      type: "multiple"
    },
    {
      question: "The World Wide Web was invented by Tim Berners-Lee.",
      answer: true,
      hint: "He invented it while working at CERN",
      type: "boolean"
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image?",
      options: ["alt", "title", "src", "href"],
      answer: "a",
      hint: "Short for 'alternative'",
      type: "multiple"
    },
    {
      question: "What is the most popular programming language in 2024?",
      options: ["JavaScript", "Python", "Java", "C++"],
      answer: "J",
      hint: "It runs in browsers and servers",
      type: "multiple"
    },
    {
      question: "HTTP stands for HyperText Transfer ____.",
      answer: "Protocol",
      hint: "It's a set of rules for communication",
      type: "fill"
    },
    {
      question: "Which company created the React JavaScript library?",
      options: ["Facebook", "Google", "Microsoft", "Twitter"],
      answer: "F",
      hint: "Now called Meta",
      type: "multiple"
    },
    {
      question: "Git is a version control system.",
      answer: true,
      hint: "It tracks changes in source code",
      type: "boolean"
    }
  ],
  medium: [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(log n)", "O(n)", "O(n²)", "O(1)"],
      answer: "O",
      hint: "It divides the search space in half each time",
      type: "multiple"
    },
    {
      question: "Which HTTP status code indicates 'Not Found'?",
      options: ["404", "500", "200", "301"],
      answer: "4",
      hint: "A very famous error code",
      type: "multiple"
    },
    {
      question: "What does SQL stand for?",
      options: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "System Query Language"],
      answer: "S",
      hint: "It's about querying structured data",
      type: "multiple"
    },
    {
      question: "In JavaScript, '==' and '===' operators behave identically.",
      answer: false,
      hint: "One checks type, the other doesn't",
      type: "boolean"
    },
    {
      question: "What is the default port for HTTP?",
      options: ["80", "443", "8080", "3000"],
      answer: "8",
      hint: "It's a two-digit number",
      type: "multiple"
    },
    {
      question: "Which design pattern ensures a class has only one instance?",
      options: ["Singleton", "Factory", "Observer", "Strategy"],
      answer: "S",
      hint: "Single instance pattern",
      type: "multiple"
    },
    {
      question: "What does REST stand for in web services?",
      options: ["Representational State Transfer", "Remote State Transfer", "Representational System Transfer", "Remote System Transfer"],
      answer: "R",
      hint: "It's about transferring state representations",
      type: "multiple"
    },
    {
      question: "Python is a compiled language.",
      answer: false,
      hint: "Python is interpreted, not compiled",
      type: "boolean"
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: ["Refers to current object", "Creates new object", "Deletes object", "Copies object"],
      answer: "R",
      hint: "It points to the current context",
      type: "multiple"
    },
    {
      question: "Which database type is MongoDB?",
      options: ["NoSQL", "SQL", "Graph", "Key-Value"],
      answer: "N",
      hint: "It stores documents, not tables",
      type: "multiple"
    },
    {
      question: "What does MVC stand for?",
      options: ["Model View Controller", "Model View Component", "Multiple View Controller", "Multiple View Component"],
      answer: "M",
      hint: "An architectural pattern",
      type: "multiple"
    },
    {
      question: "JSON stands for JavaScript Object ____.",
      answer: "Notation",
      hint: "A way to represent data",
      type: "fill"
    },
    {
      question: "Which company developed the Kubernetes container orchestration platform?",
      options: ["Google", "Docker", "Microsoft", "Amazon"],
      answer: "G",
      hint: "They open-sourced it after using it internally",
      type: "multiple"
    },
    {
      question: "CSS Grid and Flexbox serve the same purpose.",
      answer: false,
      hint: "Grid is 2D, Flexbox is 1D",
      type: "boolean"
    },
    {
      question: "What is the default port for HTTPS?",
      options: ["443", "80", "8080", "3000"],
      answer: "4",
      hint: "It's a three-digit number starting with 4",
      type: "multiple"
    },
    {
      question: "Which HTTP method is used to update a resource?",
      options: ["PUT", "GET", "POST", "DELETE"],
      answer: "P",
      hint: "It 'puts' the updated resource",
      type: "multiple"
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Data Oriented Model"],
      answer: "D",
      hint: "It represents the document structure",
      type: "multiple"
    },
    {
      question: "Node.js is built on Chrome's V8 JavaScript engine.",
      answer: true,
      hint: "V8 is Google's JavaScript engine",
      type: "boolean"
    }
  ],
  hard: [
    {
      question: "What is the space complexity of merge sort?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O",
      hint: "It needs extra space for merging",
      type: "multiple"
    },
    {
      question: "Which JavaScript engine does Node.js use?",
      options: ["V8", "SpiderMonkey", "Chakra", "JavaScriptCore"],
      answer: "V",
      hint: "Google's JavaScript engine",
      type: "multiple"
    },
    {
      question: "What is the CAP theorem in distributed systems?",
      options: ["Consistency, Availability, Partition tolerance", "Concurrency, Atomicity, Persistence", "Consistency, Atomicity, Partition tolerance", "Concurrency, Availability, Persistence"],
      answer: "C",
      hint: "You can only guarantee two out of three",
      type: "multiple"
    },
    {
      question: "In Big O notation, O(1) means constant time complexity.",
      answer: true,
      hint: "The operation takes the same time regardless of input size",
      type: "boolean"
    },
    {
      question: "What does ACID stand for in database transactions?",
      options: ["Atomicity, Consistency, Isolation, Durability", "Atomicity, Concurrency, Isolation, Durability", "Availability, Consistency, Isolation, Durability", "Atomicity, Consistency, Independence, Durability"],
      answer: "A",
      hint: "Properties that guarantee reliable database transactions",
      type: "multiple"
    },
    {
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Quick Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
      answer: "Q",
      hint: "It's often the fastest in practice",
      type: "multiple"
    },
    {
      question: "What is the purpose of a hash table?",
      options: ["Fast key-value lookups", "Sorting data", "Graph traversal", "Memory management"],
      answer: "F",
      hint: "It provides O(1) average lookup time",
      type: "multiple"
    },
    {
      question: "Microservices architecture always improves system performance.",
      answer: false,
      hint: "It adds network overhead and complexity",
      type: "boolean"
    },
    {
      question: "What is the time complexity of inserting into a balanced binary search tree?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n²)"],
      answer: "O",
      hint: "The tree height is logarithmic",
      type: "multiple"
    },
    {
      question: "Which consensus algorithm is used by Bitcoin?",
      options: ["Proof of Work", "Proof of Stake", "Raft", "PBFT"],
      answer: "P",
      hint: "It requires computational work to validate blocks",
      type: "multiple"
    },
    {
      question: "What does CORS stand for?",
      options: ["Cross-Origin Resource Sharing", "Cross-Origin Request Security", "Cross-Origin Resource Security", "Cross-Origin Request Sharing"],
      answer: "C",
      hint: "It's about sharing resources across different origins",
      type: "multiple"
    },
    {
      question: "The ____ pattern separates an abstraction from its implementation.",
      answer: "Bridge",
      hint: "It creates a bridge between abstraction and implementation",
      type: "fill"
    },
    {
      question: "Which data structure is used to implement recursion?",
      options: ["Stack", "Queue", "Heap", "Tree"],
      answer: "S",
      hint: "Function calls are stored in this structure",
      type: "multiple"
    },
    {
      question: "GraphQL was developed by Facebook.",
      answer: true,
      hint: "They open-sourced it in 2015",
      type: "boolean"
    },
    {
      question: "What is the main advantage of using a CDN?",
      options: ["Reduced latency", "Better security", "Lower costs", "Easier deployment"],
      answer: "R",
      hint: "Content is served from locations closer to users",
      type: "multiple"
    },
    {
      question: "Which design pattern is used to create objects without specifying their exact class?",
      options: ["Factory", "Singleton", "Observer", "Strategy"],
      answer: "F",
      hint: "It manufactures objects",
      type: "multiple"
    },
    {
      question: "What is the purpose of Docker containers?",
      options: ["Application isolation", "Data storage", "Network routing", "User authentication"],
      answer: "A",
      hint: "They package applications with their dependencies",
      type: "multiple"
    },
    {
      question: "Event-driven architecture is always better than request-response architecture.",
      answer: false,
      hint: "Each has its own use cases and trade-offs",
      type: "boolean"
    }
  ]
};
