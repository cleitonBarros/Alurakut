
import React from 'react'
import MainGrid from '../components/MainGrid'
import Box from '../components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from '../components'

function ProfileSiderBar(Props: any){
  return(
    <Box as="aside">
    <img src={`https://github.com/${Props.githubUser}.png`} alt={`imagem de perfil de ${Props.githubUser}`} style={{borderRadius: '8px'}}/>
    <hr />

    <a className="boxLink" href={`https://github.com/${Props.githubUser}`}>
      @{Props.githubUser}
    </a>
    <hr />

    <AlurakutProfileSidebarMenuDefault />
  </Box>
  )
}

export default function Home() {
  const githubUser = 'cleitonBarros'
  const [comunidades, setComunidades]  = React.useState([]);
  
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'rafaballerini',
    'maykbrito',
    'Rocketseat',
    'diego3g'
  ]
  const [seguidores, setSeguidores] = React.useState([])
  React.useEffect(function(){
    //GET
    fetch('https://api.github.com/users/cleitonBarros/followers')
    .then(function (respotaDoServidor){
       return respotaDoServidor.json();
    })
    .then(function(respostaCompleta){
        setSeguidores(respostaCompleta)
  
    })
    //API GraphQL

    fetch('https://graphql.datocms.com/',{
      method: 'POST',
      headers: {
        'Authorization': '304b6ea1864053fa37d17b073e2c5f',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body:JSON.stringify({"query":`
      query {
        allCommunities{
        title
        id
        imageUrl
        }
      }`})
    })
    .then((response)=>response.json())// peda o retorno
    .then((respostaCompleta)=>{
      const comunidadesDato = respostaCompleta.data.allCommunities;

      setComunidades(comunidadesDato)
    })

  }, [])

function ProfileRelationsBox(Props:any){
    return(
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
            {Props.title} ({Props.items.length})
          </h2>
          <ul>
            {/*
            {seguidores.map((item)=>{
              return(
                  <li key={item.id}>
                    <a href={`/users/${item.id}`} >
                      <img src={item.avatar_url} />
                      <span>{item.login}</span>
                    </a>
                  </li>
              )
            })}*/}
          </ul>
        </ProfileRelationsBoxWrapper>
    )
  }
  
  return (
  <>
  <AlurakutMenu githubUser={githubUser} />
  <MainGrid>
    <div className="profileArea" style ={{ gridArea: 'profileArea'}}>
      <ProfileSiderBar githubUser={githubUser} /> 
    </div>
    <div className="welcomeArea" style ={{ gridArea: 'welcomeArea'}}>
      <Box as="aside">
        <h1 className="title">Bem vindo (a) </h1>
        <OrkutNostalgicIconSet />
      </Box>
      
      <Box>
        <h2 className="subTitle">o que foce deseja fazer</h2>
        <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  title: dadosDoForm.get('title'),
                  imageUrl: dadosDoForm.get('imagem'),
                  CreateSlug: githubUser,
                }

                fetch('/api/comunidades',{
                  method: 'POST',
                  headers:{
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(comunidade)
                })
                .then(async(response)=>{
                  const dados = await response.json()
                  const comunidade = dados.registroCriado
                   const comunidadesAtualizadas = [...comunidades, comunidade];
                  setComunidades(comunidadesAtualizadas)
                })

               
            }}>
          <div>
            <input 
              placeholder="Qual vai ser o nome da sua comunidade?" 
              name="title" 
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"
            />
          </div>
          <div>
            <input 
              placeholder="coloque uma url para usar de capa" 
              name="imagem" 
              aria-label="coloque uma url para usar de capa"
            />
          </div>
          <button>Criar comunidade</button>
        </form>
      </Box>
    </div>
    <div className="profileRelationsArea" style ={{ gridArea: 'profileRelationsArea'}}>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Comunidade ({pessoasFavoritas.length})
        </h2>
        <ul>
          {pessoasFavoritas.map((item)=>{
            return(
                <li key={item}>
                  <a href={`/users/${item}`} >
                    <img src={`https://github.com/${item}.png`} />
                    <span>{item}</span>
                  </a>
                </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
      <ProfileRelationsBox  title="seguidores" items={seguidores} />
      <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
           
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.id}`}>
                      <img src={itemAtual.imageUrl} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

      </ProfileRelationsBoxWrapper>
    </div>
  </MainGrid>
  </>
  )
}
