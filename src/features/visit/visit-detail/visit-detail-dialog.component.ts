import { Component } from '@angular/core';
import { DialogRef, DialogService, ModalComponent, SystelabModalContext } from 'systelab-components/widgets/modal';
import { VisitDateSelectorDialog, VisitDateSelectorDialogParameters } from '@features/visit/visit-date-selector/visit-date-selector-dialog.component';

export class VisitDetailDialogParameters extends SystelabModalContext {
	public fullScreen = true;
}

@Component({
	selector:    'visit-detail-dialog',
	templateUrl: 'visit-detail-dialog.component.html'
})

export class VisitDetailDialog implements ModalComponent<VisitDetailDialogParameters> {

	public parameters: VisitDetailDialogParameters;

	constructor(public dialog: DialogRef<VisitDetailDialogParameters>, protected dialogService: DialogService) {
		this.parameters = dialog.context;
	}

	public static getParameters(): VisitDetailDialogParameters {
		return new VisitDetailDialogParameters();
	}

	public close(): void {
		this.dialog.close();
	}

	public submit(): void {
		this.dialog.close(true);
	}

	public showCalendar(): void {
		const parameters: VisitDateSelectorDialogParameters = VisitDateSelectorDialog.getParameters();
		this.dialogService.showDialog(VisitDateSelectorDialog, parameters)
			.subscribe(res => {

			});
	}
}
