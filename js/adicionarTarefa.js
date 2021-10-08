botaoAdicionarTarefa.addEventListener('click', function () {
    let inputNovaTarefa = document.querySelector('.inputNovaTarefa')
    inputNovaTarefa = inputNovaTarefa.value

    if (inputNovaTarefa.length <= 0) {
        alert('O campo não pode ficar em branco! Digite alguma coisa e tente novamente.')
        tarefa = false
    } else {
        divInvisivel.classList.remove('divInvisivel')
        divInvisivel.classList.add('divAtivado')
        botaoEditarTarefaInvisivel.classList.remove('botaoEditarTarefaInvisivel')
        botaoEditarTarefaInvisivel.classList.add('botaoEditarTarefaAtivo')
    }

    let tarefa = document.createElement('li')
    tarefa.classList.add('tarefa')

    let divTarefas = document.querySelector('.divTarefas')
    divTarefas.appendChild(tarefa)

    let textoTarefa = document.createTextNode(inputNovaTarefa)
    tarefa.appendChild(textoTarefa)

    // Limitando a Criação de Tarefas

    let ul = divTarefas
    let li = ul.children

    if (ul = li[6]) {
        tarefa = false
        divTarefas.removeChild(li[6])
        alert('Não é possível criar novas tarefas. Edite as anteriores ou delete alguma e tente novamente.')
    }
})