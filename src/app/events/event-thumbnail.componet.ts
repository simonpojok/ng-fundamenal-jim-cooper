import {Component, EventEmitter, Input, Output} from '@angular/core';
import { IEvent } from './shared';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail" [routerLink]="['/events', event.id]">
    <h2>{{ event?.name }}</h2>
    <div>Date: {{ event?.date }}</div>
    <div [ngSwitch]="event?.time">
      Time: {{ event?.time }}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{ event?.price }}</div>
    <div *ngIf="event?.location">
        <span>Location: {{ event?.location?.address }}</span>
        <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
      Online URL: {{ event?.onlineUrl }}
    </div>
  </div>
  `,
  styles: [
    ` .pad-left { margin-left: 10px;} .thumbnail { min-height: 210px;}
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: IEvent; // coming from another component

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart};
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return {};
  }
}
