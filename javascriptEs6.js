
// var test = 'saya saya';
// console.log(`Dia adalah ${test}`);

// let x2 = 'Hallo';
// console.log(x2.repeat(5));
// console.log(x2.includes('lo'));

// console.log(x2.startsWith('ha')); 
// console.log(x2.startsWith('lo')); 
// console.log(x2.startsWith('lo',2)); 
 
// console.log(x2.endsWith('lo')); 
// console.log(x2.endsWith('ha')); 
// console.log(x2.endsWith('ha',x2.length-2)); 

// console.log('-----Contoh Spread Operator-----')

// let buah = ['apel','duku','pir']; 
// console.log(buah); 
// // ['apel','duku','pir'] 
// console.log(...buah); 
// // apel duku pir 
// let no1 = [1, 2, 3]; 
// let no2 = [no1, 4, 5, 6]; 
// let no3 = [...no1, 7, 8, 9]; 
 
// console.log(no2); 
// // [[1, 2, 3], 4, 5, 6] 
// console.log(no3); 
// // [1, 2, 3, 7, 8, 9] 


// console.log('-----Callback Function-----')
// let x3 = function () 
// {  
//     console.log('Hai ini X!');  
// }; 
 
// let y3 = function (callback) 
// {  
//     console.log('Halo ini Y!');   
//     callback();  
// }; 
 
// y3(x3); 


// console.log('-----Array Filtering-----')
// var w = [0,1,2,3,4,5] 
 
// var x1 = w.filter((val) => val !== 2); 
// var yy = w.filter((val) => val % 2 == 0); 
// var zz = w.filter((val) => val % 2 !== 0); 
 
// console.log(x1);
// console.log(yy); 
// console.log(zz);

// console.log('-----Array Mapping-----')

// var w = [1,4,9,16,25]  
// var x = w.map(Math.sqrt); 
// var y = w.map((val)=> val * 2); 
// var z = w.map((val)=> val!==9); 
 
// console.log(x); console.log(y); console.log(z); 

// var orang = [   
//     {nama : "Andi", marga: "Hasibuan"},   
//     {nama : "Budi", marga: "Sinaga"},   
//     {nama : "Caca", marga: "Pasaribu"} 
// ]; 
// function namaLengkap(item, index) 
// {   
//     var fullname = [
//         item.nama,item.marga].join(" ");   
//     return fullname; 
// } 
// function tesMap() 
// {   
//     console.log(orang.map(namaLengkap));   
//     console.log(orang.map(namaLengkap)[0]);   
//     console.log(orang.map(namaLengkap)[1]);   
//     console.log(orang.map(namaLengkap)[2]); 
// } 
// tesMap() 

// console.log('-----Promise-----')
// let janji = new Promise(
//     function(tepati,ingkari)
//     {  
//         let dipenuhi = true;  
//         if(dipenuhi)
//         {   
//             tepati('Janji Kutepati.');  
//         } else {   
//             ingkari('Janji Kuingkari.');  
//         } 
//     }); 
 
// janji.then(function(janjiDitepati) 
// {  
//     console.log(janjiDitepati); 
// }).catch(
//     function(janjiDiingkari) 
//     {  
//         console.log(janjiDiingkari); 
//     }) 

// console.log('-----Object Literal-----')
// let merk = 'Yamaha'; let tahun = 2015; 
 
// let mio = {     
//     merk: merk,     
//     prod: tahun }  
 
// let vixion = 
// {     
//     merk, tahun 
// }   
// console.log(mio); 
// console.log(vixion); 

var scores = [9,3,10,5,25,27,5,4,17,15];

function minmax(scores)
{
    var min = scores[0];
    var max = scores[0];
    var rekornaik = 0;
    var rekorturun = 0;

    for(var i = 0; i<scores.length; i++)
    {
        if(scores[i] > max)
        {
            rekornaik ++;
            max = scores[i];
        }
        else if (scores[i] < min)
        {
            rekorturun ++;
            min = scores[i];
        }
    }
    
    console.log(rekornaik + ' '+ rekorturun);
}

//coba coba

minmax(scores);