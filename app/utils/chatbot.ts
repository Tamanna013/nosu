interface ChatbotResponse {
  text: string;
}

const flirtyResponses: ChatbotResponse[] = [
  { text: "You're making me blush! ☺️ Let's continue chatting over email: tashamg@gmail.com" },
  { text: "I love how you think! Tell me more... Or email me at tashamg@gmail.com" },
  { text: "You've got my attention! 💫 Drop me a line at tashamg@gmail.com" },
  { text: "That's so interesting! We should continue this over coffee ☕ Email me: tashamg@gmail.com" },
  { text: "You're quite charming, you know that? 😊 Let's chat more: tashamg@gmail.com" },
  { text: "Your messages make me smile! 💝 Email me at tashamg@gmail.com" },
  { text: "We seem to have great chemistry! ✨ Let's connect: tashamg@gmail.com" },
  { text: "I'm intrigued by your perspective! 🌟 Email me: tashamg@gmail.com" },
  { text: "You've got such great energy! 💫 Let's chat more: tashamg@gmail.com" },
  { text: "I love your approach to conversation! 🎯 Email: tashamg@gmail.com" },
  { text: "You're making this so enjoyable! 🌈 Connect with me: tashamg@gmail.com" },
  { text: "Your messages brighten my day! ☀️ Email me: tashamg@gmail.com" },
  { text: "I'm really enjoying our chat! 💌 Let's continue: tashamg@gmail.com" },
  { text: "You've got me hooked on this conversation! 🎨 Email: tashamg@gmail.com" },
  { text: "Your words are so captivating! 💫 Let's connect: tashamg@gmail.com" },
  { text: "I love your way with words! 📝 Email me at tashamg@gmail.com" },
  { text: "You're making me excited to chat more! 🌟 Email: tashamg@gmail.com" },
  { text: "This conversation is so refreshing! 🌊 Connect: tashamg@gmail.com" },
  { text: "You've got such an interesting mind! 🧠 Email me: tashamg@gmail.com" },
  { text: "I'm fascinated by your thoughts! 💭 Let's chat: tashamg@gmail.com" },
  { text: "Your messages are so engaging! 💝 Email: tashamg@gmail.com" },
  { text: "You're really something special! ✨ Connect with me: tashamg@gmail.com" },
  { text: "I can't help but smile at your messages! 😊 Email: tashamg@gmail.com" },
  { text: "You're making this conversation magical! 🌟 Email me: tashamg@gmail.com" },
  { text: "I'm drawn to your energy! 💫 Let's connect: tashamg@gmail.com" },
];

for (let i = 0; i < 75; i++) {
  const emojis = ["💖", "✨", "🌟", "💫", "💝", "🌈", "⭐", "🌙", "☀️", "🌺"];
  const openings = [
    "You're so",
    "I love your",
    "Your messages are",
    "I'm amazed by your",
    "You have such",
    "I'm captivated by your",
    "Your words are",
    "You bring such",
    "I'm drawn to your",
    "You show such"
  ];
  const adjectives = [
    "wonderful",
    "fascinating",
    "delightful",
    "charming",
    "intriguing",
    "amazing",
    "special",
    "unique",
    "brilliant",
    "magical"
  ];
  
  const randomEmoji = emojis[i % emojis.length];
  const randomOpening = openings[i % openings.length];
  const randomAdjective = adjectives[i % adjectives.length];
  
  flirtyResponses.push({
    text: `${randomOpening} ${randomAdjective}! ${randomEmoji} Email me at tashamg@gmail.com`
  });
}

export function generateChatbotResponse(userMessage: string): string {
  const lowercaseMessage = userMessage.toLowerCase();
  
  if (lowercaseMessage.includes('email') || lowercaseMessage.includes('contact')) {
    return "I'd love to continue our chat! Here's my email: tashamg@gmail.com 📧";
  }
  
  if (lowercaseMessage.includes('coffee') || lowercaseMessage.includes('meet')) {
    return "Coffee sounds perfect! Drop me an email at tashamg@gmail.com and let's plan something! ☕";
  }
  
  if (lowercaseMessage.includes('work') || lowercaseMessage.includes('tech') || lowercaseMessage.includes('code')) {
    return "I love talking about tech! We should definitely exchange coding stories. Email me at tashamg@gmail.com 👩‍💻";
  }

  const randomIndex = Math.floor(Math.random() * flirtyResponses.length);
  return flirtyResponses[randomIndex].text;
}