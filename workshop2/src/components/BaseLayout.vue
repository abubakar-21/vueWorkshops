<template>
    <div class="base-layout">
        <header>
            <slot name="header">Header</slot>
        </header>

        <main>
            <slot name="main">All Cards Deleted</slot>
        </main>

        <footer>
            <slot name="footer">Footer</slot>
        </footer>
    </div>
</template>
  
<style scoped>
.base-layout {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-height: 100vh;
    padding: 10px;
}

header,
main,
footer {
    display: flex;
    justify-content: center;

    padding: 20px;
    border: 1px solid #ddd;
}

main {
    flex: 1;
}
</style>