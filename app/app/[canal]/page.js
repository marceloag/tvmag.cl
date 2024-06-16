import ClientPage from './ClientPage';

export async function generateStaticParams() {
  const response = await fetch('http://tvmag.cl/api/canales');
  const canales = await response.json();
  return canales.map((canal) => ({
    canal: canal.slug
  }));
}

async function Page({ params }) {
  const { canal } = params;

  const response = await fetch('http://tvmag.cl/api/canales');
  const canales = await response.json();
  console.log(canal);
  const defaultCanal =
    canal == ''
      ? {
          canal: 'Anuncios',
          url: '/spotinacap.mp4',
          avatar: ''
        }
      : canales.find((c) => c.slug === canal);

  console.log(defaultCanal);

  return <ClientPage initialCanales={canales} defaultCanal={defaultCanal} />;
}

export default Page;
