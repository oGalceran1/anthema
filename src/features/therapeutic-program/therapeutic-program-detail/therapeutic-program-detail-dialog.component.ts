import { Component } from '@angular/core';
import { DialogRef, DialogService, ModalComponent, SystelabModalContext } from 'systelab-components/widgets/modal';
import { VisitDetailDialog, VisitDetailDialogParameters } from '@features/visit/visit-detail/visit-detail-dialog.component';

export class TherapeuticProgramDetailDialogParameters extends SystelabModalContext {
	public widthRelative = '75%';
	public heightRelative = '75%';
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

	public showVisit(): void {
		const parameters: VisitDetailDialogParameters = VisitDetailDialog.getParameters();
		this.dialogService.showDialog(VisitDetailDialog, parameters)
			.subscribe(res => {

			});

	}
}
