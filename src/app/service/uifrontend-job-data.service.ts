import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { lastValueFrom, Observable, tap } from 'rxjs';
import { frontendDataModel } from 'src/model/frontendDataModel';
import { TS } from '../../../node_modules/typescript-linq/TS';
import { Axis, Datasets, Grid, Label, legend, Scales, Ticks, Vertical,Option } from 'src/model/primeNG/barModel';

@Injectable({
  providedIn: 'root'
})
export class UIFrontendJobDataService {

  constructor(private http:HttpClient) {

  }

  public async getUIFrontendJobData():Promise<frontendDataModel[]>{
    return await lastValueFrom(this.http
      .get<frontendDataModel[]>("https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json",
      {
        observe: "events",
        reportProgress:true
      })
      .pipe(
        tap((event)=>
        console.log(`Http Event Type = ${HttpEventType[event.type]}`)
        )
      )).then(
        data =>{
          return (data as HttpResponse<frontendDataModel[]>).body!;
        }
      );
  }

  // public getAgeLable(frontendDatas:frontendDataModel[]):TS.Collections.List<string>{
  //   let ageLable:TS.Collections.List<string>; 
  //   let frontendDataEnum:TS.Linq.Enumerator<frontendDataModel> = new TS.Linq.Enumerator<frontendDataModel>(frontendDatas);
  //   ageLable =  frontendDataEnum.select(x=>x.age).toList();
  //   return ageLable;
  // }

  public getAgeLable(frontendDatas:frontendDataModel[]):AgeLable[]{
    let ageLables:AgeLable[]=[];
    let frontendDataEnum:TS.Linq.Enumerator<frontendDataModel> = new TS.Linq.Enumerator<frontendDataModel>(frontendDatas);

    ageLables = frontendDataEnum.groupBy(x=>x.age).select(x=>new AgeLable(
      x.key,
      x.count()
    )).toArray();
    return ageLables;
  }
  
  public getAgeVertical(ageLables : AgeLable[]) : Vertical{
    let linqAgeLables:TS.Linq.Enumerator<AgeLable> = new TS.Linq.Enumerator<AgeLable>(ageLables);
      return new Vertical(
        linqAgeLables.select(x=>x.age).toArray(),
        [
          new Datasets(
            "age",
            "#42A5F5",
            linqAgeLables.select(x=>x.count).toArray()
          )
        ]
      );
  }

  public getAgeOptions(): Option{
    return new Option(
      new legend(
        new Label(
          "#ebedef"
        )
      ),
      new Scales(
        new Axis(
          new Ticks(
            "#ebedef"
          ),
          new Grid(
            "rgba(255,255,255,0.2)"
          )
        ),
        new Axis(
          new Ticks(
            "#ebedef"
          ),
          new Grid(
            "rgba(255,255,255,0.2)"
          )
        )
      )
    )
  }
}

export class AgeLable{
  public age : string;
  public count : number;

  constructor( age : string,count : number){
    this.age = age;
    this.count = count;
  }
}
