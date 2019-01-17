import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { BASE_PATH } from '@api/variables';
import { environment } from '../environments/environment';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app.routing';
import { MessagePopupService } from 'systelab-components/widgets/modal/message-popup/message-popup.service';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';
import { SystelabLoginModule } from 'systelab-login';
import { EmptyBodyInterceptor } from '@api/empty-body.interceptor';
import { GridHeaderContextMenuComponent } from 'systelab-components/widgets/grid/contextmenu/grid-header-context-menu.component';
import { AgGridModule } from 'ag-grid-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GridContextMenuCellRendererComponent } from 'systelab-components/widgets/grid/contextmenu/grid-context-menu-cell-renderer.component';
import { LoginModule } from '@features/login/login.module';
import { PatientModule } from '@features/patient/patient.module';
import { ComponentsModule } from '@components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	imports:         [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		DragDropModule,
		HttpClientModule,
		PatientModule,
		ComponentsModule,
		LoginModule,
		SystelabTranslateModule.forRoot(),
		SystelabPreferencesModule.forRoot(),
		SystelabComponentsModule.forRoot(),
		SystelabLoginModule.forRoot(),
		AgGridModule.withComponents([
			GridContextMenuCellRendererComponent,
			GridHeaderContextMenuComponent
		]),
		AppRoutingModule
	],
	declarations:    [
		AppComponent,
		MainComponent
	],
	providers:       [
		{provide: BASE_PATH, useValue: environment.API_BASE_PATH},
		{provide: HTTP_INTERCEPTORS, useClass: EmptyBodyInterceptor, multi: true},
		MessagePopupService,
		DialogService
	],
	entryComponents: [
	],
	bootstrap:       [AppComponent]
})
export class AppModule {
}
