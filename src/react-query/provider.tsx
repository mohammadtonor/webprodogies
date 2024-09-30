"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
type ReactQueryProviderProps = {
    children: React.ReactNode
}

const client = new QueryClient()

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
    return (
        <QueryClientProvider client={client}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
        </QueryClientProvider>
    )
}
