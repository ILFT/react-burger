import { IngredientType, IngredientTypeConstructor, TOrder, TOrdersResponse, User } from "../utils/types";

export const mockIngredient: IngredientType = {

    _id: "60666c42cc7b410027a1a9b5",
    name: "Говяжий метеорит (отбивная)",
    type: "main",
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: "https://code.s3.yandex.net/react/code/meat-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
    __v: 0,
    count: 0


};
export const mockIngredientConstructor: IngredientTypeConstructor = {

    ingredient: mockIngredient,
    uuid: "3dc1a77c-b151-4df7-8717-681e5a45c0cd"

};


export const mockRoll: IngredientType = {
    _id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
    count: 0
};

export const mockSuace: IngredientType = {
    _id: "60666c42cc7b410027a1a9b7",
    name: "Соус Spicy-X",
    type: "sauce",
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: "https://code.s3.yandex.net/react/code/sauce-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    __v: 0,
    count: 0
};

export const mockFill: IngredientType = {
    _id: "60666c42cc7b410027a1a9b5",
    name: "Говяжий метеорит (отбивная)",
    type: "main",
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: "https://code.s3.yandex.net/react/code/meat-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
    __v: 0,
    count: 0
};



export const mockIngredientConstructorFirst: IngredientTypeConstructor = {

    ingredient: mockIngredient,
    uuid: "3dc1a77c-b151-4df7-8717-681e5a45c0cd"

};
export const mockIngredientConstructorSecond: IngredientTypeConstructor = {

    ingredient: mockIngredient,
    uuid: "9568179c-2837-4279-be8b-92b37c5dd59b"

};


export const mockRollFirst: IngredientType = {
    _id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
    count: 0
};

export const mockRollSecond: IngredientType = {
    _id: "60666c42cc7b410027a1a9b2",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
    count: 0
};

export const mockUser: User = {
    email: "artur@mail.ro",
    name: "artur"
};

export const mockWSOrder: TOrder = {
    _id:"60666c42cc7b410027a1a9b8s",
    ingredients: [
      "60666c42cc7b410027a1a9be",
      "60666c42cc7b410027a1a9bb",
      "60666c42cc7b410027a1a9bd",
      "60666c42cc7b410027a1a9bd"
    ],
    status:"done",
    name:" имя",
    createdAt:"2023-04-20T03:45:44.667Z",
    updatedAt:"2023-04-20T03:45:44.888Z",
    number:14,
  };
  
  export const mockWSOrdersResponse : TOrdersResponse = {
    orders: [mockWSOrder],
    total: 123,
    totalToday: 20,
  }; 

