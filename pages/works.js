import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'

import thumbSamurai from '../public/images/works/samurai.jpg'
import thumbRating from '../public/images/works/rating.jpg'
import thumbBlog from '../public/images/works/blog.jpg'
import thumbSnappy from '../public/images/works/snappy.jpg'
import thumbSolbet from '../public/images/works/solbet.jpg'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Проекты
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="devtalks" title="Samurai Social Network" thumbnail={thumbSamurai}>
            Социальная сеть для разработчиков
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="rating" thumbnail={thumbRating} title="OWLTop">
            Агрегатор онлайн курсов
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="blog"
            title="DacormBlog"
            thumbnail={thumbBlog}
          >
            FullStack блог
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="solbet" thumbnail={thumbSolbet} title="Solbet">
            NFT проект Solbet
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
              id="snappy"
              title="Snappy Chat"
              thumbnail={thumbSnappy}
          >
            Чат для общения в реальном времени
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
