import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Blog">
    <Container>
      <Title>
        Fullstack Blog <Badge>2022</Badge>
      </Title>
      <P>
        Блог с возможностью регистрации, авторизации, выкладывания постов, комментирования, добавления изображений
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Технологии</Meta>
          <span>NodeJs, MongoDB, React, Redux</span>
        </ListItem>
        <ListItem>
          <Meta>Сайт</Meta>
          <Link href="https://blog-frontend-six-zeta.vercel.app/">
            Посетить блог <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Исходный код</Meta>
          <Link href="https://github.com/dacorm/blog-frontend">
            https://github.com/dacorm/blog-frontend <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/blog1.jpg" alt="blog" />
      <WorkImage src="/images/works/blog2.jpg" alt="blog" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
