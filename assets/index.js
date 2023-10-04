import { data, obj1, obj2, obj3 } from './data.js'



document.querySelector('.btnBurger').onclick = function () {
   document.querySelector('.hiddenNav').classList.toggle('hidden')
   document.querySelector('.hiddenNav').classList.toggle('flex')
   document.querySelector('body').classList.toggle('max-md:overflow-hidden')
}



const prev1 = document.querySelector('.prev1')
if (prev1 !== null) {
   document.querySelector('.prev1').onclick = function () {
      document.querySelector('.wrapper1').scrollLeft -= 200
   }
   document.querySelector('.next1').onclick = function () {
      document.querySelector('.wrapper1').scrollLeft += 200
   }
   document.querySelector('.prev2').onclick = function () {
      document.querySelector('.wrapper2').scrollLeft -= 200
   }
   document.querySelector('.next2').onclick = function () {
      document.querySelector('.wrapper2').scrollLeft += 200
   }
   document.querySelector('.prev3').onclick = function () {
      document.querySelector('.wrapper3').scrollLeft -= 200
   }
   document.querySelector('.next3').onclick = function () {
      document.querySelector('.wrapper3').scrollLeft += 200
   }
}




// ----------------------- MAIN PARTICIPANTS -------------------------------
const sliderBox1 = document.querySelector('.sliderBox1')
if (sliderBox1 !== null) {
   obj1.map(item => {
      const slider = document.createElement('div')
      slider.classList.add('glide__slide')
      slider.innerHTML = `
         <div class="w-[200px]  md:w-[285px] ">
            <div class="w-full h-[100px] md:h-[171px] bg-white flex items-center justify-center rounded-lg">
               <img src="${item.src}" alt="" class="w-[100px] md:w-[150px]">
            </div>
            <p class="mt-2 md:mt-5 text-xs sm:text-sm md:text-lg font-semibold">${item.name}</p>
            <div class="flex mt-1 gap-1 text-xs md:text-sm items-center">
               <img src="./assets/icons/participantsRating/location.svg" alt="">
               <p>${item.location}</p>
            </div>
         </div>
         `
      sliderBox1.appendChild(slider)
   })
}
// ----------------------- MAIN PARTICIPANTS END ---------------------------



// ----------------------- MAIN -----------------------------------------
const table = document.querySelector('.table')
const tbody = document.querySelector('.tbody')

if (tbody !== null) {
   let n = 1
   // ballarni kamayish tartibida sartirovka qilib massivga joylashtiradi
   function getArr(data) {
      let mas = []
      data.forEach((item) => {
         mas.push(+item.ball)
         mas.sort((a, b) => b - a)
      })
      // console.log(mas);
      getRandom(data)
      n = 1
      document.querySelector('.all').onclick = function () {
         table.classList.remove('green')
         table.classList.remove('yellow')
         table.classList.remove('red')
         tbody.innerHTML = ""
         getRandom(data)
         n = 1
      }
      document.querySelector('.max').onclick = function () {
         table.classList.remove('green')
         table.classList.remove('yellow')
         table.classList.remove('red')
         table.classList.add('green')
         tbody.innerHTML = ""
         getMax(data, mas)
         n = 1
      }
      document.querySelector('.middle').onclick = function () {
         table.classList.remove('green')
         table.classList.remove('yellow')
         table.classList.remove('red')
         table.classList.add('yellow')
         tbody.innerHTML = ""
         getMiddle(data, mas)
         n = 1
      }

      document.querySelector('.min').onclick = function () {
         table.classList.remove('green')
         table.classList.remove('yellow')
         table.classList.remove('red')
         table.classList.add('red')
         tbody.innerHTML = ""
         getMin(data, mas)
         n = 1
      }

   }
   getArr(data)



   function getMax(res, mas) {
      let maxArr = [];
      const num = Math.floor(mas.length / 3)
      for (let i = 0; i < num; i++) {
         mas[i]
         maxArr.push(mas[i])
      }

      let generateMax = []
      for (let i = 0; i < res.length; i++) {
         for (let j = 0; j < maxArr.length; j++) {
            if (+res[i].ball == maxArr[j]) {
               generateMax.push(res[i])
               generateMax.sort((a, b) => b - a)
            }
         }
      }
      generateAll(generateMax)
   }


   function getMiddle(res, mas) {
      let midArr = [];
      const num = Math.floor(mas.length / 3)
      for (let i = num; i < num + num; i++) {
         mas[i]
         midArr.push(mas[i])
      }

      let generateMid = []
      for (let i = 0; i < res.length; i++) {
         for (let j = 0; j < midArr.length; j++) {
            if (+res[i].ball == midArr[j]) {
               generateMid.push(res[i])
               generateMid.sort((a, b) => b - a)
            }
         }
      }
      generateAll(generateMid)
   }


   function getMin(res, mas) {
      let minArr = [];
      const num = Math.floor(mas.length / 3)
      for (let i = num + num; i < mas.length; i++) {
         mas[i]
         minArr.push(mas[i])
      }

      let generateMin = []
      for (let i = 0; i < res.length; i++) {
         for (let j = 0; j < minArr.length; j++) {
            if (+res[i].ball == minArr[j]) {
               generateMin.push(res[i])
               generateMin.sort((a, b) => b - a)
            }
         }
      }
      generateAll(generateMin)
   }

   // apidan kelgan malumotlarni random tarzda massivga joylashtiradi
   function getRandom(res) {
      let ranArr = [];
      let usedIndexes = [];

      let i = 0;
      while (i < res.length) {
         let randomNumber = Math.floor(Math.random() * res.length)

         if (!usedIndexes.includes(randomNumber)) {
            ranArr.push(res[randomNumber]);
            usedIndexes.push(randomNumber)
            i++
         }
      }
      generateAll(ranArr)
   }


   // apidan kelgan malumotlarni htmlga generatsiya qiladi
   function generateAll(res) {
      tbody.innerHTML = ""

      res.map((item) => {
         const tableBody = document.createElement('tr')


         tableBody.innerHTML = `
         <td class="border-2 ">
            <div class="flex items-center justify-center">
               ${n++}
            </div>
         </td>
         <td class="border-2  px-8 py-1 md:py-3">
            <div class="flex items-center gap-5">
               <div
                  class="flex min-w-[70px] md:min-w-[123px] min-h-[60px] md:min-h-[102px] justify-center items-center bg-white border-solid border-2 border-gray-200 rounded-lg">
                  <img src="${item.img}"
                     class="w-[50px] md:w-[80px]" alt="">
               </div>
               <p class="md:w-56">${item.name}</p>
            </div>
         </td>
         <td class="border-2  px-5">
            <div class="flex mt-1 gap-1 text-xs md:text-sm justify-center ">
               <img src="./assets/icons/participantsRating/location.svg" alt="">
               <p>${item.hudud}</p>
            </div>
         </td>
         <td class="border-2 ">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-gray-100 flex justify-center items-center rounded-lg font-medium">
                  ${item.ball}
               </p>
            </div>
         </td>
         <td class="border-2 ">
         <div class="w-full h-full flex justify-center items-center px-3">
            <button
               class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
         </div>
         </td>
         `
         tbody.appendChild(tableBody);
      })
   }
}

// ----------------------- MAIN END -------------------------------------------




// ----------------------- MAIN LEGAL DOCUMENTS -------------------------------
const sliderBox2 = document.querySelector('.sliderBox2')
if (sliderBox2 !== null) {
   obj2.map(item => {
      const slider = document.createElement('div')
      slider.innerHTML = `
      <div class="bg-white w-[280px] h-[150px] md:w-[387px] md:h-[198px] flex flex-col gap-2 md:gap-3 justify-between p-[18px] rounded-xl">
         <h5 class="text-sm md:text-xl font-semibold">${item.text1}</h5>
         <p class="text-xs md:text-base text-gray-500">${item.text2}</p>
         <div class="flex gap-3 p-2">
            <img class="w-[20px]" src="${item.icon}" alt="">
            <p class="text-xs md:text-base font-medium">${item.text3}</p>
         </div>
      </div>
      `
      sliderBox2.appendChild(slider)
   })
}
// ----------------------- MAIN LEGAL DOCUMENTS END ---------------------------



// ----------------------- MAIN USEFUL LINKS DOCUMENTS -------------------------------
const sliderBox3 = document.querySelector('.sliderBox3')
if (sliderBox3 !== null) {
   sliderBox3.innerHTML = ""
   obj3.map(item => {
      const slider = document.createElement('div')
      slider.innerHTML = `
         <div class="bg-white w-[220px] h-[130px] md:w-[290px] md:h-[150px] p-4 relative flex flex-col justify-end rounded-xl">
            <img src="${item.img}" class="w-[70px] md:w-[90px] absolute top-[-20px] translate-x-[50%] right-[50%] border-4 border-[#F1F3F9] rounded-full" alt="">
            <p class="text-sm md:text-base font-medium">${item.text}</p>
         </div>
         `
      sliderBox3.appendChild(slider)
   })
}
// ----------------------- MAIN USEFUL LINKS END ---------------------------








// ----------------------- LEGAL DOCUMENTS -------------------------------
const share = document.querySelector('.share')
if (share !== null) {
   document.querySelector('.share').onclick = function () {
      document.querySelector('.modal_window').classList.remove('hidden')
      document.querySelector('body').classList.add('overflow-hidden')
   }
   document.querySelector('.closeBtn').onclick = function () {
      document.querySelector('.modal_window').classList.add('hidden')
      document.querySelector('body').classList.remove('overflow-hidden')
   }
}
// ----------------------- LEGAL DOCUMENTS END --------------------------



// ----------------------- PARTICIPANTS RATING ------------------------------

const tbody2 = document.querySelector('.tbody2')
if (tbody2) {
   let k = 1
   // apidan kelgan malumotlarni htmlga generatsiya qiladi
   generate(data)
   function generate(data) {
      tbody2.innerHTML = ""

      data.map((item) => {
         const tableBody = document.createElement('tr')


         tableBody.innerHTML = `
         <td class="border-2 border-x-0">
            <div class="flex items-center justify-center">
               ${k++}
            </div>
         </td>
         <td class="border-2 border-x-0 px-8 py-1 md:py-3">
            <div class="flex items-center gap-5">
               <div
                  class="flex min-w-[70px] md:min-w-[123px] min-h-[60px] md:min-h-[102px] justify-center items-center bg-white border-solid border-2 border-gray-200 rounded-lg">
                  <img src="${item.img}"
                     class="w-[50px] md:w-[80px]" alt="">
               </div>
               <p class="md:w-56">${item.name}</p>
            </div>
         </td>
         
         <td class="border-2 border-x-0 ">
            <div class="flex justify-center">
               <p
                  class="ball w-[51px] h-[28px] bg-gray-100 flex justify-center items-center rounded-lg font-medium">
                  ${item.ball}
               </p>
            </div>
         </td>
         <td class="border-2 border-s-0">
         <div class="w-full h-full flex justify-center items-center px-3">
            <button
               class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
         </div>
         </td>
         `
         tbody2.appendChild(tableBody);
      })
   }

}

// ----------------------- PARTICIPANTS RATING END -------------------------------