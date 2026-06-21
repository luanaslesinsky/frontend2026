function revelar() {
    const imgPrincipal = document.getElementById('imgJogador');
    if (imgPrincipal) {
        imgPrincipal.src = "/img_vinicius_junior.png";
    }

    document.getElementById('nomeJogador').textContent = "Vinícius José Paixão de Oliveira Júnior";
    document.getElementById('nascimento').textContent = "12/07/2000 (25 anos)";
    document.getElementById('altura').textContent = "1,76 m";
    document.getElementById('posicao').textContent = "Ponta-esquerda / Atacante";
    document.getElementById('rank').textContent = "9,5";

    const elementos = document.querySelectorAll('.placeholder');
    elementos.forEach(el => {
        el.classList.remove('placeholder');
        el.classList.add('card-text');
    });
}