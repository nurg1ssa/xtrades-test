export class Sponsor {
    public id: number;
    public name: string;
    public username: string;
    public xBitz: string;
    public imagePath: string
  
  
    constructor(
      id: number,
      name: string,
      username:string,
      xBitz: string,
      imagePath: string
    ) {
      this.id = id;
      this.name = name;
      this.username = username;
      this.xBitz = xBitz;
      this.imagePath = imagePath;
    }
  }
  