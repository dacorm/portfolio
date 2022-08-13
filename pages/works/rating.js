import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="RatingApp">
    <Container>
      <Title>
        OWLTop <Badge>2022</Badge>
      </Title>
      <P>
        Агрегатор рейтинга онлайн курсов с возможность посмотреть отзывы к курсам по всем направлениям и оставить свой
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Технологии</Meta>
          <span>Next, TypeScript, FramerMotion</span>
        </ListItem>
        <ListItem>
          <Meta>Сайт</Meta>
          <Link href="https://ratingapp.vercel.app/courses/big-data">
            Сайт приложения
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Исходный код</Meta>
          <Link href="https://github.com/dacorm/ratingapp">
            https://github.com/dacorm/ratingapp <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/rating1.jpg" alt="rating" />
      <WorkImage src="/images/works/rating2.jpg" alt="rating" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
