import {CreateToastFnReturn} from "@chakra-ui/react";

export function formatDateToYYYYMMDD(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export interface TransactionType {
    identity_code: string,
    username: string,
    division: string,
    type: string,
    roomNumber: string,
}

export const TransactionTypeBorrow: TransactionType = {
    identity_code: "NIM/NIP/Kode Dosen",
    username: "Borrower's Username",
    division: "Borrower's Division",
    type: "Borrow",
    roomNumber: "Room Number",
}

export const TransactionTypeReturn: TransactionType = {
    identity_code: "NIM/NIP/Kode Dosen",
    username: "Returner's Username",
    division: "Returner's Division",
    type: "Return",
    roomNumber: "Room Number",
}

export interface ReactSelectOption {
    value: string,
    label: string,
}

export function successToast(str: string, toast: CreateToastFnReturn) {
    toast({
        title: `${str}`,
        position: "top-right",
        isClosable: true,
        duration: 2000,
        status: "success",
        variant: "left-accent"
    })
}