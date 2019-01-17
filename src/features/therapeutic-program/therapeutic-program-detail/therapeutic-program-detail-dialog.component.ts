import { Component } from '@angular/core';
import { DialogRef, DialogService, ModalComponent, SystelabModalContext } from 'systelab-components/widgets/modal';

export class TherapeuticProgramDetailDialogParameters extends SystelabModalContext {
	public width = 550;
	public height = 500;
}

@Component({
	selector:    'therapeutic-program-detail-dialog',
	templateUrl: 'therapeutic-program-detail-dialog.component.html'
})

export class TherapeuticProgramDetailDialog implements ModalComponent<TherapeuticProgramDetailDialogParameters> {

	public parameters: TherapeuticProgramDetailDialogParameters;

	constructor(public dialog: DialogRef<TherapeuticProgramDetailDialogParameters>, protected dialogService: DialogService) {
		this.parameters = dialog.context;
	}

	public static getParameters(): TherapeuticProgramDetailDialogParameters {
		return new TherapeuticProgramDetailDialogParameters();
	}

	public close(): void {
		this.dialog.close();
	}

	public submit(): void {
		this.dialog.close(true);
	}
}
