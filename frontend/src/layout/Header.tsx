import {
  Box, Flex, useColorModeValue, Stack
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../components/MediaAndIcons/ColorModeSwitcher'
import { Logo } from '../components/MediaAndIcons/Logo'

export default function Header() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Logo />
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
