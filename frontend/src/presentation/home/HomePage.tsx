import {GradientBG} from "../gradientBackground/GradientBG.tsx";
import ParticleBG from "../roomTransaction/ParticleBG.tsx";
import useViewModel from "./HomePageViewModel.ts";
import {TransactionForm} from "../transactionForm/TransactionForm.tsx";
import {TransactionTypeBorrow, TransactionTypeReturn} from "../../core/lib/Lib.ts";

export const HomePage = () => {
    const {
        borrowOpts,
        returnOpts,
        transactionCallback,
    } = useViewModel();

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <GradientBG />
            <ParticleBG />
            <div className='flex flex-row w-full h-full'>
                <div className='flex flex-col w-1/2 justify-center items-center'>
                    <TransactionForm transactionType={TransactionTypeBorrow} opts={borrowOpts} transactionCallback={transactionCallback}/>
                </div>
                <div className='flex flex-col w-1/2 justify-center items-center'>
                    <TransactionForm transactionType={TransactionTypeReturn} opts={returnOpts} transactionCallback={transactionCallback}/>
                </div>
            </div>
        </div>
    );
};