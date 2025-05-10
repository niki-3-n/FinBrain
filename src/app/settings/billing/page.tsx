'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export default function BillingSettingsPage() {
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-2xl font-semibold text-gray-900">Billing Settings</h1>
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
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  className="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg className="text-gray-500 mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Billing
                </Link>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Current Plan */}
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Current Plan</h3>
                  <div className="mt-6">
                    <div className="rounded-md bg-gray-50 px-6 py-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">Premium Plan</h4>
                          <p className="mt-1 text-sm text-gray-500">$29.99/month</p>
                        </div>
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Change plan
                        </button>
                      </div>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900">Features included:</h5>
                        <ul className="mt-2 text-sm text-gray-500 space-y-2">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Unlimited access to all courses
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Downloadable course materials
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Certificate of completion
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Payment Methods</h3>
                  <div className="mt-6">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center">
                        <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Visa ending in 4242</p>
                          <p className="text-sm text-gray-500">Expires 12/2024</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-sm text-red-600 hover:text-red-900"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add payment method
                    </button>
                  </div>
                </div>
              </div>

              {/* Billing History */}
              <div className="mt-6 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Billing History</h3>
                  <div className="mt-6">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Premium Plan - Monthly</p>
                        <p className="text-sm text-gray-500">March 1, 2024</p>
                      </div>
                      <div className="text-sm text-gray-900">$29.99</div>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Premium Plan - Monthly</p>
                        <p className="text-sm text-gray-500">February 1, 2024</p>
                      </div>
                      <div className="text-sm text-gray-900">$29.99</div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="text-sm text-indigo-600 hover:text-indigo-900"
                    >
                      View all invoices
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