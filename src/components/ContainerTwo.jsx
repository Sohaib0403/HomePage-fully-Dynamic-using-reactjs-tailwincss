import StatItem from './StatItem';

const ContainerTwo = ({ isVisible }) => {
    return ( 
        <div className={`${isVisible ? 'flex' : 'hidden'} w-full h-48 bg-orange-100 justify-evenly items-center text-center`}>
          <div className='w-[300px]'>
          <StatItem value="90%" description="of all orders are produced  locally" valueClass="text-3xl" descriptionClass='text-2xl' />
            </div>  

            <div className='w-[300px]'>
            <StatItem value="90%" description="of orders arrive within 5 days of ordering" valueClass="text-3xl" descriptionClass='text-2xl' />
            </div>

            <div className='w-[300px]'>
            <StatItem value="140+" description="print providers across 32 countries" valueClass="text-3xl" descriptionClass='text-2xl' />
            </div>
            
           
        </div>
    );
};

export default ContainerTwo;
