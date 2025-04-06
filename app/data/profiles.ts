import { Profile, Message } from '../types';

export const myProfiles: Profile[] = [
  {
    id: 1,
    name: "Tamanna",
    age: 25,
    bio: "Software Engineer | Coffee Lover | Adventure Seeker",
    images: ["/profile1.jpg"]
  },
  {
    id: 2,
    name: "Tamanna",
    age: 25,
    bio: "Reading books and writing code 👩‍💻",
    images: ["/profile2.jpg"]
  },
  {
    id: 3,
    name: "Tamanna",
    age: 25,
    bio: "Let's talk about tech and travel! ✈️",
    images: ["/profile3.jpg"]
  }
];

// Add 20 more profile variations
for (let i = 4; i <= 23; i++) {
  myProfiles.push({
    id: i,
    name: "Tamanna",
    age: 25,
    bio: [
      "Always coding something exciting! 💻",
      "Love exploring new cafes and coding spots ☕",
      "Tech enthusiast and bookworm 📚",
      "Adventure seeker and code debugger 🌟",
      "Coffee, Code, and Adventures 🌎",
      "Building the future, one line of code at a time ⚡",
      "Let's talk about tech and travel! 🌍",
      "Passionate about clean code and strong coffee ☕",
      "Full-stack developer with a love for UI/UX 🎨",
      "Tech innovator by day, dreamer by night ✨"
    ][i % 10],
    images: ["/profile1.jpg"]
  });
}

export const messages: Message[] = [
  {
    id: 1,
    text: "Hey! Thanks for swiping right! I'm excited to chat with you! 💖 Feel free to email me at tamanna@example.com",
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