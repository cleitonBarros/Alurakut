import Head from 'next/head'

import MainGrid from '../components/MainGrid'
import Box from '../components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from '../components/profileRalationsArea'

function ProfileSiderBar(Props: any){
  return(
    <Box>
    <img src={`https://github.com/${Props.githubUser}.png`} alt="imagem" />
  </Box>
  )
}
export default function Home() {

  const githubUser = 'cleitonBarros'
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
    'maykbrito',
    'Rocketseat',
    'diego3g'
  ]

  return (
  <>
  <AlurakutMenu />
  <MainGrid>
    <div className="profileArea" style ={{ gridArea: 'profileArea'}}>
      <ProfileSiderBar githubUser={githubUser} /> 
    </div>
    <div className="welcomeArea" style ={{ gridArea: 'welcomeArea'}}>
      <Box>
        <h1 className="title">Bem vindo (a) </h1>

        <OrkutNostalgicIconSet />
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
                <li>
                  <a href={`/users/${item}`} key={item}>
                    <img src={`https://github.com/${item}.png`} />
                    <span>{item}</span>
                  </a>
                </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
      <Box>
        comunidade
      </Box>
    </div>
  </MainGrid>
  </>
  )
}
