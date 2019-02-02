import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @Input() public statuses: any[];
  @Input() public missions: any[];
  @Input() public agencies: any[];

  public selectedStatus;
  public selectedAgency;
  public selectedMission;

  constructor() { }
  @Output() public search = new EventEmitter();
  ngOnInit() {
  }

  public searchClicked = () => {
    console.log("Search by status: " + this.selectedStatus + " - Agency: " + this.selectedAgency + " - Mission " + this.selectedMission);
    // this.search.next(this.selectedStatus, this.selectedMission, this.selectedAgency);
    this.search.emit({status: this.selectedStatus, mission: this.selectedMission, agency: this.selectedAgency});
  };

  public changeStatus(status) {
    console.log("Status selected " + status);
    this.selectedStatus = status;
  }

  public changeMission(mission) {
    console.log("Mission selected " + mission);
    this.selectedMission = mission;
  }

  public changeAgency(agency) {
    console.log("Agency selected " + agency);
    this.selectedAgency = agency;
  }

}
