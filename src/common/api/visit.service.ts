import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_PATH } from './variables';
import { ApiGlobalsService } from '@globals/globals.service';
import { BaseService } from './base.service';
import { Page } from '@model/page';
import { Inject, Injectable, Optional } from '@angular/core';
import { Visit } from '@model/visit';

@Injectable({
	providedIn: 'root'
})
export class VisitService extends BaseService {

	constructor(protected httpClient: HttpClient, protected apiGlobalsService: ApiGlobalsService,
	            @Optional() @Inject(BASE_PATH) basePath: string) {
		super(basePath, apiGlobalsService);
	}

	/**
	 * Get all Visits
	 *
	 */
	public getAllVisits(page: number, itemsPerPage: number): Observable<Page<Visit>> {

		return this.httpClient.get<any>('./assets/data/visits.json', {
			headers: new HttpHeaders(),
		});
	}
}
