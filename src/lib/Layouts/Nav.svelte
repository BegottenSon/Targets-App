<script>
    import { page } from "$app/stores";

</script>

<nav>
    <ul>
        <li>
            <a class="inactive-back" class:back={$page.path !== '/overview'} href="/overview">Back</a>
        </li>
        <li>
            <a class:active={$page.path === '/overview'} href="/overview">Home</a>
        </li>
    </ul>
</nav>

<style>
    ul {
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
    }
</style>