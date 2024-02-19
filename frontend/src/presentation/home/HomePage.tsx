import {GradientBG} from "../gradientBackground/GradientBG.tsx";
import ParticleBG from "../roomTransaction/ParticleBG.tsx";
import useViewModel from "./HomePageViewModel.ts";
import {TransactionForm} from "../transactionForm/TransactionForm.tsx";
import {TransactionTypeBorrow, TransactionTypeReturn} from "../../core/lib/Lib.ts";
import {Link} from "react-router-dom";
import {Button} from "@chakra-ui/react";

export const HomePage = () => {
    const {
        borrowOpts,
        returnOpts,
        transactionCallback,
    } = useViewModel();

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center relative'>
            <GradientBG />
            <ParticleBG />
            <div className='flex flex-col w-screen h-full'>
                <div className='flex flex-row 2xl:min-h-[90%] h-[60%] w-full min'>
                    <div className='flex flex-col w-1/2 justify-center items-center'>
                        <TransactionForm transactionType={TransactionTypeBorrow} opts={borrowOpts} transactionCallback={transactionCallback}/>
                    </div>
                    <div className='flex flex-col w-1/2 justify-center items-center'>
                        <TransactionForm transactionType={TransactionTypeReturn} opts={returnOpts} transactionCallback={transactionCallback}/>
                    </div>
                </div>
                <div className='flex justify-center h-full w-full items-end 2xl:mb-[2%] mb-[1%]'>
                    <div className='flex gap-20'>
                    <Link to={"/ongoing"}><Button className='!text-xl !px-12 !py-6' colorScheme='orange'>Ongoing</Button></Link>
                    <Link to={"/history"}><Button className='!text-xl !px-12 !py-6' colorScheme='blue'>History</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};