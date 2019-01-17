import { Patient } from '@model/patient';

export class Visit {

	constructor(public id: string, public date: Date, public patient: Patient, public location: string) {
	}
}


