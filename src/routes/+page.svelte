<script>
  export let data; // dados do +page.server.js
</script>

<div class="pagina-capitulos">
  <h2>Capítulos</h2>

  <ul class="lista-capitulos">
    <li>
      <a class="botao-capitulo" href="/01">01</a>
    </li>
    <li>
      <a class="botao-capitulo" href="/03">03</a>
    </li>
  </ul>
</div>

<style>
  p,
  span,
  div {
    color: white;
  }

  .pagina-capitulos {
    box-sizing: border-box;
  }

  .pagina-capitulos h2 {
    color: white;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 4px black;
  }

  .lista-capitulos {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
