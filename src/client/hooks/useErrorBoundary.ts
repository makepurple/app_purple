import { ErrorBoundaryContext } from "@/client/atoms/ErrorBoundary/context";
import { useContext } from "react";

export const useErrorBoundary = () => {
	return useContext(ErrorBoundaryContext);
};
