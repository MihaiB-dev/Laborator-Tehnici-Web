//TEMA 1
function tema_1 (array)
{
    const pare = array.filter(el => el%2 == 0);
    const impare = array.filter(el => el%2 != 0);

    const html = render_list("Pare",pare) + render_list("Impare",impare);

    document.write(html);
}

function render_list (title,array)
{
    const listE = array.map(el => `<li>${el}</li>`).join(" ");
    return `
    <h2>${title}</h2>
    <ul> ${listE}</ul>
    `
}

tema_1([1,2,3,4,5,6])

// TEMA 2
function remove_Duplicates(arrays)
{
    const dict = {}
    arrays.forEach(element => {
        dict[element + '_' + typeof element] = element;
    });
    return Object.values(dict)
    //return arrays.filter((el, index) => arrays.indexOf(el,index+1) == -1)//O(n^2)filter scoate toate ce au conditia respectiva false
}   

//TEMA 3
function tema3(array)
{  let i = 0;
   let reduced_array = array.reduce((acc_mare,el) => {

    let temp  = el.reduce((acc,ell) => {acc_mare[i] = ell, i++},[]);
    return acc_mare;
   }, {});
   console.log(reduced_array); 
}

//tema3([[1, 2], [3], [4, 5, 6]]);

//TEMA 4
function tema4(){
    let array = [['Bivol Mihai', 19], ['Zugravu Alexandra',2], ['Bivol Niculae', 55],['Ai dat un numar maire mai',100]];
    let user_varsta = prompt("Please enter an age", "20");
    array = array.filter(el => el[1]<user_varsta);
    if (array.length >0)
    {
        alert(array.length + ' persoane: ' + array.reduce((acc,el,index) => {acc[index] = el[0]; return acc;},[]).join(", "));
    }
    else{
        alert("Nu exista persoane sub aceasta varsta in array.");
    }
    
}

//tema4();

//TEMA 5
function tema5(){

    dictionary = { "acesta": "this", "este": "is", "un": "a", "dictionar": "dictionary" }
    let fraza = prompt("Please enter a phrase (without punctuations)");
    fraza = fraza.split(" ");
    let final_phrase = [];
    fraza.forEach(element => element.toLowerCase() in dictionary ? final_phrase.push(dictionary[element]) : final_phrase.push(element + "?"))
    alert(final_phrase.join(" "));
    const response = confirm("Vrei sa mai faci alta traducere?");
    if (response){
        tema5();
    }
    else{
        return;
    }
}

//tema5();