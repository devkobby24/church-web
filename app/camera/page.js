"use client";
import React, { useRef, useState, useEffect } from "react";

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [isAligned, setIsAligned] = useState(false);

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error("Error accessing the camera", error);
    }
  };

  const takePicture = () => {
    if (isAligned) {
      const context = canvasRef.current.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, 320, 240);
      const imageData = canvasRef.current.toDataURL("image/png");
      setPhoto(imageData);
    } else {
      alert("Align the ID within the frame to capture.");
    }
  };

  const checkAlignment = () => {
    // Placeholder logic: replace with actual alignment check
    // For demonstration, this will randomly toggle alignment status every second
    setIsAligned(true); // Set to true if aligned properly, add logic for actual alignment
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", width: "320px", height: "240px" }}>
        <video ref={videoRef} width="320" height="240" style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
        
        {/* Frame Overlay */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "90%",  // Adjust width to fit ID card
          height: "75%", // Adjust height to fit ID card
          transform: "translate(-50%, -50%)",
          border: isAligned ? "1px solid #00FF00" : "2px dashed #FF0000",
          borderRadius: "8px",
          pointerEvents: "none",
        }}></div>
      </div>

      <button 
        onClick={takePicture} 
        style={{
          marginTop: "20px",
          backgroundColor: isAligned ? "#00FF00" : "#CCCCCC",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: isAligned ? "pointer" : "not-allowed"
        }}
        disabled={!isAligned}
        checkAlignment={checkAlignment}
      >
        {isAligned ? "Capture Document" : "Align Document to Capture"}
      </button>

      <canvas ref={canvasRef} width="320" height="240" style={{ display: "none" }} />
      {photo && (
        <div style={{ marginTop: "20px" }}>
          <img src={photo} alt="Captured ID" style={{ borderRadius: "8px", border: "2px solid #00FF00" }} />
          <p style={{ color: "#00FF00", marginTop: "10px" }}>Document scanned successfully!</p>
        </div>
      )}
    </div>
  );
}

export default Camera;
