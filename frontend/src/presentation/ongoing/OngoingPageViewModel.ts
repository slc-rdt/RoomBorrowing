import {useCallback, useEffect, useMemo, useState} from "react";
import {RoomTransaction} from "../../domain/model/RoomTransaction.ts";
import RoomTransactionAPIDatasourceImpl from "../../data/dataSource/API/RoomTransactionAPIDatasourceImpl.ts";
import {RoomTransactionRepositoryImpl} from "../../data/repository/RoomTransactionRepositoryImpl.ts";
import {GetRoomTransactionsActive} from "../../domain/useCase/roomTransaction/GetRoomTransactionsActive.ts";

export default function OngoingPageViewModel() {
    const [roomTransactions, setRoomTransactions] = useState<RoomTransaction[]>();

    const roomTransactionsDataSourceImpl = useMemo(() => new RoomTransactionAPIDatasourceImpl(), [])
    const roomTransactionsRepositoryImpl = useMemo(() => new RoomTransactionRepositoryImpl(roomTransactionsDataSourceImpl), [roomTransactionsDataSourceImpl])

    const getRoomTransactionsActiveUseCase = useMemo(() => new GetRoomTransactionsActive(roomTransactionsRepositoryImpl), [roomTransactionsRepositoryImpl])

    const getRoomTransactionsActive = useCallback(async (val: string) => {
        setRoomTransactions(await getRoomTransactionsActiveUseCase.invoke(val));
    }, [getRoomTransactionsActiveUseCase])

    useEffect(() => {
        getRoomTransactionsActive('');
    }, [getRoomTransactionsActive])

    return {
        roomTransactions,
    }
}