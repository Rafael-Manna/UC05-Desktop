import {app, BrowserWindow} from 'electron'
const criarJanela = () => {
    const janela = new BrowserWindow({
        width: 800,
        height: 800,
        resizable: false,
        maximizable: false,
        minimizable: false,
        icon: '../img/image.png',
        title: "Exemplo - Aplicação Desktop",
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        }
    })
    janela.loadFile('index.html');
    janela.webContents.openDevTools();
    janela.setMenu(null);
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
