import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Learn how to create scalable and maintainable web applications using React and TypeScript. Discover best practices, patterns, and tools that will help you build better software.",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Web Development"],
    slug: "building-modern-web-applications",
    featured: true
  },
  {
    id: 2,
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is transforming the way we write, test, and deploy software. From code generation to automated testing, AI is revolutionizing our industry.",
    date: "March 10, 2024",
    readTime: "6 min read",
    tags: ["AI", "Machine Learning", "Software Development"],
    slug: "future-of-ai-in-software-development"
  },
  {
    id: 3,
    title: "Optimizing Performance in React Applications",
    excerpt: "Discover techniques and strategies for improving the performance of your React applications. Learn about code splitting, lazy loading, and other optimization techniques.",
    date: "March 5, 2024",
    readTime: "5 min read",
    tags: ["React", "Performance", "Web Development"],
    slug: "optimizing-react-performance"
  },
  {
    id: 4,
    title: "Building Scalable Backend Services with Node.js",
    excerpt: "Learn how to design and implement scalable backend services using Node.js. From architecture patterns to deployment strategies, master the art of building robust APIs.",
    date: "February 28, 2024",
    readTime: "7 min read",
    tags: ["Node.js", "Backend", "API Design"],
    slug: "scalable-backend-services"
  }
];

const Blog: React.FC = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="gradient-text mb-4">Blog</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts, ideas, and insights about software development, technology, and more.
          </p>
        </motion.div>

        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <Link to={`/blog/${featuredPost.slug}`} className="block">
              <div className="card overflow-hidden group">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary bg-opacity-10 text-primary">
                          Featured
                        </span>
                        <span className="text-muted-foreground text-sm">{featuredPost.date}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                        <div className="flex gap-2">
                          {featuredPost.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 rounded-md text-xs bg-secondary bg-opacity-10 text-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="card h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-muted-foreground text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <div className="flex gap-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 rounded-md text-xs bg-secondary bg-opacity-10 text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 