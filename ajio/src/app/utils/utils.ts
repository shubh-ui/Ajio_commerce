export const truncateText = (text:string, maxLen = 20) => {
    return text.length > 25 ? text.substring(0,maxLen) + '...' : text
}

export const priceFormater = (price: string) => {
    return price.replace('Rs.', '');
} 