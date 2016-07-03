# Sometimes-Function
A function which behaves really crazy

we put a usuall add function as an arg
and the after third invocation we get "hmm I don't know"
const add = (a,b) => a + b
const crazyAdd = sometimes(add);

crazyAdd(3,4) -> 7
crazyAdd(2,8) -> 10
crazyAdd(7,9) -> 16
crazyAdd(1,2) -> "hmm I don't  know"
crazyAdd(7,7) -> 14

