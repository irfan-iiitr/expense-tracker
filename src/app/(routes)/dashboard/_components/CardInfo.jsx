'use client';

import { useUser } from '@clerk/nextjs';
import { PiggyBank, ReceiptText, Wallet } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import formatNumber from '../../../../../utils/formatNumber';

const CardInfo = ({ budgetList, incomeList }) => {
    const [totalBudget, setTotalBudget] = useState(0);
    const [totalSpent, setTotalSpent] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);

    const CalculateCardInfo = () => {
        let budgetTotal = 0;
        let spentTotal = 0;
        let incomeTotal = 0;

        budgetList.forEach(budget => {
            budgetTotal += budget.amount;
            spentTotal += Number(budget.totalSpend);
        });

        incomeList.forEach(income => {
            incomeTotal += income.amount;
        });

        setTotalBudget(budgetTotal);
        setTotalSpent(spentTotal);
        setTotalIncome(incomeTotal);
    };

    useEffect(() => {
        CalculateCardInfo();
    }, [budgetList, incomeList]); // Re-run effect when budgetList or incomeList changes

    return (
        <div>
            {budgetList?.length > 0 || incomeList?.length > 0 ? (
                <div>
                    {/* Cards */}
                    <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {/* 1st card Budget */}
                        <div>
                            <div className='p-5 border rounded-md flex items-center justify-between'>
                                <h2 className='text-sm'>Total Budget</h2>
                                <h2 className='font-bold text-2xl'>${formatNumber(totalBudget)}</h2>
                                <PiggyBank className='p-3 h-12 w-12 rounded-full bg-white' />
                            </div>
                        </div>

                        {/* 2nd card Spent */}
                        <div>
                            <div className='p-5 border rounded-md flex items-center justify-between'>
                                <h2 className='text-sm'>Total Spent</h2>
                                <h2 className='font-bold text-2xl'>${formatNumber(totalSpent)}</h2>
                                <ReceiptText className='p-3 h-12 w-12 rounded-full bg-white' />
                            </div>
                        </div>

                        {/* 3rd Card Income */}
                        <div>
                            <div className='p-5 border rounded-md flex items-center justify-between'>
                                <h2 className='text-sm'>Total Income</h2>
                                <h2 className='font-bold text-2xl'>${formatNumber(totalIncome)}</h2>
                                <Wallet className='p-3 h-12 w-12 rounded-full bg-white' />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
};

export default CardInfo;
