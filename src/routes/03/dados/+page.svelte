<script>
  let { data } = $props();
</script>

<div class="cor">
  <h1>{data.post.title}</h1>
  <sub>por {data.author.name}</sub>
  <div>{@html data.post.content}</div>
</div>

<style>
  .cor {
    color: white;
  }
</style>