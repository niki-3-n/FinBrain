import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'Trading Fundamentals',
    description: 'Learn the basics of trading and market analysis',
    price: 99,
    duration: '8 weeks',
    level: 'Beginner',
    category: 'Trading',
    image: '/images/courses/trading.jpg'
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    description: 'Master modern web development with React and Node.js',
    price: 149,
    duration: '12 weeks',
    level: 'Intermediate',
    category: 'Programming',
    image: '/images/courses/web-dev.jpg'
  },
  {
    id: 3,
    title: 'Personal Finance Mastery',
    description: 'Take control of your finances and build wealth',
    price: 79,
    duration: '6 weeks',
    level: 'Beginner',
    category: 'Finance',
    image: '/images/courses/finance.jpg'
  },
  // Add more courses as needed
];

export default function CoursesPage() {
  return (
    <MainLayout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Course Catalog
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Browse our comprehensive collection of courses
            </p>
          </div>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option value="">All Categories</option>
              <option value="trading">Trading</option>
              <option value="programming">Programming</option>
              <option value="finance">Finance</option>
            </select>

            <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option value="">Price Range</option>
              <option value="0-50">$0 - $50</option>
              <option value="51-100">$51 - $100</option>
              <option value="101+">$101+</option>
            </select>
          </div>

          {/* Course Grid */}
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center">
                        <span className="text-white text-lg font-medium">
                          {course.category.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500">{course.category}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">{course.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-indigo-600 font-medium">${course.price}</span>
                      <span className="text-gray-500 text-sm"> / lifetime access</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {course.duration} • {course.level}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/courses/${course.id}`}
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 