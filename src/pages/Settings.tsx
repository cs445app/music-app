import { IonButton, IonContent, IonGrid, IonList, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Settings.css';

const Settings: React.FC = () => {

  // This is a placeholder function for the import button
  // Should ask user to select a .csv file, then parse it and add the data to the database
  const handleImport = () => {
    console.log('DEBUG: handleImport function called.');
  }

  // This is a placeholder function for the reset button
  // Should ask user to confirm, then delete all data from the database
  const handleReset = () => {
    console.log('DEBUG: handleReset function called.');
  }

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonGrid>
            <IonRow>
              <IonButton onClick={handleImport}>Import</IonButton>
              <IonButton onClick={handleReset}>Reset</IonButton>
            </IonRow>
          </IonGrid>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
