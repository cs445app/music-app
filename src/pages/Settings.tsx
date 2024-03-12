import { IonButton, IonContent, IonHeader, IonItem, IonGrid, IonRow, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Settings.css';

const Settings: React.FC = () => {

  // This is a placeholder function for the import button
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
        <ExploreContainer name="Settings page" />
      </IonContent>
    </IonPage>
  );
};

export default Settings;
