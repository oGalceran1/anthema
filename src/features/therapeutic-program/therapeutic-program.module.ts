import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TherapeuticProgramDetailDialog } from './therapeutic-program-detail/therapeutic-program-detail-dialog.component';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { TherapeuticProgramPanelComponent } from './therapeutic-program-panel/therapeutic-program-panel.component';
import { VisitModule } from '@features/visit/visit.module';

@NgModule({
	declarations:    [TherapeuticProgramDetailDialog, TherapeuticProgramPanelComponent],
	imports:         [
		CommonModule,
		SystelabTranslateModule,
		SystelabComponentsModule,
		SystelabPreferencesModule,
		VisitModule
	],
	entryComponents: [TherapeuticProgramDetailDialog]
})
export class TherapeuticProgramModule {
}
