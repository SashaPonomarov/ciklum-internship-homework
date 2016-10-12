export class Pokemon {
  constructor(
    public name: string,
    public id: number,
    public image: string,
    public types: {name: string}[],
    public attack: number,
    public defense: number,
    public HP: number,
    public speed: number,
    public weight: number
    ){}
}