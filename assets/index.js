const btnBurger = document.querySelector('.btnBurger')
const hiddenNav = document.querySelector('.hiddenNav')
const body = document.querySelector('body')
const navbar = document.querySelector('.navbar')

btnBurger.addEventListener('click', () => {
   hiddenNav.classList.toggle('hidden')
   hiddenNav.classList.toggle('flex')
   body.classList.toggle('max-md:overflow-hidden')
})

navbar.addEventListener('click', (e) => {
   console.log(e.target);
})



// ----------------------- MAIN -----------------------------------------

const table = document.querySelector('.table')
const tbody = document.querySelector('.tbody')
const api_url = './data.json'
const all = document.querySelector('.all')
const max = document.querySelector('.max')
const middle = document.querySelector('.middle')
const min = document.querySelector('.min')
let n = 1;



// malumotlarni apida olib keladi
function dataApi() {
   fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
         getArr(data.data);
      })
      // .catch(() => alert("Xatolik yuz berdi!"));
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

// ----------------------- MAIN END ----------------------------------------


// ----------------------- MAIN PARTICIPANTS -------------------------------
const sliderBox1 = document.querySelector('.sliderBox1')

const obj1 = [
   { name: "Farg’ona davlat universiteti", src: "./assets/icons/participants/akfa logo.svg", location: "O'zbekiston , Fargona", icon: "./assets/icons/participantsRating/location.svg" },
   { name: "Farg’ona davlat universiteti", src: "./assets/icons/participants/akfa logo.svg", location: "O'zbekiston , Fargona", icon: "./assets/icons/participantsRating/location.svg" },
   { name: "Farg’ona davlat universiteti", src: "./assets/icons/participants/akfa logo.svg", location: "O'zbekiston , Fargona", icon: "./assets/icons/participantsRating/location.svg" },
   { name: "Farg’ona davlat universiteti", src: "./assets/icons/participants/akfa logo.svg", location: "O'zbekiston , Fargona", icon: "./assets/icons/participantsRating/location.svg" },
   { name: "Farg’ona davlat universiteti", src: "./assets/icons/participants/akfa logo.svg", location: "O'zbekiston , Fargona", icon: "./assets/icons/participantsRating/location.svg" },
   { name: "Farg’ona davlat universiteti", src: "./assets/icons/participants/akfa logo.svg", location: "O'zbekiston , Fargona", icon: "./assets/icons/participantsRating/location.svg" },
]

const participants = () => {
   sliderBox1.innerHTML = ""

   obj1.map(item => {
      const slider = document.createElement('div')
      slider.innerHTML = `
      <div class="slider-card w-[200px]  md:w-[285px] ">
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
participants()
// ----------------------- MAIN PARTICIPANTS END ---------------------------




// ----------------------- MAIN LEGAL DOCUMENTS -------------------------------
const sliderBox2 = document.querySelector('.sliderBox2')

const obj2 = [
   { text1: "Lorem Ipsum is simply", text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and", icon: "./assets/icons/statistics/pdf.svg", text3: "Yuklab olish.pdf" },
   { text1: "Lorem Ipsum is simply", text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and", icon: "./assets/icons/statistics/pdf.svg", text3: "Yuklab olish.pdf" },
   { text1: "Lorem Ipsum is simply", text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and", icon: "./assets/icons/statistics/pdf.svg", text3: "Yuklab olish.pdf" },
   { text1: "Lorem Ipsum is simply", text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and", icon: "./assets/icons/statistics/pdf.svg", text3: "Yuklab olish.pdf" },
   { text1: "Lorem Ipsum is simply", text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and", icon: "./assets/icons/statistics/pdf.svg", text3: "Yuklab olish.pdf" },
   { text1: "Lorem Ipsum is simply", text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and", icon: "./assets/icons/statistics/pdf.svg", text3: "Yuklab olish.pdf" },
]

const mainLegalDocuments = () => {
   sliderBox2.innerHTML = ""

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
mainLegalDocuments()
// ----------------------- MAIN LEGAL DOCUMENTS END ---------------------------



// ----------------------- USEFUL LINKS DOCUMENTS -------------------------------
const sliderBox3 = document.querySelector('.sliderBox3')

const obj3 = [
   { img: "./assets/icons/usefulLinks/lex.svg", text: "O’zbekiston respublikasi, milliy hujjatlar bazasi" },
   { img: "./assets/icons/usefulLinks/gerb.svg", text: "O’zbekiston respublikasi, prezidenti virtual qabulxonasi" },
   { img: "./assets/icons/usefulLinks/gerb.svg", text: "O’zbekiston respublikasi, prezidenti virtual qabulxonasi" },
   { img: "./assets/icons/usefulLinks/gerb.svg", text: "O’zbekiston respublikasi, prezidenti virtual qabulxonasi" },
   { img: "./assets/icons/usefulLinks/gerb.svg", text: "O’zbekiston respublikasi, prezidenti virtual qabulxonasi" },
   { img: "./assets/icons/usefulLinks/gerb.svg", text: "O’zbekiston respublikasi, prezidenti virtual qabulxonasi" }
]
function nsdnf() {
   
}


const usefulLinks = () => {
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
usefulLinks()
// ----------------------- MAIN LEGAL DOCUMENTS END ---------------------------


// ----------------------- PARTICIPANTS RATING ------------------------------

// malumotlarni apida olib keladi
// function dataApi() {
//    fetch(api_url)
//       .then((res) => res.json())
//       .then((data) => {
//          generateAll(data.data);
//       })
//       .catch(() => alert("Ma'lumot kelishda xatolik yuz berdi!"));
// }
// dataApi()


// apidan kelgan malumotlarni htmlga generatsiya qiladi
// function generateAlll(res) {
//    tbody.innerHTML = ""

//    res.map((item) => {
//       const tableBody = document.createElement('tr')


//       tableBody.innerHTML = `
//       <td class="border-2 border-x-0 border-black">
//          <div class="flex items-center justify-center">
//             ${n++}
//          </div>
//       </td>
//       <td class="border-2 border-x-0 border-black px-8 py-1 md:py-3">
//          <div class="flex items-center gap-5">
//             <div
//                class="flex min-w-[70px] md:min-w-[123px] min-h-[60px] md:min-h-[102px] justify-center items-center bg-white border-solid border-2 border-gray-200 rounded-lg">
//                <img src="${item.img}"
//                   class="w-[50px] md:w-[80px]" alt="">
//             </div>
//             <p class="md:w-56">${item.name}</p>
//          </div>
//       </td>
      
//       <td class="border-2 border-x-0  border-black">
//          <div class="flex justify-center">
//             <p
//                class="ball w-[51px] h-[28px] bg-gray-100 flex justify-center items-center rounded-lg font-medium">
//                ${item.ball}
//             </p>
//          </div>
//       </td>
//       <td class="border-2 border-s-0 border-black">
//       <div class="w-full h-full flex justify-center items-center px-3">
//          <button
//             class="uppercase py-2 px-6 rounded-lg font-medium text-blue-500 border-2 hover:bg-[#2861F5] hover:text-white border-blue-500">batafsil</button>
//       </div>
//       </td>
//       `
//       tbody.appendChild(tableBody);
//    })
// }
// ----------------------- PARTICIPANTS RATING END -------------------------------


// ----------------------- LEGAL DOCUMENTS -------------------------------

const share = document.querySelector('.share')
const closeBtn = document.querySelector('.closeBtn')
const modal_window = document.querySelector('.modal_window')

share.addEventListener('click', () => {
   modal_window.classList.remove('hidden')
   body.classList.add('overflow-hidden')
})

closeBtn.addEventListener('click', () => {
   modal_window.classList.add('hidden')
   body.classList.remove('overflow-hidden')
})

// ----------------------- LEGAL DOCUMENTS END --------------------------