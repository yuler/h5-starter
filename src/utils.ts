/**
 * Determines whether a value is undefined.
 *
 * @category is
 * @param v - The value to check.
 * @returns Whether the value is undefined.
 * @example
 * isUndefined(undefined) // true
 * isUndefined(null) // false
 * isUndefined(0) // false
 */
export function isUndefined(v: unknown): v is undefined {
  return typeof v === 'undefined'
}

/**
 * Determines whether a value is defined.
 *
 * @category is
 * @param v - The value to check.
 * @returns Whether the value is defined.
 * @example
 * isDefined(undefined) // false
 * isDefined(null) // false
 * isDefined(0) // true
 */
export function isDefined<T>(v: unknown): v is NonNullable<T> {
  return !isUndefined(v)
}

/**
 * Converts a value in fen to yuan.
 *
 * @category Number
 * @param fen - The value in fen to convert.
 * @returns The value in yuan.
 * @example
 * fen2yuan(100) // 1
 * fen2yuan(50) // 0.5
 */
export function fen2yuan(fen: number) {
  return fen / 100
}

/**
 * Clamps a value between a minimum and maximum value.
 *
 * @category Number
 * @param val - The value to clamp.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns The clamped value.
 * @example
 * clamp(5, 0, 10) // 5
 * clamp(-5, 0, 10) // 0
 * clamp(15, 0, 10) // 10
 */
export function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max)
}

/**
 * Replaces a portion of a string with asterisks.
 *
 * @category String
 * @param content - The string to modify.
 * @param start - The starting index of the portion to replace.
 * @param end - The ending index of the portion to replace.
 * @param starLength - The length of the asterisks to replace the portion with.
 * @returns The modified string.
 * @example
 * desensitize('1234567890', 3, 7) // '123****890'
 */
export function desensitize(content: string, start: number, end: number, starLength = 4) {
  return content.slice(0, start) + '*'.repeat(starLength) + content.slice(end)
}

/**
 * Splits an array into chunks of a specified size.
 *
 * @category Array
 * @param array - The array to split.
 * @param size - The size of each chunk.
 * @returns An array of chunks.
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
export function chunk<T>(array: T[], size: number) {
  const result = []
  for (let i = 0; i < array.length; i += size)
    result.push(array.slice(i, i + size))

  return result
}

/**
 * Converts a nullable or arrayable value to an array.
 *
 * @category Array
 * @param array - The value to convert.
 * @returns An array.
 * @example
 * toArray(1) // [1]
 * toArray([1, 2, 3]) // [1, 2, 3]
 * toArray(null) // []
 * toArray(undefined) // []
 */
type Nullable<T> = T | null | undefined
type Arrayable<T> = T | Array<T>
export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  array = array ?? []
  return Array.isArray(array) ? array : [array]
}

/**
 * Omit properties from an object.
 *
 * @category Object
 * @param obj - The object to omit properties from.
 * @param keys - The keys of the properties to omit.
 * @returns A new object with the omitted properties.
 * @example
 * omit({ a: 1, b: 2, c: 3 }, 'a', 'c') // { b: 2 }
 */
interface ObjectOmit {
  <T extends object, K extends [...(keyof T)[]]>(obj: T, ...keys: K): {
    [K2 in Exclude<keyof T, K[number]>]: T[K2]
  }
}
export const omit: ObjectOmit = (obj, ...keys) => {
  const ret = {} as {
    [K in keyof typeof obj]: typeof obj[K]
  }
  let key: keyof typeof obj
  for (key in obj) {
    if (!keys.includes(key))
      ret[key] = obj[key]
  }
  return ret
}

/**
 * Pick properties from an object.
 *
 * @category Object
 * @param obj - The object to pick properties from.
 * @param keys - The keys of the properties to pick.
 * @returns A new object with the picked properties.
 * @example
 * pick({ a: 1, b: 2, c: 3 }, 'a', 'c') // { a: 1, c: 3 }
 */
export const pick: ObjectOmit = (obj, ...keys) => {
  const ret = {} as {
    [K in keyof typeof obj]: typeof obj[K]
  }
  let key: keyof typeof obj
  for (key of keys)
    ret[key] = obj[key]

  return ret
}

/**
 * Calculates the difference in seconds between two dates.
 *
 * @category Date
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns The difference in seconds.
 * @example
 * diffSeconds('2022-01-01', '2022-01-02') // 86400
 */
export function diffSeconds(date1: string | number, date2: string | number) {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  return Math.floor(Math.abs(d1.getTime() - d2.getTime()) / 1000)
}

/**
 * Formats a date string to the format "YYYY-MM-DD".
 *
 * @category Date
 * @param date - The date string to format.
 * @returns The formatted date string.
 * @example
 * formatDate('2022-01-01T00:00:00.000Z') // '2022-01-01'
 */
export function formatDate(date: string) {
  const d = new Date(date)
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

/**
 * Determines whether a string is a valid mobile phone number.
 *
 * @category RegExp
 * @param str - The string to check.
 * @returns Whether the string is a valid mobile phone number.
 * @example
 * isMobile('13812345678') // true
 * isMobile('12345678901') // false
 */
export function isMobile(str: string) {
  return /^1\d{10}$/.test(str)
}

/**
 * Determines whether the user agent is WeChat.
 *
 * @category RegExp
 * @returns Whether the user agent is WeChat.
 * @example
 * isWeiXin() // true if the user agent is WeChat, false otherwise
 */
export function isWeiXin() {
  return /micromessenger/.test(navigator.userAgent.toLowerCase())
}

/**
 * Asynchronously waits for a specified amount of time.
 *
 * @category Async function
 * @param ms - The number of milliseconds to wait.
 * @param callback - An optional callback function to execute after the wait.
 * @returns A promise that resolves after the wait.
 * @example
 * await sleep(1000) // waits for 1 second
 * await sleep(1000, () => console.log('done')) // waits for 1 second and logs 'done'
 */
export async function sleep(
  ms: number,
  callback?: any,
): Promise<void> {
  return new Promise<void>(resolve =>
    setTimeout(async () => {
      await callback?.()
      resolve()
    }, ms),
  )
}

/**
 * Converts a value in pixels to rem.
 *
 * @category Misc
 * @param val - The value in pixels to convert.
 * @returns The value in rem.
 * @example
 * px2rem(375) // 10
 */
export function px2rem(val: number) {
  return val / 37.5
}

/**
 * Converts a value in rem to pixels.
 *
 * @category Misc
 * @param val - The value in rem to convert.
 * @returns The value in pixels.
 * @example
 * rem2px(10) // 375
 */
export function rem2px(val: number) {
  return val * document.documentElement.clientWidth / 10
}

/**
 * Converts a value in rpx to pixels.
 *
 * @category Misc
 * @param val - The value in rpx to convert.
 * @returns The value in pixels.
 * @example
 * rpx(100) // 100px on a device with a 375px screen width
 */
export function rpx(val: number) {
  return rem2px(px2rem(val))
}
