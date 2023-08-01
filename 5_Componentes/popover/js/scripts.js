// Ler na nossa página todos os Popovers
var listaAtivacaoPopover = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'),
)

// Inserir um evento - disparador de popover - no botão
var listaPopover = listaAtivacaoPopover.map(function (gatilhoPopover) {
    return new bootstrap.Popover(gatilhoPopover)
})
