export class Datasets{
  public label : string;
  public backgroundColor : string ;
  public data : number[];

  constructor(label: string, backgroundColor: string, data: number[]){
    this.label = label;
    this.backgroundColor = backgroundColor;
    this.data = data;
  }
}

export class Vertical{
  public labels : string[];
  public datasets:Datasets[];

  constructor(labels: string[],  datasets:Datasets[]){
    this.labels = labels;
    this.datasets = datasets;
  }
}

export class Option{
  public plugins : legend;
  public scales : Scales;

  constructor(plugins: legend,  scales:Scales){
    this.plugins = plugins;
    this.scales = scales;
  }
}

export class legend{
  public labels : Label;

  constructor(labels: Label){
    this.labels = labels;
  }
}
export class Label{
  public color : string;

  constructor(color: string){
    this.color = color;
  }
}


export class Scales{
  public x : Axis;
  public y : Axis;

  constructor(x: Axis,y: Axis){
    this.x = x;
    this.y = y;
  }
}

export class Axis{
  public ticks : Ticks;
  public grid : Grid;

  constructor(ticks: Ticks,grid : Grid ){
    this.ticks = ticks;
    this.grid = grid;
  }
}

export class Ticks{
  public color : string;

  constructor(color: string){
    this.color = color;
  }
}

export class Grid{
  public color : string;

  constructor(color: string){
    this.color = color;
  }
}


