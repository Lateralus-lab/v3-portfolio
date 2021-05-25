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
        <script
          dangerouslySetInnerHTML={{
            __html: `
 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(79493038, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
          `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/79493038"
              style="position:absolute; left:-9999px;"
              alt=""
            />
          </div>
        </noscript>
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
