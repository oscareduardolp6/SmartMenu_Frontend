export const getDateInInputHtmlFormat = (date:Date = new Date()) => formatDate(date, 'yyyy-MM-dd')

export const formatDate = (date: Date, mask: string) => {
  const standarMask = mask.toLowerCase() 
  const day = date.getDate()
  const twoDigitDay = twoDigitFormat(day)
  const month = (date.getMonth() + 1 ) 
  const twoDigitMonth = twoDigitFormat(month)
  const year = date.getFullYear().toString()
  let formatedDate = standarMask
                      .replace('dd', twoDigitDay)
                      .replace('mm', twoDigitMonth)
                      .replace('yyyy', year)
  return formatedDate
}

export const addDays = (date:Date, days:number) => {
  let myDate = new Date(date.valueOf())
  myDate.setDate(myDate.getDate() + days)
  return myDate
}

const twoDigitFormat = (num: number):string => num < 10 ? `0${num}` : num.toString() ; 