const hiddenNav = document.querySelector('.hiddenNav')
const body = document.querySelector('body')
const api_url = '../data.json'

document.querySelector('.btnBurger').onclick = function () {
   hiddenNav.classList.toggle('hidden')
   hiddenNav.classList.toggle('flex')
   body.classList.toggle('max-md:overflow-hidden')
}



// ----------------------- LEGAL DOCUMENTS -------------------------------

const modal_window = document.querySelector('.modal_window')

document.querySelector('.share').onclick = function () {
   modal_window.classList.remove('hidden')
   body.classList.add('overflow-hidden')
}

document.querySelector('.closeBtn').onclick = function () {
   modal_window.classList.add('hidden')
   body.classList.remove('overflow-hidden')
}


// ----------------------- LEGAL DOCUMENTS END --------------------------



// ----------------------- PARTICIPANTS RATING ------------------------------

const tbody2 = document.querySelector('.tbody2')

// malumotlarni apida olib keladi
let k = 1
function data() {
   fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
         generate(data.data);
      })
   // .catch(() => alert("Ma'lumot kelishda xatolik yuz berdi!"));
}
// data()


// apidan kelgan malumotlarni htmlga generatsiya qiladi
function generate(res) {
   tbody2.innerHTML = ""

   res.map((item) => {
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
// ----------------------- PARTICIPANTS RATING END -------------------------------


