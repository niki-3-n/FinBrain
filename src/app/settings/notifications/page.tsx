'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export default function NotificationsSettingsPage() {
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-2xl font-semibold text-gray-900">Notification Settings</h1>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="space-y-1">
                <Link
                  href="/settings"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile
                </Link>
                <Link
                  href="/settings/notifications"
                  className="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg className="text-gray-500 mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Notifications
                </Link>
                <Link
                  href="/settings/security"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Security
                </Link>
                <Link
                  href="/settings/billing"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Billing
                </Link>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Email Notifications</h3>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="course-updates"
                          name="course-updates"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="course-updates" className="font-medium text-gray-700">Course Updates</label>
                        <p className="text-gray-500">Get notified when there are updates to your enrolled courses.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="new-courses"
                          name="new-courses"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="new-courses" className="font-medium text-gray-700">New Courses</label>
                        <p className="text-gray-500">Receive notifications about new courses in your areas of interest.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="marketing"
                          name="marketing"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="marketing" className="font-medium text-gray-700">Marketing Emails</label>
                        <p className="text-gray-500">Receive emails about new features, promotions, and special offers.</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-8 text-lg font-medium leading-6 text-gray-900">Push Notifications</h3>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="push-course-updates"
                          name="push-course-updates"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="push-course-updates" className="font-medium text-gray-700">Course Updates</label>
                        <p className="text-gray-500">Get push notifications for course updates and new content.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="push-reminders"
                          name="push-reminders"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="push-reminders" className="font-medium text-gray-700">Study Reminders</label>
                        <p className="text-gray-500">Receive reminders to continue your learning journey.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save preferences
                    </button>
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