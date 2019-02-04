import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Launch } from '../store/models/launch';
import { Agency } from '../store/models/agency';
import { Mission } from '../store/models/mission';
import { Status } from '../store/models/status';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   
  public launches: Launch[] = this.data.launches;
  public agencies: Agency[] = this.data.agencies;
  public missionTypes: Mission[] = this.data.missionTypes;
  public launchStatus: Status[] = this.data.launchStatus;
  public launchesResult: Launch[] = this.launches;

  constructor(private data: DataService) { 
   }

  ngOnInit() { 
  }

  onSearch = (p) => {
    console.log("Search by Status:" + (p.statusFilter? p.statusFilter.name : "none") + 
      " - Mission: " + (p.missionFilter ? p.missionFilter.name : "none") + 
      " - Agency: " + (p.agencyFilter ? p.agencyFilter.name : "none"));
    
    this.launchesResult = this.launches;

    if(p.statusFilter != undefined) {
      this.launchesResult = this.searchByStatus(p.statusFilter, this.launchesResult);
    }
    if(p.missionFilter != undefined) {
      this.launchesResult = this.searchByMission(p.missionFilter, this.launchesResult);
    }

    if(p.agencyFilter != undefined) {
      this.launchesResult = this.searchByAgency(p.agencyFilter, this.launchesResult);
    }

  };

  searchByStatus = (statusFilter, array) => {
    return array.filter(
          launch => launch.status === statusFilter.id );
  };

  searchByMission = (missionFilter, array) => {
    return array.filter(
        launch => {
          return launch.missions.some(mission => (mission.id === missionFilter.id))
        }        
    )
  };

  searchByAgency = (agencyFilter, array) => {
    return array.filter(
        launch => {
          return launch.missions.some(
            mission => (mission.agencies != undefined) && (mission.agencies.some(
              agency => agency.id === agencyFilter.id
            ))
          )
        }
    )
  };
  
}
