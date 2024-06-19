
import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore, RootState } from "../services/stores/store";
import { ChangeEvent, ChangeEventHandler, SyntheticEvent, useCallback, useState } from "react";
import { Type } from "typescript";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()


export function useForm<T>(initialValues: T): [T, (event: ChangeEvent<HTMLInputElement>) => void, React.Dispatch<React.SetStateAction<T>>] {
    const [values, setValues] = useState<T>(initialValues);

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {

        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }, [values])

    return [values, onChange, setValues]
}