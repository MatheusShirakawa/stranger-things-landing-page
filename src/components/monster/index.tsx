/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function Monster(){
	return(
		<div className="bgMonstro">
			{/* <!-- SECAO 2 --> */}
			<section className="secaoCidade">
				<div className="titulo">
					<h2 className="textoSplit">ESCOLHA SUA CIDADE</h2>
					<button>
						ESCOLHA SUA CIDADE
						<Image src="/images/seta-botao.svg" alt="" width={16} height={16}/>
					</button>
				</div>
				<div className="cards">
					<div className="card">
						<h3>Sidney</h3>
						<p>INGRESSOS DISPONÍVEIS</p>
					</div>
					<div className="card">
						<h3>Cidade do México</h3>
						<p>INGRESSOS DISPONÍVEIS</p>
					</div>
					<div className="card">
						<h3>Yas Island</h3>
						<p>INGRESSOS DISPONÍVEIS</p>
					</div>
				</div>
			</section>

			{/* <!-- SECAO 3 --> */}
			<section className="secaoDepoimentos">
				<div className="logotipos">
					<Image src="/images/netflix-logo.svg" alt="" width={105} height={22} />
					<Image src="/images/clio-logo.svg" alt="" width={196} height={99} />
					<Image src="/images/fever-logo.svg" alt="" width={109} height={33} />
				</div>
				<div className="depoimentos">
					<div className="depoimento">
						<Image src="/images/img-dep1.webp" alt="" width={43} height={33}/>
						<p>
							"Guests are immersed into an original "Stranger Things"
							storyline...[it] combines the special effects of a 3D
							Universal Studios ride with a telekinetic escape room."
						</p>
					</div>
					<div className="depoimento">
						<Image src="/images/img-dep2.webp" alt="" width={65} height={38}/>
						<p>
							"Guests are immersed into an original "Stranger Things"
							storyline...[it] combines the special effects of a 3D
							Universal Studios ride with a telekinetic escape room."
						</p>
					</div>
					<div className="depoimento">
						<Image src="/images/img-dep3.webp" alt="" width={165} height={41}/>
						<p>
							"Guests are immersed into an original "Stranger Things"
							storyline...[it] combines the special effects of a 3D
							Universal Studios ride with a telekinetic escape room."
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}