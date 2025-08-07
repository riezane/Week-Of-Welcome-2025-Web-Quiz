/*
Restore via Browser Console

Run the code in the browser’s developer console

*/
// leaderboard data
const oldLeaderboardData = [
  { id: 1754547487485, name: "kent", score: 30, hintsUsed: 0, isPartial: false, timestamp: "2025-08-04T12:00:00.000Z", date: "8/4/2025" },
  { id: 1754547227500, name: "Cassandra", score: 30, hintsUsed: 1, isPartial: false, timestamp: "2025-08-04T11:59:00.000Z", date: "8/4/2025" },
  { id: 1754555471524, name: "juuwil", score: 29, hintsUsed: 1, isPartial: false, timestamp: "2025-08-04T14:00:00.000Z", date: "8/4/2025" },
  { id: 1754547063709, name: "Anonymous", score: 28, hintsUsed: 2, isPartial: false, timestamp: "2025-08-04T11:58:00.000Z", date: "8/4/2025" },
  { id: 1754429885810, name: "CyberSphinx", score: 28, hintsUsed: 3, isPartial: false, timestamp: "2025-08-03T10:00:00.000Z", date: "8/3/2025" },
  { id: 1754459327684, name: "kent", score: 28, hintsUsed: 3, isPartial: false, timestamp: "2025-08-03T12:00:00.000Z", date: "8/3/2025" },
  { id: 1754574132717, name: "Cypher", score: 27, hintsUsed: 3, isPartial: false, timestamp: "2025-08-04T16:00:00.000Z", date: "8/4/2025" },
  { id: 1754453626303, name: "Anonymous", score: 26, hintsUsed: 2, isPartial: false, timestamp: "2025-08-03T11:00:00.000Z", date: "8/3/2025" },
  { id: 1754451405766, name: "Althea L. Eduria", score: 26, hintsUsed: 3, isPartial: false, timestamp: "2025-08-03T10:30:00.000Z", date: "8/3/2025" },
  { id: 1754553434731, name: "KYLE", score: 24, hintsUsed: 1, isPartial: true, timestamp: "2025-08-04T13:30:00.000Z", date: "8/4/2025" },
  { id: 1754452055435, name: "Kerl Patrick A Batis", score: 23, hintsUsed: 2, isPartial: true, timestamp: "2025-08-03T10:45:00.000Z", date: "8/3/2025" },
  { id: 1754448325564, name: "aleandra talines", score: 20, hintsUsed: 3, isPartial: true, timestamp: "2025-08-03T09:30:00.000Z", date: "8/3/2025" },
  { id: 1754449938820, name: "reins enerios", score: 18, hintsUsed: 2, isPartial: true, timestamp: "2025-08-03T10:00:00.000Z", date: "8/3/2025" },
  { id: 1754464293000, name: "Anonymous", score: 18, hintsUsed: 2, isPartial: true, timestamp: "2025-08-03T13:00:00.000Z", date: "8/3/2025" },
  { id: 1754451103613, name: "Ralph Lawrence Luza", score: 18, hintsUsed: 3, isPartial: true, timestamp: "2025-08-03T10:15:00.000Z", date: "8/3/2025" },
  { id: 1754447690131, name: "Anonymous", score: 17, hintsUsed: 0, isPartial: true, timestamp: "2025-08-03T09:15:00.000Z", date: "8/3/2025" },
  { id: 1754451755773, name: "amielle james nicola", score: 16, hintsUsed: 0, isPartial: true, timestamp: "2025-08-03T10:30:00.000Z", date: "8/3/2025" },
  { id: 1754465906029, name: "James", score: 16, hintsUsed: 1, isPartial: true, timestamp: "2025-08-03T13:30:00.000Z", date: "8/3/2025" },
  { id: 1754538885444, name: "BRYLLE", score: 16, hintsUsed: 1, isPartial: true, timestamp: "2025-08-04T11:00:00.000Z", date: "8/4/2025" },
  { id: 1754452373999, name: "Khalil Dubz", score: 16, hintsUsed: 3, isPartial: true, timestamp: "2025-08-03T10:45:00.000Z", date: "8/3/2025" },
  { id: 1754450824902, name: "janel p. obrador", score: 14, hintsUsed: 0, isPartial: true, timestamp: "2025-08-03T10:00:00.000Z", date: "8/3/2025" },
  { id: 1754553220860, name: "KYLE", score: 14, hintsUsed: 0, isPartial: true, timestamp: "2025-08-04T13:15:00.000Z", date: "8/4/2025" },
  { id: 1754454564261, name: "Hatdog", score: 14, hintsUsed: 1, isPartial: true, timestamp: "2025-08-03T11:15:00.000Z", date: "8/3/2025" },
  { id: 1754540800620, name: "sophia", score: 14, hintsUsed: 1, isPartial: true, timestamp: "2025-08-04T10:30:00.000Z", date: "8/4/2025" },
  { id: 1754555003648, name: "Imbotiting", score: 14, hintsUsed: 3, isPartial: true, timestamp: "2025-08-04T14:00:00.000Z", date: "8/4/2025" },
  { id: 1754447854707, name: "-", score: 13, hintsUsed: 3, isPartial: true, timestamp: "2025-08-03T09:15:00.000Z", date: "8/3/2025" },
  { id: 1754453154460, name: "Advo", score: 12, hintsUsed: 0, isPartial: true, timestamp: "2025-08-03T11:00:00.000Z", date: "8/3/2025" },
  { id: 1754448722908, name: "jay-p pagsiat", score: 12, hintsUsed: 3, isPartial: true, timestamp: "2025-08-03T09:45:00.000Z", date: "8/3/2025" },
  { id: 1754449725963, name: "arnolds pajaros", score: 12, hintsUsed: 3, isPartial: true, timestamp: "2025-08-03T10:00:00.000Z", date: "8/3/2025" },
  { id: 1754447525741, name: "Anonymous", score: 11, hintsUsed: 1, isPartial: true, timestamp: "2025-08-03T09:00:00.000Z", date: "8/3/2025" },
  { id: 1754468432567, name: "Raven", score: 10, hintsUsed: 0, isPartial: true, timestamp: "2025-08-03T14:00:00.000Z", date: "8/3/2025" },
  { id: 1754453844562, name: "Yash", score: 10, hintsUsed: 1, isPartial: true, timestamp: "2025-08-03T11:15:00.000Z", date: "8/3/2025" },
  { id: 1754448066611, name: "carlo cuarteros", score: 9, hintsUsed: 1, isPartial: true, timestamp: "2025-08-03T09:30:00.000Z", date: "8/3/2025" },
  { id: 1754450544242, name: "Rein D. Camaro", score: 9, hintsUsed: 1, isPartial: true, timestamp: "2025-08-03T10:00:00.000Z", date: "8/3/2025" },
  { id: 1754451571952, name: "Adam Matthew Mermida", score: 9, hintsUsed: 1, isPartial: true, timestamp: "2025-08-03T10:30:00.000Z", date: "8/3/2025" },
  { id: 1754454433243, name: "Anonymous", score: 8, hintsUsed: 2, isPartial: true, timestamp: "2025-08-03T11:00:00.000Z", date: "8/3/2025" },
  { id: 1754448540138, name: "eilkim jasper", score: 7, hintsUsed: 1, isPartial: true, timestamp: "2025-08-03T09:45:00.000Z", date: "8/3/2025" },
  { id: 1754538568926, name: "Shan", score: 6, hintsUsed: 1, isPartial: true, timestamp: "2025-08-04T10:45:00.000Z", date: "8/4/2025" }
];

// Store the data in localStorage
localStorage.setItem("quizLeaderboard", JSON.stringify(oldLeaderboardData));

// Verify the data was stored
console.log("Leaderboard restored. Current localStorage data:", JSON.parse(localStorage.getItem("quizLeaderboard")));