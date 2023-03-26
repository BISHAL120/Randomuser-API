const loaddata = () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displaydata(data.results[0]))
}

const maindiv = document.getElementById('div');
const displaydata = (data) => {
    // console.log(data);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div>
         <h2>name : ${data.name.title +' '+ data.name.first}</h2>
        <h4>Email: ${data.email.slice(0, 22)}</h4>
        <p>Addrsss </br> city: ${data.location.city} </br>
        state: ${data.location.state}</p>
    </div>
    <div>
        <img src="${data.picture.large}">
    </div>
    `
    maindiv.appendChild(div);
}