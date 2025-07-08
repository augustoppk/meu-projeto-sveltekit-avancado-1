scr/routes/03/+page.svelte

<div class="page-content">
<div class="pagina-capitulos">
  <h2>Capítulos</h2>

  <ul class="lista-capitulos">
    <li>
      <a class="botao-capitulo" href="/03/[rota]">rota</a>
    </li>
    <li>
      <a class="botao-capitulo" href="/03/dados">dados</a>
    </li>
    <li>
      <a class="botao-capitulo" href="/03/formulario-recebendo">formulario recebendo</a>
    </li>
    <li>
      <a class="botao-capitulo" href="/03/bem-vindo">bem vindo</a>
    </li>
  </ul>
</div>
</div>
<style>
  .pagina-capitulos {
    min-height: 100vh;
    padding: 4rem 2rem;
    color: white;
    text-align: center;
    box-sizing: border-box;
  }

  .pagina-capitulos h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 4px rgb(255, 255, 255);
  }

  .lista-capitulos {
    list-style: none; /* remove as bolinhas */
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .botao-capitulo {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0.75rem 2rem;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s ease;
  }

  .botao-capitulo:hover {
    background-color: white;
  }
</style>
