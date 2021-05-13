import Head from 'next/head';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="desc" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Eli Krizevski | Web Developer Portfolio',
  description: 'Web Developer Portfolio',
  keywords: 'Javascript, React, Nextjs, Portfolio, HTML, CSS, Eli, Krizevski',
};
