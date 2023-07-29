export function inputKeyIsNumber(e){
    return (e >= 48 && e <= 57) || (e >= 96 && e <= 105) || e === 37 || e === 39 || e === 46 || e === 8;
}