
let arr = [{ back_color: "#333333", id: 1 }, { back_color: "#bfbfbf", id: 2 }, { back_color: "#72e3dc", id: 3 }, { back_color: "#2b8ead", id: 4 }, { back_color: "#6f98a8", id: 5 }, { back_color: "#bfbfbf", id: 6 }, { back_color: "#2f454e", id: 7 }, { back_color: "#333333", id: 8 }, { back_color: "#72e3dc", id: 9 }];

function sort_schuffle() {
    let sc_btn = document.querySelector("#scuffle-btn");
    let sort_bt = document.querySelector("#sort-btn");
    let container = document.querySelector("#box-container");

    let render = function () {
        let template = document.createElement('template');
        let result = ``;
        for (let i = 0; i < arr.length; i++) {
            result = result + `<div style="background-color: ${arr[i].back_color}"><p>${arr[i].id}</p></div>`;
        }
        template.innerHTML = result;
        container.appendChild(template.content);
    };

    let clearNodes = function () {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
    }

    let schuffle_fn = function (ar) {

        let arLength = ar.length;
        while (arLength > 0) {

            let index = Math.floor(Math.random() * arLength);
            arLength--;
            let temp = ar[arLength];

            ar[arLength] = ar[index];
            ar[index] = temp;


        }
        return ar;
    }
    let sort_fn = function (ar) {
        ar.sort(function (a, b) {
            return a.id - b.id;
        });
        return ar;
    }

    sc_btn.addEventListener("click", function () {
        arr = schuffle_fn(arr);
        clearNodes();
        render();
    });

    sort_bt.addEventListener("click", function () {
        arr = sort_fn(arr);
        clearNodes();
        render();
    });


    return {
        render
    }

}

let Obj = sort_schuffle();
Obj.render();


