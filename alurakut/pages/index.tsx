import Head from 'next/head'

import MainGrid from '../components/MainGrid'
import Box from '../components/Box'
import { AlurakutMenu } from '../lib/AlurakutCommons'

function ProfileSiderBar(props){
  return(
    <Box>
    <img src={`https://github.com/${props.githubUser}.png`} alt="imagem" />
  </Box>
  )
}
export default function Home() {

  const githubUser = 'cleitonBarros'

  return (
  <>
  <AlurakutMenu />
  <MainGrid>
    <div className="profileArea" style ={{ gridArea: 'profileArea'}}>
      <ProfileSiderBar githubUser={githubUser} /> 
    </div>
    <div className="welcomeArea" style ={{ gridArea: 'welcomeArea'}}>
      <Box>
        bemvindo
      </Box>
      <Box>
        bemvindo
      </Box>
    </div>
    <div className="profileRelationsArea" style ={{ gridArea: 'profileRelationsArea'}}>
      <Box>
        comunidade
      </Box>
      <Box>
        comunidade
      </Box>
    </div>
  </MainGrid>
  </>
  )
}
