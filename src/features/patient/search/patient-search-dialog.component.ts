import { Component, ViewChild } from '@angular/core';
import { PatientService } from '../../../common/api/patient.service';
import { DialogRef, DialogService, ModalComponent, SystelabModalContext } from 'systelab-components/widgets/modal';
import { PatientDialog, PatientDialogParameters } from '../patient-detail-dialog/patient-dialog.component';

import { GridContextMenuActionData } from 'systelab-components/widgets/grid/contextmenu/grid-context-menu-action-data';
import { Patient } from '../../../common/model/patient';
import { GridContextMenuOption } from 'systelab-components/widgets/grid/contextmenu/grid-context-menu-option';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { PatientGrid } from '../../../common/components/patient/grid/patient-grid.component';
import { TherapeuticProgramDetailDialog, TherapeuticProgramDetailDialogParameters } from '@features/therapeutic-program/therapeutic-program-detail/therapeutic-program-detail-dialog.component';

export class PatientSearchDialogParameters extends SystelabModalContext {
	public width = 900;
	public height = 550;
}

@Component({
	selector:    'patient-search-dialog',
	templateUrl: 'patient-search-dialog.component.html',
})
export class PatientSearchDialog implements ModalComponent<PatientSearchDialogParameters> {

	public parameters: PatientSearchDialogParameters;

	@ViewChild('patientgrid') public patientgrid: PatientGrid;

	public title = '';

	constructor(public dialog: DialogRef<PatientSearchDialogParameters>, protected dialogService: DialogService, protected patientService: PatientService, protected i18nService: I18nService) {
		this.parameters = dialog.context;
		i18nService.get('COMMON_PATIENT_MANAGEMENT')
			.subscribe((res) => {
				this.title = res;
			});

	}

	public close(): void {
		this.dialog.close(false);
	}

	public static getParameters(): PatientSearchDialogParameters {
		return new PatientSearchDialogParameters();
	}

	public doCreatePatient() {
		const parameters: PatientDialogParameters = PatientDialog.getParameters();
		this.dialogService.showDialog(PatientDialog, parameters)
			.subscribe(
				(result) => {
					if (result) {
						this.patientgrid.refresh();
					}
				}
			);
	}

	public doSelect(patient: Patient): void {
		const parameters: PatientDialogParameters = PatientDialog.getParameters();
		parameters.patientId = patient.id;

		this.dialogService.showDialog(PatientDialog, parameters)
			.subscribe(
				(result) => {
					if (result) {
						this.patientgrid.refresh();
					}
				}
			);
	}

	public getMenu(): Array<GridContextMenuOption<Patient>> {
		const menuDefs: Array<GridContextMenuOption<Patient>> = [];
		this.i18nService.get(['COMMON_UPDATE', 'COMMON_DELETE', 'COMMON_ADMISSION', 'COMMON_THERAPEUTIC_PROGRAM', 'COMMON_VISIT'])
			.subscribe((res) => {
				menuDefs.push(new GridContextMenuOption('action1', res.COMMON_UPDATE),
					new GridContextMenuOption('action2', res.COMMON_DELETE),
					new GridContextMenuOption('action3', res.COMMON_ADMISSION),
					new GridContextMenuOption('action4', res.COMMON_THERAPEUTIC_PROGRAM),
					new GridContextMenuOption('action5', res.COMMON_VISIT)
				);
			});
		return menuDefs;
	}

	public doMenuAction(contextMenuActionData: GridContextMenuActionData<Patient>) {
		if (contextMenuActionData.actionId === 'action1') {
			this.updatePatient(contextMenuActionData);
		} else if (contextMenuActionData.actionId === 'action2') {
			this.deletePatient(contextMenuActionData);
		} else if (contextMenuActionData.actionId === 'action3') {
			this.showAdmission(contextMenuActionData);
		} else if (contextMenuActionData.actionId === 'action4') {
			this.showTherapeuticProgram(contextMenuActionData);
		} else if (contextMenuActionData.actionId === 'action5') {
			this.showVisit(contextMenuActionData);
		}
	}

	private updatePatient(contextMenuActionData: GridContextMenuActionData<Patient>) {
		this.doSelect(contextMenuActionData.data);
	}

	private deletePatient(contextMenuActionData: GridContextMenuActionData<Patient>) {
		this.patientService.remove(contextMenuActionData.data.id)
			.subscribe(result => this.patientgrid.refresh(), error => console.log('error'));
	}

	private showAdmission(contextMenuActionData: GridContextMenuActionData<Patient>) {
	}

	private showTherapeuticProgram(contextMenuActionData: GridContextMenuActionData<Patient>) {
		const parameters: TherapeuticProgramDetailDialogParameters = TherapeuticProgramDetailDialog.getParameters();
		parameters.width = 400;
		this.dialogService.showDialog(TherapeuticProgramDetailDialog, parameters)
			.subscribe(res => {

			});

	}

	private showVisit(contextMenuActionData: GridContextMenuActionData<Patient>) {
	}

}
