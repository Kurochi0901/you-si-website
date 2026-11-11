import { PROMOTIONS } from "/assets/js/promotions.data.js?v=ea0be737";
import { COUPONS }    from "/assets/js/coupons.data.js?v=4d9af19e";

/* 將 module 促銷資料掛回全域（給 main.js 用） */
window.PROMOTIONS = PROMOTIONS;
window.COUPONS    = COUPONS;
