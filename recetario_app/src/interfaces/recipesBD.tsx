export interface ScreenData {
  key: string;
  name: string;
  params: Recipe;
  path: string | undefined;
}

export interface Recipe {
  id: number;
  type: string;
  name: string;
  like: boolean;
  ingredients: Ingredient[];
  steps: string[];
  timers: number[];
  imageURL: string;
  originalURL?: string;
  servings: string;
}

export interface Ingredient {
  id: number;
  quantity: string;
  name: string;
  type: Type;
}

export enum Type {
  Baking = 'Baking',
  Condiments = 'Condiments',
  Dairy = 'Dairy',
  Drinks = 'Drinks',
  Meat = 'Meat',
  Misc = 'Misc',
  Produce = 'Produce',
}
