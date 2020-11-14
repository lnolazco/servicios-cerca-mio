import Home from '../components/Home/Home';

export async function getServerSideProps() {
  console.log('Server side rendering');

  const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');

  const responseJson = await response.json();

  return { props: responseJson };

  // fetch('http://dummy.restapiexample.com/api/v1/employees')
  // .then(response => response.json())
  // .then(data=> {
  //   console.log(data);
  //   // Pass data to the page via props
  //   return { props: { employees: data.data } };
  // })
  // .catch(error => console.error(error));
}

export default function HomePage(props) {
  console.log('props', props);
  return (
    <Home title="Servicios Cerca Mio" employees={props.data} />
  )
}
