import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent {
  @Input() value: number = 0;
  @Input() skill: string = '';
  @Input() icon: string = '';

  public circumference: number = 2 * Math.PI * 47;
  public strokeDashoffset: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.onPercentageChanged(changes['value'].currentValue);
    }
  }

  onPercentageChanged(val: number) {
    const offset = this.circumference - (val / 189) * this.circumference;
    this.strokeDashoffset = offset;
  }
}
