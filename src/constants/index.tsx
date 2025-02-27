import { ReactComponent as LemomTeaImg } from '../images/LemonTea.svg'
import { ReactComponent as CoffeeImg } from '../images/Coffee.svg'
import { ReactComponent as ChocolateImg } from '../images/Chocolate.svg'
import { ReactComponent as BoilWater } from '../images/BoilWater.svg'
import { ReactComponent as BrewCoffee } from '../images/BrewCoffee.svg'
import { ReactComponent as AddChocolate } from '../images/AddChocolate.svg'
import { ReactComponent as AddLemon } from '../images/AddLemon.svg'
import { ReactComponent as AddSugarMilk } from '../images/AddSugarMilk.svg'
import { ReactComponent as PourWater } from '../images/PourWater.svg'
import { ReactComponent as TeaBag } from '../images/TeaBag.svg'
import { Drinks, IReadout, Recipes } from '../types'

export const LemonTea = {
    name: Drinks["LemonTea"].toString(),
    image: LemomTeaImg,
    recipes: [
        { name: Recipes["BoilWater"].toString(), image: BoilWater },
        { name: Recipes["SteepWater"].toString(), image: TeaBag },
        { name: Recipes["PourTea"].toString(), image: PourWater },
        { name: Recipes["AddLemon"].toString(), image: AddLemon }
    ] as IReadout[]
} as IReadout

export const Coffee = {
    name: Drinks["Coffee"].toString(),
    image: CoffeeImg,
    recipes: [
        { name: Recipes["BoilWater"].toString(), image: BoilWater },
        { name: Recipes["BrewCoffee"].toString(), image: BrewCoffee },
        { name: Recipes["PourCoffee"].toString(), image: PourWater },
        { name: Recipes["AddSugarMilk"].toString(), image: AddSugarMilk },
    ] as IReadout[]
} as IReadout

export const Chocolate = {
    name: Drinks["Chocolate"].toString(),
    image: ChocolateImg,
    recipes: [
        { name: Recipes["BoilWater"].toString(), image: BoilWater },
        { name: Recipes["AddChocolate"].toString(), image: AddChocolate },
        { name: Recipes["PourChocolate"].toString(), image: PourWater },
    ] as IReadout[]
} as IReadout