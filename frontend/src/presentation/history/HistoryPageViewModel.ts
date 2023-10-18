import {useCallback, useEffect, useMemo, useState} from "react";
import RoomTransactionAPIDatasourceImpl from "../../data/dataSource/API/RoomTransactionAPIDatasourceImpl.ts";
import {RoomTransactionRepositoryImpl} from "../../data/repository/RoomTransactionRepositoryImpl.ts";
import {RoomTransaction} from "../../domain/model/RoomTransaction.ts";
import {GetRoomTransactions} from "../../domain/useCase/roomTransaction/GetRoomTransactions.ts";
import {formatDateToYYYYMMDD} from "../../core/lib/Lib.ts";

export default function TransactionPageViewModel() {
    const [roomTransactions, setRoomTransactions] = useState<RoomTransaction[]>();

    const roomTransactionsDataSourceImpl = useMemo(() => new RoomTransactionAPIDatasourceImpl(), [])
    const roomTransactionsRepositoryImpl = useMemo(() => new RoomTransactionRepositoryImpl(roomTransactionsDataSourceImpl), [roomTransactionsDataSourceImpl])

    const getRoomTransactionsUseCase = useMemo(() => new GetRoomTransactions(roomTransactionsRepositoryImpl), [roomTransactionsRepositoryImpl])

    const getRoomTransactions = useCallback(async (roomPrefix?: string, date?: Date) => {
        setRoomTransactions(await getRoomTransactionsUseCase.invoke(roomPrefix, date));
    }, [getRoomTransactionsUseCase])

    useEffect(() => {
        getRoomTransactions(undefined, new Date());
    }, [getRoomTransactions])

    return {
        roomTransactions,
    }
}