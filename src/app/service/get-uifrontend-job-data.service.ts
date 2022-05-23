import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { lastValueFrom, Observable, tap } from 'rxjs';
import { frontendDataModel } from 'src/model/frontendDataModel';

@Injectable({
  providedIn: 'root'
})
export class GetUIFrontendJobDataService {

  constructor(private http:HttpClient) {

  }

  public async getUIData(){
    const data = await lastValueFrom(this.http.get<frontendDataModel[]>("https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json"));
    return data
  }
  getUIFrontendJobData():Observable<HttpEvent<frontendDataModel[]>>{

    return this.http
    .get<frontendDataModel[]>("https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json",
    {
      observe: "events",
      reportProgress:true
    })
    .pipe(
      tap((event)=>
      console.log(`Http Event Type = ${HttpEventType[event.type]}`)
      )
    );
  }
}
