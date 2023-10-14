import LemomTeaImg from '../images/LemonTea.svg'
import CoffeeImg from '../images/Coffee.svg'
import ChocolateImg from '../images/Chocolate.svg'
import BoilWater from '../images/BoilWater.svg'
import BrewCoffee from '../images/BrewCoffee.svg'
import AddChocolate from '../images/AddChocolate.svg'
import AddLemon from '../images/AddLemon.svg'
import AddSugarMilk from '../images/AddSugarMilk.svg'
import PourWater from '../images/PourWater.svg'
import TeaBag from '../images/TeaBag.svg'

export enum Drinks {
    LemonTea='Lemon Tea',
    Coffee='Coffee',
    Chocolate='Chocolate'
}

export enum Recipes {
    BoilWater='Boil some water',
    SteepWater='Steep the water in the tea',
    PourTea='Pour tea in the cup',
    AddLemon='Add lemon',
    BrewCoffee='Brew the coffee grounds',
    PourCoffee='Pour coffee in the cup',
    AddSugarMilk='Add sugar and milk',
    AddChocolate='Add drinking chocolate powder to the water',
    PourChocolate='Pour chocolate in the cup'
}

export interface IReadout {
    name: string
    image:string
    recipes: IReadout[]
}

export const LemonTea = {
    name: Drinks["LemonTea"].toString(),
    image: LemomTeaImg,
    recipes: [
        {name:Recipes["BoilWater"].toString(),image: BoilWater},
        {name:Recipes["SteepWater"].toString(),image: TeaBag},
        {name:Recipes["PourTea"].toString(),image: PourWater},
        {name:Recipes["AddLemon"].toString(),image: AddLemon}
    ] as IReadout[]
} as IReadout

export const Coffee = {
    name: Drinks["Coffee"].toString(),
    image: CoffeeImg,
    recipes: [
        {name:Recipes["BoilWater"].toString(),image: BoilWater},
        {name:Recipes["BrewCoffee"].toString(),image: BrewCoffee},
        {name:Recipes["PourCoffee"].toString(),image: PourWater},
        {name:Recipes["AddSugarMilk"].toString(),image: AddSugarMilk},
    ] as IReadout[]
} as IReadout

export const Chocolate = {
    name: Drinks["Chocolate"].toString(),
    image: ChocolateImg,
    recipes: [
        {name:Recipes["BoilWater"].toString(),image: BoilWater},
        {name:Recipes["AddChocolate"].toString(),image: AddChocolate},
        {name:Recipes["PourChocolate"].toString(),image: PourWater},
    ] as IReadout[]
} as IReadout