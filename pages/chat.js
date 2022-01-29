import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";

export default function ChatPage() {
  const [mensagem, setMensagem] = React.useState("");
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

  /*
    // Usuário
    - Usuário digita no campo textarea
    - Aperta enter para enviar
    - Tem que adicionar o texto na listagem
    
    // Dev
    - [X] Campo criado
    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)
    - [X] Lista de mensagens 
    */

 

function removerMensagem(e) {
 console.log(e);
 listaDeMensagens.splice(e);
 setListaDeMensagens([mensagem,...listaDeMensagens]);
}

function adicionarMensagem(e) {
    e.preventDefault();
    handleNovaMensagem(mensagem);
  }

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaDeMensagens.length + 1,
      de: "felipematheus1337",
      texto: novaMensagem,
    };
   

    setListaDeMensagens([mensagem, ...listaDeMensagens]);
    setMensagem("");
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://github.com/felipematheus1337/aluracord-dbz/blob/master/dbz2.png?raw=true)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "35px",
          backgroundColor: appConfig.theme.colors.neutrals[290],
          opacity: 0.9,
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[290],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList mensagens={listaDeMensagens}  remover={removerMensagem} />
          {/* {listaDeMensagens.map((mensagemAtual) => {
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}: {mensagemAtual.texto}
                            </li>
                        )
                    })} */}
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  adicionarMensagem(event);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "25px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[1000],
                opacity: 0.7,   
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[290],
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              onClick={(e) => {
                adicionarMensagem(e);
              }}
              styleSheet={{
                  opacity: 0.6,
                  color: "black",
                  fontWeight:"bold",
            
              }}
              
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals[1000],
                mainColor: appConfig.theme.colors.primary["1000"],
                mainColorLight: appConfig.theme.colors.primary["200"],
                mainColorStrong: appConfig.theme.colors.primary["290"],

              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
          
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary["100"],
                mainColorLight: appConfig.theme.colors.primary["900"],
                mainColorStrong: appConfig.theme.colors.primary["000"],
              }}
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  console.log(props);
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["999"],
        marginBottom: "16px",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "13px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals['000'],
                opacity: 0.6,
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "9px",
              }}
            >
              <Image
                styleSheet={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src={`https://github.com/felipematheus1337.png`}
              />
              <Text tag="strong">{mensagem.de}</Text>
              <Text
                styleSheet={{
                  fontSize: "15px",
                  marginLeft: "13px",
                  marginBottom: "20px",
                  color: appConfig.theme.colors.neutrals[999],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}      

                <button key={mensagem.id} onClick={(e) => {
                  console.log(props.mensagens.indexOf(mensagem));
                 props.remover(props.mensagens.indexOf(mensagem));
                 
                
                }}>X</button>



               
              </Text>
            </Box>
            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
