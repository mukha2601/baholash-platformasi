const table = document.querySelector('.table')
const tbody = document.querySelector('.tbody')
const all = document.querySelector('.all')
const max = document.querySelector('.max')
const middle = document.querySelector('.middle')
const min = document.querySelector('.min')
const api_url = './data.json';
let n = 1;



// malumotlarni apida olib keladi
function dataApi() {
   fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
         getArr(data.data);
      })
      .catch(() => alert("Xatolik yuz berdi!"));
}
dataApi()



// ballarni kamayish tartibida sartirovka qilib massivga joylashtiradi
function getArr(res) {
   let mas = []
   res.forEach((item) => {
      mas.push(+item.ball)
      mas.sort((a, b) => b - a)
   })
   // console.log(mas);
   getRandom(res)
   n = 1
   all.addEventListener('click', () => {
      tbody.innerHTML = ""
      getRandom(res)
      n = 1
   })
   max.addEventListener('click', () => {
      tbody.innerHTML = ""
      getMax(res, mas)
      n = 1
   })
   middle.addEventListener('click', () => {
      tbody.innerHTML = ""
      getMiddle(res, mas)
      n = 1
   })
   min.addEventListener('click', () => {
      tbody.innerHTML = ""
      getMin(res, mas)
      n = 1
   })
}



function getMax(res, mas) {
   let maxArr = [];
   const num = Math.floor(mas.length / 3)
   for (let i = 0; i < num; i++) {
      mas[i]
      maxArr.push(mas[i])
   }

   let generateMax = []
   for (let i = 0; i < res.length; i++) {
      // console.log(res[i].ball);
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
      // console.log(res[i].ball);
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
      <td class="border-2 border-black">
         <div class="flex items-center justify-center">
            ${n++}
         </div>
      </td>
      <td class="border-2 border-black px-8 py-1 md:py-3">
         <div class="flex items-center gap-5">
            <div
               class="flex min-w-[70px] md:min-w-[123px] min-h-[60px] md:min-h-[102px] justify-center items-center bg-white border-solid border-2 border-gray-200 rounded-lg">
               <img src="${item.img}"
                  class="w-[50px] md:w-[80px]" alt="">
            </div>
            <p class="md:w-56">${item.name}</p>
         </div>
      </td>
      <td class="border-2 border-black px-5">
         <div class="flex mt-1 gap-1 text-xs md:text-sm justify-center ">
            <img src="../logo and icons/ishtirokchilar reytingi/location.svg" alt="">
            <p>${item.hudud}</p>
         </div>
      </td>
      <td class="border-2 border-black">
         <div class="flex justify-center">
            <p
               class="ball w-[51px] h-[28px] bg-gray-100 flex justify-center items-center rounded-lg font-medium">
               ${item.ball}
            </p>
         </div>
      </td>
      <td class="border-2 border-black">
      <div class="w-full h-full flex justify-center items-center px-3">
         <button
            class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
      </div>
      </td>
      `
      tbody.appendChild(tableBody);
   })
}

all.addEventListener("click", () => {
   table.classList.remove('green')
   table.classList.remove('yellow')
   table.classList.remove('red')
})
max.addEventListener("click", () => {
   table.classList.remove('green')
   table.classList.remove('yellow')
   table.classList.remove('red')
   table.classList.add('green')
})
middle.addEventListener("click", () => {
   table.classList.remove('green')
   table.classList.remove('yellow')
   table.classList.remove('red')
   table.classList.add('yellow')
})
min.addEventListener("click", () => {
   table.classList.remove('green')
   table.classList.remove('yellow')
   table.classList.remove('red')
   table.classList.add('red')
})