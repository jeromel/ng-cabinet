import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

// import the GridModule for the Grid component
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
import * as numberingSystems from '../assets/cldr-data/numberingSystems.json';
declare let require: any;
import * as gregorian from '../assets/cldr-data/ca-gregorian.json';
import * as numbers from '../assets/cldr-data/numbers.json';
import * as timeZoneNames from '../assets/cldr-data/timeZoneNames.json';


import { PatientGridComponent } from './components/organisme/patient-grid/patient-grid.component';
import { PatientPageComponent } from './components/page/patient-page/patient-page.component';
import { PatientGridContainerComponent } from './components/organisme/patient-grid-container/patient-grid-container.component';


setCulture('fr');
loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load({
  'fr': {
    'pager': {
      'currentPageInfo': '{0} de {1} page',
      'totalItemsInfo': '{1} à {2} de {0}',
      'totalItemInfo': '{0} élément',
      'pagerDropDown': 'éléments par page',
      'pagerAllDropDown': 'éléments',
      'All': 'Tout',
      'firstPageTooltip': 'Aller à la première page',
      'lastPageTooltip': 'Aller à la dernière page',
      'nextPageTooltip': 'Aller à la page suivante',
      'previousPageTooltip': 'Aller à la page précédente',


    },
    'grid': {
      'ChooseDate': 'Choisir une date',

      'Add': 'Ajouter',

      'Cancel': 'Annuler',

      'Update': 'Mettre à jour',

      'Edit': 'Modifier',

      'Delete': 'Supprimer',
      'Save': 'Sauvegarder',
      'OKButton': "D'accord",
      'CancelButton': 'Annuler',
      'items': 'éléments',
      'item': 'élément',
      'BatchSaveConfirm': 'Vous êtes sûr de bien vouloir sauvegarder ces changements?',
      'BatchSaveLostChanges': 'Les changements non sauvegardé vont être pérdus.Vous êtes sûr de bien vouloir continuer?',
      'ConfirmDelete': 'Vous êtes sûr de bien vouloir supprimer tous ces éléments?',
      'CancelEdit': 'Vous êtes sûr de bien vouloir annuler tous changements?',
      'FilterbarTitle': " filtre",
      'DeleteOperationAlert': "Pas d'éléement sélectionné pour le supprimer",
      'EditOperationAlert': "Pas d'éléement sélectionné pour le modifier",
      'EmptyRecord': 'Pas de données à afficher'


    },
    'datepicker': {
      'today': "Aujourd'hui",
      'placeholder': "Sélectionner une date"
    },
    'dropdowns': {
      'noRecordsTemplate': "Aucune donnée existante",
      'actionFailureTemplate': "Action échouée"
    },
    "uploader": {
      "invalidMinFileSize": "La taille du fichier est trop petite! S'il vous plaît télécharger des fichiers avec une taille minimale de 10 Ko",
      "invalidMaxFileSize": "La taille du fichier dépasse 28 Mo",
      "invalidFileType": "Le type de fichier n'est pas autorisé",
      "Browse": "Parcourir",
      "Clear": "Effacer",
      "Upload": "Importer",
      "dropFilesHint": "ou déposer des fichiers ici",
      "uploadFailedMessage": "Impossible d'importer le fichier",
      "uploadSuccessMessage": "Fichier téléchargé avec succès",
      "removedSuccessMessage": "Fichier supprimé avec succès",
      "removedFailedMessage": "Le fichier n'a pas pu être supprimé",
      "inProgress": "Téléchargement en cours",
      "readyToUploadMessage": "Prêt à importer",
      "remove": "Retirer",
      "cancel": "Annuler",
      "delete": "Supprimer le fichier"
    }

  }
});

@NgModule({
  declarations: [
    AppComponent,
    PatientGridComponent,
    PatientPageComponent,
    PatientGridContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
