const quizData = {
  easy: [
    {
      question: "What is the main purpose of photogrammetry?",
      type: "multiple",
      options: [
        "a) To take random photographs",
        "b) To measure and interpret objects from photographs",
        "c) To edit images for artistic purposes",
        "d) To store large amounts of images"
      ],
      answer: "b",
      hint: "It’s about measurement and interpretation."
    },
    {
      question: "True or False: Photogrammetry only works with aerial photographs.",
      type: "boolean",
      answer: false,
      hint: "It can use ground, aerial, and even satellite images."
    },
    {
      question: "Fill in the blank: The word 'photogrammetry' comes from the Greek words 'photo' meaning light, 'gramma' meaning ______, and 'metron' meaning measure.",
      type: "fill",
      answer: "drawing",
      hint: "Think of something drawn or written."
    },
    {
      question: "Which of the following is NOT a source of images for photogrammetry?",
      type: "multiple",
      options: [
        "a) Aerial cameras",
        "b) Satellite sensors",
        "c) Sketchbooks",
        "d) UAV drones"
      ],
      answer: "c",
      hint: "One of these doesn’t involve capturing actual photographs."
    },
    {
      question: "True or False: Photogrammetry can be used for creating 3D models.",
      type: "boolean",
      answer: true,
      hint: "It’s often used in mapping and 3D modeling."
    },
    {
      question: "Fill in the blank: Aerial photogrammetry is mainly conducted using ______.",
      type: "fill",
      answer: "aircraft",
      hint: "Think of vehicles that fly."
    },
    {
      question: "Which type of photogrammetry uses ground-based images?",
      type: "multiple",
      options: [
        "a) Aerial photogrammetry",
        "b) Terrestrial photogrammetry",
        "c) Satellite photogrammetry",
        "d) Underwater photogrammetry"
      ],
      answer: "b",
      hint: "It’s done from the ground."
    },
    {
      question: "True or False: Photogrammetry is only used in geography.",
      type: "boolean",
      answer: false,
      hint: "It’s also used in engineering, archaeology, forensics, and more."
    },
    {
      question: "Fill in the blank: Photogrammetry requires at least ______ photographs taken from different positions to measure depth.",
      type: "fill",
      answer: "two",
      hint: "Think of stereo vision."
    },
    {
      question: "Which of the following is a key advantage of photogrammetry?",
      type: "multiple",
      options: [
        "a) It is very fast and cost-effective",
        "b) It works without any images",
        "c) It can only measure flat objects",
        "d) It removes the need for computers"
      ],
      answer: "a",
      hint: "Speed and cost are big benefits."
    }
  ],

  medium: [
    {
      question: "Which term describes the science of obtaining reliable measurements from photographs?",
      type: "multiple",
      options: [
        "a) Photography",
        "b) Cartography",
        "c) Photogrammetry",
        "d) Topography"
      ],
      answer: "c",
      hint: "It’s the main topic of this lecture."
    },
    {
      question: "True or False: The three main types of photogrammetry are aerial, terrestrial, and underwater.",
      type: "boolean",
      answer: false,
      hint: "The third main type involves satellites."
    },
    {
      question: "Fill in the blank: Stereophotogrammetry uses two overlapping images to create ______ models.",
      type: "fill",
      answer: "3D",
      hint: "Think dimensional."
    },
    {
      question: "Which is an example of terrestrial photogrammetry application?",
      type: "multiple",
      options: [
        "a) Mapping forests from drones",
        "b) Documenting archaeological sites from the ground",
        "c) Creating satellite imagery",
        "d) Measuring cloud heights"
      ],
      answer: "b",
      hint: "It involves ground-based imaging."
    },
    {
      question: "True or False: Remote sensing is the same as photogrammetry.",
      type: "boolean",
      answer: false,
      hint: "They are related but not identical."
    },
    {
      question: "Fill in the blank: In aerial photogrammetry, photographs are usually taken with the camera axis pointing ______.",
      type: "fill",
      answer: "vertically",
      hint: "Think of pointing straight down."
    },
    {
      question: "Which factor does NOT affect the accuracy of photogrammetric measurements?",
      type: "multiple",
      options: [
        "a) Image resolution",
        "b) Camera calibration",
        "c) Color of the object",
        "d) Overlap between photos"
      ],
      answer: "c",
      hint: "Think about what’s unrelated to measurement precision."
    },
    {
      question: "True or False: Orthophotos are images corrected for distortions and scale.",
      type: "boolean",
      answer: true,
      hint: "They’re geometrically corrected."
    },
    {
      question: "Fill in the blank: Photogrammetry in construction is used for ______ progress.",
      type: "fill",
      answer: "monitoring",
      hint: "Keeping track of changes."
    },
    {
      question: "Which is a limitation of photogrammetry?",
      type: "multiple",
      options: [
        "a) It requires sunlight",
        "b) It can be less accurate in poor lighting",
        "c) It works without cameras",
        "d) It can only be done at night"
      ],
      answer: "b",
      hint: "Lighting quality matters."
    }
  ],

  hard: [
    {
      question: "Which mathematical principle allows photogrammetry to determine the 3D position of points from 2D images?",
      type: "multiple",
      options: [
        "a) Similar triangles",
        "b) Pythagorean theorem",
        "c) Law of sines",
        "d) Circle theorems"
      ],
      answer: "a",
      hint: "It’s about proportional shapes."
    },
    {
      question: "True or False: In photogrammetry, parallax is the apparent displacement of an object when viewed from two different positions.",
      type: "boolean",
      answer: true,
      hint: "It’s a key concept in depth perception."
    },
    {
      question: "Fill in the blank: The ratio of the camera’s focal length to the flying height determines the image ______.",
      type: "fill",
      answer: "scale",
      hint: "It tells how large features appear."
    },
    {
      question: "Which technology is often combined with photogrammetry for higher accuracy?",
      type: "multiple",
      options: [
        "a) GPS and IMU",
        "b) Photoshop",
        "c) Audio sensors",
        "d) Thermal blankets"
      ],
      answer: "a",
      hint: "Think positioning and motion sensors."
    },
    {
      question: "True or False: A stereopair must have at least 50% overlap to produce accurate 3D models.",
      type: "boolean",
      answer: true,
      hint: "Overlap is essential."
    },
    {
      question: "Fill in the blank: In satellite photogrammetry, the distance between two image capture points is called the ______.",
      type: "fill",
      answer: "baseline",
      hint: "It’s like the distance between your eyes."
    },
    {
      question: "Which is NOT a step in the photogrammetric process?",
      type: "multiple",
      options: [
        "a) Image acquisition",
        "b) Interior orientation",
        "c) Feature scaling",
        "d) Triangulation"
      ],
      answer: "c",
      hint: "It’s not a formal photogrammetry term."
    },
    {
      question: "True or False: Orthorectification removes relief displacement from aerial images.",
      type: "boolean",
      answer: true,
      hint: "It corrects distortions caused by terrain."
    },
    {
      question: "Fill in the blank: In photogrammetry, the Ground Sampling Distance (GSD) represents the size of one ______ in real-world units.",
      type: "fill",
      answer: "pixel",
      hint: "It’s the smallest measurable image unit."
    },
    {
      question: "Which photogrammetry method is best for mapping inaccessible mountainous terrain?",
      type: "multiple",
      options: [
        "a) Terrestrial photogrammetry",
        "b) Aerial photogrammetry",
        "c) Close-range photogrammetry",
        "d) Underwater photogrammetry"
      ],
      answer: "b",
      hint: "Think about reaching hard-to-access areas from above."
    }
  ]
};
