






let p = document.querySelector("#p")
let input = document.querySelector("input")

function search() {
    const bases = [
        { name: "Ivory W130" },
        { name: "Beige C130" },
        { name: "Beige N150" },
        { name: "Beige W160" },
        { name: "Beige W180" },
        { name: "Beige N190" },
        { name: "Beige N200" },
        { name: "Beige N210" },
        { name: "Bronze W110" },
        { name: "Bronze W150" },
    ]

    for (let i = 0; i < bases.length; i++) {
        if (input.value.toLowerCase() === bases[i].name.toLowerCase()) {
            p.innerHTML = `${bases[i].name} : Base disponível, entrar em contato com o vendedor(a)`
            break

        }
        else {
            p.innerHTML = `Base indisponível no momento.`
        }
    }

}



