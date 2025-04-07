import { Profile, Message } from '../types';

export const myProfiles: Profile[] = [
  {
    id: 1,
    name: "Tamanna",
    age: 25,
    bio: "Software Engineer | Coffee Lover | Adventure Seeker",
    images: ["/p1.jpg"]
  },
  {
    id: 2,
    name: "Tamanna",
    age: 25,
    bio: "Reading books and writing code 👩‍💻",
    images: ["/p2.jpeg"]
  },
  {
    id: 3,
    name: "Tamanna",
    age: 25,
    bio: "Let's talk about tech and travel! ✈️",
    images: ["/p3.jpg"]
  },
  {
    id: 4,
    name: "Tamanna",
    age: 25,
    bio: "Tech enthusiast and bookworm 📚",
    images: ["/p4.jpg"]
  },
  {
    id: 5,
    name: "Tamanna",
    age: 25,
    bio: "Adventure seeker and code debugger 🌟",
    images: ["/p5.jpg"]
  },
  {
    id: 6,
    name: "Tamanna",
    age: 25,
    bio: "Building the future, one line of code at a time ⚡",
    images: ["/p6.jpeg"]
  },
  {
    id: 7,
    name: "Tamanna",
    age: 25,
    bio: "Software developer by day, hopeless romantic by night. Swipe right and I might debug your love life.",
    images: ["/p7.jpg"]
  },
  {
    id: 8,
    name: "Tamanna",
    age: 25,
    bio: "Let's talk about tech and travel! ✈️",
    images: ["/p8.jpg"]
  },
  {
    id: 9,
    name: "Tamanna",
    age: 25,
    bio: "I'm the plot twist you didn't know your life needed. Must love dogs, drama-free vibes, and spontaneous 3am food runs.",
    images: ["/p9.webp"]
  },
  {
    id: 10,
    name: "Tamanna",
    age: 25,
    bio: "Treat me like the final season of your favorite show—obsess over me, cry over me, and don't mess it up.",
    images: ["/p10.webp"]
  },
];

const bios = [
  "Always coding something exciting! 💻",
  "Love exploring new cafes and coding spots ☕",
  "Tech enthusiast and bookworm 📚",
  "Adventure seeker and code debugger 🌟",
  "Coffee, Code, and Adventures 🌎",
  "Building the future, one line of code at a time ⚡",
  "Let's talk about tech and travel! 🌍",
  "Passionate about clean code and strong coffee ☕",
  "Full-stack developer with a love for UI/UX 🎨",
  "Tech innovator by day, dreamer by night ✨",
  "Not a snack, not a meal—I'm the full dev course 🍽️",
  "Breaking hearts and merging branches 💔✨",
  "Ask me about my latest pull request… or my love life 👀",
  "I'm fluent in sarcasm, emojis, and JavaScript 💅",
  "You + me + a coffee shop = the best collab"
];

const images = [
  "/p1.jpg",
  "/p2.jpeg",
  "/p3.jpg",
  "/p4.jpg",
  "/p5.jpg",
  "/p6.jpeg",
  "/p7.jpg",
  "/p8.jpg",
  "/p9.webp",
  "/p10.webp"
];

for (let i = 11; i <= 23; i++) {
  const randomBio = bios[Math.floor(Math.random() * bios.length)];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  myProfiles.push({
    id: i,
    name: "Tamanna",
    age: 25,
    bio: randomBio,
    images: [randomImage],
  });
}

export const messages: Message[] = [
  {
    id: 1,
    text: "Hey! Thanks for swiping right! I'm excited to chat with you! 💖 Feel free to email me at tashamg@gmail.com",
    timestamp: new Date(),
    isUser: false
  },
  {
    id: 2,
    text: "I love meeting new people who share my interests in tech, coffee, and adventures! What caught your attention about my profile? ✨",
    timestamp: new Date(),
    isUser: false
  }
];
