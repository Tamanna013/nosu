'use client';

interface Article {
  id: number;
  title: string;
  description: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Are you debugging code?",
    description: "Because every time you look at me, my heart throws an exception.",
  },
  {
    id: 2,
    title: "You must be a Git repo",
    description: "cause I cant stop pulling you into my thoughts",
  },
  {
    id: 3,
    title: "Im not saying youre a bug…",
    description: "but youve definitely messed up my logic.",
  },
  {
    id: 3,
    title: "Is your name JavaScript?",
    description: "Because youve got me stuck in a loop of admiration.",
  },
  {
    id: 3,
    title: "Are we in the same terminal?",
    description: "Because I feel a real connection.",
  },
  {
    id: 3,
    title: "You're like Tailwind CSS",
    description: "sleek, stylish, and everything I need to look good.",
  },
  {
    id: 3,
    title: "You must be a full-stack dev",
    description: "because youve got my front and my back.",
  },
  {
    id: 3,
    title: "I thought I was immune to distractions… ",
    description: "but youve definitely messed up my logic.",
  },
  {
    id: 3,
    title: "I’d refactor my whole life",
    description: "just to make room for you in it.",
  }
];

export default function Articles() {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Articles by Tamanna</h2>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-3">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}