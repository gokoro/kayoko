export const getArg = (str: string) => {
  const arr = str.split(' ')
  arr.shift()
  return arr
}
