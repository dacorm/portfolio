import NextLink from 'next/link'
import {Box, Button, chakra, Container, Heading, Link, List, ListItem, useColorModeValue} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import {BioSection, BioYear} from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {IoLogoGithub, IoLogoInstagram} from 'react-icons/io5'
import {BsTelegram} from 'react-icons/bs'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Здравствуйте, я Frontend разработчик из Новосибирска
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Utkin Denis
          </Heading>
          <p>Frontend разработчик (React / Redux / TypeScript)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/denis2.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Опыт
        </Heading>
        <Paragraph>
          Я Frontend разработчик с большим опытом разработки SPA приложений на фрилансе и в проектных компаниях на стеке React, Redux, TypeScript.
          Имею опыт разработки проектов с нуля, так же опыт наставничества, код ревью.
          Многие мои работы можно посмотреть на {' '}
          <NextLink href="https://github.com/dacorm" passHref scroll={false}>
            <Link>GitHub</Link>
          </NextLink>
          . Обучаюсь в вузе по специальности &quot;
          <NextLink href="https://sibsutis.ru/" passHref>
            <Link target="_blank">Программная инженерия</Link>
          </NextLink>
          &quot;
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Портфолио
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Биография
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Родился в Новосибирске
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Прошел первые курсы по верстке
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Разработка SPA на Фрилансе
        </BioSection>
        <BioSection>
          <BioYear>2021/22</BioYear>
          Работа React/TypeScript разработчиком в аутсорс компаниях
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Я ♥
        </Heading>
        <Paragraph>
          Футбол, Музыку,{' '}
          <Link href="https://www.youtube.com/channel/UCvw2YHI97FSr3gGkKbFTSxg" target="_blank">
            Компьютерные игры
          </Link>
          , Веб разработку
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Социальные сети
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/dacorm" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @dacorm
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/dacorm" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<BsTelegram />}
              >
                @dacorm
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
