// Seleciona os botões Mensal e Anual
const btnMensal = document.getElementById("btn-mensal");
const btnAnual = document.getElementById("btn-anual");

// Seleciona os containers dos planos
const planoMensal = document.getElementById("plano-mensal");

// Cria um container para os planos anuais (dinamicamente ou pode estar no HTML escondido)
const planoAnual = document.createElement("div");
planoAnual.id = "plano-anual";
planoAnual.classList.add("hospedagem"); // Adiciona a mesma classe para manter o estilo
planoAnual.style.display = "none"; // Oculta inicialmente

// Adiciona o conteúdo dos planos anuais ao container
planoAnual.innerHTML = `
<div class="plano-anual" id="plano-anual">
  <div class="hospedagem">
    <div class="card2">
      <h3>Plano Inicial</h3>
      <div class="price">
        <p>
          De <del><b>4.000,00 MT</b></del> por <br />
        </p>
        <p class="price-atual"><strong>3.500,00 MT</strong>/ano</p>
      </div>
      <p>Ideal para pequenos projetos com poucos acessos.</p>
      <div class="contratar">
        <p>Contratar Serviço</p>
      </div>

      <ul class="card-features">
        <li><strong>Domínio:</strong> <span>1 domínio grátis no 1º ano</span></li>
        <li><strong>Espaço em Disco:</strong> <span>10 GB</span></li>
        <li><strong>Largura de Banda:</strong> <span>100GB/mês</span></li>
        <li><strong>Suporte:</strong> <span>via e-mail</span></li>
        <li><strong>Backup Semanal:</strong> <span class="icon red">✅</span></li>
        <li><strong>Certificado SSL:</strong> <span class="icon green">✅</span></li>
        <li><strong>Recursos Extras:</strong> <span class="icon green">❌</span></li>
      </ul>
    </div>

    <div class="card2" id="Plus">
      <div class="recomendado">
        <p>Recomendado</p>
      </div>
      <h3>Plano Intermediário</h3>
      <div class="price">
        <p>
          De <del><b>8.500,00 MT</b></del> por <br />
        </p>
        <p class="price-atual"><strong>7.500,00 MT</strong>/ano</p>
      </div>
      <p>Perfeito para projetos de médio porte em crescimento.</p>
      <div class="contratar">
        <p>Contratar Serviço</p>
      </div>

      <ul class="card-features">
        <li><strong>Domínio:</strong> <span>2 domínios grátis no 1º ano</span></li>
        <li><strong>Espaço em Disco:</strong> <span>50 GB</span></li>
        <li><strong>Largura de Banda:</strong> <span>300GB/mês</span></li>
        <li><strong>Suporte:</strong> <span>24h via chat</span></li>
        <li><strong>Backup Diário e Semanal:</strong> <span class="icon red">✅</span></li>
        <li><strong>Certificado SSL:</strong> <span class="icon green">✅</span></li>
        <li><strong>Recursos Extras:</strong> <span class="icon green">2GB de RAM</span></li>
      </ul>
    </div>

    <div class="card2">
      <h3>Plano Avançado</h3>
      <div class="price">
        <p>
          De <del><b>16.000,00 MT</b></del> por <br />
        </p>
        <p class="price-atual"><strong>15.000,00 MT</strong>/ano</p>
      </div>
      <p>Para múltiplos sites e alta performance.</p>
      <div class="contratar">
        <p>Contratar Serviço</p>
      </div>

      <ul class="card-features">
        <li><strong>Domínio:</strong> <span>5 domínios grátis no 1º ano</span></li>
        <li><strong>Espaço em Disco:</strong> <span>100 GB</span></li>
        <li><strong>Largura de Banda:</strong> <span>1TB/mês</span></li>
        <li><strong>Suporte:</strong> <span>Telefone e chat</span></li>
        <li><strong>Backup Diário e Semanal:</strong> <span class="icon red">✅</span></li>
        <li><strong>Certificado SSL:</strong> <span class="icon green">✅</span></li>
        <li><strong>Recursos Extras:</strong> <span class="icon green">4GB de RAM + CDN Global</span></li>
      </ul>
    </div>
  </div>
</div>

`;

// Insere o container de planos anuais no DOM logo após o plano mensal
planoMensal.parentNode.appendChild(planoAnual);

// Função para exibir o plano mensal e ocultar o anual
function mostrarPlanoMensal() {
  planoMensal.style.display = "flex"; // Exibe o plano mensal
  planoAnual.style.display = "none"; // Oculta o plano anual
}

// Função para exibir o plano anual e ocultar o mensal
function mostrarPlanoAnual() {
  planoMensal.style.display = "none"; // Oculta o plano mensal
  planoAnual.style.display = "flex"; // Exibe o plano anual
}

// Adiciona eventos de clique aos botões
btnMensal.addEventListener("click", mostrarPlanoMensal);
btnAnual.addEventListener("click", mostrarPlanoAnual);
