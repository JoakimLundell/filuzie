<template>
    <header>
        <slot></slot>
    </header>
</template>

<script>
    
</script>

<style scoped>
    header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background: #eae7e5;
        color: #8C8B89;
        height: 100px;
        overflow: hidden;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        opacity: 0.9;
    }

    header a {
        padding: 0 18px;
        color: #8C8B89;
        transition: color 0.5s ease;
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        letter-spacing: 2px;
    }

    header a:hover {
        padding: 0 18px;
        color: #415547;
        transition: color 0.5s ease;
    }

     @media screen and (min-width: 600px) { 

     }
</style>