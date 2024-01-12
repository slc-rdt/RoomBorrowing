import {useCallback, useEffect, useMemo, useState} from "react";
import {ReactSelectOption} from "../../core/lib/Lib.ts";
import {GetRoomsActive} from "../../domain/useCase/room/GetRoomsActive.ts";
import {GetRoomsInactive} from "../../domain/useCase/room/GetRoomsInactive.ts";
import RoomAPIDatasourceImpl from "../../data/dataSource/API/RoomAPIDatasourceImpl.ts";
import {RoomRepositoryImpl} from "../../data/repository/RoomRepositoryImpl.ts";

export default function HomePageViewModel() {
    const [borrowOpts, setBorrowOpts] = useState<ReactSelectOption[]>([])
    const [returnOpts, setReturnOpts] = useState<ReactSelectOption[]>([])

    const roomsDataSourceImpl = useMemo(() => new RoomAPIDatasourceImpl(), [])
    const roomsRepositoryImpl = useMemo(() => new RoomRepositoryImpl(roomsDataSourceImpl), [roomsDataSourceImpl])

    const getRoomsActiveUseCase = useMemo(() => new GetRoomsActive(roomsRepositoryImpl), [roomsRepositoryImpl])
    const getRoomsInactiveUseCase = useMemo(() => new GetRoomsInactive(roomsRepositoryImpl), [roomsRepositoryImpl])

    const getRoomsActive = useCallback(async (val?: string) => {
        const res = await getRoomsActiveUseCase.invoke(val);
        setReturnOpts(res.map(room => ({
            value: room.number,
            label: `Room ${room.number}`
        })))
    }, [getRoomsActiveUseCase])

    const getRoomsInactive = useCallback(async (val?: string) => {
        const res = await getRoomsInactiveUseCase.invoke(val);
        setBorrowOpts(res.map(room => ({
            value: room.number,
            label: `Room ${room.number}`
        })))
    }, [getRoomsInactiveUseCase])

    useEffect(()=>{
        getRoomsActive()
        getRoomsInactive()
    }, [getRoomsActive, getRoomsInactive])

    function transactionCallback() {
        setBorrowOpts([])
        setReturnOpts([])
        getRoomsActive()
        getRoomsInactive()
    }

    return {
        borrowOpts,
        returnOpts,
        transactionCallback,
    }
}