function consultar(){

    let departamento = document.getElementById("departamento").value;

    if (departamento === "") {
        alert("Por favor, selecione um departamento.");
        return;
    }

    switch(departamento){
        case "pm":
            alert("Polícia Militar\n" + "Telefone: 190\n");
            break;
        case "bombeiros":
            alert("Bombeiros\n" + "Telefone: 193\n");
            break;
        case "samu":
            alert("SAMU\n" + "Telefone: 192\n");
            break;
        case "df":
            alert("Defesa Civil\n" + "Telefone: 199\n");
            break;
        case "pc":
            alert("Polícia Civil\n" + "Telefone: 197\n");
            break;
        case "deat":
            alert("Delegacia do Turista\n" + "Telefone: (21) 2332-2924\n");
            break;
        case "disqued":
            alert("Disque Denúncia\n" + "Telefone: (21) 2253-1177\n");
            break;
        case "cdaam":
            alert("Central de Atendimento a mulher\n" + "Telefone: 180\n");
            break;
        case "dh":
            alert("Direitos Humanos\n" + "Telefone: 100\n");
            break;
        case "procon":
            alert("Procon\n" + "Telefone: 151\n");
            break;
        case "hemorio":
            alert("HemoRio\n" + "Telefone: (21) 2332-8611\n");
            break;
        case "detran":
            alert("Detran\n" + "Telefone: (21) 3460-4040\n");
            break;
        case "dambiente":
            alert("Disque Ambiente\n" + "Telefone: (21) 2334-7910\n");
            break;

        default:
            alert("Departamento não encontrado.");
            break;
    }
}