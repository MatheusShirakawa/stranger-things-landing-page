export default function Grateful(){

	const cities = [
		"Sidney",
		"São Paulo",
		"Cruzeiro",
		"Rio de Janeiro",
		"Sidney",
		"São Paulo",
		"Cruzeiro",
		"Rio de Janeiro",
		"Sidney",
		"São Paulo",
		"Cruzeiro",
		"Rio de Janeiro",
	]

	return(
		<section className="secaoObrigado">
			<h2 className="textoSplit">
				OBRIGADO POR SE JUNTAR A NÓS NESTA AVENTURA EM:
			</h2>
			<ul>
				{cities.map((city, index) => (
					<li key={index}>{city}</li>
				))}
			</ul>
		</section>
	)
}