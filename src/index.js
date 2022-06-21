/**
 * const,let等変数宣言
 */

/**
 //var変数
 var val1 = "var変数";
 console.log(val1);

 //var変数は上書き可能
 val1 = "var変数を上書き";
 console.log(val1);

 //var変数は再宣言可能
 var val1 = "var変数は再宣言可能";
 console.log(val1);
 */

/**
 //let変数
 let val2 = "let変数";
 console.log(val2);

 //let変数は上書きが可能
 val2 = "let変数は上書きが可能";
 console.log(val2);

 //let変数は再宣言不可能
 let val2 = "let変数は再宣言不可能";
 */

/**
 //const変数
 const val3 = "const変数";
 console.log(val3);

 //const変数は上書き不可能
 val3 = "const変数は上書き不可能";

 //const変数は再宣言不可能
 const val3 = "const変数は再宣言不可能";
 */

/**
 //constで定義したオブジェクトはプロパティの変更が可能（追加もできる）
 const val4 = {
  name: "はんぞう",
  age: 15
};
 val4.name = "絆造";
 val4.address = "石川県";
 console.log(val4);
 */
/**
 //constで定義した配列はプロパティの変更が可能（追加もできる）
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
 */

/**
//アロー関数
//従来の関数
function func1(str) {
   return str;
}
console.log(func1("func1です"));

const func2 = function(str) {
  return str;
}
console.log(func2("func2です"));

//アロー関数
const func3 = (str) => {
  return str;
}
console.log(func3("func3です"));

const func4 = (str) => str;
console.log(func4("func4です"));


const func5 = (num1, num2) => {
  return num1+ num2;
}
console.log(func5(10,20));
*/

//分割代入(オブジェクト)
const myProfile = {
  name: "絆造",
  age: 15
};
//分割代入を用いない方法
const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);
//分割代入を用いた方法（変数名が長い時、オブジェクトから複数のプロパティを抜き出す時コードが見やすくなる）
const { name, age } = myProfile;
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

/**
//分割代入（配列）
//分割代入を用いない方法
const myProfile = ['絆造', 15];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);
//分割代入を用いた方法
const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
 */
