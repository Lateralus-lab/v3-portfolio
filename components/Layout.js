import Head from 'next/head';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="desc" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QLCBG97P04"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QLCBG97P04');
        `,
          }}
        />
      </Head>

      <main className="container">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Eli Krizevski | Web Developer Portfolio',
  description:
    "Welcome to my portfolio. My name is Eli Krizevski, and I'm a Front End Web Developer with a strong knowledge of JavaScript(ES6) and React/Redux.",
  keywords: 'Javascript, React, Nextjs, Portfolio, HTML, CSS, Eli, Krizevski',
};
