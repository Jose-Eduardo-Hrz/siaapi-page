<script lang="ts">
	// Footer component — matches the reference design (dark background, 4-column grid + address bar)
</script>

<footer class="site-footer">
	<div class="footer-inner">
		<!-- 4-column link grid -->
		<div class="footer-grid">
			<!-- CONTACTO -->
			<div class="footer-col">
				<h4 class="footer-heading">CONTACTO</h4>
				<p class="contact-line contact-bold">Ing. Cristian Plaza</p>
				<p class="contact-line">Secretaría Académica CBI-A.</p>
				<p class="contact-line">Tels. 5318-9003 y 5318-9580</p>
				<a class="contact-email" href="mailto:asistenciasacacbi@azc.uam.mx">asistenciasacacbi@azc.uam.mx</a>
			</div>

			<!-- LIGAS DE INTERÉS -->
			<div class="footer-col">
				<h4 class="footer-heading">LIGAS DE INTERÉS</h4>
				<ul class="footer-links">
					<li><a href="https://cga.azc.uam.mx/lenguas-extranjeras/" target="_blank" rel="noopener noreferrer">Lenguas Extranjeras UAM</a></li>
					<li><a href="https://azc.uam.mx/servicio-social/index" target="_blank" rel="noopener noreferrer">Servicio Social UAM</a></li>
					<li><a href="https://cdvin.azc.uam.mx/cdvin/bufete/index.php" target="_blank" rel="noopener noreferrer">Bufete de Ingeniería</a></li>
					<li><a href="https://bolsadetrabajo.uam.mx/" target="_blank" rel="noopener noreferrer">Bolsa Universitaria de Trabajo</a></li>
				</ul>
			</div>

			<!-- LIGAS PARA EXTERNOS -->
			<div class="footer-col">
				<h4 class="footer-heading">LIGAS PARA EXTERNOS</h4>
				<ul class="footer-links">
					<li><a href="https://docs.google.com/forms/d/e/1FAIpQLSft33gdFrW_2Xae7LJ3Dx3LjycftkOdxxKE12WZFZw3MDwhTg/viewform" target="_blank" rel="noopener noreferrer">Cuestionario para Empleadores</a></li>
					<li><a href="https://www.facebook.com/egresadoscbiuamazc/" target="_blank" rel="noopener noreferrer">Egresados</a></li>
				</ul>
			</div>

			<!-- TRANSPARENCIA -->
			<div class="footer-col">
				<h4 class="footer-heading">TRANSPARENCIA</h4>
				<ul class="footer-links">
					<li><a href="https://transparencia.uam.mx/contraloriasocial/" target="_blank" rel="noopener noreferrer">Contraloría Social</a></li>
					<li><a href="https://transparencia.uam.mx/" target="_blank" rel="noopener noreferrer">Transparencia de la UAM</a></li>
					<li><a href="https://azc.uam.mx/site/buzon" target="_blank" rel="noopener noreferrer">Buzón UAM — Quejas y sugerencias</a></li>
				</ul>
			</div>
		</div>

		<!-- Divider -->
		<hr class="footer-divider" />

		<!-- Address bar -->
		<div class="footer-address">
			<p class="address-title">Universidad Autónoma Metropolitana — Azcapotzalco</p>
			<p class="address-line">Av. San Pablo No. 420, Col. Nueva el Rosario, C.P. 02128, Tel. 01 (55) 5318-9000, Alcaldía Azcapotzalco, México, D.F.</p>
			<p class="address-line">División de Ciencias Básicas e Ingeniería. Edificio HP, 1er. piso, Tel. 01 (55) 5318-9001</p>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background-color: #1e293b;
		color: #cbd5e1;
		font-family: var(--font-family-base);
		padding: 0;
	}

	.footer-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--space-6) var(--space-5);
	}

	/* ── 4-column grid ── */
	.footer-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-5);
	}

	@media (max-width: 900px) {
		.footer-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 520px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}
	}

	/* ── Column headings ── */
	.footer-heading {
		font-size: 0.7rem;
		font-weight: var(--font-weight-bold);
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-primary);
		margin: 0 0 var(--space-3) 0;
	}

	/* ── Contact column ── */
	.contact-line {
		margin: 0 0 2px 0;
		font-size: var(--font-size-xs);
		line-height: 1.6;
		color: #cbd5e1;
	}

	.contact-bold {
		font-weight: var(--font-weight-bold);
		color: #f1f5f9;
	}

	.contact-email {
		display: inline-block;
		margin-top: 2px;
		font-size: var(--font-size-xs);
		color: #60a5fa;
		text-decoration: none;
		transition: color 0.15s ease;
	}

	.contact-email:hover {
		color: #93c5fd;
		text-decoration: underline;
	}

	/* ── Link lists ── */
	.footer-links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.footer-links a {
		font-size: var(--font-size-xs);
		color: #cbd5e1;
		text-decoration: none;
		transition: color 0.15s ease;
	}

	.footer-links a:hover {
		color: #ffffff;
		text-decoration: underline;
	}

	/* ── Divider ── */
	.footer-divider {
		border: none;
		border-top: 1px solid #334155;
		margin: var(--space-5) 0 var(--space-4) 0;
	}

	/* ── Address block ── */
	.footer-address {
		padding: 0;
	}

	.address-title {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-bold);
		color: #f1f5f9;
		margin: 0 0 4px 0;
	}

	.address-line {
		font-size: 0.72rem;
		color: #94a3b8;
		margin: 0 0 2px 0;
		line-height: 1.5;
	}
</style>
