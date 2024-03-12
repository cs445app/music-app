import { IonButton, IonContent, IonHeader, IonItem, IonGrid, IonRow, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Settings.css';

const Settings: React.FC = () => {

  // This is a placeholder function for the import button
  // Should ask user to select a .csv file, then parse it and add the data to the database
  const handleImport = () => {
    console.log('Import');
  }

  // This is a placeholder function for the reset button
  const handleReset = () => {
    console.log('Reset');
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
