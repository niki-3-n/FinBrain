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

const tiers = [
  {
    name: 'Basic',
    price: 29,
    description: 'Perfect for beginners',
    features: [
      'Access to basic courses',
      'Community forum access',
      'Basic trading tools',
      'Email support',
      'Monthly webinars'
    ],
    cta: 'Start Basic Plan',
    mostPopular: false
  },
  {
    name: 'Pro',
    price: 99,
    description: 'Best for serious learners',
    features: [
      'All Basic features',
      'Access to all courses',
      'Advanced trading tools',
      'Priority support',
      'Weekly live sessions',
      'Trading signals',
      'Portfolio analysis'
    ],
    cta: 'Start Pro Plan',
    mostPopular: true
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'For professional traders',
    features: [
      'All Pro features',
      'Custom trading strategies',
      '1-on-1 mentorship',
      '24/7 priority support',
      'Advanced analytics',
      'API access',
      'Custom integrations',
      'Team management'
    ],
    cta: 'Contact Sales',
    mostPopular: false
  }
];

export default function PricingPage() {
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
              Choose Your Plan
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Select the perfect plan for your trading journey
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-lg shadow-lg ${
                  tier.mostPopular ? 'bg-indigo-600 text-white' : 'bg-white'
                }`}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                {tier.mostPopular && (
                  <div className="absolute top-0 right-0 -mt-4 -mr-4">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-yellow-400 text-indigo-900">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className={`text-2xl font-bold ${tier.mostPopular ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className={`text-5xl font-extrabold ${tier.mostPopular ? 'text-white' : 'text-gray-900'}`}>
                      ${tier.price}
                    </span>
                    <span className={`ml-1 text-xl font-medium ${tier.mostPopular ? 'text-indigo-200' : 'text-gray-500'}`}>
                      /month
                    </span>
                  </div>
                  <p className={`mt-6 text-base ${tier.mostPopular ? 'text-indigo-100' : 'text-gray-500'}`}>
                    {tier.description}
                  </p>
                </div>
                <div className="mt-8">
                  <ul className={`space-y-4 ${tier.mostPopular ? 'text-white' : 'text-gray-500'}`}>
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className={`h-6 w-6 ${tier.mostPopular ? 'text-indigo-200' : 'text-indigo-500'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    href={tier.name === 'Enterprise' ? '/contact' : '/register'}
                    className={`block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                      tier.mostPopular
                        ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to know about our plans
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              variants={fadeIn}
            >
              <h3 className="text-lg font-medium text-gray-900">
                Can I change my plan later?
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              variants={fadeIn}
            >
              <h3 className="text-lg font-medium text-gray-900">
                What payment methods do you accept?
              </h3>
              <p className="mt-2 text-base text-gray-500">
                We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              variants={fadeIn}
            >
              <h3 className="text-lg font-medium text-gray-900">
                Is there a free trial available?
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Yes, we offer a 14-day free trial for all plans. No credit card required to start.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              variants={fadeIn}
            >
              <h3 className="text-lg font-medium text-gray-900">
                Can I get a refund if I'm not satisfied?
              </h3>
              <p className="mt-2 text-base text-gray-500">
                We offer a 30-day money-back guarantee for all plans. If you're not satisfied, we'll refund your payment.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </MainLayout>
  );
} 