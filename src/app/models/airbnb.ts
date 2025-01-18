export interface Bnb {
    id: number;
    name: string;
    summary: string;
    accomodates: number;
    bed_type: string;
    minimum_nights: string;
    cancellation_policy: string;
    price: number;
    images:{
        thumbnail_url: string;
        medium_url: string;
        picture_url: string;
    },
    host:{
        host_id: number;
        host_url: string;
        host_name: string;
        host_thumbnail_url: string;
    },
    address:{
        street: string;
        city: string;
        state: string;
        country: string;
        market: string;
    },
  }
  