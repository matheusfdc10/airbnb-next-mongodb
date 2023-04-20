"use client";

import EmptySatate from "@/components/EmptySatate";
import { useEffect } from "react";

interface ErrorStateProps {
    error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <EmptySatate
            title="Uh Oh"
            subtitle="Something went wrong!"
        />
    )
}

export default ErrorState;