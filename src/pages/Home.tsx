


import React, { useState } from 'react';
import { IonContent,IonHeader,IonPage,IonTitle,IonToolbar,IonButton, IonFooter,} from '@ionic/react';
import { IonLabel,IonSegment,IonSegmentButton,} from '@ionic/react'; // Add segment related imports
import './Home.css'; // Import CSS file
import yetiVideo from '/Users/jordanhymas/Desktop/TestRepo/music-app/src/theme/MusicApp2.mp4'; // Import video file

const Home: React.FC = () => {
  const [importedFileName, setImportedFileName] = useState<string>("");
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [selectedSegment, setSelectedSegment] = useState<string>('all'); // State to manage segment selection
  const [videoEnded, setVideoEnded] = useState<boolean>(false); // State to track video playing state

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file input change event
    const file = event.target.files?.[0];
    if (file) {
      setImportedFileName(file.name);
      
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          const contents = e.target.result as string;
          const lines = contents.split('\n');
          const parsedData: string[][] = [];

          lines.forEach(line => {
            const row: string[] = [];
            let value = '';
            let withinQuotes = false;

            for (let i = 0; i < line.length; i++) {
              const char = line[i];

              if (char === '"') {
                withinQuotes = !withinQuotes;
              } else if (char === ',' && !withinQuotes) {
                row.push(value.trim());
                value = '';
              } else {
                value += char;
              }
            }

            row.push(value.trim());

            parsedData.push(row);
          });

          setCsvData(parsedData);
          setSelectedSegment('favorites'); // Switch to favorites segment after importing CSV
        }
      };

      reader.readAsText(file);
    }
  };

  const handleImportButtonClick = () => {
    // Handle import button click eventf
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleVideoEnded = () => {
    // Handle video ended event
    setVideoEnded(true);
  };

  return (
    <IonPage>
      <IonHeader>
        {/* Segment for filtering */}
        <IonToolbar>
          <div className="header-container">
          <IonSegment value={selectedSegment} onIonChange={e => setSelectedSegment(e.detail.value as string)}>
            <IonSegmentButton value="all" style={{ height: ".5px" }}> {/* Shorter segment buttons */}
              <IonLabel>Import</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="favorites" style={{ height: ".5px" }}> {/* Shorter segment buttons */}
              <IonLabel>Table View</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <div className="home-container">
          {/* Video Section */}
          {!videoEnded && selectedSegment === 'all' && (
            <div className="video-container">
              <video
                autoPlay
                muted
                loop
                className="video-element"
                onEnded={handleVideoEnded}
              >
                <source src={yetiVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          
          {/* Display CSV data in "Favorites" segment */}
          {selectedSegment === 'favorites' && csvData.length > 0 && (
            <div className="table-container" style={{ marginBottom: "10px" }}> {/* Adding margin bottom */}
              <table style={{ fontSize: "12px" }}> {/* Adjusting font size for smaller screens */}
                <thead>
                  <tr>
                    {csvData[0].map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Button to trigger file input click */}
          {selectedSegment === 'all' && (
            <div className="button-container">
              <IonButton onClick={handleImportButtonClick}>Import CSV</IonButton>
            </div>
          )}
          {importedFileName && (
            <div className="imported-file">
              Imported File: {importedFileName}
            </div>
          )}
        </div>
      </IonContent>
      {/* File input element */}
      <input
        type="file"
        id="fileInput"
        accept=".csv, .mp4"
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
      />
    </IonPage>
  );
};

export default Home;

