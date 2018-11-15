console.log('-----Contoh function dengan parameter-----')

function multiplay(x,y)
{
    var a = x * y;
    console.log(a);
    return a;
}
multiplay(3,5);

console.log('-----Contoh print nama dengan inputan-----')

function namaku(nama) 
{     
    console.log (nama+' Susilo'); 
} 
 
namaku('Adi'); 
namaku('Budi'); 
namaku('Caca'); 
namaku('Dedi'); 

console.log('-----Contoh print nama dan tahun-----')

function data(x,y) 
{   
    console.log (x+' Lahir th '+y); 
} 
 
data('Adi','1990'); 
data('Budi','1991'); 
data('Caca','1992'); 
data('Dedi','1993');


console.log('-----Contoh function di dalam fanction-----')

function Pangkat(x,y)
{     
    if (y == 1) 
    {         
        return x;     
    }     
    else 
    {         
        return x=x*Pangkat(x,y-1);     
    } 
} console.log(Pangkat(7,2)) ;


console.log('-----Contoh function dalam function 2-----')
function kali(x) 
{   
    if (x < 2) 
    {
        return 1;
    }   
    else 
    {
        return (x * tiga());
    }  
} 
 function tiga()
 {     
     return 3; 
    } 
 console.log(kali(5));

 console.log('-----Contoh function Set TimeOut-----')

setTimeout(waktu, 3000); 
function waktu() 
{  
    console.log('Halo'); 
} 
console.log('Yuk'); 

console.log('-----Contoh function ClearTimeOut-----')

var x = setTimeout(waktu, 3000)

function waktu()
{
    console.log('Hallo');
}

clearTimeout(x);

// console.log('-----Contoh function Set Interval-----')

// var x = setInterval(waktu, 1500);

// var counter = 0;
// function waktu()
// {
//     console.log('Looping dulu');
//     counter ++;
//     if (counter == 5)
//     {
//         clearTimeout(x);
//     }

// }

console.log('-----Contoh function Array Segitiga Kopong-----')

function segitiga(baris)
{
    var string = "";
    for (var i=0; i<baris; i++)
    {
        for (var j=0; j<baris-i; j++)
        {
            string = string + '   ';
        }
        string = string + ' * ';
        

        if (i > 0)
        {
            if (i == baris-1)
            {
                for (var l=0; l<7+(baris-5)*2; l++)
                {
                    string = string + ' * ';
                }
            }
            else
            {
                for (var k=2; k<1+(i*2); k++)
                {
                    string = string + '   ';
                }
            }
            string = string + ' * ';
            
            
        }
        string = string + '\n';
    }
    console.log(string);
}

segitiga(11);

console.log('-----Contoh function Array-----')

let mobil = ['Alya','Xenia','Avanza']; 
 
console.log(mobil) 
console.log(mobil.toString()) 
console.log(mobil.join(' * '))

console.log('-----Contoh function Array Elements-----')
let mobil1 = ['Alya','Xenia','Avanza']; 
 
console.log(mobil1[0]);
console.log(mobil1[1]);
console.log(mobil1[2]);  
console.log(mobil1[3]);

console.log('-----Contoh function Array Elements 2-----')
let buah, bPjg, i; 
 
buah = ['Jeruk', 'Nanas', 'Apel', 'Durian']; 
 
bPjg = buah.length; 
console.log('Hasil data Array : '+ bPjg);
 
for (i = 0; i < bPjg; i++) 
{  
    console.log(buah[i]); 
} 
Array();

console.log('-----Contoh function Array Prioriti Method-----')

let mobil2 = ['Zlya','Xenia','Avanza']; 
 
// let ww = mobil2.length; 

let xx = mobil2.sort();  
// let y = mobil.reverse(); 
// let zz = mobil2.indexOf('Avanza'); 
 
// console.log(ww); 
console.log(xx); 
// console.log(y); 
// console.log(zz);