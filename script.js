function stringChop(str, size) {
  // your code here
	if (!str) {
        return [];
    } 
	let ans = [];
    for(let i = 0; i < str.length; i += size) {
        ans.push(str.substr(i, size));
    }
    return ans;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
