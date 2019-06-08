<script>
  import marked from 'marked';
  export let path;
  const req = new Request(`../posts/${path}/text.md`);

  // dynamically fetch the markdown post via fetch promise
  let promiseMarkdown = fetch(req)
    .then(res => {
      if (!res.ok) {
        throw new Error('stuff happened', res.status);
      }

      return res.text();
    })
    .then(res => marked(res));
</script>

{#await promiseMarkdown then markdown}
  {@html markdown}
{/await}
