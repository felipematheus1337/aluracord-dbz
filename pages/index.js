import appConfig from  '../config.json';
import { Box, Button, Image, Text, TextField } from '@skynexui/components';
import React, { useState } from 'react';
import {useRouter } from 'next/router';


function SsjGif() {
  return (
    <>
     <img src="https://c.tenor.com/jDxcgLJt0MQAAAAC/vegito-final.gif"/>
     <style jsx>{`
     img {
       display: flex;
       width: 100px;
       margin-bottom: 550px;
       border-radius: 20px;
       
      
       
     }
    
     
     
     `}



     </style>
     </>
  )
}
function Dragon() {
  return (
    <>
     <img src="http://68.media.tumblr.com/15704d50d3176421a57b71f20a63f4a1/tumblr_ohbjnaiypO1r72ht7o1_540.gif"/>
     <style jsx>{`
     img {
       width: 200px;
       border-radius: 20px;
       
     }
    
     `}
     </style>
     </>
  )
}



function Title(props) {
    const Tag = props.tag || 'h1';
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
           ${Tag} {
               
             color: ${appConfig.theme.colors.neutrals['000']};
             font-size: 24px;
             font-weight: 600;
             }
            
          `}</style>
          </>
    ) 
}

/*
function HomePage() {
    return(
        <div>
            <GlobalStyle/>
            <Title tag="h1">Boas vindas de volta!</Title>

            <h2>Discord - Alura Imersão</h2>
           

            </div>

    )
  }
  
  export default HomePage
  */

  export default function PaginaInicial() {
    //const username = 'felipematheus1337'
    const [username,setUsername] = React.useState('');
    const roteamento = useRouter();
    
  
    return (
      <>
        
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage:
            'url(https://github.com/felipematheus1337/aluracord-dbz/blob/master/dbz1.jpg?raw=true)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'multiply',
            
          }}
          
          
          >
      
          <SsjGif/>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row'
              },
              width: '100%',
              maxWidth: '700px',
              borderRadius: '5px',
              padding: '32px',
              margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
              opacity: 0.96,
            }}
          >
         
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (e) {
                e.preventDefault();
                roteamento.push('/chat')
              }}
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '100%', sm: '50%' },
                textAlign: 'center',
                marginBottom: '32px',
              }}
            >
                 <Dragon/>
              <Title tag="h2">Boas vindas de volta!</Title>
              
              <Text
                variant="body3"
                styleSheet={{
                  marginBottom: '32px',
                  color: appConfig.theme.colors.neutrals[300]
                }}
              >
                
                {appConfig.name}
              </Text>
              
              
             
            
              <TextField
              value={username}
              onChange={function (event) {
                const valor = event.target.value;
                setUsername(valor);
                
              }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[500],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800]
                  }
                }}
              />
              
              <Button
                type="submit"
                label="Entrar"
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals['000'],
                  mainColor: appConfig.theme.colors.primary[400],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600]
                }}
              />
            </Box>
            {/* Formulário */}
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px'
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px'
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    )
  }