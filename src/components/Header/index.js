/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';

export default function Header() {
  return (
    <div>
      <Head>
        <title>Quiz  das Galáxias - Alura</title>
        <meta itemProp="name" content="Quiz das Galáxias - Alura" />
        <meta itemProp="description" content="Orgulhosamente criado durante a Imersão React da Alura." />
        <meta itemProp="image" content="https://img1.gratispng.com/20180202/jtw/kisspng-astronaut-outer-space-computer-file-astronauts-from-space-5a7433930a6c97.5428240515175648190427.jpg" />

        {/* <!-- Marcações para Twitter Card --> */}
        <meta name="twitter:card" content="Imersão React da Alura" />
        <meta name="twitter:title" content="Quiz das Galáxias - Alura" />
        <meta name="twitter:description" content="Orgulhosamente criado durante a Imersão React da Alura." />
        <meta name="twitter:image" content="https://img1.gratispng.com/20180202/jtw/kisspng-astronaut-outer-space-computer-file-astronauts-from-space-5a7433930a6c97.5428240515175648190427.jpg" />

        {/* <!-- Marcações Open Graph / Facebook --> */}
        <meta property="og:title" content="Quiz das Galáxias - Alura" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://scrumquiz.robsonamendonca.vercel.app/" />
        <meta property="og:image" content="https://img1.gratispng.com/20180202/jtw/kisspng-astronaut-outer-space-computer-file-astronauts-from-space-5a7433930a6c97.5428240515175648190427.jpg" />
        <meta property="og:description" content="Orgulhosamente criado durante a Imersão React da Alura." />
        <meta property="og:site_name" content="Quiz das Galáxias - Alura" />

        <link id="favicon" rel="shortcut icon" href="https://img1.gratispng.com/20180202/jtw/kisspng-astronaut-outer-space-computer-file-astronauts-from-space-5a7433930a6c97.5428240515175648190427.jpg" type="image/png" />
        <link rel="apple-touch-icon" sizes="194x194" href="https://img1.gratispng.com/20180202/jtw/kisspng-astronaut-outer-space-computer-file-astronauts-from-space-5a7433930a6c97.5428240515175648190427.jpg" type="image/png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

      </Head>
    </div>
  );
}
