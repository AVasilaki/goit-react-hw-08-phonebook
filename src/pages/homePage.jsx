import background from '../img/20231224_122948.webp';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(173,179,175,1) 0%, rgba(66,57,48,0.4) 88%, rgba(71,62,53,1) 100%),url(${background})`,
        backgroundSize: 'cover',
      }}
      className=' my-12  w-96  pb-[500px] pl-12 pt-12'
    >
      <h1 className=' text-5xl text-gray-500'>Phonebook</h1>
      <p>this is the best phonecook in The World</p>
    </div>
  );
};

export default Home;
