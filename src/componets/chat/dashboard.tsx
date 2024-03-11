import { Grid, Title, Space, Card, Divider, Image, ScrollArea, Box, Text, Center } from '@mantine/core'
import { IconUserCircle, IconDots, IconArrowLeft, IconLogout } from '@tabler/icons-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, type MouseEventHandler } from 'react'
import Class from './style.module.scss'

function Dashboard (): JSX.Element {
  const pathname = usePathname()
  const isContactSelected = pathname !== '/'
  const router = useRouter()
  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (scrollRef.current?.firstElementChild !== null) {
      scrollRef.current?.firstElementChild.scrollTo({ top: scrollRef.current?.firstElementChild.scrollHeight, behavior: 'smooth' })
    }
  }, [])
  return (
    <Grid p={0} m={0} maw={'100%'} h={'100%'} gutter={0}>
      <Grid.Col
        className={isContactSelected ? Class['display-none'] : ''}
        p={'5px'}
        w={{ xs: 0 }}
        m={0}
        span={{ xs: 12, sm: 5, md: 4 }}
        bg={'transparent'}
        h={'100vh'}
      >
        <Title
          pos={'relative'}
          style={{ fontSize: '18px', alignItems: 'center' }}
          display={'flex'}
          h={'50px'}
          pt={'5px'}
          pb={'5px'}
        >
          <IconUserCircle height={'30px'} width={'30px'} />
          <Space w={'xs'} />
          Deepakkumar
          <Box pos={'absolute'} onClick={() => { router.push('/login') }} right={10}><IconLogout /></Box>
        </Title>
        <Divider />
        <ScrollArea h={'calc(100% - 50px)'} scrollbarSize={'5px'} type='hover'>
          <ContactCard active={pathname === '/varshini'} onClick={() => { router.push('/varshini') }} />
          <ContactCard active={pathname === '/Chellam'} onClick={() => { router.push('/Chellam') }} />
          <ContactCard active={pathname === '/Loose'} onClick={() => { router.push('/Loose') }} />
          <ContactCard active={pathname === '/Ammu'} onClick={() => { router.push('/Ammu') }} />
          <ContactCard active={pathname === '/Fraud'} onClick={() => { router.push('/Fraud') }} />
          <ContactCard active={pathname === '/Pondati'} onClick={() => { router.push('/Pondati') }} />
          <ContactCard active={pathname === '/vayaadi'} onClick={() => { router.push('/vayaadi') }} />
        </ScrollArea>
      </Grid.Col>
      <Grid.Col h={'100vh'} m={0} p={'5px'} span={{ xs: 12, sm: 7, md: 8 }} className={isContactSelected ? 'block' : Class['display-none']}>
        {pathname === '/'
          ? <Center h={'100%'} style={{ fontSize: '25px', fontWeight: '700' }}>
            No Contact Selected
          </Center>
          : <>
            <Title
              style={{ fontSize: '18px', alignItems: 'center' }}
              display={'flex'}
              h={'50px'}
              pt={'5px'}
              pb={'5px'}
            >
              <IconArrowLeft cursor={'pointer'} onClick={() => { router.push('/') }} />
              <Space w={'xs'} />
              <Image h={'35px'} w={'35px'} radius={'50%'} src={'https://wallpapercave.com/wp/wp4716094.jpg'} />
              <Space w={'xs'} />
              Varshini
              <Box pos={'absolute'} right={10}><IconDots /></Box>
            </Title>
            <Divider p={0} />
            <ScrollArea ref={scrollRef} h={'calc(100% - 50.8px)'} w={'100%'} scrollbarSize={'5px'} type='hover'>
              <Message side='left' />
              <Message side='right' />
              <Message side='right' />
              <Message side='left' />
              <Message side='left' />
              <Message side='right' />
              <Message side='left' />
              <Message side='right' />
              <Message side='left' />
              <Message side='right' />
              <Message side='left' />
              <Message side='left' />
              <Message side='right' />
            </ScrollArea>
          </>
        }
      </Grid.Col>
    </Grid>
  )
}

const ContactCard = ({ active = false, onClick }: { active?: boolean, onClick: MouseEventHandler }): JSX.Element => {
  return <Card m={'3px'} h={'60px'} p={'5px'} opacity={0.7} style={{ border: active ? '1px solid orange' : '' }} onClick={onClick}>
    <Card.Section p={0} m={0} display={'flex'} style={{ fontSize: '18px', fontWeight: '600', alignItems: 'center' }}>
      <Image h={'45px'} w={'45px'} radius={'50%'} src={'https://wallpapercave.com/wp/wp4716094.jpg'} />
      <Space w={'sm'} />
      Varshini
    </Card.Section>
  </Card>
}

const Message = ({ side }: { side: 'left' | 'right' }): JSX.Element => {
  return side === 'left'
    ? <Box mt={'5px'} display={'flex'} opacity={0.9} style={{ justifyContent: 'start' }}>
      <Image h={'30px'} w={'30px'} radius={'50%'} src={'https://wallpapercave.com/wp/wp4716094.jpg'} />
      <Space w={'xs'} />
      <Card maw={'70%'} miw={'30px'} w={'auto'} p={5} style={{ borderRadius: '8px', borderTopLeftRadius: 0, borderBottomRightRadius: 0, textWrap: 'balance' }}>
        <Text>Gutter. Customize spacing between columns with gutter prop on Grid component. Use xs, sm, md, lg, xl values to set spacing from theme.spacing or number to </Text>
      </Card>
    </Box>
    : <Box mt={'5px'} display={'flex'} style={{ justifyContent: 'end' }}>
      <Card maw={'70%'} miw={'30px'} w={'auto'} p={5} bg={'#176471'} opacity={0.9} style={{ borderRadius: '8px', borderTopRightRadius: 0, borderBottomLeftRadius: 0, textWrap: 'balance' }}>
        <Text>Gutter. Customize spacing between columns with gutter prop on Grid component. Use xs, sm, md, lg, xl values to set spacing from theme.spacing or number to </Text>
      </Card>
      <Space w={'xs'} />
      <Image h={'30px'} w={'30px'} radius={'50%'} src={'https://wallpapercave.com/wp/wp4716094.jpg'} />
    </Box>
}

export default Dashboard
