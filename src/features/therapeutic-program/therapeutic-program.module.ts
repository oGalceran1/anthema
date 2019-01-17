import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TherapeuticProgramDetailDialog } from './therapeutic-program-detail/therapeutic-program-detail-dialog.component';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabPreferencesModule } from 'systelab-preferences';

@NgModule({
	declarations:    [TherapeuticProgramDetailDialog],
	imports:         [
		CommonModule,
		SystelabTranslateModule,
		SystelabComponentsModule,
		SystelabPreferencesModule
	],
	entryComponents: [TherapeuticProgramDetailDialog]
})
export class TherapeuticProgramModule {
}
