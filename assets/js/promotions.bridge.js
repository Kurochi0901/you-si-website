import { PROMOTIONS } from "/assets/js/promotions.data.js";
import { COUPONS }    from "/assets/js/coupons.data.js";

/* 將 module 促銷資料掛回全域（給 main.js 用） */
window.PROMOTIONS = PROMOTIONS;
window.COUPONS    = COUPONS;
