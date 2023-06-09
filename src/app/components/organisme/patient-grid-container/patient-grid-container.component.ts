import { Component, Inject } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { Patient } from 'src/app/models/patient';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-patient-grid-container',
  templateUrl: './patient-grid-container.component.html',
  styleUrls: ['./patient-grid-container.component.scss']
})
export class PatientGridContainerComponent {

  public data: DataManager = new DataManager({
    url: environment.settings.cabinetApi + '/api/Patient/GetPatients',
    batchUrl: environment.settings.cabinetApi + '/api/Patient/BatchUpdatePatients',
    accept: true,
    requestType: 'GET, POST, PUT, DELETE, OPTIONS',
    adaptor: new UrlAdaptor()
  });

  constructor() {
  }
}
