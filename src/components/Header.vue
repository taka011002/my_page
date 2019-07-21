<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">

            <b-navbar-brand href="#">taka</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-navbar-nav>
                        <b-nav-item to="/">Home</b-nav-item>
                        <b-nav-item to="/about">About</b-nav-item>
                    </b-navbar-nav>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>