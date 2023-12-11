document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('publicar').addEventListener('click', addPost);

    function addPost() {
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h3>${title}</h3>
            <p>Data da Publicação: <time>${new Date().toLocaleDateString()}</time></p>
            <p>${content}</p>
            <button class="excluir-post" onclick="excluirPost(this)"><i class="fa-solid fa-trash-can"></i></button>
            <div class="form-comentario">
                <label for="comentario">Comentário:</label>
                <textarea id="comentario" class="comentario-input" placeholder="Digite seu comentário..."></textarea>
                <button class="adicionar-comentario" onclick="adicionarComentario(this)">Comentar <i class="fa-regular fa-comment-dots"></i></button>
            </div>
            <div class="comentarios"></div>
        `;

        const postsSection = document.getElementById('posts');
        const firstPost = postsSection.firstChild;
        postsSection.insertBefore(postElement, firstPost);

        document.getElementById('post-form').reset();
    }

    window.excluirPost = function (button) {
        const postElement = button.closest('article');
        postElement.remove();
    };

    window.mostrarComentarios = function (button) {
        const postElement = button.closest('article');
        const comentariosDiv = postElement.querySelector('.comentarios');
        const comentarioForm = postElement.querySelector('.form-comentario');

        // Exibir ou ocultar o formulário de comentário
        comentarioForm.classList.toggle('hidden');
    };

    window.adicionarComentario = function (button) {
        const postElement = button.closest('article');
        const comentariosDiv = postElement.querySelector('.comentarios');
        const comentarioInput = postElement.querySelector('.comentario-input');

        const comentario = comentarioInput.value.trim();

        if (comentario !== '') {
            const comentarioElement = document.createElement('p');
            comentarioElement.textContent = comentario;
            comentariosDiv.appendChild(comentarioElement);
            comentarioInput.value = ''; // Limpar o campo de comentário
        }
    };
});