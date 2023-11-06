<template>
    <footer class="bg-green-600 text-white">
        <div class="text-center pt-4 pb-4 px-3">
            <div class="mb-10 flex justify-center">
                <a href="https://nossofut.com/">
                    <img class="h-10" src="../assets/logo_transparente.svg" alt="NOSSO FUT">
                </a>
            </div>
            <div>

                <a href="https://apoia.se/nosso_fut" class="mx-4"> Apoio </a>
                <RouterLink to="/termo" class="mx-4"> Termo de uso </RouterLink>
                <a href="https://github.com/Andersson793/NOSSO_FUT" class="mx-4">Código fonte</a>

            </div>
        </div>
        <div class="flex justify-center item-center py-2 bg-slate-900/10 text-sm">
            <!--*tab news*-->
            <span class="mr-5">NOSSO FUT v-0.2.0 - beta</span>
            <a href="https://github.com/Andersson793/NOSSO_FUT/blame/master/LICENSE" class="hidden sm:block">
                <img class="h-6 mr-2 inline-block" src="../assets/licenca.svg">
                <span class="mr-5">GPL-3.0</span>
            </a>
            <a href="https://github.com/Andersson793/NOSSO_FUT" class="hidden sm:block">
                <img class="h-6 mr-2 inline-block" src="../assets/github.svg" height="23">
                <span>Open Source</span>
            </a>
        </div>
    </footer>
</template>