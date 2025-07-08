<script>
  let { data } = $props();
  console.log("melancia");
</script>
<div class="usuarios">
<h2>Usuários cadastrados</h2>
<ul>
  {#each data.usuarios as usuario}
      <li><strong>{usuario.name}:</strong> {usuario.email}</li>
  {/each}
</ul>
</div>
<style>
  .usuarios {
    color: white;
  }
</style>