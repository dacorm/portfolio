import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SamuraiSocialNetwork">
    <Container>
      <Title>
        Samurai Social Network <Badge>2022</Badge>
      </Title>
      <P>
        Социальная сеть для разработчиков с возможностью создания и редактирования профиля с сохранением информации на сервере.
        Посещение страниц других пользователей, подписка, чат в режиме реального времени.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Технологии:</Meta>
          <span>React, TypeScript, Redux, WebSocket</span>
        </ListItem>
        <ListItem>
          <Meta>Исходный код</Meta>
          <Link href="https://github.com/dacorm/react-samurai">
            https://github.com/dacorm/react-samurai <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
      </List>


      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/eh7UZdOSli4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
