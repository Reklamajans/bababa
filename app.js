const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

const clientId = '1461380585963393121'; 

client.on('ready', () => {
    console.log('Scripting Engine Aktif!');
    
    client.setActivity({
        // Seçtiğin havalı yazı tipi
        details: '𝕿𝖍𝖊 𝕰𝖞𝖊𝖘, 𝕮𝖍𝖎𝖈𝖔. 𝕿𝖍𝖊𝖞 𝕹𝖊𝖛𝖊𝖗 𝕷𝖎𝖊.', 
        // Süreyi tam 45 saat geriden başlatır
        startTimestamp: Date.now() - (45 * 60 * 60 * 1000), 
        largeImageKey: 'logo',
        largeImageText: 'Scripting Engine v1.0',
        instance: false,
        // Sadece Instagram butonu
        buttons: [
            {
                label: 'Instagram', 
                url: 'https://www.instagram.com/zifpp'
            }
        ]
    });
});

client.login({ clientId }).catch(console.error);
