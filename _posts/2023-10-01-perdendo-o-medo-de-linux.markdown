---
layout: post
title: "Descomplicando o Linux: Guia Prático de Basic Terminal Usage para Jovens Devs"
date: 2023-10-01
categories: Guia
author: José Santos
---

![Developer]({{"../assets/img/post-10-02/02-10-2023.jpeg" | relative_url }})

Hoje quero falar de um assunto relativamente simples, mas que para muitos parece um bicho de sete cabeças, principalmente se for algo que você estiver vendo pela primeira vez. Mas não se assuste, usar o terminal pode ser até mesmo divertido para uma parcela de "nerdolas" igual a mim.

Sem querer "babar ovo" do Linux aqui, galera, a questão é: quem é dos anos 90 e viu diversos filmes de hackers usando o terminal para hackear ou viu Matrix e lembra das letras verdes no terminal sabe do que estou falando.

Pois bem, hoje lhes apresento o uso básico do terminal, comandos básicos que você precisa saber para utilizar o sistema operacional pelo terminal.

Lembra da primeira vez que você pegou um computador? Se você for um projeto de dinossauro como eu, você deve ter sido apresentado ao Windows XP, e a primeira coisa que você aprendeu na interface gráfica possivelmente foi abrir um programa ou navegar até uma pasta.

Show de bola, é isso que vou começar te ensinando. Mas primeiro você precisa de um terminal Bash rodando, porque os comandos serão executados no Linux. Se você estiver no Windows, aqui vai um micro tutorial de como instalar o WSL.

Abra o PowerShell da sua forma favorita. A minha é "Windows + R" e depois "PowerShell".

Execute o comando e instale o WSL. Aguarde a instalação. Reincie o computador e Pronto Roda o Ubunto no Pczão ai pai(mãe)(inclusividade)(Saco? É só se incluir aqui pra se sentir reprasentado, menos mimi e mais trabalho rapaziada, nós vamos conseguir ([link da música](https://www.youtube.com/watch?v=0tKbFQJ2XJ8)));
```bash
wsl --install
```
Sem muito contexto, já vamos para os comandos. Para mim, a primeira coisa que você deve aprender no Linux é a utilizar um gerenciador de pacotes para instalar as coisas aí. Se você está em uma distro Ubuntu, você tem o "apt".

Da mesma forma que no Windows você chama o programa pelo nome, aqui no terminal você também chamá-lo pelo nome.

Bom, mas não adianta só lançar um "apt".

A primeira coisa que eu recomendo você fazer antes de rodar qualquer comando é ver o que é possível fazer com ele. Para isso, usamos o "--help", que é uma flag. Esta flag retorna um pequeno manual, por exemplo:
```bash
apt --help
```

As flags podem ser abreviadas desta forma:

```bash
apt -h
```
Para que serve o "apt"? O "apt", como disse, é um gerenciador de pacotes. Com ele, conseguimos instalar, atualizar, desinstalar ferramentas, programas e uma diversidade de coisas. Mas, para realizar essas operações no Linux, precisamos de permissão, e somente o super usuário tem essa permissão. Depois falaremos do "sudo su". O super usuário é o seu usuário, então a senha dele provavelmente é a sua senha.

Então, o que vamos instalar primeiro? O "tree". É um comandinho para listar a estrutura de arquivos. Para conferir se o "tree" não está na máquina, usamos a flag "--version". Mas outra forma mais óbvia é tentar usar o comando. Provavelmente você terá um erro informando que o "tree" não está instalado.

E vamos combinar daqui para frente, você vai ler de verdade todas as mensagens de erro, porque a regra aqui é: se deu certo, o sistema vai ficar calado, principalmente se for uma operação que ele não precise te retornar nada. Mas se ele vier com uma mensagem, é melhor você ler para saber o que está rolando ali.
```bash
tree --version
```

Se tudo deu certo, você recebeu um erro informando que o "tree" não foi encontrado ou algo assim... Simples de resolver. Lembra que eu disse que para instalar, precisamos da permissão certa? Agora, para executar o "apt install", que você descobriu depois de utilizar "apt --help", coloque o "sudo" antes da seguinte forma. PS: O sistema vai te pedir a senha e alguma possível confirmação antes de instalar.

```bash
sudo apt install tree
```

No final da instalação, será possível confirmar se o "tree" está instalado na máquina, novamente da forma chique e da forma mais óbvia.

Chique:
```
tree --version
```

Óbvia:

```
tree
```

Bom, te ensinei a abrir e instalar uma ferramenta. Pronto, aplique esta lógica sempre que quiser instalar qualquer coisa. Depois pesquise mais sobre gerenciadores de pacotes, tem umas paradas muito legais na internet, como o Homebrew.

Agora vou te ensinar a navegação básica.

Em um sistema operacional moderno, é possível criar diretórios (pastas), dar nome a eles, excluir e etc. Então vamos na ordem. Para criar, use o "make directory", na abreviação "mkdir", simples assim. "mkdir nomeDaPasta" cria uma pasta no diretório em que você está.

```bash
mkdir NovaPasta

```

Mas em qual diretório eu estou agora? "pwd". Este eu nem sei o que significa, e acho que você também não vai ser curioso o suficiente para ir buscar no Google, vai?

```bash
pwd

```  

Então, se eu sei onde estou, o que tem dentro deste diretório? Do comando "list directory", temos "ls". (Eu só queria deixar claro aqui que "ls" é muito mais legal que "dir". Entendedores entenderão.)

```bash
ls
```

O "ls" é um lugar legal para você aprender umas flags úteis, por exemplo, no diretório tem arquivos ocultos. Como faço para ver eles?

```bash
ls -la
```

Cara, se você ainda está aqui executando esses comandos, parabéns. Eu juro que a diversão toda é esta e que não vai ficar mais difícil do que isso.

O mais difícil é redirecionar a saída de um comando e salvar em um arquivo de texto, por exemplo. Enfim, de volta ao básico.

Você sabe onde está, criou a pasta, listou o que está dentro de onde você está (se você está perdido para saber onde você está, normalmente o terminal mostra o caminho da pasta). E agora você quer entrar na pasta.

"cd", não o de tocar música, este é para trocar de diretório, "change directory". Você lança o "cd" e fala para onde quer ir. Quando você for um cara que curte terminal, você vai aprender a usar o "tab" para autocompletar as coisas, mas eu não vou te ensinar como funciona, vou deixar você descobrir sozinho.

```bash
cd NovaPasta
```
Como dentro desta pasta não tem nada, o "ls" não retorna nada. Se você é hiperativo ou tem TDAH, eu tenho certeza que você deve ter testado o comando "ls". Eu lembro de mim na hora quando estava aprendendo, todo lugar que eu ia, eu executava um comando nada a ver só para ver algo novo no terminal. Este é o caso do "tree". Enfim.

Para criar um novo arquivo, então, utilizamos o "touch", que nada mais é do que tocar um arquivo sem nada dentro. Quando eu vou criar uma API em Python, por exemplo, é muito mais prático fazer com "mkdir" e "touch" do que com qualquer outra coisa.

bash


```bash
touch NovoAquivo.txt

```

Você pode editar este novo arquivo usando um editor de texto como o Vim ou o Nano, mas para falar destes caras, eu acho que teria que fazer um post só sobre eles, porque sinceramente, eu gosto de terminal até o ponto em que eu preciso editar algum arquivo. Aí eu prefiro dar um "code ." na pasta em que estou. Essa do "code ." eu deixo de brinde.

Para abrir uma ferramenta na pasta em que você está, utilize o ".", pode ser o Visual Studio Code, ou pode ser o Nautilus do Ubuntu ou o Explorer do Windows, a lógica é a mesma.


```bash
code .
```
Vou te ensinar a apagar o arquivo e a apagar a pasta, e pronto, vou acabar por aqui. É o suficiente? De longe, não. Como tudo na tecnologia, vai depender de você ir atrás e evoluir. O objetivo aqui foi trazer uma luz para você que está passando pela disciplina de sistemas, que acha o Linux um bicho de sete cabeças. Rapaziada, relaxa e vem tranquilo, que o Linux é de boa.

Para remover um arquivo, você usa o "rm", comando remove. Por padrão, ele não remove pastas, mas se você ler o manual dele, com "man", que é um help completasso, você vai ver que tem como apagar pasta com arquivo e tudo dentro sem dó. Mas eu não vou te ensinar o "rm -r -f" porque você pode apagar o que não deve aí, e se usar o "-r -f", já era, se perdeu para sempre, ok?

```bash
rm NovoArquivo.txt
```
Como o "rm" não remove pastas por padrão, temos o comando de remover pastas, "rmdir", contudo ele só funciona quando a pasta está vazia. Na prática, eu nunca uso ele, sempre uso o "rm -rf". Sim, você pode juntar as flags neste caso, igual em "ls -la", mas vai que... então está aí, estou te ensinando o "rmdir".

```bash
rmdir NovaPasta
```
E aqui provavelmente você tomou um erro. Porque o sistema não encontrou a pasta, então outra coisa que não te ensinei foi navegar pelas pastas. É simples, você já sabe até o comando. Mas porque eu deixei para o final?

Porque foi algo que eu demorei a entender a questão do ".". Se um ponto quando você abre o VS Code significa "aqui", os dois pontos ".." significam "na pasta anterior a esta que estou". Então, se "cd nome da pasta" você entra na pasta, para sair dela, você usa "cd ..".

```bash
cd ..
```

Besta né? Mas quando eu fui fazer minhas primeiras importações no JavaScript, eu apanhei com "./" "../", uma coisa boba que demora às vezes para clicar na cabeça, sabe? Kkkk.

Se você gostou deste formato mais descontraído, considere me mandar uma mensagem com um feedback, eu vou achar muito legal. Se ficou confuso e não deu para aproveitar nada, prometo que vou refazer, mas com um post completo sobre terminal, explicando em detalhes tudo que você precisa saber para não passar vergonha no CLI.


 