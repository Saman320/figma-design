import Feature from './Feature';

const FeaturedWorks = () => {
  return (
    <div className='mx-6 sm:mx-20 md:mx-20 lg:mx-40 my-20 w-full'>
        <h2 className='font-heebo font-semibold lg:text-xl text-xl pb-8'>Featured Works</h2>
      <Feature href="./picture/feature1.svg"/>
      <Feature href="./picture/feature2.svg"/>
      <Feature href="./picture/feature3.svg"/>
    </div>
  );
};

export default FeaturedWorks;