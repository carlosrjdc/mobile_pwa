/** @format */
'use client'
import React, { createContext, useContext, useReducer } from "react";
import { initialStateRecebimentoAnomalia, recebimentoAnomaliaReducer } from "./reducerAnomaliaRecebimento";
import { initialStateRecebimentoPagina, recebimentoPaginaReducer } from "./reducerPaginaRecebimento";
import { IType, InterfaceProviderProps } from "./type";

export const RecebimentoContext = createContext<IType | undefined>(undefined);

export const RecebimentoProvider: React.FC<InterfaceProviderProps> = ({
	children,
}) => {
	const [statePage, dispatchPage] = useReducer(
		recebimentoPaginaReducer,
		initialStateRecebimentoPagina,
	);

	const [stateAnomalia, dispatchAnomalia] = useReducer(recebimentoAnomaliaReducer,initialStateRecebimentoAnomalia)

	/*const [stateAnomalia, dispatchAnomalia] = useReducer(
		recebimentoAnomaliaReducer,
		initialStateRecebimentoPagina,
	);*/

	return (
		<RecebimentoContext.Provider value={{ dispatchPage, statePage, stateAnomalia,dispatchAnomalia}}>
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
