function formatCash(str : string) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}

export function convertToVND(x : Number) {
    return formatCash(x.toString()) + 'đ';
}