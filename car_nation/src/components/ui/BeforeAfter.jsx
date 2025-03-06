import { useState, useRef } from "react";

export function BeforeAfterSlider({ beforeImg, afterImg }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    document.body.style.userSelect = "none"; // Prevents text selection
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.userSelect = "auto";
  };

  const handleDrag = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newX = ((e.clientX - rect.left) / rect.width) * 100;
    newX = Math.max(0, Math.min(100, newX));
    setPosition(newX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto h-64 overflow-hidden cursor-ew-resize"
      onMouseMove={handleDrag} 
      onTouchMove={(e) => handleDrag(e.touches[0])}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img src={afterImg} alt="After" className="absolute top-0 left-0 w-full h-full object-cover" />
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={beforeImg} alt="Before" className="w-full h-full object-cover absolute top-0 left-0" />
      </div>
      <div 
        className="absolute top-0 bottom-0"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-1 bg-white h-full shadow-md"></div>
        <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
}

