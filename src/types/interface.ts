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
