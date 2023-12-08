document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('publicar').addEventListener('click', addPost);

	function addPost() {
		// Obter os valores do formulário
		const title = document.getElementById('post-title').value;
		const content = document.getElementById('post-content').value;

		// Criar novo elemento de post
		const postElement = document.createElement('article');
		postElement.innerHTML = `
			<h3>${title}</h2>
			<p>Data da Publicação: <time>${new Date().toLocaleDateString()}</time></p>
			<p>${content}</p>
		`;

		document.getElementById('posts').appendChild(postElement);

		document.getElementById('post-form').reset();
	}
});
	