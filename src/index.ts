import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

// 問一
// 配列aの最後にbを追加した新しい配列resultを作ってください。ただし、配列aを変更してはいけません。

(() => {
  const a: number[] = [1, 2, 3];
  const b: number = 4;
  // コードを書いて result = [1,2,3,4]にする

  const result = [...a, b];
  console.log(result);
})();
