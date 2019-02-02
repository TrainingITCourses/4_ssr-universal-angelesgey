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
    console.log("Selected Status:" + p.status + " - Mission: " + p.mission + " - Agency: " + p.agency);
    //this.launchesResult = this.launches;
    this.launchesResult = this.launches.filter(
          launch => 
                    //launch.missions["id"] === p.mission
                    // &&
                    launch.status === p.status 
                    //&& 
                    //launch.lsp.id === p.agency
                    );
  };
  
}
