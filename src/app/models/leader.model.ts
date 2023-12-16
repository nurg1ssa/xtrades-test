export class Leader {
  public id: number;
  public name: string;
  public verified: boolean;
  public alerts: number;
  public winRate: number;
  public yields: number;
  public income: string;
  public incomePercent: number;
  public imagePath: string


  constructor(
    id: number,
    name: string,
    verified: boolean,
    alerts: number,
    winRate: number,
    yields: number,
    income: string,
    incomePercent: number,
    imagePath: string
  ) {
    this.id = id;
    this.name = name;
    this.verified = verified;
    this.alerts = alerts;
    this.winRate = winRate;
    this.yields = yields;
    this.income = income;
    this.incomePercent = incomePercent;
    this.imagePath = imagePath;

  }
}
