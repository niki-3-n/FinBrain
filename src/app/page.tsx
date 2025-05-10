'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              className="mb-10 lg:mb-0"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Master the Art of Trading
              </h1>
              <p className="mt-6 text-xl">
                Learn from experts, practice with real-time data, and become a successful trader.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/hero/code-1076536_1280.jpg"
                alt="Trading Platform"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our Platform
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to become a successful trader
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-white rounded-lg shadow-lg"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="h-12 w-12 text-indigo-600">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Popular Courses Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Popular Courses
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Start your trading journey with our most popular courses
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{course.description}</p>
                  <div className="mt-4">
                    <Link
                      href={`/courses/${course.id}`}
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Students Say
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Success stories from our community
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section 
        className="py-20 bg-indigo-600 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeIn}
              >
                <div className="text-4xl font-extrabold">{stat.value}</div>
                <div className="mt-2 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-indigo-600 rounded-lg shadow-xl overflow-hidden"
            variants={fadeIn}
          >
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Ready to Start Your Trading Journey?
                  </h2>
                  <p className="mt-4 text-lg text-indigo-100">
                    Join thousands of successful traders who started with our platform.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/register"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                    >
                      Get Started Today
                    </Link>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <img
                    src="/images/hero/code-2434271_1280.jpg"
                    alt="Trading Success"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </MainLayout>
  );
}

const features = [
  {
    title: 'Expert Instructors',
    description: 'Learn from professional traders with years of experience.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Real-time Practice',
    description: 'Practice trading with real market data in a risk-free environment.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Comprehensive Curriculum',
    description: 'From basics to advanced strategies, we cover everything you need to know.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const courses = [
  {
    id: 1,
    title: 'Trading Fundamentals',
    description: 'Learn the basics of trading and market analysis.',
    image: '/images/hero/code-2558220_1280.jpg',
  },
  {
    id: 2,
    title: 'Technical Analysis',
    description: 'Master chart patterns and technical indicators.',
    image: '/images/hero/code-583795_1280.jpg',
  },
  {
    id: 3,
    title: 'Risk Management',
    description: 'Learn how to protect your capital and maximize returns.',
    image: '/images/hero/coding-1853305_1280.jpg',
  },
];

const testimonials = [
  {
    name: 'John Smith',
    title: 'Professional Trader',
    content: 'The courses here helped me transition from a beginner to a professional trader. The instructors are amazing!',
    avatar: '/images/hero/coding-924920_1280.jpg',
  },
  {
    name: 'Sarah Johnson',
    title: 'Day Trader',
    content: 'I love the practical approach and real-time practice sessions. It made learning much more effective.',
    avatar: '/images/hero/coding-926242_1280.jpg',
  },
  {
    name: 'Michael Brown',
    title: 'Swing Trader',
    content: 'The risk management course was a game-changer for me. Highly recommended!',
    avatar: '/images/hero/technology-1283624_1280.jpg',
  },
];

const stats = [
  { value: '10,000+', label: 'Active Students' },
  { value: '50+', label: 'Expert Instructors' },
  { value: '100+', label: 'Course Hours' },
  { value: '95%', label: 'Success Rate' },
]; 