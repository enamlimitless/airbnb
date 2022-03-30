import Banner from '../components/Banner';
import Header from '../components/Header';
function index({ exploreData }) {
  return(
    <div>
      <Header />
      <Banner />
      <main>
        <section className='pt-4'>
          <h1 className='text-3xl font-medium px-8 mb-3 mb:px-16'>Looking for a house? perfect</h1>
          {exploreData.map(item => (
            <div key={item.location}>
              <h2>{item.location}</h2>
              <p>{item.distance}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
    );
}
export default index;
export async function getStaticProps() {
  const exploreData = await fetch(
    `https://links.papareact.com/pyp`
  ).then((res) => res.json());
  return {
    props: { exploreData },
  };
}
