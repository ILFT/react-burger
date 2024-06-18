
import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore, RootState } from "../services/stores/store";
import { useCallback, useState } from "react";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()


export const useForm = (initialValues: any) => {
    const [values, setValues] = useState(initialValues);

    const onChange = useCallback((event: any ) => {

        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }, [values])

    return [values, onChange, setValues]
}