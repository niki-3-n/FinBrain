import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'Understanding Price Action in Trading',
    excerpt: 'Learn how to read and interpret price action patterns to make better trading decisions.',
    category: 'Trading',
    author: {
      name: 'John Smith',
      image: '/images/authors/john-smith.jpg'
    },
    date: '2024-03-15',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Getting Started with React Development',
    excerpt: 'A comprehensive guide for beginners looking to start their journey in React development.',
    category: 'Programming',
    author: {
      name: 'Alice Johnson',
      image: '/images/authors/alice-johnson.jpg'
    },
    date: '2024-03-14',
    readTime: '12 min read'
  },
  {
    id: 3,
    title: 'Personal Finance: Building Your First Investment Portfolio',
    excerpt: 'Step-by-step guide to creating a diversified investment portfolio for beginners.',
    category: 'Finance',
    author: {
      name: 'Robert Brown',
      image: '/images/authors/robert-brown.jpg'
    },
    date: '2024-03-13',
    readTime: '10 min read'
  }
];

const categories = [
  { name: 'Trading', count: 12 },
  { name: 'Programming', count: 8 },
  { name: 'Finance', count: 15 },
  { name: 'Marketing', count: 6 }
];

export default function BlogPage() {
  return (
    <MainLayout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Blog & Resources
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Latest articles, guides, and insights from our experts
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-6">
                <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
                <div className="mt-4 space-y-4">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <Link
                        href={`/blog/category/${category.name.toLowerCase()}`}
                        className="text-gray-600 hover:text-indigo-600"
                      >
                        {category.name}
                      </Link>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-gray-900">Popular Tags</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Trading', 'React', 'Finance', 'Web3', 'Crypto', 'Stocks'].map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag.toLowerCase()}`}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-indigo-100 hover:text-indigo-800"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="mt-12 lg:mt-0 lg:col-span-9">
              <div className="space-y-12">
                {articles.map((article) => (
                  <article key={article.id} className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              {article.author.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={article.date}>{article.date}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link
                          href={`/blog/${article.id}`}
                          className="text-xl font-semibold text-gray-900 hover:text-indigo-600"
                        >
                          {article.title}
                        </Link>
                        <p className="mt-3 text-base text-gray-500">{article.excerpt}</p>
                      </div>
                      <div className="mt-4">
                        <Link
                          href={`/blog/category/${article.category.toLowerCase()}`}
                          className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                          {article.category}
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 