import { Component, OnInit } from '@angular/core';
import  List from 'typescript.list';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css',
              '../app.component.css']
})



export class ContentComponent implements OnInit {
  contentSelects! : List<ContentSelect>;
  YearSelect! : List<YearSelect>;
  chooseContentCode! : number;
  chooseYearSelect! : number;
  constructor() {
  }
  ngOnInit(): void {
    this.contentSelects = new  List<ContentSelect>(
      new ContentSelect("基本資料",1),
      new ContentSelect("薪資與產業",2)
    );
    this.chooseContentCode = 1;


    this.YearSelect = new List<YearSelect>(
      new YearSelect(2021)
    );
    this.chooseYearSelect = 2021;
    // let filter = (item: ContentSelect, name: string) => item.name === name;
    // this.contentSelect = this.contentSelect.where(filter,"薪資與產業");
  }
}

export class ContentSelect{
  public name : string;
  public code: number;


  constructor(name : string,code:number){
    this.name = name;
    this.code = code;
  }
}

export class YearSelect{
  public yearName : string ;
  public year: number;


  constructor(year:number){
    this.yearName = year.toString()+' 年';
    this.year = year;
  }
}
