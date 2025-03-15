const url = 'https://catfact.ninja/fact';

const p1 = fetch(url);
// p1 is a promise that resolves to an http response

const p2 = p1.then(response => response.json());
// p2 is a promise that resolves to a JSON object

p2.then(json_obj => console.log(json_obj.fact));


/////////////////////////////////////////////////////
// below is another solution that uses async/await //
/////////////////////////////////////////////////////

// function definition
async function getCatFact() {
  const url = 'https://catfact.ninja/fact';
  const response = await fetch(url);
  const json_obj = await response.json();
  console.log(json_obj.fact);
}

// call the function
getCatFact();