//Work when everything is loaded.

document.addEventListener("DOMContentLoaded", () => {

    //Declarations
    const pd1 = document.getElementById("p1");
    let pd1flag = 0

    const pd2 = document.getElementById("p2");
    let pd2flag = 0

    const pd3 = document.getElementById("p3");
    let pd3flag = 0

    let totalprice = document.getElementById("totalprice");

    const rem1 = document.getElementById("rem1");
    const rem2 = document.getElementById("rem2");
    const rem3 = document.getElementById("rem3");

    const co = document.getElementById("co");
    const item = document.getElementById("items");

    //Functions

    //Function to update price on Total

    function update() {
        const p1 = pd1flag * 10;
        const p2 = pd2flag * 15; 
        const p3 = pd3flag * 20; 

        const total = p1 + p2 + p3; 
        totalprice.textContent = total;
    }

    //Function to remove item in cart and update total price

    function removeFromCart(button) {

        // Get the li that contains the button
        const listItem = button.closest("li");
        // Remove the li from the list
        listItem.remove();

        
        if (button.id === "rem1") {
            pd1flag = 0;
        } else if (button.id === "rem2") {
            pd2flag = 0;
        } else if (button.id === "rem3") {
            pd3flag = 0;
        }

        update();
    }

    //Click Events

    co.addEventListener('click', (e) => {
        e.preventDefault();
        
        let t = parseFloat(totalprice.textContent);
    
        if (t === 0) {

            alert(`No items in cart!`);

        } else {

            alert(`Checked out items worth ${t}`);

        }
    });

    pd1.addEventListener('click', (e) => {
        e.preventDefault();

        if (pd1flag == 0){

            const item1 = document.createElement("li");

            const div = document.createElement("div");
            div.className = "flex p-2 border-b border-gray-300"
    
            div.innerHTML = `
                <span>Product 1 - (</span>
                <span id="it1total">1</span>
                <span>)&nbsp;at&nbsp;</span>
                <span id="it1price">10</span>
                <span>&nbsp;dollars.</span>
                <input type="button" value="Remove" class="bg-red-500 text-white p-2 rounded ml-auto" id="rem1")>
            
            `

            item1.appendChild(div);

            const ul = document.getElementById("items");
            ul.appendChild(item1);

            pd1flag = 1;

        }else{

            let pd1total = document.getElementById("it1total");
            let pd1totalprice = document.getElementById("it1price")

            pd1flag++;

            pd1total.textContent = pd1flag;
            pd1totalprice.textContent = (pd1flag * 10);

        }

        update();
        
    });

    pd2.addEventListener('click', (e) => {
        e.preventDefault();

        if (pd2flag == 0){

            const item1 = document.createElement("li");

            const div = document.createElement("div");
            div.className = "flex p-2 border-b border-gray-300"
    
            div.innerHTML = `
                <span>Product 2 - (</span>
                <span id="it2total">1</span>
                <span>)&nbsp;at&nbsp;</span>
                <span id="it2price">15</span>
                <span>&nbsp;dollars.</span>
                <input type="button" value="Remove" class="bg-red-500 text-white p-2 rounded ml-auto" id="rem2">
            
            `

            item1.appendChild(div);

            const ul = document.getElementById("items");
            ul.appendChild(item1);

            pd2flag = 1;

        }else{

            let pd2total = document.getElementById("it2total");
            let pd2totalprice = document.getElementById("it2price")

            pd2flag++;

            pd2total.textContent = pd2flag;
            pd2totalprice.textContent = (pd2flag * 15);

        }
        update();

    });

    pd3.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (pd3flag == 0){

            const item1 = document.createElement("li");

            const div = document.createElement("div");
            div.className = "flex p-2 border-b border-gray-300"
    
            div.innerHTML = `
                <span>Product 3 - (</span>
                <span id="it3total">1</span>
                <span>)&nbsp;at&nbsp;</span>
                <span id="it3price">20</span>
                <span>&nbsp;dollars.</span>
                <input type="button" value="Remove" class="bg-red-500 text-white p-2 rounded ml-auto" id="rem3">
            
            `

            item1.appendChild(div);

            const ul = document.getElementById("items");
            ul.appendChild(item1);

            pd3flag = 1;

        }else{

            let pd3total = document.getElementById("it3total");
            let pd3totalprice = document.getElementById("it3price")

            pd3flag++;

            pd3total.textContent = pd3flag;
            pd3totalprice.textContent = (pd3flag * 20);

        }
        update();

    });
    
    item.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT' && e.target.value === 'Remove') {
            removeFromCart(e.target);
        }
    });
    
});