import {app, BrowserWindow} from 'electron'
const criarJanela = () => {
    const janela = new BrowserWindow({
        width: 800,
        height: 800,
        title: "Exemplo - Aplicação Desktop"
    })
    janela.loadFile('index.html')
}
app.whenReady().
    then(() => {
    criarJanela()
    console.log(`Electron Pronto`);
    })
    .catch((erro) => {
    console.error(erro)
    }
    )
