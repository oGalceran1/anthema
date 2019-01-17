import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitDetailDialog } from '@features/visit/visit-detail/visit-detail-dialog.component';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabPreferencesModule } from 'systelab-preferences';

@NgModule({
	declarations:    [VisitDetailDialog],
	imports:         [
		CommonModule,
		SystelabTranslateModule,
		SystelabComponentsModule,
		SystelabPreferencesModule
	],
	entryComponents: [VisitDetailDialog]

})
export class VisitModule {
}
