import { Component, Input, ViewChild } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-patient-grid',
  templateUrl: './patient-grid.component.html',
  styleUrls: ['./patient-grid.component.scss']
})
export class PatientGridComponent {

//#region GridParameters
public frCulture: string = 'fr';
public editSettings: Object = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
public toolbar: string[] = ['Add', 'Delete', 'Update', 'Cancel'];
@Input() public data!: DataManager;

public numericParams = {
  params: {
    validateDecimalOnType: true,
    decimals: 0,
    format: 'N'
  }
}
public shortDateFormat = { type: 'date', format: 'dd/MM/yyyy' };
public filterSettings = { mode: 'Immediate', immediatemodedelay: 1400 };
//#endregion GridParameters

@ViewChild('template') public toolbarTemplate: any;
  public pageSettings?: PageSettingsModel;

  constructor() {

  }

  public ngOnInit(): void {
    this.pageSettings = { pageSizes: [10, 15, 20], pageSize: 20 };

  }

}
