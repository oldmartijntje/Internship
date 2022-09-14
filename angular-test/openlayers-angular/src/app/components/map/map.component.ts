import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import Map from 'ol/Map';
import { Bridge } from 'src/app/bridge';
import { BridgeService } from 'src/app/services/bride.service';

@Component({
  selector: 'app-map',
  template: '',
  styles: [':host { width: 100%; height: 100%; display: block; }',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  @Input() map: Map;
  constructor(private elementRef: ElementRef, private bridgeService: BridgeService) {
  }
  bridges: Bridge[];

  ngOnInit() {
    this.map.setTarget(this.elementRef.nativeElement);
    this.bridgeService.getBridge().subscribe((bridges) => this.bridges = bridges);
  }
}