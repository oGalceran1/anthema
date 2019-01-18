import { NgModule } from '@angular/core';
import { DialogService, MessagePopupService } from 'systelab-components/widgets/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabLoginModule } from 'systelab-login';
import { PatientSearchDialog } from './search/patient-search-dialog.component';
import { PatientDialog } from './patient-detail-dialog/patient-dialog.component';
import { ComponentsModule } from '@components/components.module';
import { TherapeuticProgramModule } from '@features/therapeutic-program/therapeutic-program.module';

@NgModule({
	imports:         [
		FormsModule,
		CommonModule,
		SystelabTranslateModule,
		SystelabLoginModule,
		SystelabComponentsModule,
		TherapeuticProgramModule,
		ComponentsModule],
	declarations:    [
		PatientSearchDialog,
		PatientDialog
	],
	exports:         [],
	entryComponents: [
		PatientSearchDialog,
		PatientDialog
	],
	providers:       [
		MessagePopupService,
		DialogService,
	],
})
export class PatientModule {
}