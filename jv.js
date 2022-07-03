// class Car {
//     constructor (make,speed) {
//         this.make = make ;
//         this.speed = speed ;
//     };
//     accelerate(){
//         this.speed +=10;
//         console.log(`${this.make} chay ${this.speed} km/h`);
//     }
//     brake(){
//         this.speed -=5;
//     }
//     get speedUS () {
//         return this.speed/1.6;
//     }
//     set speedUS (speed) {
//         this.speed = speed*1.6;
//     }
// }

// const VinFast = new Car("Vin",100);
// console.log(VinFast);
// VinFast.accelerate();
// VinFast.speedUS = 100;
// console.log(VinFast);

const username = document.getElementById(`inputname`);
const form = document.getElementById(`form`);
const main = document.getElementById(`main`);
if (main.innerHTML ==""){main.className="hidden"};

function getUser(user){
      const url = `https://api.github.com/users/${user}`;
      const data = fetch(url)
      .then((res)=>res.json())
      .then((data)=>data)
      .catch((err)=>err);

      return data;
}

form.addEventListener(`submit`,async function (e) {
      e.preventDefault();
      const name = username.value;
      const userdata = await getUser(name);
      main.classList.remove(`hidden`);
      main.className="show";
   
      if (userdata.message){
           main.innerHTML = "Không tìm thấy user bạn yêu cầu";
      } else {
            username.value="";
            main.innerHTML = `
            <img src= ${userdata.avatar_url} />
            <li> Tên: ${userdata.name} </li>
            <li> Công ty: ${userdata.company} </li>
            <li> Email: ${userdata.email} </li>
            <li> Số người follow: ${userdata.followers} </li>
            `;
      }
})

