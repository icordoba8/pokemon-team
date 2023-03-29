export interface Pokemon {
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
  }>;
  name: string;
  sprites: {
    front_default: string;
  };
  attacks?: string;
}
