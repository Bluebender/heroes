export interface Hero {
  id: number;
  name: string;
  images: {
    sm : string
  }
  biography : {
    fullName: string;
    aliases : string[]
  }
  powerstats : {
    intelligence : number
    strength : number
    speed : number
    durability : number
    power : number
    combat : number
  }
  appearance : {
    gender: string
    race: string
    height: string[]
    weight: string[]
    eyeColor: string
    hairColor: string
  }
}
