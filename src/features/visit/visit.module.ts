import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitDetailDialog } from '@features/visit/visit-detail/visit-detail-dialog.component';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { VisitDateSelectorDialog } from '@features/visit/visit-date-selector/visit-date-selector-dialog.component';

@NgModule({
	declarations:    [VisitDetailDialog,
		VisitDateSelectorDialog],
	imports:         [
		CommonModule,
		SystelabTranslateModule,
		SystelabComponentsModule,
		SystelabPreferencesModule
	],
	entryComponents: [VisitDetailDialog,
		VisitDateSelectorDialog]

})
export class VisitModule {
}
