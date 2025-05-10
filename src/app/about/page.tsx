'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';

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

export default function AboutPage() {
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
          <motion.div 
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              About FinBrain
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Empowering traders with knowledge, tools, and community support since 2020
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
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
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              To democratize trading education and provide accessible, high-quality resources for traders of all levels.
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-white rounded-lg shadow-lg"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="h-12 w-12 text-indigo-600">
                  {point.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{point.title}</h3>
                <p className="mt-2 text-base text-gray-500">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-indigo-600">{member.role}</p>
                  <p className="mt-2 text-base text-gray-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeIn}
              >
                <div className="h-12 w-12 text-indigo-600 mx-auto">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{value.title}</h3>
                <p className="mt-2 text-base text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </MainLayout>
  );
}

const missionPoints = [
  {
    title: 'Quality Education',
    description: 'Providing comprehensive, up-to-date trading education that empowers our students.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Community Support',
    description: 'Building a strong community where traders can learn, share, and grow together.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'Continuously improving our platform with cutting-edge technology and teaching methods.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: 'David Chen',
    role: 'Founder & CEO',
    bio: 'Former Wall Street trader with 15+ years of experience in financial markets.',
    image: '/images/team/david-chen.jpg',
  },
  {
    name: 'Sarah Martinez',
    role: 'Head of Education',
    bio: 'Certified financial analyst with a passion for teaching and curriculum development.',
    image: '/images/team/sarah-martinez.jpg',
  },
  {
    name: 'Michael Thompson',
    role: 'Lead Instructor',
    bio: 'Professional trader specializing in technical analysis and risk management.',
    image: '/images/team/michael-thompson.jpg',
  },
];

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of integrity and transparency.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'We embrace innovation and continuous improvement.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Community',
    description: 'We foster a supportive and collaborative community.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]; 