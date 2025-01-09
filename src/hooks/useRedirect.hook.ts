import { useEffect } from "react";
import { NavigateOptions, useNavigate } from "react-router-dom";

export default function useRedirect(path = '/', condition = true, options?: NavigateOptions) {
    const navigate = useNavigate();

    useEffect(() => {
        condition && navigate(path, options);
    }, []);
}