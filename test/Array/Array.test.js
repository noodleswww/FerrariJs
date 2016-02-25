import 'should';
import ArrayExt from '../../src/ArrayExt';

const arrayExt = new ArrayExt();

describe('test/Array/Array.test.js', ()=> {
  describe('constructor', function () {
    it('should get an instanceOf ArrayExtension with new', function () {
      const arrayExt = new ArrayExt();
      arrayExt.should.be.an.instanceOf(ArrayExt);
    });

    it('should get an instanceOf ArrayExtension without new', function () {
      const arrayExt = ArrayExt();
      arrayExt.should.be.an.instanceOf(ArrayExt);
    });
  });

  it('should return a clone new array', ()=> {
    const tempArr = [1, 2, 3];
    const cloneArr = arrayExt.clone(tempArr);
    cloneArr.should.be.instanceof(Array).and.have.lengthOf(tempArr.length);
    cloneArr.should.be.have.enumerable('0', 1);
    cloneArr.should.have.property('1', 2);
    for (let item of tempArr) {
      cloneArr.should.containEql(item);
    }
    cloneArr.should.containDeep(tempArr);
  });

  it('should remove repeat element form array', ()=> {
    const tempArr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 33, 3];
    const bkArr = arrayExt.removeRepeat(tempArr, 0);
    bkArr.length.should.eql(7);
  });

  it('should delete all condition element from array', ()=>{
    const tempArr = [1,2,3,4,5,6,3];
    const bkArr = arrayExt.delForEle(3,tempArr,1);
    bkArr.should.not.containEql(3);
    bkArr.length.should.eql(5);
  });

  it('should delete the first one element from array',()=>{
    const tempArr = [1,2,3,4,5,6,3];
    const bkArr = arrayExt.delForEle(3,tempArr,0);
    bkArr.should.containEql(3);
    bkArr.length.should.eql(6)
  });

  it('should delete special index from array',()=>{
    const tempArr = [1,2,3,4,5,6,3];
    const bkArr = arrayExt.delForIdx(3,tempArr);
    bkArr.should.not.containEql(4);
    bkArr.length.should.eql(6);
  });
});
