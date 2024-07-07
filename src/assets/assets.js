import iconCart from './icon-cart.png';
import logo from './logo.png';
import search from './search.png';
import menu from './menu.png';
import close from './close.png';
import add from './add.png';
import remove from './remove.png';
import instagram from './instagram.png';
import telegram from './telegram.png';
import youtube from './youtube.png';
import close2 from './close2.png';
import emptyCart from './emptycart.webp';
import up from './arrow.png';

import phone from './phone.jpg';
import laptop from './laptop.jpg';
import game from './game.webp';
import appleWatch from './applewatch.jpg';

import phone1 from './phone1.webp';
import phone2 from './phone2.webp';
import phone3 from './iphone11.webp';

import laptop1 from './laptop1.jpg';
import laptop2 from './laptop2.png';
import laptop3 from './laptop3.jpg';

import ps4 from './ps4.jpg';
import ps5 from './ps5.jpg';
import xbox from './xbox.jpg';

import applwWatch from './appleWatch.webp';

export const images = {
    iconCart,
    logo,
    search,
    menu,
    close,
    phone,
    laptop,
    game,
    appleWatch,
    add,
    remove,
    laptop1,
    laptop2,
    laptop3,
    ps4,
    ps5,
    xbox,
    applwWatch,
    instagram,
    telegram,
    youtube,
    close2,
    emptyCart,
    up
}

export const menu_category = [
    {
        menu_list_item: "تلفن همراه",
        menu_list_image: phone,
        category: "mobile"
    },
    {
        menu_list_item: "لپتاپ",
        menu_list_image: laptop,
        category: "laptop"
    },
    {
        menu_list_item: "ساعت هوشمند",
        menu_list_image: appleWatch,
        category: "watch"
    },
    {
        menu_list_item: "کنسول بازی",
        menu_list_image: game,
        category: "game"
    },
]

export const device = [
    {
        _id: 1,
        name: "آیفون 10 معمولی حافظه 128 گیگ",
        image: phone1,
        price: 55000000,
        category: 'mobile'
    },
    {
        _id: 2,
        name: "شیاومی 11",
        image: phone2,
        price: 23000000,
        category: 'mobile'
    },
    {
        _id: 3,
        name: "آیفون 11 معمولی حافظه 128 گیگ",
        image: phone3,
        price: 55000000,
        category: 'mobile'
    },
    {
        _id: 4,
        name: "لپتاپ ایسوس",
        image: laptop1,
        price: 23000000,
        category: 'laptop'
    },
    {
        _id: 5,
        name: "لپ تاپ مک بوک",
        image: laptop2,
        price: 55000000,
        category: 'laptop'
    },
    {
        _id: 6,
        name: "ایکس باکس 360",
        image: xbox,
        price: 23000000,
        category: 'game'
    },
    {
        _id: 7,
        name: "پلی استیشن 4",
        image: ps4,
        price: 55000000,
        category: 'game'
    },
    {
        _id: 8,
        name: "پلی استیشن 5",
        image: ps5,
        price: 23000000,
        category: 'game'
    },
    {
        _id: 9,
        name: "اپل واپ سری 9",
        image: appleWatch,
        price: 23000000,
        category: 'watch'
    },
]
