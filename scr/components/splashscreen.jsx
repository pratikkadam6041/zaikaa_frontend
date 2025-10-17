// zaikaa/src/components/SplashScreen.jsx
import { useEffect, useRef } from 'react';

export default function SplashScreen() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play().catch(error => {
      console.log("Audio autoplay was prevented by the browser.");
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <h1 className="text-6xl font-extrabold text-green-600 animate-pulse">
        Zikaaa
      </h1>
      <p className="mt-4 text-gray-600">Loading the finest tastes for you...</p>
      <audio ref={audioRef} src="/welcome.mp3" preload="auto"></audio>
    </div>
  );
}