export interface Breed {
    id: number;
    name: string;
    temperament: string;
    image: {
      url: string;
    };
    weight: {
      imperial: string;
    };
    height: {
      imperial: string;
    };
    life_span: string;
    country_code: string;
}
  