
const getValue = (e) => {
    const searchInput = document.getElementById('search-input');
    let search = searchInput.value;
   if(search.trim()==='') return;

    const req=fetch(`https://dummyjson.com/products/search?q=${search}`)
        
   const data=req.then((res) => res.json())
        data.then((res) => renderUI(res))
        .catch((e) => console.log(e));
};

const renderUI = (data) => {
    const products = data.products;
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
     let count=0;
    for(let i=0;i<products.length;i++){
        count++;
        const root = document.createElement('div');
        root.setAttribute('class', 'card');
        root.style.display = 'block';
        resultContainer.appendChild(root);
        root.innerHTML = `
            <h3>${products[i].title}</h3>
            <img src='${products[i].images[0]}' alt='${products[i].title}'>
        `;
    }
    
};

const pr=fetch('https://dummyjson.com/products');
    pr.then((res)=>{
    const data=res.json();
    data.then((data)=>{
        renderUI(data);
    })
}).catch((error)=>{
    console.log(error);
})


const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getValue);


