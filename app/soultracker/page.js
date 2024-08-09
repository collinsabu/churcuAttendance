"use client";
import React from "react";
import Link from "next/link";

const SoulTrackerPage = () => {
  return (
    <main className="bg-bg-green my-10 flex justify-center items-center min-h-screen">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto py-8 text-white bg-base_color px-4 sm:px-8 rounded-2xl text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">Coming Soon</h1>
        <p className="text-lg sm:text-2xl mb-6">
          The Soul Tracker page is currently under development and will be available soon. Please check back later.
        </p>
        <Link href="/">
          <button className="mt-6 px-4 py-2 bg-green-300 text-bg-green rounded hover:bg-green-700 hover:text-white">
            Go Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default SoulTrackerPage;
