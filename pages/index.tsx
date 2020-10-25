import Home from '../components/Home/Home';

export async function getServerSideProps() {
  console.log('Server side rendering')

  // Pass data to the page via props
  return { props: { title: 'Servicios Cerca Mio' } }
}

export default function HomePage(props) {
  return (
    <Home title={props.title} />
  )
}
