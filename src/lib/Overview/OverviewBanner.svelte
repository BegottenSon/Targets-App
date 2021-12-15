<script>
    import { income, ballin, expenses, calculateOffset } from "$lib/Stores/money";

    let name = 'Pepper Habanero';
    $: incomeOffset = calculateOffset.incomeOffset($income, $expenses);
    $: ballinOffset = calculateOffset.ballinOffset($income, $ballin);
</script>

<main>
    <section class="profile-section">
        <img src="/profile.jpg" alt="profile" height="100" width="100">
        <p>{name}</p>
    </section>
    <section class="money-section">
        <div class="money-visual">
                <svg id="money-progress" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle id="base" cx="50" cy="50" r="45" stroke="var(--base)" stroke-width="10"/>
                    <circle id="income" cx="50" cy="50" r="45" stroke="#27D679" stroke-width="10" stroke-dasharray="284" stroke-dashoffset={incomeOffset < 0 ? 0 : incomeOffset} stroke-linecap="round"/>
                    <circle id="ballin" cx="50" cy="50" r="45" stroke="#93EBBC" stroke-width="10" stroke-dasharray="284" stroke-dashoffset={$ballin > 0 ? ballinOffset : 284} stroke-linecap="round"/>
                    
                </svg>
                <svg id="money-sign" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53.5 26C61.9454 26 66.8234 32.4606 68.5983 36.4857C68.8354 37.0234 68.5088 37.6228 67.9386 37.7653L57.7544 40.3114C57.3106 40.4223 56.8526 40.2135 56.6008 39.8316C53.5712 35.2363 46.9555 34.6336 46 37.5C45.5 40 46.5 40.5 58 44.5C69.5 48.5 69 55.5 68.5 62C67.8462 70.5 58.6667 72.8333 53.5 73.5V79C53.5 79.5523 53.0523 80 52.5 80H47.5C46.9477 80 46.5 79.5523 46.5 79V73.5C36.8621 73.5 31.9191 65.7708 30.3178 61.0565C30.1274 60.4958 30.5084 59.9218 31.0936 59.8317L42.139 58.1325C42.6325 58.0565 43.0982 58.3609 43.2989 58.8181C44.9411 62.5601 49.2889 62.9679 53.5 62.5C57.1 62.1 57 59.3333 55 58C53.5 57 52.1 56.7 46.5 55.5C39.5 54 31 45.5 32 37.5C32.8 31.1 42 27.1667 46.5 26V21C46.5 20.4477 46.9477 20 47.5 20H52.5C53.0523 20 53.5 20.4477 53.5 21V26Z" fill="#EBEBEB" stroke="#EBEBEB"/>
                </svg>
        </div>
        <div class="money-info">
            <div class="income-section">
                <h4>Income</h4>
                <h4 class="income">${$income.toLocaleString('en-US')}</h4>
            </div>
            <div class="ballin-section">
                <h4>Ballin'</h4>
                <h4 class="ballin">${$ballin > 0 ? $ballin.toLocaleString('en-US') : 0}</h4>
            </div>
        </div>
    </section>
</main>

<style>
    main {
        display: flex;
        justify-content: space-around;
        margin-block: 1em;
        width: 100vw;
        background-image: linear-gradient(156.86deg, #072443 16.34%, rgba(71, 97, 124, 0.137) 85.03%);
    }

    p {
        margin-block: 0.5em;
        font-size: 20px;
        font-weight: 300;
    }

    img {
        object-fit: cover;
        object-position: 60%;
        height: 100px;
        width: 100px;
        border-radius: 90em;
        box-shadow: 0px 0px 6px var(--green);
    }

    .profile-section {
        max-width: 180px;
    }

    .money-info {
        display: flex;
        gap: 1em;
    }

    .money-section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .money-visual {
        position: relative;
        height: calc(100px + 0.5em);
    }

    #money-progress {
        transform: translate(-50%) rotate(-90deg);
        position: absolute;
    }

    #money-sign {
        transform: translate(-50%);
        position: absolute;
    }

    .income {
        color: var(--green);
    }

    .ballin {
        color: var(--light-green);
    }
</style>