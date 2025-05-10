'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

// This would typically come from an API or database
const course = {
  id: 1,
  title: 'Trading Fundamentals',
  description: 'Learn the basics of trading and market analysis',
  price: 99,
  duration: '8 weeks',
  level: 'Beginner',
  category: 'Trading',
  instructor: {
    name: 'John Smith',
    title: 'Professional Trader',
    bio: '10+ years of trading experience in stocks, forex, and crypto markets.',
    image: '/images/instructors/john-smith.jpg'
  },
  modules: [
    {
      id: 1,
      title: 'Introduction to Trading',
      lessons: [
        { id: 1, title: 'What is Trading?', duration: '15 min', type: 'video' },
        { id: 2, title: 'Types of Markets', duration: '20 min', type: 'video' },
        { id: 3, title: 'Basic Terminology', duration: '25 min', type: 'video' }
      ]
    },
    {
      id: 2,
      title: 'Technical Analysis',
      lessons: [
        { id: 4, title: 'Candlestick Patterns', duration: '30 min', type: 'video' },
        { id: 5, title: 'Support and Resistance', duration: '25 min', type: 'video' },
        { id: 6, title: 'Moving Averages', duration: '20 min', type: 'video' }
      ]
    },
    {
      id: 3,
      title: 'Risk Management',
      lessons: [
        { id: 7, title: 'Position Sizing', duration: '25 min', type: 'video' },
        { id: 8, title: 'Stop Loss Strategies', duration: '20 min', type: 'video' },
        { id: 9, title: 'Risk-Reward Ratio', duration: '15 min', type: 'video' }
      ]
    }
  ]
};

export default function CoursePage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <MainLayout>
      <div className="bg-white">
        {/* Course Header */}
        <div className="relative bg-indigo-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Course cover"
            />
            <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {course.title}
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              {course.description}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`${
                      activeTab === 'overview'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('curriculum')}
                    className={`${
                      activeTab === 'curriculum'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Curriculum
                  </button>
                  <button
                    onClick={() => setActiveTab('instructor')}
                    className={`${
                      activeTab === 'instructor'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Instructor
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="py-8">
                {activeTab === 'overview' && (
                  <div className="prose prose-indigo max-w-none">
                    <h2>What you'll learn</h2>
                    <ul>
                      <li>Modern JavaScript (ES6+) fundamentals</li>
                      <li>React.js development with hooks and context</li>
                      <li>Next.js for server-side rendering and static generation</li>
                      <li>TypeScript for type-safe development</li>
                      <li>State management with Redux and Context API</li>
                      <li>Building RESTful APIs with Node.js</li>
                      <li>Database integration with MongoDB</li>
                      <li>Authentication and authorization</li>
                      <li>Deployment and DevOps basics</li>
                    </ul>

                    <h2>Requirements</h2>
                    <ul>
                      <li>Basic understanding of HTML and CSS</li>
                      <li>Familiarity with JavaScript fundamentals</li>
                      <li>A computer with Node.js installed</li>
                      <li>Enthusiasm to learn and build projects</li>
                    </ul>

                    <h2>Description</h2>
                    <p>
                      This comprehensive bootcamp will take you from a beginner to a professional web developer.
                      You'll learn by building real-world projects and following industry best practices.
                      By the end of the course, you'll have a portfolio of projects and the skills needed
                      to land a job as a web developer.
                    </p>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-8">
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                      <ul className="divide-y divide-gray-200">
                        <li>
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <span className="text-indigo-600 font-medium">1</span>
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <h3 className="text-lg font-medium text-gray-900">Getting Started</h3>
                                  <p className="text-sm text-gray-500">3 lessons • 45 minutes</p>
                                </div>
                              </div>
                              <div className="ml-2 flex-shrink-0">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Free
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <span className="text-indigo-600 font-medium">2</span>
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <h3 className="text-lg font-medium text-gray-900">JavaScript Fundamentals</h3>
                                  <p className="text-sm text-gray-500">12 lessons • 4 hours</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <span className="text-indigo-600 font-medium">3</span>
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <h3 className="text-lg font-medium text-gray-900">React.js Development</h3>
                                  <p className="text-sm text-gray-500">15 lessons • 6 hours</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'instructor' && (
                  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-16 w-16 rounded-full"
                            src={course.instructor.image}
                            alt={course.instructor.name}
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">{course.instructor.name}</h3>
                          <p className="text-sm text-gray-500">{course.instructor.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">About</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {course.instructor.bio}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Experience</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            <ul className="list-disc pl-5 space-y-1">
                              {/* Add experience details here */}
                            </ul>
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Skills</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            <ul className="list-disc pl-5 space-y-1">
                              {/* Add skills details here */}
                            </ul>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="mt-8 lg:mt-0 lg:col-span-4">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Course Price</h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>Get lifetime access to all course materials and future updates.</p>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-baseline text-6xl font-extrabold text-gray-900">
                      ${course.price}.99
                    </div>
                    <p className="mt-1 text-sm text-gray-500">One-time payment</p>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Enroll Now
                    </button>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-900">This course includes:</h4>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-2 text-sm text-gray-500">24 hours of video content</p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-2 text-sm text-gray-500">Downloadable resources</p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-2 text-sm text-gray-500">Certificate of completion</p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-2 text-sm text-gray-500">Lifetime access</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 