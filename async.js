//console.log(10);
//console.log(20);
//setTimeout(()=>{
  //  console.log(30);
//},5000)
//console.log(40);
//console.log(50);
//setInterval(()=>{
  //  document.writeln("MRU");
//})

//let p1=new Promise((resolve,reject)=>{});
//console.log(p1);

let p2=new Promise((resolve,reject)=>{
    resolve("Success");
});
console.log(p2);
p2.then((response)=>
    {
      console.log(response);
    }).catch((error)=>{
   console.log(error);
}).finslly(()=>console.log("finally printing for both"))

let p3=new Promise((resolve,reject)=>{
    reject("Failures");
});
//console.log(p3);

//function fetchUsers(){
  //let res = window.fetch("https://api.github.com/users")
  //console.log(res);
  //res.then(val=>{
    //return val.json().theen(data=>{
      //console.log(data);
    //})
  //}).catch(err => {
    //console.log(err);
//})
  //}
 // fetchUsers();

// ! Api fetching
function fetchUsers(){
  let res = window.fetch("https://jsonplaceholder.typicode.com/users")
  //console.log(res);
  res.then(val => {
      //console.log(val);
      return val.json().then(data => {
          console.log(data);
          let store = document.getElementById("store");
          //console.log(store);
          data.map((user) => {
              //console.log(user);
              store.innerHTML += `
              <tr>
                  <td>${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.email}</td>
                  <td>${user.company.name}</td>
                  <td>${user.phone}</td>
              </tr>
              `
          })
      });
  }).catch(err => {
      console.log(err);
  })
  }
  fetchUsers();
