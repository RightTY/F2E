import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable, tap } from 'rxjs';
import { AgeLable, UIFrontendJobDataService } from 'src/app/service/uifrontend-job-data.service';
import { frontendDataModel } from 'src/model/frontendDataModel';
import { Vertical,Option } from 'src/model/primeNG/barModel';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.css','../content.component.css']
})
export class BasicDataComponent implements OnInit {
  public frontendDatas : frontendDataModel[] = [];

  public basicData!: Vertical;
  public basicOptions!: Option;

  public ageLable : AgeLable[] = [];

  constructor(private UIFrontendJobDataService:UIFrontendJobDataService) { }

  ngOnInit(): void {
    this.UIFrontendJobDataService.getUIFrontendJobData()
    .then(
      data=> {
        this.ageLable =  this.UIFrontendJobDataService.getAgeLable(data);
        this.basicData = this.UIFrontendJobDataService.getAgeVertical(this.ageLable);
        this.basicOptions =  this.UIFrontendJobDataService.getAgeOptions();
      }
    );
  }
}
