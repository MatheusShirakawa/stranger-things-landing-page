import Image from "next/image";

export default function Footer(){
	return(
		<footer>
			<div className="conteudoFooter">
				<div className="logoFooter">
					<h3>THE EXPERIENCE</h3>
					<h2>STRANGER THINGS</h2>
				</div>
				<div className="secoesFooter">
					<div className="social">
						<h3>REDES SOCIAIS</h3>
						<ul>
							<li><Image src="/images/footer-facebook.svg" alt="" width={33} height={33} /></li>
							<li><Image src="/images/footer-instagram.svg" alt="" width={33} height={33} /></li>
							<li><Image src="/images/footer-twitter.svg" alt="" width={33} height={33} /></li>
						</ul>
					</div>
					<div className="parceiro">
						<h3>PARCEIRO DE MÍDIA</h3>
						<Image src="/images/footer-parceiro.svg" alt="" width={154} height={68} />
					</div>
					<div className="institucional">
						<h3>INSTITUCIONAL</h3>
						<nav>
						<ul>
							<li>Contato</li>
							<li>Imprensa</li>
							<li>Parcerias</li>
							<li>Influenciadores</li>
						</ul>
						</nav>
					</div>
				</div>
			</div>
			<div className="logotiposFooter">
				<Image src="/images/netflix-logo.svg" alt="" width={105} height={22} />
				<Image src="/images/fever-logo.svg" alt="" width={109} height={33} />
			</div>
			<div className="textoInfinito">
				<h3>THE EXPERIENCE</h3>
				<h3>THE EXPERIENCE</h3>
				<h3>THE EXPERIENCE</h3>
			</div>
		</footer>
	)
}