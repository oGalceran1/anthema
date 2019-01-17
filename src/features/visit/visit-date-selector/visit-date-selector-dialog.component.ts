import { Component, ViewChild } from '@angular/core';
import { DialogRef, DialogService, ModalComponent, SystelabModalContext } from 'systelab-components/widgets/modal';
import { CalendarTableComponent, DaySlot } from 'systelab-components/widgets/calendar/calendar-table.component';
import { of } from 'rxjs';
import { addMonths, addYears } from 'date-fns';
import { delay } from 'rxjs/operators';
import { I18nService } from 'systelab-translate/lib/i18n.service';

export class VisitDateSelectorDialogParameters extends SystelabModalContext {
	public width = 600;
	public height = 480;
}

@Component({
	selector:    'visit-date-selector-dialog',
	templateUrl: 'visit-date-selector-dialog.component.html',
	styleUrls: ['visit-date-selector-dialog.component.scss']
})

export class VisitDateSelectorDialog implements ModalComponent<VisitDateSelectorDialogParameters> {

	public parameters: VisitDateSelectorDialogParameters;

	@ViewChild('calendar') calendar: CalendarTableComponent;

	public currentDate: Date;
	public days: DaySlot[] = [];

	constructor(public dialog: DialogRef<VisitDateSelectorDialogParameters>, private i18nService: I18nService) {
		this.parameters = dialog.context;
		this.currentDate = new Date();
		this.getData();
	}


	public static getParameters(): VisitDateSelectorDialogParameters {
		return new VisitDateSelectorDialogParameters();
	}

	public close(): void {
		this.dialog.close();
	}

	public submit(): void {
		this.dialog.close(true);
	}

	public selectDaySlot(daySlot: DaySlot) {
		if (daySlot.date) {
			this.close();
		}
	}

	public doSomething(data: any) {
		console.log(data);
	}

	public changeYear(yearFactor: number): void {
		this.days = [];
		this.currentDate = addYears(this.currentDate, yearFactor);
		this.getData();
	}

	public changeMonth(monthFactor: number): void {
		this.days = [];
		this.currentDate = addMonths(this.currentDate, monthFactor);
		this.getData();
	}

	private getData() {
		of(true).pipe(delay(1000)).subscribe(
			(response) => {
				const returnedDays: DaySlot[] = [];
				returnedDays.push({date: new Date(2019, 0, 6), day: 6, isHoliday: true});
				returnedDays.push({date: new Date(2019, 0, 13), day: 13, isHoliday: true});
				this.days = returnedDays;
			}
		);
	}
}
