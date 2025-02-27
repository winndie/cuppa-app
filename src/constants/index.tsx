import { Drinks, IReadout, Recipes } from '../types'

const LemomTeaImg = 'images/LemonTea.svg'
const CoffeeImg = 'images/Coffee.svg'
const ChocolateImg = 'images/Chocolate.svg'
const BoilWater = 'images/BoilWater.svg'
const BrewCoffee = 'images/BrewCoffee.svg'
const AddChocolate = 'images/AddChocolate.svg'
const AddLemon = 'images/AddLemon.svg'
const AddSugarMilk = 'images/AddSugarMilk.svg'
const PourWater = 'images/PourWater.svg'
const TeaBag = 'images/TeaBag.svg'

export const LemonTea = {
    name: Drinks["LemonTea"].toString(),
    imageUrl: LemomTeaImg,
    recipes: [
        { name: Recipes["BoilWater"].toString(), imageUrl: BoilWater },
        { name: Recipes["SteepWater"].toString(), imageUrl: TeaBag },
        { name: Recipes["PourTea"].toString(), imageUrl: PourWater },
        { name: Recipes["AddLemon"].toString(), imageUrl: AddLemon }
    ] as IReadout[]
} as IReadout

export const Coffee = {
    name: Drinks["Coffee"].toString(),
    imageUrl: CoffeeImg,
    recipes: [
        { name: Recipes["BoilWater"].toString(), imageUrl: BoilWater },
        { name: Recipes["BrewCoffee"].toString(), imageUrl: BrewCoffee },
        { name: Recipes["PourCoffee"].toString(), imageUrl: PourWater },
        { name: Recipes["AddSugarMilk"].toString(), imageUrl: AddSugarMilk },
    ] as IReadout[]
} as IReadout

export const Chocolate = {
    name: Drinks["Chocolate"].toString(),
    imageUrl: ChocolateImg,
    recipes: [
        { name: Recipes["BoilWater"].toString(), imageUrl: BoilWater },
        { name: Recipes["AddChocolate"].toString(), imageUrl: AddChocolate },
        { name: Recipes["PourChocolate"].toString(), imageUrl: PourWater },
    ] as IReadout[]
} as IReadout