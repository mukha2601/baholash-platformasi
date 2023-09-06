const table = document.querySelector('.table')
const tbody = document.querySelector('.tbody')
const api_url = './data.json'


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