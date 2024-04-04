import { IhamburgerMenu, Ihow, ItopMenu } from "../types/interface";

import how1 from "../assets/images/how1.png";
import how2 from "../assets/images/how2.png";
import how3 from "../assets/images/how3.png";
import how4 from "../assets/images/how4.png";

export const topMenu: ItopMenu[] = [
  { id: 1, title: "سرویس غذای شرکت", paths: "/" },
  { id: 2, title: "آشپزی در مامان پز", paths: "/" },
  { id: 3, title: "ثبت سفارش مهمانی", paths: "/" },
  { id: 4, title: "وبلاگ", paths: "/" },
  { id: 5, title: "پرسش های شما", paths: "/" },
  { id: 6, title: "درباره ما", paths: "/" },
];

export const hamburgerMenuTitle: IhamburgerMenu[] = [
  { id: 1, title: "سرویس های غذای شرکت" },
  { id: 2, title: "آشپزی در مامان پز" },
  { id: 3, title: "ثبت سفارش مهمانی" },
  { id: 4, title: "وبلاگ" },
  { id: 5, title: "پرسش های شما" },
];

export const howfoods: Ihow[] = [
  {
    id: 1,
    title: "دریافت برنامه اختصاصی",
    detailse: "مامان‌ها غذاها را با تازه‌ترین مواد اولیه آماده می‌کنند.",
    image: how1,
  },
  {
    id: 2,
    title: "پخت غذا با مامان ها",
    detailse:
      "بر اساس سلیقه‌ شما، یک برنامه غذایی ویژه سازمانتان ارائه می‌کنیم.",
    image: how2,
  },
  {
    id: 3,
    title: "ثبت درخواست",
    detailse: "با ثبت درخواست در سایت، کارشناسان ما با شما در تماس خواهند بود.",
    image: how3,
  },
  {
    id: 4,
    title: "ارسال غذاها",
    detailse:
      "غذاها را طبق برنامه و در یک بسته‌بندی مناسب به دست شما می‌رسانیم.",
    image: how4,
  },
];
