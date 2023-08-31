<script>
export default {
    name: 'JumboHome',
    methods: {
        generateMatrix() {
            // Initialising the canvas
            var ctx;
            var canvas = document.getElementById('matrix');
            ctx = canvas.getContext('2d');

            // Setting the width and height of the canvas
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Setting up the letters
            var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
            letters = letters.split('');

            // Setting up the columns
            var fontSize = 10,
                columns = canvas.width / fontSize;

            // Setting up the drops
            var drops = [];
            for (var i = 0; i < columns; i++) {
                drops[i] = 1;
            }

            // Setting up the draw function
            function draw() {
                ctx.fillStyle = 'rgba(0, 0, 0, .2)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                for (var i = 0; i < drops.length; i++) {
                    var text = letters[Math.floor(Math.random() * letters.length)];
                    ctx.fillStyle = '#ffee32';
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                    drops[i]++;
                    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                        drops[i] = 0;
                    }
                }
            }

            // Loop the animation
            setInterval(draw, 73);
        }
    },
    mounted() {
        this.generateMatrix();
    }
}
</script>

<template>
    <div id="jumbo" class="px-3">
        <canvas id="matrix"></canvas>
        <h5 class="text-center primary-yellow welcome">welcome to my portfolio</h5>
        <h4 class="text-end ashgrey pt-5">Hi, my name is <span class="primary-yellow">Nicola Faedo</span></h4>
        <h5 class="text-end ashgrey pt-5">I'm a</h5>
        <h1 class="primary-yellow text-end">Full-Stack</h1>
        <h1 class="primary-yellow big-title text-end">WEB DEV<span class="d-none d-md-inline">ELOPER</span></h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

#jumbo {
    height: 90vh;
    //background-color: $black-dark;
    //position: relative;
    background-color: rgba(20, 20, 20, 0.849);
    position: relative;
    left: 0;
    width: 100%;
    height: 90vh;
}

.welcome {
    padding-top: 5rem;
}

.big-title {
    font-size: 700%;
}

.primary-yellow {
    color: $yellow;
}

.secondary-yellow {
    color: $yellow-light;
}

.ashgrey {
    color: $greywhite;
}

#matrix {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
}
</style>