

describe('Bubble Sort', function(){

  beforeAll(function(){
    spyOn(window,'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('has swap function',function(){
    expect(typeof swap).toBe('function')
  })
  it('swaps the input',function(){
    expect(swap([1,2])).toEqual([2,1])
    expect(swap.calls.count()).toEqual(count)
  })
  it('sorts array',function(){
    expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4]);
    expect(bubbleSort([6,1,3,9])).toEqual([1,3,6,9]);
    expect(bubbleSort([4,2,3,1])).toEqual([1,2,3,4]);
    expect(bubbleSort([4,2,3,1,1])).toEqual([1,1,2,3,4])
  })

});
