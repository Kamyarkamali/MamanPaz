import React from "react";

export interface ItopMenu {
  id: number;
  paths: string;
  title: string;
}

export interface Ichildren {
  children: JSX.Element;
}

export interface IhamburgerMenu {
  id: number;
  title: string;
  paths: string;
}

export interface Ihow {
  id: number;
  title: string;
  image: string;
  detailse: string;
}

export interface Ishow {
  id: number;
  image: string;
  title: string;
}

export interface Isliders {
  id: number;
  title: string;
  detailse: string;
  image: string;
  image2: string;
  name: string;
}

export interface Isuporter {
  title: string;
  detailse: string;
  image: string;
}

export interface Icity {
  city: string;
}

export interface IdataProfileMaman {
  id: number;
  name: string;
  order: number;
  foodActive: number;
  starNumber: number;
  prifileImg: string;
  image1: string;
  image2: string;
  image3: string;
}

export interface Ifoods {
  id: number;
  maman: string;
  name: string;
  price: number;
  star: number;
  image: string;
  profie: string;
}

export interface IcardProfile {
  data: any[];
}

export interface Islider {
  image: string;
}

export interface IfoodsCards {
  id: number;
  imageFood: string;
  imageProfile: string;
  name: string;
  title: string;
  price: number;
  star: number;
  category: string;
}

export interface IpropsChange {
  selected: React.Dispatch<React.SetStateAction<[]>>;
  setselected: React.Dispatch<React.SetStateAction<[]>>;
  changeHandeler: any;
}
