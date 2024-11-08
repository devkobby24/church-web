"use client";
import React, { useRef, useState, useEffect } from "react";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    startCamera();

    // Clean up on component unmount
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop()); // Stop all tracks
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }, // Use the back camera
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error("Error accessing the camera", error);
    }
  };

  const takePicture = () => {
    const context = canvasRef.current.getContext("2d");

    // Define the area within the dashed border (80% width and 70% height)
    const canvasWidth = videoRef.current.videoWidth;
    const canvasHeight = videoRef.current.videoHeight;

    let frameWidth = 0.8 * canvasWidth; // 80% of the video width
    let frameHeight = 0.7 * canvasHeight; // 70% of the video height
    const frameX = (canvasWidth - frameWidth) / 2; // Centering horizontally
    const frameY = (canvasHeight - frameHeight) / 2; // Centering vertically

    // Adjust for aspect ratio to avoid zoomed-in effect
    const aspectRatio = canvasWidth / canvasHeight;
    const frameAspect = frameWidth / frameHeight;

    if (aspectRatio > frameAspect) {
      // If the video is more horizontal, adjust the frame width
      const newHeight = frameWidth / aspectRatio;
      frameHeight = newHeight;
    } else {
      // If the video is more vertical, adjust the frame height
      const newWidth = frameHeight * aspectRatio;
      frameWidth = newWidth;
    }

    // Draw the video frame on the canvas, cropped to the dashed border area
    context.drawImage(
      videoRef.current,
      frameX, frameY, frameWidth, frameHeight, // Source from the video
      0, 0, frameWidth, frameHeight // Destination on the canvas
    );

    const imageData = canvasRef.current.toDataURL("image/png");
    setPhoto(imageData);
  };

  const retakePicture = () => {
    setPhoto(null); // Reset the photo state to allow retaking the picture
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
        }}
        className="pt-28"
      >
        <div
          style={{
            position: "relative",
            width: "80%", // Adjust width for mobile (set to 80% of screen)
            maxWidth: "400px", // Maximum width for larger screens
            height: "auto", // Keep the height proportional
            aspectRatio: "4/3", // Maintain an ID card-like aspect ratio (4:3)
            margin: "20px 0",
          }}
        >
          <video
            ref={videoRef}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensure the video fits the container
              borderRadius: "10px",
            }}
          />

          {/* Frame Overlay */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "80%", // Adjust width to fit ID card
              height: "70%", // Adjust height to fit ID card
              transform: "translate(-50%, -50%)",
              border: "2px dashed #FF0000", // Border for visual feedback
              borderRadius: "8px",
              pointerEvents: "none",
            }}
          ></div>
        </div>

        {!photo && (
          <button
            onClick={takePicture}
            style={{
              marginTop: "20px",
              backgroundColor: "#00FF00",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Capture Document
          </button>
        )}

        {photo && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={photo}
              alt="Captured ID"
              style={{ borderRadius: "8px", border: "2px solid #00FF00" }}
            />
            <p style={{ color: "#00FF00", marginTop: "10px" }}>Document scanned successfully!</p>
            <button
              onClick={retakePicture}
              style={{
                marginTop: "10px",
                backgroundColor: "#FF0000",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Retake
            </button>
          </div>
        )}

        <canvas ref={canvasRef} width="320" height="240" style={{ display: "none" }} />
      </div>
      <Footer />
    </>
  );
}

export default Camera;
