import styles from './Hero.module.css'
import { Container } from '../../styles'
import { HeroTitle } from './styles'
import { Heroform } from './styles'

const Hero = () => (
  <Heroform>
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </Heroform>
)

export default Hero
