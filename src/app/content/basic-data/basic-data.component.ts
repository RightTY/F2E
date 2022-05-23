import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable, tap } from 'rxjs';
import { GetUIFrontendJobDataService } from 'src/app/service/get-uifrontend-job-data.service';
import { frontendDataModel } from 'src/model/frontendDataModel';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.css']
})
export class BasicDataComponent implements OnInit {
  frontendDatas : frontendDataModel[] = [];
  frontendDatas$! :Observable<HttpEvent<frontendDataModel[]>>;
  constructor(private getUIFrontendJobDataService:GetUIFrontendJobDataService) { }

  ngOnInit(): void {
    this.frontendDatas$ = this.getUIFrontendJobDataService.getUIFrontendJobData();
    lastValueFrom(this.frontendDatas$)
    .then(
      data=>(
        this.frontendDatas = (data as HttpResponse<frontendDataModel[]>).body!
      ));
  }
}
