function consultar(){

    let departamento = document.getElementById("departamento").value;

    let nome = "";
    let telefone = "";

    if (departamento === "") {
        return;
    }

    switch(departamento){
        case "pm":
            nome = "Polícia Militar";
            telefone = "190";
            break;
        case "bombeiros":
            nome = "Bombeiros";
            telefone = "193";
            break;
        case "samu":
            nome = "SAMU";
            telefone = "192";
            break;
        case "df":
            nome = "Defesa Civil";
            telefone = "199";
            break;
        case "pc":
            nome = "Polícia Civil";
            telefone = "197";
            break;
        case "deat":
            nome = "Delegacia do Turista";
            telefone = "(21) 2332-2924";
            break;
        case "disqued":
            nome = "Disque Denúncia";
            telefone = "(21) 2253-1177";
            break;
        case "cdaam":
            nome = "Central de Atendimento a mulher";
            telefone = "180";
            break;
        case "dh":
            nome = "Direitos Humanos";
            telefone = "100";
            break;
        case "procon":
            nome = "Procon";
            telefone = "151";
            break;
        case "hemorio":
            nome = "HemoRio";
            telefone = "(21) 2332-8611";
            break;
        case "detran":
            nome = "Detran";
            telefone = "(21) 3460-4040";
            break;
        case "dambiente":
            nome = "Disque Ambiente";
            telefone = "(21) 2334-7910";
            break;

    }
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove",function(event){
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
    });

    document.getElementById("nomeDepartamento").textContent = nome;
    document.getElementById("telefone").textContent = telefone;

    document.getElementById("resultado").classList.add("mostrar");
}
