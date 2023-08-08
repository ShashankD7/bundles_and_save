function forFirstDiv() { // This function changes first div dynamically
    removeDynamicThings("main-container-second-div");
    removeDynamicThings("main-container-third-div")
    let firstDiv = document.getElementById("main-container-first-div");
    firstDiv.style.backgroundColor = "#e9f3f1";
    firstDiv.style.border = "1px solid #007F61";

    {
        let outerCircle = document.getElementById("main-container-first-div-circle");
        if (outerCircle.childElementCount === 0) {
            let newDivForInnerCircle = document.createElement("div");
            newDivForInnerCircle.id = "main-container-div-circle-inner-circle";
            outerCircle.append(newDivForInnerCircle);
        }
    } // --------> this section is for dynamic innercircle we want after clicking any of the div

    {
        
        let x = document.getElementById("dynamic-div-for-first-div");
        if (x.childElementCount === 0) {
            generateTable(x);
        }
    }
}

function forSecondDiv() {
    removeDynamicThings("main-container-first-div");
    removeDynamicThings("main-container-third-div")
    let SecondDiv = document.getElementById("main-container-second-div");
    SecondDiv.style.backgroundColor = "#e9f3f1";
    SecondDiv.style.border = "1px solid #007F61";
    {
        let outerCircle = document.getElementById("main-container-second-div-circle");
        if (outerCircle.childElementCount === 0) {
            let newDivForInnerCircle = document.createElement("div");
            newDivForInnerCircle.id = "main-container-div-circle-inner-circle";
            outerCircle.append(newDivForInnerCircle);
        }
    } // --------> this section is for dynamic innercircle we want after clicking any of the div

    {
        
        let x = document.getElementById("dynamic-div-for-second-div");
        if (x.childElementCount === 0) {
            generateTable(x);
        }
    }

}

function forThirdDiv() {
    removeDynamicThings("main-container-first-div");
    removeDynamicThings("main-container-second-div");
    let thirdDiv = document.getElementById("main-container-third-div");
    thirdDiv.style.backgroundColor = "#e9f3f1";
    thirdDiv.style.border = "1px solid #007F61";
    {
        let outerCircle = document.getElementById("main-container-third-div-circle");
        if (outerCircle.childElementCount === 0) {
            let newDivForInnerCircle = document.createElement("div");
            newDivForInnerCircle.id = "main-container-div-circle-inner-circle";
            outerCircle.append(newDivForInnerCircle);
        }
    } // --------> this section is for dynamic innercircle we want after clicking any of the div

    {
        
        let x = document.getElementById("dynamic-div-for-third-div");
        if (x.childElementCount === 0) {
            generateTable(x);
        }
    }
}

function generateTable(x) {
        let table = document.createElement("table");
        let th0 = document.createElement("th");
        let th1 = document.createElement("th");
        let th2 = document.createElement("th");
        let tbody = document.createElement("tbody");
        let tr0 = document.createElement("tr");
        th0.textContent = "";
        th1.textContent = "Size";
        th2.textContent = "Color";
        tr0.append(th0);
        tr0.append(th1);
        tr0.append(th2);
        tbody.append(tr0);
        let tr1 = document.createElement("tr");
        let tr2 = document.createElement("tr");
        let arrayOfTdTag = [];

        for (let i=0; i<6; i++) {
            arrayOfTdTag.push(document.createElement("td"));
        }

        arrayOfTdTag[0].textContent = "#1";
        arrayOfTdTag[1].innerHTML = `<select>
                                        <option value="S" selected>S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>`;
        arrayOfTdTag[1].className = "white-dropdown";
        arrayOfTdTag[2].innerHTML = `<select>
                                        <option value="">Color</option>
                                        <option value="Red">Red</option>
                                        <option value="Saffron">Saffron</option>
                                        <option value="Blue">Blue</option>
                                    </select>`;
        arrayOfTdTag[2].className = "white-dropdown";
        arrayOfTdTag[3].textContent = "#2";
        arrayOfTdTag[4].innerHTML = `<select>
                                        <option value="S" selected>S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>`;
        arrayOfTdTag[4].className = "white-dropdown";
        arrayOfTdTag[5].innerHTML = `<select>
                                        <option value="">Color</option>
                                        <option value="Red">Red</option>
                                        <option value="Saffron">Saffron</option>
                                        <option value="Blue">Blue</option>
                                    </select>`;
        arrayOfTdTag[5].className = "white-dropdown";

        
        tr1.append(arrayOfTdTag[0]);
        tr1.append(arrayOfTdTag[1]);
        tr1.append(arrayOfTdTag[2]);
        tbody.append(tr1);
        tr2.append(arrayOfTdTag[3]);
        tr2.append(arrayOfTdTag[4]);
        tr2.append(arrayOfTdTag[5]);
        tbody.append(tr2);

        table.append(tbody);

        x.append(table);
}

function removeDynamicThings (divId) {
    if (divId === "main-container-first-div") {
        let circle = document.getElementById("main-container-first-div-circle")
        if (circle.childElementCount > 0) circle.removeChild(circle.firstElementChild);

        let dynamicDivForFirstDiv = document.getElementById("dynamic-div-for-first-div");
        dynamicDivForFirstDiv.innerHTML = ``;

        let firstDiv = document.getElementById("main-container-first-div");
        firstDiv.style.backgroundColor = "";
        firstDiv.style.border = "1px solid black"
    }
    else if (divId === "main-container-second-div") {
        let circle = document.getElementById("main-container-second-div-circle")
        if (circle.childElementCount > 0) circle.removeChild(circle.firstElementChild);

        let dynamicDivForSecondDiv = document.getElementById("dynamic-div-for-second-div");
        dynamicDivForSecondDiv.innerHTML = ``;

        let SecondDiv = document.getElementById("main-container-second-div");
        SecondDiv.style.backgroundColor = "";
        SecondDiv.style.border = "1px solid black"
    }
    else {
        let circle = document.getElementById("main-container-third-div-circle")
        if (circle.childElementCount > 0) circle.removeChild(circle.firstElementChild);

        let dynamicDivForthirdDiv = document.getElementById("dynamic-div-for-third-div");
        dynamicDivForthirdDiv.innerHTML = ``;

        let thirdDiv = document.getElementById("main-container-third-div");
        thirdDiv.style.backgroundColor = "";
        thirdDiv.style.border = "1px solid black"
    }
}
