export const truncateText = (text:string, maxLen = 20) => {
    return text.length > 25 ? text.substring(0,maxLen) + '...' : text
}

export const priceFormater = (price: string) => {
    return price.replace('Rs.', '');
} 

export const formatIndianNumber = (number: number) => {
  let numStr = number.toString();
  
  // Handle negative numbers
  let isNegative = numStr.startsWith('-');
  if (isNegative) {
    numStr = numStr.slice(1);
  }
  
  // Return as-is if 3 digits or less
  if (numStr.length <= 3) {
    return isNegative ? '-' + numStr : numStr;
  }
  
  // Split into last 3 digits and the rest
  let lastThree = numStr.slice(-3);
  let remaining = numStr.slice(0, -3);
  
  // Add commas every 2 digits from right to left in the remaining part
  let formatted = remaining.replace(/(\d)(?=(\d{2})+$)/g, '$1,') + ',' + lastThree;
  
  return isNegative ? '-' + formatted : formatted;
}