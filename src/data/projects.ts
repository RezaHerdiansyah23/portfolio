export interface Project {
  id: string;
  title: string;
  category: 'Frontend' | 'Backend' | 'Mobile';
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'POS Sytem - Langkah Kopi',
    category: 'Frontend',
    description: 'A modern Point of Sale system for coffee shops built with React and Tailwind.',
    tags: ['React', 'Tailwind', 'Redux', 'Chart.js'],
    githubUrl: 'https://github.com',
    image: '/projects/pos.jpg'
  },
  {
    id: '2',
    title: 'Mobile Order App',
    category: 'Mobile',
    description: 'Android application for ordering coffee on the go, integrated with real-time updates.',
    tags: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Material 3'],
    githubUrl: 'https://github.com',
    image: '/projects/mobile.jpg'
  },
  {
    id: '3',
    title: 'Coffee Analytics API',
    category: 'Backend',
    description: 'Robust backend API handling inventory management and sales analytics with PostgreSQL.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com'
  }
];
