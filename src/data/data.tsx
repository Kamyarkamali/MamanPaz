import {
  Icity,
  IhamburgerMenu,
  Ihow,
  Ishow,
  Islider,
  Isliders,
  Isuporter,
  ItopMenu,
} from "../types/interface";

import how1 from "../assets/images/how1.png";
import how2 from "../assets/images/how2.png";
import how3 from "../assets/images/how3.png";
import how4 from "../assets/images/how4.png";

import slided1 from "../assets/images/1.png";
import slided2 from "../assets/images/2.png";
import slided3 from "../assets/images/3.png";
import slided4 from "../assets/images/4.png";
import slided5 from "../assets/images/5.png";
import slided6 from "../assets/images/6.jpg";
import slided7 from "../assets/images/7.png";
import slided8 from "../assets/images/8.jpg";
import slided9 from "../assets/images/9.jpg";
import slided10 from "../assets/images/10.png";
import slided12 from "../assets/images/12.jpg";
import slided13 from "../assets/images/13.jpg";
import slided14 from "../assets/images/14.png";
import slided15 from "../assets/images/15.jpg";

import show16 from "../assets/images/16.png";
import show17 from "../assets/images/17.png";
import show18 from "../assets/images/18.png";
import show19 from "../assets/images/19.png";
import show20 from "../assets/images/20.png";
import show21 from "../assets/images/21.png";

import sliderFood1 from "../assets/images/food1.jpg";
import sliderFood2 from "../assets/images/food2.jpg";
import sliderFood3 from "../assets/images/food3.jpg";
import sliderFood4 from "../assets/images/food4.jpg";

import sliderFoodMaman1 from "../assets/images/chef4.jpg";
import sliderFoodMaman2 from "../assets/images/chef3.jpg";
import sliderFoodMaman3 from "../assets/images/chef2.jpg";
import sliderFoodMaman4 from "../assets/images/chef1.jpg";

import sp1 from "../assets/images/sp1.png";
import sp2 from "../assets/images/sp2.jpg";
import sp3 from "../assets/images/sp3.png";

import login1 from "../assets/images/login1.png";
import login2 from "../assets/images/login2.png";
import login3 from "../assets/images/login3.png";

export const topMenu: ItopMenu[] = [
  { id: 1, title: "سرویس غذای شرکت", paths: "/services" },
  { id: 2, title: "آشپزی در مامان پز", paths: "/cookingMamanPaz" },
  { id: 3, title: "ثبت سفارش مهمانی", paths: "/cookforMamanPaz" },
  { id: 4, title: "وبلاگ", paths: "/" },
  { id: 5, title: "پرسش های شما", paths: "/" },
  { id: 6, title: "درباره ما", paths: "/" },
];

export const hamburgerMenuTitle: IhamburgerMenu[] = [
  { id: 1, title: "سرویس های غذای شرکت", paths: "/services" },
  { id: 2, title: "آشپزی در مامان پز", paths: "/cookingMamanPaz" },
  { id: 3, title: "ثبت سفارش مهمانی", paths: "/cookforMamanPaz" },
  { id: 4, title: "وبلاگ", paths: "/" },
  { id: 5, title: "پرسش های شما", paths: "/" },
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

export const sliderBank: Islider[] = [
  { image: slided1 },
  { image: slided2 },
  { image: slided3 },
  { image: slided4 },
  { image: slided5 },
  { image: slided6 },
  { image: slided7 },
  { image: slided8 },
  { image: slided9 },
  { image: slided10 },
  { image: slided12 },
  { image: slided13 },
  { image: slided14 },
  { image: slided15 },
];

export const show2: Ishow[] = [
  { id: 1, title: "یک طعم خانگی", image: show16 },
  { id: 2, title: "همراه مشتریان", image: show17 },
  { id: 3, title: "صرفه جویی در وقت", image: show18 },
  { id: 4, title: "برنامه غذایی متنوع", image: show19 },
  { id: 5, title: "راهکار هوشمند", image: show20 },
  { id: 6, title: "کار آفرینی برای بانوان", image: show21 },
];

export const sliders: Isliders[] = [
  {
    id: 1,
    title: "عدس پلو دستپخت مامان شقایق",
    detailse: "خیلی خوشمزه و خوب بود شبیه غذای مامان خودم",
    name: "صبا از اقتصاد بیدار",
    image: sliderFood1,
    image2: sliderFoodMaman4,
  },
  {
    id: 2,
    title: "چلو خورشت کرفس دستپخت مامان زینب",
    detailse:
      "من عاشق این خورشتم و مامان زینب هم این رو عالی میپزه ! دست گلتون درد نکنه!",
    name: "مهدی از تراکنش همراه ایمن",
    image: sliderFood2,
    image2: sliderFoodMaman3,
  },
  {
    id: 3,
    title: "زرشک پلو دستپخت مامان لیلوم",
    detailse:
      "زرشک پلو حیلی خوب بود کل همکارای ما از مامان لیلیوم رضایت کامل دارند.",
    name: "یاسمن از توسعه ابزار بازار سرمایه",
    image: sliderFood3,
    image2: sliderFoodMaman2,
  },
  {
    id: 4,
    title: "فیله سوخاری دستپخت مامان فلور",
    detailse:
      "انقدر عالی بود که کلمه ها کم میارن از گفتنش... واقعا ممنونم ازتون",
    name: "وحید از تضمین چی",
    image: sliderFood4,
    image2: sliderFoodMaman1,
  },
];

export const sopurter: Isuporter[] = [
  {
    title: "پشتیبانی",
    detailse:
      "با مامان‌پز نگران کارهای اجرایی غذای شرکتی‌تون نباشید. ما هر روز غذا رو سر ساعت و در بسته‌بندی‌های مناسب به شما تحویل می‌دیم. همین‌طور با یک سیستم جامع نظرسنجی سعی می‌کنیم نظر شما رو درباره غذاها بدونیم و روز به روز خودمون رو به سلیقه شما نزدیک‌تر کنیم.",
    image: sp1,
  },
  {
    title: "حساب و کتاب شفاف",
    detailse:
      "در سفارش از مامان‌پز نگران دغدغه‌هایی مثل فاکتور و اسناد مالی نباشید. ما براتون فاکتور رسمی صادر می‌کنیم و گزارش‌های شفاف مالی در زمان‌های مختلف ارایه می‌کنیم تا شما با خیال راحت و کمترین چالش مالی بتونید سفارش بدید.",
    image: sp2,
  },
  {
    title: "سفارش رستورانی",
    detailse:
      "شما می‌تونید در کنار منوی متنوع و خانگی مامان‌پز، به فهرستی از غذاهای فست‌فودی و رستورانی نیز دسترسی داشته باشید. فقط کافیه به ما بگید تا این غذاها رو از رستوران‌های مطمئن طرف قرارداد مامان‌پز، براتون تهیه کنیم.",
    image: sp3,
  },
];

export const citys: Icity[] = [
  { city: "تهران" },
  { city: "اردبیل" },
  { city: "اصفهان" },
  { city: "البرز" },
  { city: "ایلام" },
  { city: "تبریز" },
  { city: "کردستان" },
  { city: "لرستان" },
  { city: "سیستان و بلوچستان" },
  { city: "گیلان" },
  { city: "مازندران" },
  { city: "خوزستان" },
];

export const loginData: Isuporter[] = [
  {
    image: login1,
    title: "ثبت نام کنید.",
    detailse:
      "فرم ثبت‌نامی که تو این صفحه قرار داره رو پر کنید. اطلاعات شما در اختیار کارشناس‌های ما قرار می‌گیره و با شما در تماس خواهند بود.",
  },
  {
    image: login2,
    title: "تست غذا بفرستید.",
    detailse:
      "برای اینکه بتونیم کیفیت آشپزی‌تون رو بسنجیم، با هماهنگی قبلی از شما می‌خوایم که چهار نمونه غذای مختلف بپزید و برای ما بفرستید. کارشناس‌های ما این غذاها رو بررسی می‌کنن و در صورت تایید، وارد مرحله سوم و پایانی می‌شید",
  },
  {
    image: login3,
    title: "مامان پزی شوید.",
    detailse:
      "مرحله سوم جاییه که شما مامان‌پزی می‌شید. از شما دعوت می‌کنیم که به دفتر ما بیاید تا در جریان دستورالعمل‌های جامع مامان‌پز مثل اصول بهداشتی، استانداردهای هر پرس غذا، نحوه بسته‌بندی، چارچوب قیمت‌گذاری و نظام محاسبه پاداش و جریمه قرار بگیرید. یادتون باشه که شما یک ماه فرصت خواهید داشت تا کارت بهداشت خودتون رو از یکی از مراکز بهداشت شهر دریافت کنید.",
  },
];
