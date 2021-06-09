console.log("Hello welcome to async and await")
async function harry()
{
	console.log ('Inside Harry function')
	const response = await fetch('https://api.github.com/users')
	console.log('Before response')
	const users =await response.json();
	console.log('resolved')
	return users;

}

console.log('before calling harry')
let a=harry();
console.log ('after calling harry')
console.log(a);
a.then(data =>console.log(data))
console.log('Last Line')
