/** @format */
'use client'
import React, { createContext, useContext, useReducer, useState } from "react";
import { IType, InterfaceProviderProps } from "./type";
import { initialStateRecebimento, recebimentoReducer } from "./reducer";

export const RecebimentoContext = createContext<IType | undefined>(undefined);

export const RecebimentoProvider: React.FC<InterfaceProviderProps> = ({
	children,
}) => {
	const [number, setNumber] = useState<number>(0);
	const [state, dispatch] = useReducer(
		recebimentoReducer,
		initialStateRecebimento,
	);

	return (
		<RecebimentoContext.Provider value={{ state, dispatch }}>
			{children}
		</RecebimentoContext.Provider>
	);
};

export const useRecebimentoContext = (): IType => {
	const context = useContext(RecebimentoContext);

	if (!context) {
		throw new Error("useExampleContext must be used within an ExampleProvider");
	}

	return context;
};
