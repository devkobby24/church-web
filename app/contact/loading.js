"use client";
import { useState, useEffect } from "react";
import { lineSpinner } from "ldrs";

// Default values shown

export default function LoadingSpinner() {
  const [loading, setLoading] = useState(true);
  lineSpinner.register();

  // Automatically stop loading after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      
        <l-line-spinner
          size="40"
          stroke="3"
          speed="1"
          color="black"
        ></l-line-spinner>
      
    </div>
  );
}
