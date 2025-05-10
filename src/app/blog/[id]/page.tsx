'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Article Header */}
              <div>
                <div className="relative">
                  <img
                    className="w-full h-96 object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                    alt="Article cover"
                  />
                </div>
                <div className="mt-8">
                  <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    The Future of Web Development: Trends to Watch in 2024
                  </h1>
                  <div className="mt-4 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Author"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">John Doe</p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime="2024-03-15">March 15, 2024</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>10 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="mt-8 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                  The web development landscape is constantly evolving, with new technologies and methodologies
                  emerging at a rapid pace. As we move through 2024, several key trends are shaping the future
                  of web development. Let's explore these trends and their implications for developers and
                  businesses alike.
                </p>

                <h2>1. Edge Computing Takes Center Stage</h2>
                <p>
                  Edge computing is revolutionizing how we deliver web applications. By processing data closer
                  to the user, we can achieve lower latency and better performance. This trend is particularly
                  important for real-time applications and global user bases.
                </p>

                <h2>2. WebAssembly Adoption Grows</h2>
                <p>
                  WebAssembly continues to gain traction as developers seek to run high-performance code in
                  the browser. This technology enables running code written in languages like C++, Rust, and
                  Go directly in the browser, opening up new possibilities for web applications.
                </p>

                <h2>3. Progressive Web Apps (PWAs) Become Standard</h2>
                <p>
                  PWAs are no longer just a trend but a standard approach to web development. With their
                  ability to work offline, provide push notifications, and offer app-like experiences, PWAs
                  are becoming the preferred choice for many businesses.
                </p>

                <h2>4. AI Integration in Web Development</h2>
                <p>
                  Artificial Intelligence is making its way into web development tools and processes. From
                  automated testing to code generation and optimization, AI is helping developers work more
                  efficiently and create better applications.
                </p>

                <h2>5. Enhanced Security Measures</h2>
                <p>
                  As cyber threats continue to evolve, web security remains a top priority. New security
                  standards and best practices are emerging, focusing on protecting user data and ensuring
                  secure communication.
                </p>

                <h2>Conclusion</h2>
                <p>
                  The future of web development is exciting and full of possibilities. By staying informed
                  about these trends and adapting to new technologies, developers can create better, more
                  efficient, and more secure web applications.
                </p>
              </div>

              {/* Social Sharing */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-sm font-medium text-gray-900">Share this article</h3>
                <div className="mt-4 flex space-x-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    <span className="ml-2">Twitter</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="ml-2">LinkedIn</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="ml-2">Facebook</span>
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900">Related Articles</h3>
                <div className="mt-4 grid gap-8 sm:grid-cols-2">
                  <div>
                    <Link href="/blog/2" className="block">
                      <div className="relative">
                        <img
                          className="w-full h-48 object-cover rounded-lg"
                          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          alt="Related article"
                        />
                      </div>
                      <h4 className="mt-2 text-lg font-medium text-gray-900">
                        Building Scalable Web Applications
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        Learn the best practices for building web applications that can handle millions of users.
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link href="/blog/3" className="block">
                      <div className="relative">
                        <img
                          className="w-full h-48 object-cover rounded-lg"
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
                          alt="Related article"
                        />
                      </div>
                      <h4 className="mt-2 text-lg font-medium text-gray-900">
                        The Rise of TypeScript in 2024
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        Discover why TypeScript is becoming the standard for modern web development.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="mt-8 lg:mt-0 lg:col-span-4">
              {/* Author Bio */}
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">About the Author</h3>
                  <div className="mt-4 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Author"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">John Doe</h4>
                      <p className="text-sm text-gray-500">Senior Web Developer & Technical Writer</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    John is a passionate web developer with over 10 years of experience in building
                    modern web applications. He loves sharing his knowledge through writing and teaching.
                  </p>
                </div>
              </div>

              {/* Categories */}
              <div className="mt-8 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Categories</h3>
                  <div className="mt-4 space-y-2">
                    <Link
                      href="/blog/category/web-development"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/blog/category/javascript"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      JavaScript
                    </Link>
                    <Link
                      href="/blog/category/react"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      React
                    </Link>
                    <Link
                      href="/blog/category/typescript"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      TypeScript
                    </Link>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Subscribe to our newsletter</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Get the latest articles and insights delivered straight to your inbox.
                  </p>
                  <form className="mt-4">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-3">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 