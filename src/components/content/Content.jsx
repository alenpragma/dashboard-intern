
import wallet from '../../assets/wallet (1) 1.png';
import deposit from '../../assets/deposit 1.png';
import earning from '../../assets/earnings 1.png';
import hand_holding_usd from '../../assets/hand-holding-usd 1.png';
import available_task from '../../assets/completed 1 (1).png';
import pending_task from '../../assets/3209435_pending_revise_time_unfinish_wait_icon 1.png';
import complete_task from '../../assets/clipboard-check 1.png';
import total_task from '../../assets/total 1.png';

const Content = () => {
  return (
    <div className="container bg-[#1b1b1b] flex flex-col lg:flex-row justify-center items-center h-screen gap-2">
      {/* Content Left */}
      <div className="content-left clip-path-custom grid grid-cols-1 sm:grid-cols-2 gap-2
       lg:w-[714px] lg:h-auto bg-[#323232] p-10 pt-20 ml-3 rounded-lg ">  

        <div className="relative border-solid border-2 border-[#B4B4B4] w-full h-[170px] rounded-tr-[100px]
         text-white rounded-lg flex flex-col justify-evenly items-center pl-4">
          <p>MATE WALLET</p>
          <p className="text-[24px]">$28.40</p>
          <p>TOTAL PORTFOLIO: $28.4</p>
          <div className="absolute top-0 right-0 bg-[#FFEAD1] p-2 rounded-lg">
            <img src={wallet} alt="wallet" />
          </div>
        </div>
        <div className="relative border-solid border-2 border-[#B4B4B4] w-full h-[170px] rounded-tr-[100px] text-white rounded-lg flex flex-col justify-evenly items-center pl-4">
          <p>Today Earn</p>
          <p className="text-[24px]">$28.40</p>
          <div className="absolute top-0 right-0 bg-[#FFD7CB] p-2 rounded-lg">
            <img src={hand_holding_usd} alt="hand holding usd" />
          </div>
        </div>
        <div className="relative border-solid border-2 border-[#B4B4B4] w-full h-[170px] rounded-tr-[100px] text-white rounded-lg flex flex-col justify-evenly items-center pl-4">
          <p>Total Earn</p>
          <p className="text-[24px]">$28.40</p>
          <div className="absolute top-0 right-0 bg-[#FFD8FB] p-2 rounded-lg">
            <img src={earning} alt="earnings" />
          </div>
        </div>
        <div className="relative border-solid border-2 border-[#B4B4B4] w-full h-[170px] rounded-tr-[100px] text-white rounded-lg flex flex-col justify-evenly items-center pl-4">
          <p>Withdraw</p>
          <p className="text-[24px]">$28.40</p>
          <div className="absolute top-0 right-0 bg-[#FFF1E9] p-2 rounded-lg">
            <img src={deposit} alt="deposit" />
          </div>
        </div>
      </div>
      {/* Content Right */}
      <div className="content-right clip-path2-custom flex flex-col justify-center lg:w-[359px] bg-[#3b3b3b] p-4 rounded-lg">
        <h2 className="text-lg font-bold text-[#FFFFFF] mb-6">Task Summary</h2>
        <div>
          <div className="flex justify-between items-center border-2 border-[#B4B4B4] rounded-3xl p-3 mb-4">
            <div className="rounded-full bg-[#FFFFFF] p-2">
              <img src={available_task} alt="Available Task" />
            </div>
            <p className="font-medium text-base text-[#E6E6E6]">Available Task</p>
            <span className="text-2xl font-bold text-[#FFFFFF]">23</span>
          </div>
          <div className="flex justify-between items-center border-2 border-[#B4B4B4] rounded-3xl p-3 mb-4">
            <div className="rounded-full bg-[#E9FFEF] p-2">
              <img src={pending_task} alt="Pending Task" />
            </div>
            <p className="font-medium text-base text-[#E6E6E6]">Pending Task</p>
            <span className="text-2xl font-bold text-[#FFFFFF]">2</span>
          </div>
          <div className="flex justify-between items-center border-2 border-[#B4B4B4] rounded-3xl p-3 mb-4">
            <div className="rounded-full bg-[#EDE1FD] p-2">
              <img src={complete_task} alt="Completed Task" />
            </div>
            <p className="font-medium text-base text-[#E6E6E6]">Completed Task</p>
            <span className="text-2xl font-bold text-[#FFFFFF]">23</span>
          </div>
          <div className="flex justify-between items-center border-2 border-[#B4B4B4] rounded-3xl p-3 mb-4">
            <div className="rounded-full bg-[#FFE7FF] p-2">
              <img src={total_task} alt="Total Task" />
            </div>
            <p className="font-medium text-base text-[#E6E6E6]">Total Task</p>
            <span className="text-2xl font-bold text-[#FFFFFF]">0.23</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
