'use client'

import Image from "next/image";

export default function Hero(){
	return(
		<section className="hero">
			<picture data-speed=".6">
				<source
					media="(max-width: 600px)"
					srcSet="images/bg-1-mobile.webp"
				/>
				<img src="images/bg-1.webp" alt="" />
			</picture>
			<picture>
				<source
					media="(max-width: 600px)"
					srcSet="images/bg-2-mobile.webp"
				/>
				<img src="images/bg-2.webp" alt="" />
			</picture>
			<div className="esquerda">
				<h3>THE EXPERIENCE</h3>
				<h1>STRANGER THINGS</h1>
			</div>
			<div className="direita">
				<p className="textoSplit">
					Descubra os seus poderes e vire o herói de sua própria aventura!
				</p>
				<button className="botaoPrincipal">
					ESCOLHA SUA CIDADE
					<Image src="images/seta-botao.svg" alt="" width={16} height={16}/>
				</button>
			</div>
		</section>
	)
}