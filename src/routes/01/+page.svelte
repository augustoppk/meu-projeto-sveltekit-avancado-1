scr/routes/01/+page.svelte


<div class="page-content">
<div class="pagina-capitulos">
  <h2>Capítulos</h2>

  <ul class="lista-capitulos">
    <li>
      <a class="botao-capitulo" href="/01/a">a</a>
    </li>
    <li>
      <a class="botao-capitulo" href="/01/b">b</a>
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
    text-shadow: 1px 1px 4px black;
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
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.75rem 2rem;
    border-radius: 10px;
    color: black;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s ease;
  }

  .botao-capitulo:hover {
    background-color: white;
  }
</style>
