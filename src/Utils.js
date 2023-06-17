export function convertToUKDateFormat(unixTimeStamp) {
    const date = new Date(unixTimeStamp * 1000)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const ukDate = `${day}/${month}`
    return ukDate
}