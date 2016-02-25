+(function (name, definition) {
  let hasDefine = typeof define === 'function';
  let hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) {
    define('ArrayExtension', definition);
  } else if (hasExports) {
    module.exports = definition();
  } else {
    this[name] = definition();
  }
})('ArrayExtension', function () {
  const ArrayExtension = function () {
    if (!(this instanceof ArrayExtension)) {
      return new ArrayExtension();
    }
    return this;
  };

  /**
   * 深克隆数组
   * @param arr
   * @returns {Array}
   */
  ArrayExtension.prototype.clone = function (arr) {
    let cloneArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      cloneArr[i] = arr[i];
    }
    return cloneArr;
  };

  /**
   * 移除数组重复元素
   * @param arr
   * @param returnType
   * @returns {*}
   */
  ArrayExtension.prototype.removeRepeat = function (arr, returnType) {
    const tmpArr = returnType ? this.clone(arr) : arr;
    const len = tmpArr.length;
    for (let i = 0; i < len; i++) {
      let ele = tmpArr[i];
      let currIdx = i;
      for (let j = 0; j < len; j++) {
        let item = tmpArr[j];
        if (currIdx === j) {
          continue;
        }
        if (ele === item) {
          delete tmpArr[j];
        }
      }
    }
    return _removeUndefinedEleFromArr(tmpArr);
  };

  /**
   * 根据元素删除
   * @param ele
   * @param arr
   * @param isMulti
   * @returns {*}
   */
  ArrayExtension.prototype.delForEle = function (ele, arr, isMulti) {
    isMulti = isMulti || false;
    for (let i = 0, len = arr.length; i < len; i++) {
      if (ele === arr[i]) {
        delete arr[i];
        if (!isMulti) {
          break;
        }
      }
    }
    return _removeUndefinedEleFromArr(arr);
  };

  /**
   * 根据索引删除
   * @param idx
   * @param arr
   * @returns {*}
   */
  ArrayExtension.prototype.delForIdx = function (idx, arr) {
    const delEle = arr[idx];
    this.delForEle(delEle, arr, 0);
    return _removeUndefinedEleFromArr(arr);
  }
});
