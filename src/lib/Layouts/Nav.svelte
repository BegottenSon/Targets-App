<script>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation"

</script>

<!-- <nav>
    <ul>
        <li>
            <a class="inactive-back" class:back={$page.path !== '/overview'} href="/overview">Back</a>
        </li>
        <li>
            <a class:active={$page.path === '/overview'} href="/overview">Home</a>
        </li>
    </ul>
</nav> -->

<nav>
    <svg on:click={()=> goto('/overview')} width="50" height="50" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg"
    class:active={$page.path !== '/overview'}>
        <g id="home" transform="matrix(7.15263,0,0,7.0845,-214.179,-140.535)">
            <path d="M34,30L32,30C32,30 31,30 31,29L31,25C30.128,25.133 29.802,24.904 30,24C30,24 33.611,20.667 34.445,20C34.705,19.791 35.201,19.774 35.446,20C36.353,20.833 40,24 40,24C40.118,25.092 39.184,25.534 39,25L39,29C39,30 38,30 38,30L36,30C36,30 36.183,26.528 36,26C35.75,25.28 34.197,25.28 34,26C33.853,26.539 34,30 34,30Z"/>
        </g>
    </svg>
    
    <svg on:click class="addBtn" width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
    class:active={$page.path ==='/overview'}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM23 12.5V23H12.5V27H23V37.5H27V27H37.5V23H27V12.5H23Z"/>
    </svg>
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        /* position: fixed;
        left: 47%;
        bottom: 20px; */
        width: 100%;
        margin-block: 1em;
        fill: var(--white);
    }

    svg {
        display: none;
    }

    svg:hover {
        fill: var(--link-color);
    }

    svg:active {
        fill: var(--green)
    }

    .active {
        display: block;
    }

    /* ul {
        display: flex;
        justify-content: space-between;
        padding: 1em;
    }

    li {
        list-style: none;

    }

    .inactive-back {
        visibility: hidden;
    }

    .active {
        position: relative;
        color: var(--green);
    }

    .active::before, .back::before {
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        padding: 0.2em 0.4em;
        transform: translate(-12%,-12%);
        background-color: var(--blue-2);
        border-radius: 8px;
        z-index: -1;
    }

    .back {
        position: relative;
        color: var(--green);
        visibility: visible;
    } */
</style>