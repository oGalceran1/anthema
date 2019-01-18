import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SystelabComponentsModule } from 'systelab-components';
import { CountersPanelComponent } from '@features/follow-up/counters-panel/counters-panel.component';

@NgModule({
	declarations: [CountersPanelComponent],
	imports:      [CommonModule,
		FormsModule,
		SystelabComponentsModule],
	exports:      [CountersPanelComponent]
})
export class FollowUpModule {
}
