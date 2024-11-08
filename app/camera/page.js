"use client";
import React, { useRef, useState, useEffect } from "react";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [isAligned, setIsAligned] = useState(false);

  useEffect(() => {
    startCamera();

    // Set interval to check alignment every 500ms
    const alignmentInterval = setInterval(() => {
      checkAlignment();
    }, 500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(alignmentInterval);
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "environment" } 
      });
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
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 320, 240);

    // Get pixel data from canvas
    const imageData = context.getImageData(0, 0, 320, 240);
    const pixels = imageData.data;

    // The area representing the ID card (80% width and 70% height in the center)
    const frameWidth = 0.8 * 320; // 80% of canvas width
    const frameHeight = 0.7 * 240; // 70% of canvas height
    const frameX = (320 - frameWidth) / 2; // Centering horizontally
    const frameY = (240 - frameHeight) / 2; // Centering vertically

    // Basic check for alignment
    let idDetected = false;
    let totalPixels = 0;
    let alignedPixels = 0;

    for (let y = frameY; y < frameY + frameHeight; y++) {
      for (let x = frameX; x < frameX + frameWidth; x++) {
        const pixelIndex = (y * 320 + x) * 4; // Each pixel has 4 values (R, G, B, A)
        const r = pixels[pixelIndex];
        const g = pixels[pixelIndex + 1];
        const b = pixels[pixelIndex + 2];

        // Simple logic: look for colors that are likely part of the ID card (light and dark areas)
        if (r > 50 && g > 50 && b < 100) { // Assuming ID card will have dark text areas
          alignedPixels++;
        }
        totalPixels++;
      }
    }

    const alignmentPercentage = (alignedPixels / totalPixels) * 100;
    
    // If more than 70% of the frame area contains valid ID card pixels, consider it aligned
    setIsAligned(alignmentPercentage > 70);
  };

  return (
    <>
    <Header />
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh" }} className="pt-28">
      <div style={{
        position: "relative",
        width: "80%", // Adjust width for mobile (set to 80% of screen)
        maxWidth: "400px", // Maximum width for larger screens
        height: "auto", // Keep the height proportional
        aspectRatio: "4/3", // Maintain an ID card-like aspect ratio (4:3)
        margin: "20px 0",
      }}>
        <video 
          ref={videoRef} 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensure the video fits the container
            borderRadius: "10px"
          }}
        />
        
        {/* Frame Overlay */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "80%",  // Adjust width to fit ID card
          height: "70%", // Adjust height to fit ID card
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
    <Footer />
    </>
  );
}

export default Camera;
