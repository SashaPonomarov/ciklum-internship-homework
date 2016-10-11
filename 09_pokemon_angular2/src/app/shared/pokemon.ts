export class Pokemon {
  constructor(
    public name: string,
    public id: number,
    public image: string,
    public types: {name: string}[]
    ){}
}