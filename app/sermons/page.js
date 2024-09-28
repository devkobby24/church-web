'use client';
import React from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

// Dummy data for sermons (you can fetch this from an API or database in a real app)
const sermons = [
  {
    id: 1,
    title: 'The Power of Prayer',
    preacher: 'Pastor John Doe',
    date: 'September 10, 2024',
    videoUrl: 'https://www.youtube.com/embed/your-video-id', // Example video URL
    audioUrl: 'https://your-church-sermon-audio.com/sermon1.mp3', // Example audio URL
    description: 'An inspiring message on the importance of prayer in the life of a believer.',
  },
  {
    id: 2,
    title: 'Faith That Moves Mountains',
    preacher: 'Pastor Jane Smith',
    date: 'September 17, 2024',
    videoUrl: 'https://www.youtube.com/embed/your-video-id2',
    audioUrl: 'https://your-church-sermon-audio.com/sermon2.mp3',
    description: 'A powerful sermon on the impact of faith and how it can change our lives.',
  },
  {
    id: 3,
    title: 'Loving Your Neighbor',
    preacher: 'Pastor Mark Johnson',
    date: 'September 24, 2024',
    videoUrl: 'https://www.youtube.com/embed/your-video-id3',
    audioUrl: 'https://your-church-sermon-audio.com/sermon3.mp3',
    description: 'Learning to love others as Christ loved us.',
  },
];

const SermonsPage = () => {
  return (
    <div>
      <Header />
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Sermons</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sermons.map((sermon) => (
          <div key={sermon.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">{sermon.title}</h2>
            <p className="text-gray-600 mb-1">
              <span className="font-bold">Preacher: </span> {sermon.preacher}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-bold">Date: </span> {sermon.date}
            </p>
            <p className="text-gray-700 mb-4">{sermon.description}</p>

            {/* Video or Audio Embed */}
            {sermon.videoUrl ? (
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  className="w-full h-64 rounded-lg"
                  src={sermon.videoUrl}
                  title={sermon.title}
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <audio controls className="w-full">
                <source src={sermon.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SermonsPage;
