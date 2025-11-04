// SPA Simples
const app = document.getElementById('app');
const rotas = {
  inicio: '<h2>Bem-vindo!</h2><p>Esta é a página inicial da aplicação acessível.</p>',
  sobre: '<h2>Sobre</h2><p>Este projeto segue práticas de acessibilidade e versionamento profissional.</p>',
  contato: `
    <h2>Contato</h2>
    <form id="form-contato" novalidate>
      <label for="nome">Nome:</label>
      <input type="text" id="nome" required />

      <label for="email">Email:</label>
      <input type="email" id="email" required />

      <button type="submit">Enviar</button>
    </form>
  `
};

// Função para renderizar a rota
function navegar(hash) {
  const rota = hash.replace('#', '') || 'inicio';
  app.innerHTML = rotas[rota] || '<h2>Página não encontrada</h2>';
}
window.addEventListener('hashchange', () => navegar(location.hash));
navegar(location.hash);

// Verificação de formulário
document.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  
  if (!nome || !email || !email.includes('@')) {
    alert('Por favor, preencha todos os campos corretamente.');
  } else {
    alert('Formulário enviado com sucesso!');
  }
});

// Alternar modo escuro / alto contraste
const botaoContraste = document.getElementById('toggle-contraste');
botaoContraste.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const ativo = document.body.classList.contains('dark-mode');
  botaoContraste.setAttribute('aria-pressed', ativo);
});
