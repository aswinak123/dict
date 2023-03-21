const res = document.getElementById("c2");
const inp = document.getElementById("inp");
const container1 = document.getElementById("container1");
const c2 = document.getElementById("c2");

inp.addEventListener("input",() =>{
    let word = document.getElementById("inp").value;
    container1.style.top = "20px";
    c2.classList.add("c2");
    c2.innerHTML = `<div class="spinner-grow text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>`;
    fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=6c2fd4cf-e45f-437f-908b-c0d128f669bd`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        res.innerHTML = `
        <div class="word"><h3>${word}</h3></div>
        <div class="details"><p>${data[0].fl}</p><p>/${data[0].hwi.hw}/</p></div>
        <p class="meaning">${data[0].shortdef}</p>
        <p class="example">${data[0].meta.syns[0].join(",") || ""}</p>
        `        
    })
})