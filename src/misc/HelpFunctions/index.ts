/**
 * This file contains functions that help work with strings, numbers
 * and other objects in the main app.
 * */

export function hasAnyOccurrenceInString(searchValue: string, title: string) {
  const keywords = searchValue.split('')
  return keywords.some(keyword => title.toLowerCase().includes(keyword))
}
