import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '304b6ea1864053fa37d17b073e2c5f';
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
/*import { siteClient } from 'datocms-client';


export default async function recebedorDeRequest(req, res){

    
        const TOKEN = '304b6ea1864053fa37d17b073e2c5f'
        const client =  new  siteClient(TOKEN );
    
        if(req.method === 'POST'){
        const registroCriado = await client.items.create({
            itemType: "884538",
            ...req.body,
           // title: "comunidade teste",
           // descriptionimageUrl: 'https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg',
           // CreateSlug: "cleiton barros"
        })
        console.log(registroCriado)
        res.json({
            dados:"dado algum",
            registroCriado: registroCriado,
        })
        return 
    
    }
    res.status(404).json({
        message: "ainda nao temos nada no GET, mas no POST tem"
    })

  

}*/