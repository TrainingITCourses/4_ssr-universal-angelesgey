import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Status } from '../store/models/status';
import { Agency } from '../store/models/agency';
import { Mission } from '../store/models/mission';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @Input() public statuses: any[];
  @Input() public missions: any[];
  @Input() public agencies: any[];

  @Output() public search = new EventEmitter();

  selectedValueStatus: Status;
  selectedValueMission: Mission;
  selectedValueAgency: Agency;

  constructor() { }
  
  ngOnInit() {
  }

  public searchCriteria() {
    
    console.log("Selected Status:" + (this.selectedValueStatus? this.selectedValueStatus.name : "none") + 
      " - Mission: " + (this.selectedValueMission ? this.selectedValueMission.name : "none") + 
      " - Agency: " + (this.selectedValueAgency ? this.selectedValueAgency.name : "none"));

    this.search.emit({statusFilter: this.selectedValueStatus, 
                      agencyFilter: this.selectedValueAgency, 
                      missionFilter: this.selectedValueMission});
    
  }

}
