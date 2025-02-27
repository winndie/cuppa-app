export enum Drinks {
    LemonTea = 'Lemon Tea',
    Coffee = 'Coffee',
    Chocolate = 'Chocolate'
}

export enum Recipes {
    BoilWater = 'Boil some water',
    SteepWater = 'Steep the water in the tea',
    PourTea = 'Pour tea in the cup',
    AddLemon = 'Add lemon',
    BrewCoffee = 'Brew the coffee grounds',
    PourCoffee = 'Pour coffee in the cup',
    AddSugarMilk = 'Add sugar and milk',
    AddChocolate = 'Add drinking chocolate powder to the water',
    PourChocolate = 'Pour chocolate in the cup'
}

export interface IReadout {
    name: string
    imageUrl: string
    recipes: IReadout[]
}
