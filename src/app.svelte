<script>
  import Post from './post.svelte';

	export let map;
</script>

<title>Satya Writes a Tech Blog</title>

<h1>Satya Writes a Tech Blog</h1>

{#each map as { post, title }}
  <h2><a id={post} href={`#${post}`}>{title}</a></h2>
  <Post path={post} />
{/each}
