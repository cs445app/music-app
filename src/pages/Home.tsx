import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useRef } from 'react';
import './Home.css';

const Home: React.FC = () => {
  // Create a state variable to store the selected file
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // Create a reference to the file input element, needed to trigger the file selection dialog
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle the file input change event, which is triggered when the user selects a file
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  // Handle the import button click event, which is triggered when the user clicks the import button
  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonButton onClick={handleImportClick} style={{ width: '100%' }}>
            Import CSV
          </IonButton>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            style={{ display: 'none' }} // Hide the default file input element
          />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
