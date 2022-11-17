/*
import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response){
    const TOKEN = '3484c20cfc1a13731ed359a0c48f12f'
    const client =  new  SiteClient(TOKEN );
     // Validar os dados, antes de sair cadastrando
     const registroCriado = await client.items.create({
        itemType: "884538", // ID do Model de "Communities" criado pelo Dato
        ...request.body,
        // title: "Comunidade de Teste",
        // imageUrl: "https://github.com/omariosouto.png",
        // creatorSlug: "omariosouto"
    })

        response.json({
            dados: 'Algum dado qualquer',     
        })

        response.status(404).json({
            message: 'Ainda não temos nada no GET, mas no POST tem!'
        })
    }
        


}*/
import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '3484c20cfc1a13731ed359a0c48f12';
        const client = new SiteClient(TOKEN);
        
        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "884538", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/omariosouto.png",
            // creatorSlug: "omariosouto"
        })
    
        console.log(registroCriado);
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}