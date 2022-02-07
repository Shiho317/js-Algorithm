//01

// const windowWidth = window.innerWidth;
// console.log(windowWidth)
// alert(windowWidth)

//02

// const num1 = 5;
// const num2 = 8;
// alert(num1 + num2);

//03

// const text1 = "apple, banana";
// const text2 = 'lemon';
// const str = text1 + text2;
// console.log(str.replace('banana', ''))


//04

// $(function(){
//   $('li').on('click', function(){
//     alert($(this).attr('class'));
//   });
// });


//05

// const alert = () => {
//   console.log('alert!')
// };

// setTimeout(alert, 2000);


//06

// let arr = [];
// arr.push('apple');
// arr.push('melon');
// arr.push('banana');

// console.log(arr[1])


// 07

// const lists = document.querySelectorAll('.list');

// console.log(lists.length)


//08

// const ele = document.querySelector('p');

// ele.classList.add('is-active');


//09

// const ele = document.querySelector('p');

// ele.classList.remove('.blue');


//10

// const ele = document.querySelector('p');

// const toggle = (e) => {
//   if(e.target.className === 'is-active'){
//     ele.classList.remove('is-active');
//   }else{
//     ele.classList.add('is-active')
//   }
// };

// ele.addEventListener('click', toggle)


//11

// const newEle = document.createElement('p')
// const context = document.createTextNode('dummyA');
// newEle.appendChild(context);

const body = document.querySelector('body');
// body.insertBefore(newEle, ele)


//12

// const newEle = document.createElement('p');
// const context = document.createTextNode('dummyF');

// newEle.appendChild(context);

// ele.appendChild(newEle)


//14 

// const ele = document.querySelector('.click');
// const target = document.querySelector('.target');

// const clickFunc = () => {
//   target.style.display = 'unset';
//   console.log('show')
// }

// ele.addEventListener('click', clickFunc)


//15

// const ele = document.querySelector('.click');
// const target = document.querySelector('.target');

// const clickFunc = () => {
//   target.style.display = 'none';
// }

// ele.addEventListener('click', clickFunc)


//16

// const ele = document.querySelector('.click');
// const target = document.querySelector('.target');

// const clickFunc = () => {
//   target.style.display = 'unset';
//   target.style.transition = 'all 0.3s ease'
// }

// ele.addEventListener('click', clickFunc)
