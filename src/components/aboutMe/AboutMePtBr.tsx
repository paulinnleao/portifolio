import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Texts from '../util/Texts.json'

import '../util/FontGlobal.css'


const AboutMePtBr = () => {
  return <><Box id='sobreMim' p={'100px 4rem'} bgColor={"#173053"}>
            <Box style={{
                display: 'flex'
                }}
            >
            <Box>
                <p style={{
                    color: '#FAFF00',
                    textAlign: 'center',
                    fontSize: '50px',
                    marginBottom: '20px',
                }}>Sobre mim</p>
                <p>{Texts.sobreMim.primeiroP}</p>
                <p style={
                    {
                        textAlign: 'justify',
                        textJustify: 'inter-word'
                    }
                }>{Texts.sobreMim.segundoP}</p>
            </Box>
            <Image style={{
                boxShadow: '25px 25px 25px black'
            }} boxSize={500} src='src/components/util/MySelf.png' />
            </Box>
            
  </Box>
  <Image bgColor={"#173053"} w={'100%'} src='src/components/util/Footer-trees.png'/>
  </>
}

export default AboutMePtBr;