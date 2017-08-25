/**
 * 
 * Shorttext.js
 * @author Guilherme Modugno - https://modugno.github.io 
 * 
 */
class Shorttext {
 
    /**
     * Método para recortar o texto
     * @param {number} numberCharacter Máximo de caracteres do texto
     */
    static cut(numberCharacter, optionsShort) {

        // maximo de caracters
        let maxCharacter = (numberCharacter == undefined) ? 100 : numberCharacter;
        
        // pega as opções
        let options = Shorttext._setOptions();

        // caso o usuário colocou as opções
        if (optionsShort != undefined) Object.assign(optionsShort, options);

        // aciona o evento de copy
        document.addEventListener('copy', e => Shorttext._callbackCut(e, maxCharacter, options));
    };

    /**
     * Callback para quando copiar o texto
     * @param {Event} event 
     */
    static _callbackCut(event, maxCharacter, options) {
        event.preventDefault();

        // texto selecionado
        let textSelected = window.getSelection().toString();

        // faz o processo de copiar o texto minificado
        event.clipboardData.setData('text/plain', Shorttext._traitText( textSelected.substring(0, maxCharacter), options));
    };

    /**
     * Trata o texto selecionado
     * @param {String} text 
     */
    static _traitText(text, options) {
        return `${text}${options.delimiter} - <a href='${options.link}' target='_blank'>${options.text}</a>`;
    }

    /**
     * Opções do Plugin
     * @param {Object} parameters 
     */
    static _setOptions() {
        return {
            link: 'http://band.com.br',
            text: 'Veja mais clicando aqui',
            delimiter: '...'
        }
    };

}