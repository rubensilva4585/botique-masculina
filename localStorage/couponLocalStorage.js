const value = 'validCoupon'


export function saveCouponOnLocalStorage(coupon = '', discount = 0){
        localStorage.setItem(value, JSON.stringify({code: coupon, discount: discount}))
}

export function getCouponFromLocalStorage(){
    return JSON.parse(localStorage.getItem(value))
}