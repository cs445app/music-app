import React from 'react';
import { IonItem, IonLabel, IonList, IonPage, IonReorder, IonReorderGroup, ItemReorderEventDetail,IonInput, IonContent, IonCard } from '@ionic/react';
import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';


function Example() {
  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }
  

  return (
    <IonPage>
      <IonContent scrollY={true}>
        <br></br>
        <br></br>
      <IonCard>
          <IonCardHeader>
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        </IonCard>
      <IonList>
        <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
          <IonItem>
            <IonLabel> <IonInput label="Type something"
              labelPlacement="stacked"
              clearOnEdit={true}
              placeholder="Enter Artist Name" value={localStorage.getItem('artistName1')} onIonChange={(e) => localStorage.setItem('artistName1', e.detail.value!)}></IonInput></IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>

          <IonItem>
            <IonLabel> <IonInput label="Type something"
              labelPlacement="stacked"
              clearOnEdit={true}
              placeholder="Enter Artist Name" value={localStorage.getItem('artistName2')} onIonChange={(e) => localStorage.setItem('artistName2', e.detail.value!)}></IonInput></IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>

          <IonItem>
            <IonLabel> <IonInput label="Type something"
              labelPlacement="stacked"
              clearOnEdit={true}
              placeholder="Enter Artist Name" value={localStorage.getItem('artistName3')} onIonChange={(e) => localStorage.setItem('artistName3', e.detail.value!)}></IonInput></IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>

          <IonItem>
            <IonLabel><IonInput label="Type something"
              labelPlacement="stacked"
              clearOnEdit={true}
              placeholder="Enter Artist Name" value={localStorage.getItem('artistName4')} onIonChange={(e) => localStorage.setItem('artistName4', e.detail.value!)}></IonInput></IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>

          <IonItem>
            <IonLabel><IonInput label="Type something"
              labelPlacement="stacked"
              clearOnEdit={true}
              placeholder="Enter Artist Name" value={localStorage.getItem('artistName5')} onIonChange={(e) => localStorage.setItem('artistName5', e.detail.value!)}></IonInput></IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>
        </IonReorderGroup>
      </IonList>

      </IonContent>
    </IonPage>
  );
}
export default Example;