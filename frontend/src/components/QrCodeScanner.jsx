import React, { useState, useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const QrCodeScanner = () => {
    const [data, setData] = useState("Not Found");
    const [cameraError, setCameraError] = useState(null);

    useEffect(() => {
        // Request camera permissions when the component mounts
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(() => {
                console.log("Camera access granted.");
            })
            .catch((err) => {
                console.error("Camera access denied:", err.message);
                setCameraError(
                    "Camera access is required to scan QR codes. Please enable camera permissions."
                );
            });
    }, []);

    return (
        <div className="container my-5 text-center">
            <h2 className="mb-4">QR Code Scanner</h2>
            {cameraError ? (
                <div className="alert alert-danger" role="alert">
                    {cameraError}
                </div>
            ) : (
                <div
                    className="qr-scanner-container"
                    style={{
                        margin: "0 auto",
                        maxWidth: "500px",
                        border: "2px solid #1aac83",
                        borderRadius: "10px",
                    }}
                >
                    <BarcodeScannerComponent
                        width={500}
                        height={500}
                        onUpdate={(err, result) => {
                            if (result) setData(result.text);
                            else setData("Not Found");
                        }}
                    />
                </div>
            )}
            <p className="mt-4">{data}</p>
        </div>
    );
};

export default QrCodeScanner;
