+(function (name, definition) {
  let hasDefine = typeof define === 'function';
  let hasExports = typeof module !== 'undefined' && module.exports;

  module.exports = definition();
})('ArrayExt', function () {
  const ArrayExt = function () {
    if (!(this instanceof ArrayExt)) {
      return new ArrayExt();
    }
    return this;
  };

  const _removeUndefinedEleFromArr = function (arr) {
    return arr.filter(function (item) {
      return item !==undefined;
    });
  };

  /**
   * 深克隆数组
   * @param arr
   * @returns {Array}
   */
  ArrayExt.prototype.clone = function (arr) {
    let cloneArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      cloneArr[i] = arr[i];
    }
    return cloneArr;
  };

  /**
   * 移除数组重复元素, 返回全新数组, 老数组重复占位
   * @param arr
   * @returns {*}
   */
  ArrayExt.prototype.removeRepeat = function (arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      let ele = arr[i];
      let currIdx = i;
      for (let j = 0; j < len; j++) {
        let item = arr[j];
        if (currIdx === j) {
          continue;
        }
        if (ele === item) {
          delete arr[j];
        }
      }
    }
    return _removeUndefinedEleFromArr(arr);
  };

  /**
   * 根据元素删除
   * @param ele
   * @param arr
   * @param isMulti
   * @returns {*}
   */
  ArrayExt.prototype.delForEle = function (ele, arr, isMulti) {
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
  ArrayExt.prototype.delForIdx = function (idx, arr) {
    const delEle = arr[idx];
    this.delForEle(delEle, arr, 0);
    return _removeUndefinedEleFromArr(arr);
  };

  ArrayExt.ArrayExt = ArrayExt;

  return ArrayExt;
});
