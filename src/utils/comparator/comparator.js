/**
 * @class Comparator class for comparing two values
 * @template T
 */
class Comparator {

  constructor(compareFunc) {
    this.compareFunc = compareFunc || Comparator.defaultCompareFunction
  }

  /**
   * Default Comparision function which compares two numbers or strings
   * @param a {T}
   * @param b {T}
   * @returns {number}
   */
  static  defaultCompareFunction(a, b) {
    if(a === b) return 0
    return a > b ? 1 : -1
  }

  /**
   * Checks if "a" is equal to "b"
   * @param a {T}
   * @param b {T}
   * @returns {boolean}
   */
  equal(a, b) {
    return this.compareFunc(a, b) === 0
  }

  /**
   * Checks if "a" is less than "b"
   * @param a {T}
   * @param b {T}
   * @returns {boolean}
   */
  lessThan(a, b) {
    return this.compareFunc(a, b) < 0
  }

  /**
   * Checks if "a" is more than "b"
   * @param a {T}
   * @param b {T}
   * @returns {boolean}
   */
  moreThan(a, b) {
    return this.compareFunc(a, b) > 0
  }

  /**
   * Checks if "a" is less than or equal to "b"
   * @param a {T}
   * @param b {T}
   * @returns {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.compareFunc(a, b) < 0 || this.compareFunc(a, b) === 0
  }

  /**
   * Checks if "a" is more than or equal to "b"
   * @param a {T}
   * @param b {T}
   * @returns {boolean}
   */
  moreThanOrEqual(a, b) {
    return this.compareFunc(a, b) < 0 || this.compareFunc(a, b) === 0
  }

}

module.exports = Comparator