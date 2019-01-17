import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientGrid } from './patient/grid/patient-grid.component';
import { FormsModule } from '@angular/forms';
import { SystelabComponentsModule } from 'systelab-components';
import { VisitGrid } from './visit/grid/visit-grid.component';

@NgModule({
	declarations: [PatientGrid, VisitGrid],
	imports:      [CommonModule,
		FormsModule,
		SystelabComponentsModule],
	exports:      [PatientGrid, VisitGrid]
})
export class ComponentsModule {
}

