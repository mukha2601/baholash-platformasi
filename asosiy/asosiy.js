const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
// const ball = document.querySelectorAll('.ball')
// const qator = document.querySelectorAll('.qator')
const table = document.querySelector('.table')


// ballar massivi osish tartibida
// let mas = []
// ball.forEach((item) => {
//    const num = +item.innerHTML.trim()
//    mas.push(num)
// })
// mas.sort()
// const kusok = Math.floor(mas.length / 3)




// colorGreen.forEach((green_item) => {
//    green_item.addEventListener("click", () => {
//       ball.forEach((ball_item) => {
//          if (mas[mas.length - 1] == +ball_item.innerHTML.trim()) {
//             ball_item.parentElement.parentElement.parentElement.classList.toggle('green')
//          }
//       })
//    })
// })

// colorRed.forEach((red_item) => {
//    red_item.addEventListener('click', () => {
//       ball.forEach((ball_item) => {
//          if (+ball_item.innerHTML.trim() == +mas[1]) {
//             ball_item.parentElement.parentElement.parentElement.classList.toggle('red')
//          }
//       })
//    })
// })



green.addEventListener("click", () => {
   renderTableGreen()
})
yellow.addEventListener("click", () => {
   renderTableYellow()
})
red.addEventListener("click", () => {
   renderTableRed()
})



const renderTableGreen = () => {
   table.innerHTML = ''
   const tableGreen = document.createElement('div')
   tableGreen.innerHTML = `
   <table class="w-full bg-green-300">
   <thead>
      <tr class="font-normal text-gray-600">
         <th class="border-2 p-3 font-normal w-5">Reyting</th>
         <th class="border-2 p-3 font-normal">Nomi</th>
         <th class="border-2 p-3 font-normal">Hudud</th>
         <th class="border-2 p-3 font-normal">To’plangan ballari</th>
         <th class="border-2 p-3 font-normal border-r-0"></th>
         <th class="border-2 p-3 font-normal border-l-0"></th>
      </tr>
   </thead>
   <tbody class="tbody text-gray-600 font-medium">
      
      <tr class="qator h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <img src="../logo and icons/ishtirokchilar reytingi/Frame-1.svg" alt="">
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img src="../logo and icons/ishtirokchilar reytingi/Farg’ona davlat universiteti.svg"
                     class="w-[80px]" alt="">
               </div>
               <p class="w-36">Farg’ona davlat universiteti</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Farg’ona shahri</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  6423
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorGreen w-2 border-2 border-b-0 border-t-0 bg-[#5BBA54]"></td>
      </tr>
      <tr class="qator h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <img src="../logo and icons/ishtirokchilar reytingi/Frame-2.svg" alt="">
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img src="../logo and icons/ishtirokchilar reytingi/Andijon davlat universiteti.svg"
                     class="w-[80px]" alt="">
               </div>
               <p class="w-36">Andijon davlat universiteti</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Andijon shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  4587
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorGreen w-2 border-2 border-b-0 border-t-0 bg-[#93CC88]"></td>
      </tr>
      <tr class="h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <p class="text-2xl">4</p>
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img src="../logo and icons/ishtirokchilar reytingi/Namangan davlat universiteti.svg"
                     class="w-[80px]" alt="">
               </div>
               <p class="w-36">Namangan davlat universiteti</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Namangan shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  5406
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorYellow w-2 border-2 border-b-0 border-t-0 bg-[#FCBF0E]"></td>
      </tr>
      <tr class="h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <p class="text-2xl">5</p>
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img
                     src="../logo and icons/ishtirokchilar reytingi/Islom karimov nomidagi universiteti.svg"
                     class="w-[80px]" alt="">
               </div>
               <p class="w-64">Islom karimov nomidagi Toshkent davlat texnika universiteti</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Toshkent shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  2155
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorYellow w-2 border-2 border-b-0 border-t-0 bg-[#FCBF0E]"></td>
      </tr>
      <tr class="h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <p class="text-2xl">6</p>
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img
                     src="../logo and icons/ishtirokchilar reytingi/Toshkent tibbiyot universiteti Urganch filiali.svg"
                     class="w-[80px]" alt="">
               </div>
               <p class="w-64">Toshkent tibbiyot universiteti Urganch filiali</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Urganch shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  4509
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorYellow w-2 border-2 border-b-0 border-t-0 bg-[#F59038]"></td>
      </tr>
      <tr class="h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <p class="text-2xl">7</p>
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img
                     src="../logo and icons/ishtirokchilar reytingi/Toshkent axborot texnogoliyalari Universiteti.svg"
                     class="w-[80px]" alt="">
               </div>
               <p class="w-64">Muhammad Al Xorazmiy nomidagi Toshkent axborot texnogoliyalari Universiteti
               </p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Toshkent shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  1200
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="w-2 border-2 border-b-0 border-t-0 bg-[#F1575F]"></td>
      </tr>
      <tr class="h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <p class="text-2xl">8</p>
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img
                     src="../logo and icons/ishtirokchilar reytingi/Qo'qon davlat pedagogika instituti.svg"
                     class="w-[70px]" alt="">
               </div>
               <p class="w-64">Qo'qon davlat pedagogika instituti</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Qo’qon shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  3251
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorRed w-2 border-2 border-b-0 border-t-0 bg-[#DA2129]"></td>
      </tr>
      <tr class="h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <p class="text-2xl">9</p>
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img src="../logo and icons/ishtirokchilar reytingi/Farg'ona politexnika instituti.svg"
                     class="w-[90px]" alt="">
               </div>
               <p class="w-64">Farg'ona politexnika instituti</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Farg’ona shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  2592
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorRed w-2 border-2 border-t-0 bg-[#DA2129]"></td>
      </tr>
   </tbody>
</table>
   `
   table.appendChild(tableGreen)
}

const renderTableYellow = () => {
   table.innerHTML = ''
   const tableYellow = document.createElement('div')
   tableYellow.innerHTML = `
   <table class="w-full bg-yellow-300">
   <thead>
      <tr class="font-normal text-gray-600">
         <th class="border-2 p-3 font-normal w-5">Reyting</th>
         <th class="border-2 p-3 font-normal">Nomi</th>
         <th class="border-2 p-3 font-normal">Hudud</th>
         <th class="border-2 p-3 font-normal">To’plangan ballari</th>
         <th class="border-2 p-3 font-normal border-r-0"></th>
         <th class="border-2 p-3 font-normal border-l-0"></th>
      </tr>
   </thead>
   <tbody class="tbody text-gray-600 font-medium">
      
     
      
      
      <tr class="h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <p class="text-2xl">7</p>
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img
                     src="../logo and icons/ishtirokchilar reytingi/Toshkent axborot texnogoliyalari Universiteti.svg"
                     class="w-[80px]" alt="">
               </div>
               <p class="w-64">Muhammad Al Xorazmiy nomidagi Toshkent axborot texnogoliyalari Universiteti
               </p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Toshkent shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  1200
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="w-2 border-2 border-b-0 border-t-0 bg-[#F1575F]"></td>
      </tr>
      <tr class="h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <p class="text-2xl">8</p>
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img
                     src="../logo and icons/ishtirokchilar reytingi/Qo'qon davlat pedagogika instituti.svg"
                     class="w-[70px]" alt="">
               </div>
               <p class="w-64">Qo'qon davlat pedagogika instituti</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Qo’qon shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  3251
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorRed w-2 border-2 border-b-0 border-t-0 bg-[#DA2129]"></td>
      </tr>
      <tr class="h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <p class="text-2xl">9</p>
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img src="../logo and icons/ishtirokchilar reytingi/Farg'ona politexnika instituti.svg"
                     class="w-[90px]" alt="">
               </div>
               <p class="w-64">Farg'ona politexnika instituti</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Farg’ona shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  2592
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorRed w-2 border-2 border-t-0 bg-[#DA2129]"></td>
      </tr>
   </tbody>
</table>
   `
   table.appendChild(tableYellow)
}

const renderTableRed = () => {
   table.innerHTML = ''
   const tableRed = document.createElement('div')
   tableRed.innerHTML = `
   <table class="w-full bg-red-300">
   <thead>
      <tr class="font-normal text-gray-600">
         <th class="border-2 p-3 font-normal w-5">Reyting</th>
         <th class="border-2 p-3 font-normal">Nomi</th>
         <th class="border-2 p-3 font-normal">Hudud</th>
         <th class="border-2 p-3 font-normal">To’plangan ballari</th>
         <th class="border-2 p-3 font-normal border-r-0"></th>
         <th class="border-2 p-3 font-normal border-l-0"></th>
      </tr>
   </thead>
   <tbody class="tbody text-gray-600 font-medium">
      
      <tr class="qator h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <img src="../logo and icons/ishtirokchilar reytingi/Frame-1.svg" alt="">
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img src="../logo and icons/ishtirokchilar reytingi/Farg’ona davlat universiteti.svg"
                     class="w-[80px]" alt="">
               </div>
               <p class="w-36">Farg’ona davlat universiteti</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Farg’ona shahri</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  6423
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorGreen w-2 border-2 border-b-0 border-t-0 bg-[#5BBA54]"></td>
      </tr>
      <tr class="qator h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <img src="../logo and icons/ishtirokchilar reytingi/Frame-2.svg" alt="">
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img src="../logo and icons/ishtirokchilar reytingi/Andijon davlat universiteti.svg"
                     class="w-[80px]" alt="">
               </div>
               <p class="w-36">Andijon davlat universiteti</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Andijon shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  4587
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorGreen w-2 border-2 border-b-0 border-t-0 bg-[#93CC88]"></td>
      </tr>
      <tr class="h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <p class="text-2xl">4</p>
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img src="../logo and icons/ishtirokchilar reytingi/Namangan davlat universiteti.svg"
                     class="w-[80px]" alt="">
               </div>
               <p class="w-36">Namangan davlat universiteti</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Namangan shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  5406
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorYellow w-2 border-2 border-b-0 border-t-0 bg-[#FCBF0E]"></td>
      </tr>
      <tr class="h-[140px]">
         <td class="border-2">
            <div class="flex items-center justify-center">
               <p class="text-2xl">5</p>
            </div>
         </td>
         <td class="border-2 px-8">
            <div class="flex items-center gap-5">
               <div
                  class="flex w-[123px] h-[102px] justify-center items-center border-solid border-2 border-gray-200 rounded-lg">
                  <img
                     src="../logo and icons/ishtirokchilar reytingi/Islom karimov nomidagi universiteti.svg"
                     class="w-[80px]" alt="">
               </div>
               <p class="w-64">Islom karimov nomidagi Toshkent davlat texnika universiteti</p>
            </div>
         </td>
         <td class="border-2 px-5">
            <div class="flex mt-1 gap-1 text-[14px] justify-center ">
               <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
               <p>Toshkent shahri</p>
            </div>
         </td>
         <td class="border-2">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-green-100 flex justify-center items-center rounded-lg font-medium text-green-500">
                  2155
               </p>
            </div>
         </td>
         <td class="border-2 h-36 box-border p-5">
            <div class="w-full h-full flex justify-center items-center relative">
               <button
                  class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
            </div>
         </td>
         <td class="colorYellow w-2 border-2 border-b-0 border-t-0 bg-[#FCBF0E]"></td>
      </tr>
      
   </tbody>
</table>
   `
   table.appendChild(tableRed)
}




const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

item = arr[Math.floor(Math.random() * arr.length)]

console.log(item);