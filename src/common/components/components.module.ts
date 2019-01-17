import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientGrid } from './patient/grid/patient-grid.component';
import { FormsModule } from '@angular/forms';
import { SystelabComponentsModule } from 'systelab-components';
import { VisitGrid } from './visit/grid/visit-grid.component';
import { CountersPanelComponent } from './counters-panel/counters-panel.component';

@NgModule({
	declarations: [PatientGrid, VisitGrid, CountersPanelComponent],
	imports:      [CommonModule,
		FormsModule,
		SystelabComponentsModule],
	exports:      [PatientGrid, VisitGrid, CountersPanelComponent]
})
export class ComponentsModule {
}

