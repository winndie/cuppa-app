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
    image: '/LemonTea.png',
    recipes: [
        {name:Recipes["BoilWater"].toString(),image: '/BoilWater.png'},
        {name:Recipes["SteepWater"].toString(),image: '/TeaBag.png'},
        {name:Recipes["PourTea"].toString(),image: '/PourWater.png'},
        {name:Recipes["AddLemon"].toString(),image: '/AddLemon.png'}
    ] as IReadout[]
} as IReadout

export const Coffee = {
    name: Drinks["Coffee"].toString(),
    image: '/Coffee.png',
    recipes: [
        {name:Recipes["BoilWater"].toString(),image: '/BoilWater.png'},
        {name:Recipes["BrewCoffee"].toString(),image: '/BrewCoffee.png'},
        {name:Recipes["PourCoffee"].toString(),image: '/PourWater.png'},
        {name:Recipes["AddSugarMilk"].toString(),image: '/AddSugarMilk.png'},
    ] as IReadout[]
} as IReadout

export const Chocolate = {
    name: Drinks["Chocolate"].toString(),
    image: '/Chocolate.png',
    recipes: [
        {name:Recipes["BoilWater"].toString(),image: '/BoilWater.png'},
        {name:Recipes["AddChocolate"].toString(),image: '/AddChocolate.png'},
        {name:Recipes["PourChocolate"].toString(),image: '/PourWater.png'},
    ] as IReadout[]
} as IReadout