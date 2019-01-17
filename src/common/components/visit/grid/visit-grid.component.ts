import { Component } from '@angular/core';
import { AbstractApiGrid } from 'systelab-components/widgets/grid/abstract-api-grid.component';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { DialogService } from 'systelab-components/widgets/modal';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { VisitService } from '@api/visit.service';
import { Visit } from '@model/visit';

@Component({
	selector:    'visit-grid',
	templateUrl: '../../../../../node_modules/systelab-components/html/abstract-grid.component.html'
})
export class VisitGrid extends AbstractApiGrid<Visit> {

	public totalItems = 0;

	constructor(protected api: VisitService,
	            protected preferencesService: PreferencesService,
	            protected i18nService: I18nService,
	            protected dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	protected getColumnDefs(): Array<any> {
		const columnDefs: Array<any> = [
			{colId: 'id', headerName: this.i18nService.instant('COMMON_COLUMN_1'), field: 'id', width: 150},
			{
				colId:       'date',
				headerName:  this.i18nService.instant('COMMON_DATE'),
				valueGetter: (params: any) => {
					return this.getDate(params.data);
				},
				width:       150,
				hide:        true
			},
			{colId: 'location', headerName: this.i18nService.instant('COMMON_COLUMN_2'), field: 'location', width: 150}
		];

		return columnDefs;
	}

	private getDate(visit: Visit): string {
		let dobValue = '';
		if (visit && visit.date) {
			dobValue = this.i18nService.formatDateFullYear(visit.date);
		}
		return dobValue;
	}

	public getTotalItems() {
		return this.totalItems;
	}

	protected getData(page: number, itemsPerPage: number): Observable<Array<Visit>> {

		return this.api.getAllVisits(page, itemsPerPage)
			.pipe(
				map(value => {
					this.totalItems = value.totalElements;
					return value.content;
				})
			);

	}
}
