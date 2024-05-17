/*
    Se vitórias for menor do que 10 = Ferro
    Se vitórias for entre 11 e 20 = Bronze
    Se vitórias for entre 21 e 50 = Prata
    Se vitórias for entre 51 e 80 = Ouro
    Se vitórias for entre 81 e 90 = Diamante
    Se vitórias for entre 91 e 100= Lendário
    Se vitórias for maior ou igual a 101 = Imortal
*/

let qtd_vitorias = prompt("Digite o numero de vitorias:");
let qtd_derrotas = prompt("Digite o numero de derrotas:");
let winRate;

function calculadoraWR(vitorias, derrotas){
    return vitorias - derrotas;
};

function definidorElos(winRate){
    let elos;

    if(winRate <= 10){
        elo = "Ferro";

    }else if (winRate >= 11 && winRate <= 20){
        elo = "Bronze";

    }else if (winRate >= 21 && winRate <= 50){
        elo = "Prata";
        
    }else if (winRate >= 51 && winRate <= 80){
        elo = "Ouro";
        
    }else if (winRate >= 81 && winRate <= 90){
        elo = "Diamante";
        
    }else if (winRate >= 91 && winRate <= 100){
        elo = "Lendário";
        
    }else if (winRate >= 101){
        elo = "Imortal";
        
    };
    return elo;
};

winRate = calculadoraWR(qtd_vitorias, qtd_derrotas);

console.log(`O Herói tem de saldo de ${winRate} está no nível de ${definidorElos(winRate)}`)