function findCost(arr){
  let cost = 0;
  for (let i=0; i<=arr.length; i++){
    while(arr.length>2){
      var elSum = arr[0] + arr[1];
      cost += elSum;
      arr.shift();
      arr.shift();
      arr.push(elSum);
    };
    var last = arr[0] + arr[1];
    cost += last;
    arr = [];
    arr.push(last);
    return cost;
  };
};
const myArr = [4,6,10,10,10,10];
findCost(myArr);


function cost(arr){
  let cost = 0;
  for (let i=0; i<arr.length; i++){
    while(arr.length>=2){
      let firstTwo = arr[i] + arr[i+1];
      cost += firstTwo;
      arr.shift();
      arr.shift();
      arr.push(firstTwo);
      console.log('before: ' + arr);
    };
  return cost;
  };
};

let myNums = [4,6,8,12];
cost(myNums);