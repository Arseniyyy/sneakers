/**
 * This file contains functions that help you work with strings, numbers and other objects.
 * */

export function hasAnyOccurrenceInString(searchValue: string, title: string) {
  const keywords = searchValue.split('')
  return keywords.some(keyword => title.toLowerCase().includes(keyword))
}
