let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

//par[1] posicion 1 de par
//console.log(par[0]);
//console.log(par.length);



for (let i = 0; i < par.length; i++) {
    if (counts[par[i].toLowerCase()]) {
        if (par[i] != ' ') {
            counts[par[i].toLowerCase()] += 1
        }
    } else {
        if (par[i] != ' ') {
            counts[par[i].toLowerCase()] = 1
        }
    }
}


console.log(counts);

