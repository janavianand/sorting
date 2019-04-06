describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    //expect(split([1])).toEqual([[1]])
    expect(split([1,2,4,3])).toEqual([[1,2],[4,3]])
    expect(split([1,2,4,3,6])).toEqual([[1,2],[4,3,6]])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([[2],[1]])).toEqual([1,2]);
    expect(merge([[1,2],[3,4]])).toEqual([1,2,3,4])
    expect(merge([[3,6],[1,2,4]])).toEqual([1,2,3,4,6])
  });
});

describe('Merge Sort function', function(){
  it('splits and merges sorted array',function(){
    expect(mergeSort([2,5,1,3])).toEqual([1,2,3,5])
  })
  /* your code here */
});
