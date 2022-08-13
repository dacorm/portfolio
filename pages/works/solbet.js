import {
    Box,
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="Solbet">
        <Container>
            <Title>
                Solbet.io <Badge>2022</Badge>
            </Title>
            <P>
                NFT проект с возможностью отслеживать дату выхода определенных монет, их стоимость, изменение стоимости
                и с возможностью совершить ставки на определнные монеты
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Технологии</Meta>
                    <span>React</span>
                </ListItem>
                <ListItem>
                    <Meta>Вебсайт</Meta>
                    <Link href="#">
                        В разработке <ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/works/solbet.jpg" alt="solbet"/>
            <WorkImage src="/images/works/solbet2.jpg" alt="solbet"/>

        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../components/chakra'
