import { Box, Flex, Image } from '@chakra-ui/react'

import { ImageSkills } from './imagesSkills/ImageSkills';

const SkillsIng = ({language}:any) => {

  return <Box 
            id='skills'
            marginTop={{base:'100px'}}
            padding={{base: '0 1rem', md:'0 4rem'}} >
                <p style={{
                    color: '#FAFF00',
                    textAlign: 'center',
                    fontSize: '50px',
                    marginBottom: '20px',
                }}>{language ? 'Skills' : 'Habilidades'}</p>
            <Flex
                alignItems={'center'}
                gap={'50px'}
                flexWrap={'wrap'}
                justifyContent={'space-between'}
                >
            {
                ImageSkills.map((value, key)=> <Image
                                                 src={value} 
                                                 key={key}
                                                 boxSize={106}
                                                 opacity={'0.8'}
                                                 _hover={{
                                                    opacity:'1',
                                                    boxShadow: '2px 2px 2px 2px black'
                                                 }}
                                                 />)
            }
        </Flex>
    </Box>
}

export default SkillsIng