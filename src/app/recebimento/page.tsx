/** @format */

import MenuSuperior from "@/components/global/menuSuperior";
import { RecebimentoProvider } from "@/pages/recebimento/context/contextRecebimento";
import ListaDemanda from "@/pages/recebimento/listaDemanda";

export default function Recebimento() {
	return (
		<div>
			<RecebimentoProvider>
				<MenuSuperior />
				<ListaDemanda />
			</RecebimentoProvider>
		</div>
	);
}
