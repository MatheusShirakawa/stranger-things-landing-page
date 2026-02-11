import Image from "next/image"

export default function Header(){
	return (
		<header>
			<h2>GC.</h2>
			<Image src="images/netflix-logo.svg" alt="" width={105} height={22} />
		</header>
	)
}