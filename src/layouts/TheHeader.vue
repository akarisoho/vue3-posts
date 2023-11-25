<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Alicia J</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<router-link class="nav-link" active-class="active" to="/"
								>Home</router-link
							>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" active-class="active" to="/about"
								>About</router-link
							>
						</li>
						<!-- a tag는 리로딩이 일어남
              <li class="nav-item">
							<a class="nav-link active" aria-current="page" href="/">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/about">About</a>
						</li> -->
					</ul>
					<form class="d-flex" role="search">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-light" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
