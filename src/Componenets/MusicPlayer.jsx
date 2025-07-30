import React, { useState, useRef, useEffect } from 'react';

export default function MusicPlayer({currentSong,playing,onPlayingChange,onMutingChange,onNextTrack,onPreviousTrack,onChangeTime}) {


  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(currentSong?.duration);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [title,setTitle]=useState(currentSong?.title)
  const progressRef = useRef(null);


  useEffect(() => {
    setDuration(currentSong?.duration);
    setTitle(currentSong?.title);
    setCurrentTime(0)
  }, [currentSong]);



  useEffect(() => {
    setIsPlaying(playing);
  }, [playing]);


  function formatTime  (time)  {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  function changePlaying(){
    setIsPlaying(prev => {
        const newPlaying = !prev;
        if (onPlayingChange) {
          onPlayingChange(newPlaying);
        }
        return newPlaying;
      });

  }

  function changeMute(){
    setIsMuted(prev => {
        const newMuted = !prev;
        if (onMutingChange) {
            onMutingChange(newMuted);
        }
        return newMuted;
      });
  }



  function  handleProgressClick  (e) {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const percentage = clickX / width;
      const newTime = percentage * duration;
      setCurrentTime(Math.max(0, Math.min(newTime, duration)));
      onChangeTime(Math.max(0, Math.min(newTime, duration)))
    }
  };

  const progress = (currentTime / duration) * 100;

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);




  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
      <div className="flex items-center  px-4 py-3 space-x-4">
            <div className="flex items-center space-x-2">
            <button
                type="button"
                className="h-8 w-8 p-0 cursor-pointer flex items-center justify-center text-white hover:bg-gray-700 rounded"
                onClick={() => onPreviousTrack()}
                aria-label="Restart"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <polygon points="19 20 9 12 19 4 19 20" />
                <line x1="5" y1="19" x2="5" y2="5" />
                </svg>
            </button>

            <button
                type="button"
                className="h-10 w-10 p-0 cursor-pointer text-white hover:bg-gray-700 rounded flex items-center justify-center"
                onClick={() => changePlaying()}
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                </svg>
                ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                )}
            </button>

            <button
                type="button"
                className="h-8 w-8 cursor-pointer flex justify-center items-center p-0 text-white hover:bg-gray-700 rounded"
                onClick={() => onNextTrack()}
                aria-label="Skip Forward 10 seconds"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <polygon points="5 4 15 12 5 20 5 4" />
                <line x1="19" y1="5" x2="19" y2="19" />
                </svg>
            </button>
            </div>

            <div className="flex-1 min-w-0">
            <div className="text-center mb-2">
                <span className="text-white text-sm font-medium">
                    {title}
                </span>
            </div>
            
            <div className="flex items-center space-x-3">
                <span className="text-gray-400 text-xs font-mono w-10 text-right">
                {formatTime(currentTime)}
                </span>
                
                <div 
                ref={progressRef}
                className="flex-1 h-1 bg-gray-600 rounded-full cursor-pointer relative group"
                onClick={handleProgressClick}
                >
                <div 
                    className="h-full bg-white rounded-full transition-all duration-150 ease-out"
                    style={{ width: `${progress}%` }}
                />
                <div 
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ left: `${progress}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                />
                </div>
                
                <span className="text-gray-400 text-xs font-mono w-10">
                {formatTime(duration)}
                </span>
            </div>
            </div>

            <div className="flex items-center space-x-2">
            <button
                type="button"
                className="h-8 w-8 p-0 flex cursor-pointer justify-center items-center text-white hover:bg-gray-700 rounded"
                onClick={() => changeMute()}
                aria-label={isMuted || volume === 0 ? "Unmute" : "Mute"}
            >
                {isMuted || volume === 0 ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <path d="M9 9v6h4l5 5V4l-5 5H9z" />
                </svg>
                ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M15.54 8.46a5 5 0 010 7.07" />
                    <path d="M19.07 4.93a9 9 0 010 14.14" />
                </svg>
                )}
            </button>
            
            <button
                type="button"
                className="h-8 w-8 p-0 flex cursor-pointer justify-center items-center text-white hover:bg-gray-700 rounded"
                aria-label="Maximize"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M8 3H5a2 2 0 00-2 2v3" />
                <path d="M16 21h3a2 2 0 002-2v-3" />
                <path d="M21 8V5a2 2 0 00-2-2h-3" />
                <path d="M3 16v3a2 2 0 002 2h3" />
                </svg>
            </button>
            </div>
      </div>
    </div>
  );
}
