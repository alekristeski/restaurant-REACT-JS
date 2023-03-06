export interface restaurantsInterface {
  address: string;
  businessname: string;
  isFavorite: boolean;
  email: string;
  id: string;
  image: string;
  parkinglot: boolean;
  phone: string;
  restauranttype: string;
  reviews: number;
  reviewsList: [
    {
      id: number;
      author: string;
      comment: string;
      stars: number;
    },
  ];

  slug: string;
}
export interface ListInterface {
  id: number;
  author: string;
  comment: string;
  stars: number;
}
