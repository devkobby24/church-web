'use client';
import { useState, useEffect } from 'react';

export default function LoadingSpinner() {
    const [loading, setLoading] = useState(true);

    // Automatically stop loading after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); 

        // Clean up the timer
        return () => clearTimeout(timer);
    }, []);

    if (!loading) {
        return null; 
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div
                className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full"
                style={{ animation: 'spin 3s linear infinite' }} 
            >
                Sermons
            </div>
        </div>
    );
}
