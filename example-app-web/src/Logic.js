// @flow
//
import { List } from 'immutable'

export default class Logic {
  constructor() {
    this.flag = true
  }

  sum(a: number, b: number) {
    if (a === 0) {
      this.flag = false
      return 0
    }

    if (!this.flag) {
      return a-b
    }

    return a + b
  }


  static addElement(list: List<string>, element: string) {
    return list.push(element)
  }
}

