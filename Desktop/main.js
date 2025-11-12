import {app, BrowserWindow, nativeTheme, ipcMain, Menu} from 'electron'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url) 
const __dirname = path.dirname(__filename) 

let janela = null 

function criarJanela(){
    nativeTheme.themeSource = 'dark' // modo claro/escuro da janela
    janela = new BrowserWindow({ 
        width: 800, height: 800,
        title: "Aplicação Desktop",  
        resizable: true,     
        webPreferences: {
            nodeIntegration: false,           
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname,'preload.js'),
            sandbox: false,
            setZoomFactor: 1.0 //deixando o zoom em 100%
        }
    })
    janela.loadFile('index.html') 
   
    
    janela.removeMenu() //remover menu padrão do electron

    janela.webContents.on('did-finish-load', () => { //evento disparado quando a janela termina de carregar
        janela.webContents.setZoomFactor(1.0) 
    }) 
 let menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu) // criação do menu
    janela.webContents.on('context-menu', () => {
        menu.popup({window: janela})
    })
}
const criarJanela2 = () => {
    const janela = new BrowserWindow({
        width: 300,
        height: 300,
        resizable: false,
        maximizable: false,
        minimizable: false,
        title: "Sobre a aplicação",
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        }
    })
    janela.loadFile('../Desktop/sobre.html');
    janela.webContents.openDevTools();
    janela.setMenu(null);
}
const template = [
    {label: "Aplicação", 
        submenu:[
            {label: "Novo", click: () => criarJanela()},  
            {label: "Sair", role: 'quit'}]}, 
            {label: "Sobre", click: () => criarJanela2()},
    {label: "Zoom",
        submenu:[{label: 'Ampliar',  role: 'zoomin' } , 
                {label: 'Diminuir', role: 'zoomout'}]
    },
    {label: 'Aparência',    
            submenu:[
                {label: 'Trocar tema',  
                    click: () => nativeTheme.themeSource = 'dark'},
                    {label: 'Tema claro',  
                    click: () => nativeTheme.themeSource = 'light'}                                       
            ]
      }
]

app.whenReady().then(() => { 
        criarJanela()

})
  
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

