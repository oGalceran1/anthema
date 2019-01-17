import { Observable, of as observableOf } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { ApiGlobalsService } from '@globals/globals.service';
import { Router } from '@angular/router';
import { MessagePopupService } from 'systelab-components/widgets/modal/message-popup/message-popup.service';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';
import { PatientSearchDialog, PatientSearchDialogParameters } from '@features/patient/search/patient-search-dialog.component';
import { ApplicationHeaderMenuEntry } from 'systelab-components/widgets/applicationframe/header/app-header.component';
import { ApplicationSidebarAction, ApplicationSidebarTab } from 'systelab-components/widgets/applicationframe/sidebar/app-sidebar.component';
import { ChangePasswordDialog, ChangePasswordDialogParameters } from 'systelab-login/widgets/change-password-dialog.component';
import { LocalStorageService } from 'systelab-preferences/lib/local-storage.service';
import { GridContextMenuOption } from 'systelab-components/widgets/grid/contextmenu/grid-context-menu-option';
import { Patient } from '@model/patient';
import { GridContextMenuActionData } from 'systelab-components/widgets/grid/contextmenu/grid-context-menu-action-data';
import { TherapeuticProgramDetailDialog, TherapeuticProgramDetailDialogParameters } from '@features/therapeutic-program/therapeutic-program-detail/therapeutic-program-detail-dialog.component';
import { Visit } from '@model/visit';

@Component({
	selector:    'main',
	templateUrl: 'main.component.html',
	styleUrls:   ['main.component.scss']
})
export class MainComponent implements OnInit {
	public title = 'Angular Seed Application';

	public userName: string;
	public userFullName: string;
	public hospitalName: string;

	public menu: ApplicationHeaderMenuEntry[] = [];

	constructor(private router: Router, protected messagePopupService: MessagePopupService,
	            protected dialogService: DialogService, protected i18nService: I18nService,
	            protected apiGlobalsService: ApiGlobalsService, private localStorage: LocalStorageService) {
	}

	public ngOnInit() {

		this.userName = 'admin';
		this.userFullName = 'Administrator';
		this.hospitalName = 'Customer name';

		this.setMenu();
	}

	public setMenu() {

		this.menu = [];
		this.i18nService.get(['COMMON_SETUP', 'COMMON_CHANGE_PASSWORD', 'COMMON_CHANGE_USER', 'COMMON_ABOUT', 'COMMON_TAB_ONE', 'COMMON_TAB_TWO', 'COMMON_TAB_THREE', 'COMMON_TAB_FOUR'])
			.subscribe((res) => {
				this.menu.push(new ApplicationHeaderMenuEntry(res.COMMON_ABOUT, false, () => this.doShowAbout()));
				this.menu.push(new ApplicationHeaderMenuEntry(res.COMMON_SETUP, false, () => this.doShowSettings()));
				this.menu.push(new ApplicationHeaderMenuEntry(res.COMMON_CHANGE_PASSWORD, false, () => this.doChangePassword()));
				this.menu.push(new ApplicationHeaderMenuEntry('', true));

				this.menu.push(new ApplicationHeaderMenuEntry('English', false, () => this.doChangeLanguage('en')));
				this.menu.push(new ApplicationHeaderMenuEntry('Español', false, () => this.doChangeLanguage('es-ES')));
				this.menu.push(new ApplicationHeaderMenuEntry('Italiano', false, () => this.doChangeLanguage('it-IT')));
				this.menu.push(new ApplicationHeaderMenuEntry('한국어', false, () => this.doChangeLanguage('kr-KR')));
				this.menu.push(new ApplicationHeaderMenuEntry('', true));
				this.menu.push(new ApplicationHeaderMenuEntry(res.COMMON_CHANGE_USER, false, () => this.doLogout()));
			});
	}

	public doShowSettings() {
	}

	public doChangePassword() {
		const parameters: ChangePasswordDialogParameters = ChangePasswordDialog.getParameters();
		parameters.minPasswordStrengthValue = 1;
		parameters.action = (a, b) => this.changePassword(a, b);
		this.dialogService.showDialog(ChangePasswordDialog, parameters)
			.subscribe();
	}

	public doShowAbout() {
	}

	public doLogout() {
		this.apiGlobalsService.bearer = undefined;
		this.router.navigate(['/login']);
	}

	public doPatientSearch() {
		const parameters: PatientSearchDialogParameters = PatientSearchDialog.getParameters();
		this.dialogService.showDialog(PatientSearchDialog, parameters)
			.subscribe();
	}

	public changePassword(oldPassword: string, newPassword: string): Observable<boolean> {
		if (oldPassword === newPassword) {
			this.i18nService.get(['ERR_ERROR', 'ERR_IMPOSSIBLE_CHANGE_PASSWORD'])
				.subscribe((res) => {
					this.messagePopupService.showErrorPopup(res.COMMON_ERROR, res.COMMON_IMPOSSIBLE_CHANGE_PASSWORD);
					return observableOf(false);
				});
		}
		return observableOf(true);
	}

	public selectedTab(event: any) {
	}

	public doChangeLanguage(language: string) {
		this.localStorage.put('language', language);
		this.i18nService.use(language)
			.subscribe(
				() => window.location.reload(),
				(error) => console.log('Error setting the language.'));

	}

	public button1() {
		console.log('Button 1');
	}

	public button2() {
		console.log('Button 2');
	}

	public getMenu(): Array<GridContextMenuOption<Patient>> {
		const menuDefs: Array<GridContextMenuOption<Patient>> = [];
		this.i18nService.get(['COMMON_ADMISSION', 'COMMON_THERAPEUTIC_PROGRAM'])
			.subscribe((res) => {
				menuDefs.push(new GridContextMenuOption('action1', res.COMMON_ADMISSION),
					new GridContextMenuOption('action2', res.COMMON_THERAPEUTIC_PROGRAM)
				);
			});
		return menuDefs;
	}

	public doMenuAction(contextMenuActionData: GridContextMenuActionData<Visit>) {
		if (contextMenuActionData.actionId === 'action1') {
		} else if (contextMenuActionData.actionId === 'action2') {
			this.showTherapeuticProgram(contextMenuActionData);
		}
	}

	private showTherapeuticProgram(contextMenuActionData: GridContextMenuActionData<Visit>) {
		const parameters: TherapeuticProgramDetailDialogParameters = TherapeuticProgramDetailDialog.getParameters();
		parameters.width = 400;
		this.dialogService.showDialog(TherapeuticProgramDetailDialog, parameters)
			.subscribe(res => {

			});

	}
}
