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
//従来の関数（変数に関数を代入する方法）
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
/**
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
 */
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

/**
 * デフォルト値、引数など
 */
/**
 //引数に値が設定
const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
sayHello("ようこ");
//引数に値が設定されていない場合undefindになる
const sayHello2 = (name) => console.log(`こんにちは！${name}さん！`);
sayHello2();
//引数に値が設定されていない場合のデフォルト値を設定
const sayHello3 = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello3();
 */

/**
 * スプレッド構文...
 */
/**
  //配列の展開
 //const arr1 = [1, 2];
 //console.log(arr1);
 //スプレッド構文で配列を展開してみると配列の実際の中身を展開
 //console.log(...arr1);


 const arr1 = [1, 2];
 const sumFunc = (num1, num2) => console.log(num1 + num2);
 //sumFunc(arr1[0], arr1[1]);
 //スプレッド構文を用いると
 sumFunc(...arr1);
*/
/**
//まとめる
//arr3に配列[3]以降をarr3にまとめるとき
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);
 */
/**
//配列のコピー、結合
 const arr4 = [10, 20];
 const arr5 = [30, 40];

 //arr4と同じ配列のarr6を作る
 const arr6 = [...arr4];
 console.log(arr6);
//arr4とarr5の結合したarr7を作る
 const arr7 = [...arr4, ...arr5];
 console.log(arr7);
//arr4と同じ配列のarr8を作成しarr8の中身を修正してもarr4の配列は変わらない
 const arr8 = [...arr4];
 arr8[0] = 100;
 console.log(...arr8);
 console.log(...arr4);
  */

/**
 * mapやfilterを使った配列の処理
 */
/**
  //map
  //従来のfor文
  const nameArr = ["田中", "山田", "河合"];
  //第一引数：初期値（0からはじまる）
  //第二引数：条件式（ループを終了する条件）
  //第三引数：増減値（1回のループの度にindexを加算する）
  for (let index = 0; index < nameArr.length; index++) {
    console.log(nameArr[index]);
  }
  */
/**
  const nameArr = ["田中", "山田", "河合"];
  //mapは中にアロー関数を書いて引数にその値の中身が順番に入ってくる（nameのとこは何でもOK）
  //（returnされた値に基づいて新しい配列を生成するやり方）
  const nameArr2 = nameArr.map((name) => {
    return name;
  })
  console.log(nameArr2);
  //（配列をループして何か処理するやり方）
  nameArr.map((name) => console.log(name));
 */
/**
//filter
//条件に合うものだけ返す
const numArr = [1, 2, 3, 4, 5];
//例えばこの配列から奇数の値だけ取り出す
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);
 */
/** 
 //配列の中身をオブジェクトとして出力する
const nameArr = ["田中", "山田", "河合"];
 //for文を使うと
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}さんです。`);
}
　//mapを使うと
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}さんです。`));
 */
/**
const nameArr = ["田中", "山田", "吉田"];
//吉田以外のときはさんを付けて返す、吉田の場合は
const newNameArr = nameArr.map((name) => {
  if( name === "吉田"){
    return name
  }else{
    return `${name}さん`
  }
})
console.log(newNameArr);
 */

/**
 * 三項演算子
 *  */

/**
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 <  0 ? 'trueです' : 'falseです';
console.log(val1);
 */
/**
 const num = "1300";
 //console.log(num.toLocaleString()); //toLocaleString(3桁カンマ区切り)

 const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。'; //typeof(typeを返す)
 console.log(formattedNum);
 */
/**
 //ある２つの数値を受け取って条件に当てはまるか
 const checkSum = (num1, num2) => {
   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
 }
 console.log(checkSum(50, 60));
*/

/**
 * 論理演算子の本当の意味を知ろう
 */
/**
 //一般的な書き方サンプル…
 const flag1 = true;
const flag2 = false;

if(flag1 || flag2) {
  console.log("1か2はtrueになります");
}
if(flag1 && flag2) {
  console.log("1も2もtrueになります");
}
*/
//　||は左側がfalseなら右側を返す,trueなら左側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す、falseなら左側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
