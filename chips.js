const ul = document.querySelector("ul"),
    input = ul.querySelector("input");
// let iTag = ul.querySelector("i");
// const liTag = ul.querySelector("#remove");
// iTag.addEventListener("click", remove);

// function remove() {
//     liTag.style.display = "none";
//     console.log("hi");
// }

let chip = [];


function createChips() {
    ul.querySelectorAll("li").forEach(li => li.remove());
    // console.log(chip.slice().reverse());
    chip.slice().reverse().forEach(chips => {
        let liChip = `<li>${chips}<i class="uit uit-multiply"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liChip);
    });
}

// function remove(element, chips) {
//     let index = chip.indexOf(chips);
//     chip = [...chip.slice(0, index), ...chip.slice(index + 1)];
//     // element.parentElement.remove(); // removing li of removed chip
//     console.log(element, chips);
// }

function addChips(e) {
    if (e.key == "Enter") {
        let chips = e.target.value.replace(/\s+/g, ' '); // removing unwanted space  from users chips
        // console.log(chips);
        if (chips.length > 1 && !chip.includes(chips)) { // if the chip length id greater than 1 nd the chip isn't exist  already
            chips.split(',').forEach(chips => { // splitting each chip from comma
                chip.push(chips); //adding each chip inside array
                // console.log(chip); // duplicate chips wouldn't be added into array


                createChips();
            });

        }
        e.target.value = "";
    }
}
input.addEventListener("keyup", addChips);
input.addEventListener("keyup", addChips);