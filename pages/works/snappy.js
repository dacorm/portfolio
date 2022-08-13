import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="snappy">
    <Container>
      <Title>
        SnappyChat <Badge>2022</Badge>
      </Title>
      <P>
        Чат с личными диалогами для общения в режиме реального времени с возможностью регистрации и авторизации
      </P>
      <P>
        Возможность выбора случайно сгенерированного аватара через API
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Технологии</Meta>
          <span>React, NodeJs, MongoDB, Socket.io</span>
        </ListItem>
        <ListItem>
          <Meta>Исходный код</Meta>
          <Link href="https://github.com/dacorm/chat-app">
            https://github.com/dacorm/chat-app <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/snappy.jpg" alt="snappy" />
      <WorkImage src="/images/works/snappyMain.jpg" alt="snappy" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
