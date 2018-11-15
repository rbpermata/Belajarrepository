// var string = 'sehat sejahtera pak sddd ss asdasdasd fss';
// string = string.split('s');
// console.log(string.length-1);

var a = 5;
var b = 2;
var c;
c = a+b;
b*=a;
console.log(c);
// /*-----proses if else Logic -----*/
// console.log('-----proses if else Logic angka-----');

// if (a < b) 
// {
//     console.log('a lebih kecil bor');
// }
// else if (a > b){
//     console.log('a lebih besar bor');
// }

// console.log('-----proses if else Logic string-----');
//  var nama = 'agus';
//  var gender = 'laki-laki';

//  if (gender == 'laki-laki') 
//  {
//     console.log(gender + ' sama')

//  }else {
//     console.log(gender + ' tidak')
//  }

// console.log('-------Proses dana === dan == -----')
// var angka1 = '5';
// var angka2 = 5;
// console.log('-------Proses == -----')
// if(angka1 == angka2)
// {
//     console.log('sama');
// }else{
//     console.log('tidak');
// }
// console.log('-------Proses dan === -----')
// if(angka1 === angka2)
// {
//     console.log('sama');
// }else{
//     console.log('tidak');
// }

// console.log('-------False-----')
// if (false)
// {
    
// }else{
//     console.log('false');
// }

// console.log('-------True-----')
// if (true)
// {
//     console.log('true');
// }


// console.log('-------Perintah || , && -----')

// var nama = 'agus';
// var duit = 'punya duit';
// var laper = false;
// var ongkos = true;

// // if(duit == 'punya duit' || laper)
// if((duit == 'punya duit' || laper) && ongkos)
// {
//     console.log(nama + ' Makan');
// }else{
//     console.log(nama + ' Tidak Makan');
// }

// console.log('-------Perintah != -----')

// var username = '';
// // if(5 != '5')
// if(!username)
// {
//     console.log('tidak ada bro');
// }else{
//     console.log('ada bro');
// }

// console.log('-------Perintah Switch dan Job -----')

// var job = 'guru';

// switch(job)
// {
//     case 'petani' :
//         console.log('kerjanya menananm padi');
//         break;
//     case 'guru' :
//         console.log('kerjaanya mengajar');
//         break;
//     case 'polisi' :
//         console.log('Kerjanya menilang');
//         break;
//     default:
//         console.log('Kerjannya gak jelas');
// }       


// console.log('-------Perintah Switch lebih 2 variable -----')

// let alaskaki = 'sepatu'; 
// let warna = 'merah'; 
 
// switch (true) {    
//     case (alaskaki == 'sepatu' && warna == 'merah'):  
//     console.log('Saya suka sepatu merah.');  
//     break;    
//     case (alaskaki == 'sepatu' && warna == 'biru'):  
//     console.log('Saya suka sepatu biru.');  break;    
//     case (alaskaki == 'sandal' && warna == 'merah'):  
//     console.log('Saya suka sandal merah.');  break;    
//     case (alaskaki == 'sandal' && warna == 'biru'):  
//     console.log('Saya suka sandal biru.');  
//     break;    
//     default:  console.log('Tak suka alas kaki merah/biru.'); 
// }




// console.log('-------Solve It!  -----')
// console.log('-------Perintah Switch lebih 3 variable -----')

// let alas = 'sepatu'; 
// let warnai = 'biru';
// let hargai = 'mahal'; 
 
// switch (true) {    
//     case (alas == 'sepatu' && warnai == 'merah' && hargai == 'murah'):  
//     console.log('Sendal 1.');  
//     break;    
//     case (alas == 'sepatu' && warnai == 'biru' && hargai == 'mahal'):  
//     console.log('Sendal 2.');  
//     break;    
//     case (alas == 'sandal' && warnai == 'merah' && hargai == 'murah'):  
//     console.log('Sendal 3.');  
//     break;    
//     case (alas == 'sandal' && warnai == 'biru' && hargai == 'mahal'):  
//     console.log('Sendal 4.');  
//     break;    
//     default:  console.log('Sendal 9.'); 
// }

// console.log('-------Solve It! #11 -----')

// var days = new Date();
// days = new Date();
// var bulan = (days.getMonth()+1);


// if (bulan == 1){
//     console.log('saat ini bulan '+ bulan + ':' + ' Januari');
// }else if(bulan == 2){
//     console.log('saat ini bulan '+ bulan + ':' + 'Februari');
// }else if(bulan == 3){
//     console.log('saat ini bulan '+ bulan + ':' + ' Maret');
// }else if(bulan == 4){
//     console.log('saat ini bulan '+ bulan + ':' + ' April');
// }else if(bulan == 5){
//     console.log('saat ini bulan'+ bulan + ':' + ' Mei');
// }else if(bulan == 6){
//     console.log('saat ini bulan '+ bulan + ':' + 'Juni');
// }else if(bulan == 7){
//     console.log('saat ini bulan '+ bulan + ':' + ' July');
// }else if(bulan == 8){
//     console.log('saat ini bulan '+ bulan + ':' + ' Agustus');
// }else if(bulan == 9){
//     console.log('saat ini bulan '+ bulan + ':' + ' September');
// }else if(bulan == 10){
//     console.log('saat ini bulan '+ bulan + ':' + ' Oktober');
// }else if(bulan == 11){
//     console.log('saat ini bulan '+ bulan + ':' + ' November');
// }else{
//     console.log('saat ini bulan '+ bulan + ':' + ' Desember');
// }

// console.log('-----Solve It! #12 ------')

// var days = new Date();
// days = new Date();
// var bulan = (days.getMonth()+1);
// var day = days.getDay();
// var day1 = days.getDate();
// var year = days.getFullYear();

// if (bulan == 1){
//     bulan = 'Januari';
// }else if(bulan == 2){
//     bulan = 'Februari';
// }else if(bulan == 3){
//     bulan = 'Maret';
// }else if(bulan == 4){
//     bulan = 'April';
// }else if(bulan == 5){
//     bulan = 'Mei';
// }else if(bulan == 6){
//     bulan = 'Juni';
// }else if(bulan == 7){
//     bulan = 'Jully';
// }else if(bulan == 8){
//     bulan = 'Agustus';
// }else if(bulan == 9){
//     bulan = 'September';
// }else if(bulan == 10){
//     bulan = 'Oktober';
// }else if(bulan == 11){
//     bulan = 'November';
// }else{
//     bulan = 'Desember';
// }

// if (day == 0){
//     day = 'Minggu';
// }else if(day == 1){
//     day = 'Senin';
// }else if(day == 2){
//     day = 'Selasa';
// }else if(day == 3){
//     day = 'Rabu';
// }else if(day == 4){
//     day = 'Kamis';
// }else if(day == 5){
//     day = 'Jumat';
// }else{
//     day = 'Sabtu';
// }

// console.log('Hari ini '+ day +','+ day1 +' '+bulan + ' '+ year + ' Pukul '+ days.getHours()+':'+ days.getMinutes() +':' + days.getSeconds());



// console.log('-----Solve It! #13 ------')

// var masa = 67; 
// var tinggi = 1.87;
// var imt = masa/(Math.pow(tinggi,2));
// console.log(imt);
 
// console.log('massa '+masa+' kg & tinggi '+tinggi)

// switch(true){
//     case(imt <  18.5 ):
//     console.log(', BERAT BADAN ANDA KURANG');
//     break;

//     case(imt >=  18.5 && imt <24.9 ):
//     console.log(', BERAT BADAN ANDA IDEAL');
//     break;

//     case(imt >=  25 && imt <29.9 ):
//     console.log(', BERAT BADAN ANDA BERLEBIH');
//     break;

//     case(imt >=  39.9 && imt <30 ):
//     console.log(', BERAT BADAN ANDA SANGAT BERLEBIH');
//     break;

//     case(imt >  39.9 ):
//     console.log(', ANDA OBESITAS');
// }


// console.log(a);

// console.log('-----Output Looping Genap-----');
// var x;
// for(x=0; x<=20; x++)
// {
//     if(x % 2 == 0)
//     {
//         console.log('Nomor urut ' + x);
//     }
    
// }

// console.log('-----Output for di dalam for-----');
// for (var i=0; i<5; i++

// {
//     console.log('nilai i : ' + i);
//         for (var j=0; j<3; j++)
//         {
//             console.log('nilai j : ' + j);
            
//             for(var k=0; k<2; k++)
//             {
//                 console.log('Nilai k : ' + k);
//             }
//         }

// }

// console.log('-----Output Looping Drawing-----');

// var string = '';
// for(var i=0; i<=5; i++)
// {
    
//     for (var j=0; j<5; j++)
//     {
//         string+= ' * ';
//     }
//     string += '\n';
// }
// console.log(string);


// console.log('-----Output Looping bintang 1 ke bawah sampai 5-----');

// var string = '';
// for(var i=0; i<=4; i++)
// {
    
//     for (var j=0; j<i+1; j++)
//     {
//         string = string + ' * ';
//     }
    
//     string += '\n';
// }
// console.log(string);

// console.log('-----Output Looping bintang 5 ke bawah sampai 1-----');
//  var string = '';
// for(var i=0; i<=5; i++)
// {
    
//     for (var j=4; j>i-1; j--)
    
//     {
//         string = string + ' * ';
//     }
    
//     string += '\n';
// }
// console.log(string);

// console.log('-----Output Looping bintang 5 ke bawah sampai 1 dan sebaliknya 1 ke bawah sampai 5-----');
// var string = '';

// for(var i=0; i<5; i++)
// {
    
//     for (var j=5; j>i; j--)
    
//     {
//         string = string + ' * ';
//     }
    
//     string = string + '\n';
// }

// for(var i=0; i<4; i++)
// {
    
//     for (var j=0; j<i+2; j++)
//     {
//         string = string + ' * ';
//     }
    
//     string = string + '\n';
// }
// console.log(string);


// console.log('-----Output Looping bintang Piramida-----');
// var string = '';
// for(var i=0; i<10; i++)
// {
//     for(k=0; k<9-i; k++)
//     {
//         string = string + '   ';
//     }

//     for (var j=0; j<(i*2)+1; j++)
//     {
//         string = string +' * ';     
//     }
//         string += '\n';
// }
// console.log(string);

// console.log('-----Output Looping bintang Piramida Kebalik-----');
// var string = '';
// for(var i=10; i>0; i--)
// {
//     for(k=10-i; k>0; k--)
//     {
//         string = string + '   ';
//     }
    
//     for (var j=(i*2)-1; j>0; j--)
//     {
//         string = string +' * ';     
//     }
//         string += '\n';
// }
// console.log(string);

// console.log('-----Output Looping bintang Piramida Full segi lima-----');

// var string = '';
// for(var i=0; i<5; i++)
// {
//     for(k=0; k<9-i; k++)
//     {
//         string = string + '   ';
//     }

//     for (var j=0; j<(i*2)+1; j++)
//     {
//         string = string +' * ';     
//     }
//     string += '\n';
    
//     for(j=9; k<1; k--)
//     {
//         string = string + '   ';
//     }
    
//     for (var j=(i*2)-1; j>0; j--)
//     {
//         string = string +' * ';     
//     }
//     string += '\n';
// }
// console.log(string);


// console.log('-----Output Looping dua segitiga kopong-----');
// var string = "";
// for (var i=0; i<5; i++)
// {
//     for (var j=0; j<4-i; j++)
//     {
//         string = string + '   ';
//     }
//     string = string + ' * ';
    

//     if (i > 0)
//     {
//         if (i == 4)
//         {
//             for (var l=0; l<7; l++)
//             {
//                 string = string + ' * ';
//             }
//         }
//         else
//         {
//             for (var k=2; k<1+(i*2); k++)
//             {
//                 string = string + '   ';
//             }
//         }
//         string = string + ' * ';
        
        
//     }
//     string = string + '\n';
// }
// console.log(string);

// console.log('-----Array Elements-----')
// let buah, bPjg, i; 
 
// buah = ['Jeruk', 'Nanas', 'Apel', 'Pepaya']; 
 
// bPjg = buah.length; 
 
// for (i = 0; i < bPjg; i++) 
// {  
//     console.log(buah[i]); 
// } 
// Array 


// console.log('-----Array Properties & Methods-----')
// let mobil = ['Avanza','Ayla','Xenia','Fortuner','Agya',3,1,5];
// let w = mobil.length;
// let x = mobil.sort();  //let y = mobil.reverse();
// let z = mobil.indexOf('Avanza'); 
 
// console.log(w); 
// console.log(x);
// // console.log(y) 
// console.log(z);

// console.log('-----Pop dan Push-----')
// let buah2 = ['nenas','jeruk','apel'];
// // buah2.pop();
// // console.log(buah2);
// buah2.push('kiwi');
// console.log(buah2);

// console.log('----- Shift & unshift -----')
// var data = ['satu','dua','tiga'];
// data.shift();
// console.log(data);

// data.unshift('Lemon');
// console.log(data);

// console.log('----- Delete dan Splice -----')
// let buahh = [3,'joko','adit',4,'susi',9];
// buahh.splice(0,3);

// let buah = ['Banana', 'Orange',  'Lemon', 'Apple', 'Mango']; 
 
// let buah2 = buah.slice(3); 
// console.log(buah2);
 
// let buah4 = buah.slice(1,4); 
// console.log(buah4);

// console.log('-----Merging data 2 Array Concate-----')

// var data = ['Mangga'];
// data[3] = 'nanas';
// console.log(data);

// let nama1 = ['Andi','Budi','Caca'];
// let nama2 = ['Siska','rita','Dita'];

// let nama3 = nama1.concat(nama2);
// let nama4 = nama2.concat(nama1);

// console.log(nama3);
// console.log(nama4);

// console.log('----- Soal 1 Sort Pakai Function-----')
// function sor(data)
// {
//     var tampungan = '';
//     for(var i = 0; i<data.length-1; i++)
//     {
       
//         if(data[i]>data[i+1])
//         {
//             tampungan = data[i+1];
//             data[i+1] = data[i];
//             data[i] = tampungan;
//         }   

//     }
//     console.log(data);
// }
// sor([9,5,2,7,8]);


// console.log('----- Soal 2 Falingdrom nama yang dibalik sama hasil true atau false-----')

// function palindrome(inputan) 
// {
//     var acak = /[^A-Za-z0-9]/g;
//     inputan = inputan.toLowerCase().replace(acak, '');
//     var len = inputan.length;
//     for (var i = 0; i < len/2; i++)
//     {
//         if(inputan[i] !== inputan[len - 1 - i])
//         {
//             return false
//         }
//     }
//     return true;
// }

// //    palindrome("A man, a plan, a canal. Panama");
// console.log(palindrome("ketek ketek"));

// console.log('----- Soal 3 Generate angka 01-10 dan 1-7 dan 1-125-----')
// var reset = '';
// function input(x)
// {
//     var reset = '';
//     for(var i=1; i<=x; i++)
//     {
//         reset = ''
//         for(y=i.toString().length; y<x.toString().length; y++)
//         {
//             reset = reset + '0';
//         }
//         console.log('NV' + reset+i);
//     }

// }
// input(10);

// console.log('-----Generate Invoice dengan parameter-----')
// function generate(number)
// {
//     satuan = number.toString().length;
//     var zero;
    

//     for (var i=1; i<=number; i++)
//     {
//         zero = '';
//         for (var j=0; j<satuan-(i.toString().length); j++)
//         {
//             zero = zero + '0';
//         }
//         console.log('INV' + zero + i);
//     }
// }

// generate(10)

// console.log('----- Function Fibonaci-----')
// function* fibonacci(x) {

//     var previous_first = 0, 
//     previous_second = 0, 
//     next = 0;    

// }


// console.log('------JavaScript Object-----')

// var orang = 
// {
//     nama: 'Ilham',
//     usia: 27,
//     pekerjaan: 'Ustad',
//     namafull: function()
//     {
//         return this.nama + " " + "Hidayat";
//     }

// }
// console.log(orang.namafull());


// console.log('------JavaScript Object Builder-----')

// var orang = function(nama, usia, job, iniarray, iniobject)
// {
//     this.namadepan = nama;
//     this.umur = usia;
//     this.pekerjaan = job;
// }

// var orangg = new orang('Ilham','27','Ustad',{'Serius','data',40},);
// console.log(orangg.umur)




