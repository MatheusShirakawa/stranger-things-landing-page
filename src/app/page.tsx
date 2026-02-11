'use client'

import Header from "./components/header";
import Hero from "./components/hero";
import Monster from "./components/monster";
import Grateful from "./components/gratefull";
import Footer from "./components/footer";
import Preloader from "./components/preloader";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";
import { animatePage } from "./functions/animate-page";

export default function Home() {

	useEffect(() => {
		gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
		ScrollSmoother.create({
			smooth: 1.5,
			effects: true,
		});

		const tl = gsap.timeline({
			onComplete() {
				animatePage({gsap});
				gsap.to("#preloader", {
					opacity: 0,
					display: "none",
				});
			},
		});

		tl.to("#preloader path", {
			duration: 1,
			strokeDashoffset: 0,
		});
		tl.to("#preloader path", {
			fill: "rgb(168, 19, 19)",
			duration: 0.5,
			strokeDashoffset: 0,
		});
	}, [])

	return (
		<>
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<Header />
					<main>
						<Hero />
						<Monster />
						<Grateful />
					</main>
					<Footer />
				</div>
			</div>
			<Preloader />
		</>
	)
}
