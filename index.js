//   {
//     let a=5;
//     let b=6;
//       console.log(a+b);
//       console.log(a-b);
//       console.log(a*b);
//       console.log(a/b);
//       console.log(a%b);

// let c=5;
// c++;
// console.log(c);
// let d=13;
// d%=6;
// console.log(d);

//      let e=5;
//      let f=6;
//      let fg=(e<=f);  
//      console.log(fg);
     
//   }
//   let a=10;
//   let b=20;
//   let c=40;
//   d=b>a;
//   console.log(d);
//   e=c<a;
//   console.log(e);
//   f=d||e;
//  console.log(f);

//  let i=10;
//  let j=20;

//   if(a>b)
//   {
// console.log("i is greater");
//   }
//   else{
//     console.log("j is greater");
    
//   }
//  let day =5;
//   if (day==1){
//   console.log("sunday");
//   }
//   else if(day==2){
//     console.log("monday");
//   }
//   else if(day==3){
//     console.log("tuesday");
//   }
// else if(day==4){
//   console.log("wednesday");
// }else if(day==5){
//   console.log("thursday");
// }else if(day==6){
//   console.log("friday");
// }else if(day==7){
//   console.log("saturday");
// }
// else{
//   console.log("not a valid number");
  
// }
// switch(day)
// {
// case 1: console.log("sunday");
// break;
// case 2: console.log("monday");
// break;
// case 3: console.log("tuesday");
// break;
// case 4: console.log("wednesday");
// break;
// case 5: console.log("thursday");
// break;
// case 6: console.log("friday");
// break;
// case 7: console.log("saturday");
// break;
// default : console.log("not a valid date");
// break;

// let k=1;
// let l=3;
// value= 5;
// if (value==1)
// {
//   console.log("sum"+(k+l));
// }
//  else if(value==2)
//     {
//     console.log("sub"+(k-l));
//     }
//    else if(value==3)
//       {
//       console.log("product"+(k*l));
//       }
//    else  if(value==4)
//       {
//       console.log("divide"+(k/l));
//       }
//     else {
//       console.log("not a valid ");
      
//     } 

//     let n=100;
//     let i=1;
     
//     do
//     {
//       if(i%2==1){
//         console.log(i);
//       }
//       i++;
//     }
//       while(i<=100)
      

// let m=100;
// let o=0;

// while(o<=100)
// {
//   if(o%3==0&&o%5==0){
//     console.log("@");
//   }
//   else if(o%5==0){
//     console.log("*");
//   }
//    else if(o%3==0)
//    { 
//     console.log("&"); 
//   }
//   else{
//     console.log(o);
    
//   }
// o++;
// }

// for(let i=1;i<=5;i++){
//   console.log(i);
  
// }
 
// let obj={name:"alan",rno:"6"}

// for(let key in obj)
// {
//   console.log(obj[key]);
  
// }

// let arr=[,2,4,]
// for(let value of arr)
// {
//   console.log(value);
  
// }

// let n=100;
// for( i=1;i<=100;i++){
// if(i%2==0){
//   console.log(i);
  
// }
// }

// let m=100
// for(i=1;i<=10;i++)
// {
//   console.log(i);

//   if(i==7){
//     console.log("skipped@",i);
    
//     continue;
//   }
//   console.log("not skip");
  
// }

//  function add()
// {
//   a=10;
//   b=15;
//   c=a+b;
//   console.log(c);
  
// }
//   add()

//   function sum(a,b)
//   {
//     console.log(a+b);
  
//   }
//   let b=3
//   let a=4
//   sum(a,b)

// const add= function(e,f)
//   {
//     console.log(e+f);
  
//   }
//   add(15,4)

// const add1=sum(a,b)

// let age=17
//  function isEligible(age)
// {
//   if (age>=18){
//     return "eligible";
//   }
//   else{
//   return "not eligible";
//   }
// }
// const a= isEligible(age)
// console.log(a);

//  var k=10;
//  var l=5;

//  function add(a,b){
//   return (a+b);
//  }
// function diff(a,b){
//   return (a-b);
//  }
// function multi(a,b){
//   return (a*b);
//  }
// function div(a,b){
//   return (a/b);
//  }

//  console.log(add(k,l));
//  console.log(diff(k,l));
//  console.log(multi(k,l));
//  console.log(div(k,l));
 
   let a=500;
   let b=750;
   let c=700;

   function greatest(a,b,c){
    if (a>b){

      if(a>c){
        return " a is greatest";
      }
      else {
        return "c is greatest";
    }
  }
  else{
    if (b>c){
      return "b is greatest";
    }
    else{
      return " c is greatest";
    }
  }
  }
 function smallest(a,b,c){
  if (a<b){

  if(a<c){
    return "a is smallest";
  }
  else{
    return " c is smallest";
  }}
  else{
    if(b<c){
      return "b is smallest";
    }
    else{
      return "c is smallest";
    }
  }}


 console.log(greatest(a,b,c));
 console.log(smallest(a,b,c));
 
 
 






  

   

  