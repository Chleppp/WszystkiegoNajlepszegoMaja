// deklaracje

const button1 = document.querySelector("#but1");
const button2 = document.querySelector("#but2");
const button3 = document.querySelector("#but3");
const button4 = document.querySelector("#but4");
const button5 = document.querySelector("#but5");
const button6 = document.querySelector("#but6");
const button7 = document.querySelector("#but7");
const button8 = document.querySelector("#but8");
const button9 = document.querySelector("#but9");
const button10 = document.querySelector("#but10");
const button11 = document.querySelector("#but11");
const button12 = document.querySelector("#but12");

const file1 = document.querySelector("#file1");
const file2 = document.querySelector("#file2");
const file3 = document.querySelector("#file3");
const file4 = document.querySelector("#file4");
const file5 = document.querySelector("#file5");
const file6 = document.querySelector("#file6");
const file7 = document.querySelector("#file7");
const file8 = document.querySelector("#file8");
const file9 = document.querySelector("#file9");
const file10 = document.querySelector("#file10");
const file11 = document.querySelector("#file11");
const file12 = document.querySelector("#file12");

const header = document.querySelector(".header");
const Lside = document.querySelector(".displayL");
const LsideBot = document.querySelector(".disLBot");
const Rside = document.querySelector(".buttonR");

const headerText = document.querySelector("#headerText");
const bodyText = document.querySelector("#bodyText");

const sprawdzHasloInput = document.querySelector("#sprawdz");
const sprawdzHasloButton = document.querySelector("#sprawdzB");
var dobreHaslo = "48 42 4D 61 6A 61 3C 33";
var dobraHaslo2 = "48424D616A613C33";
var podaneHaslo = 0;

function hideFiles() {
    file1.style.display = "none";
    file2.style.display = "none";
    file3.style.display = "none";
    file4.style.display = "none";
    file5.style.display = "none";
    file6.style.display = "none";
    file7.style.display = "none";
    file8.style.display = "none";
    file9.style.display = "none";
    file10.style.display = "none";
    file11.style.display = "none";
    file12.style.display = "none";
}

function hidewideFiles() {
    file1.classList.toggle("wide");
    file2.classList.toggle("wide");
    file3.classList.toggle("wide");
    file4.classList.toggle("wide");
    file5.classList.toggle("wide");
    file6.classList.toggle("wide");
    file7.classList.toggle("wide");
    file8.classList.toggle("wide");
    file9.classList.toggle("wide");
    file10.classList.toggle("wide");
    file11.classList.toggle("wide");
    file12.classList.toggle("wide");
}

// wszystkie przyciski

button1.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "blueprint.png • 26/07/2023";
    bodyText.innerHTML =
        "pierwszy model MEEW (originalna nazwa 'MiQ-72584') - intelinentnego roboto-kota";
    file1.style.display = "flex";
});

button2.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "meew_w_kompie.png • 01/12/2023";
    bodyText.innerHTML = "5 miesięcy... tyle zajęło wczesne trenowanie inteligencji robota. Problem w tym, że dalej nie jest w pełni dopracowany. Często się zacina, nie rozumie co do niego mówię, itp. Ale to tylko kwestia czasu dopóki się nauczy się tego wszystkiego. Dużo pracy przed nami.";
    file2.style.display = "block";
});

button3.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "nagroda.png • 10/01/2024";
    bodyText.innerHTML = "MEEW WYGRAŁ NAGRODE ZA NAJLEPSZY PROJEKT KITCORP!!! NIGDY W ŻYCIU NIC NIE WYGRAŁEM DO TERAZ TE 5 MIESIECY SIE OPACALO!! w nagrodę, dostałem nowe meble do pracowni i trofeum. Najlepszy dzień w moim życiu, nie mam nic innego do powiedzienia. Chyba muszę się teraz postarać żeby ich nie zawieść.";
    file3.style.display = "block";

});

button4.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "modelGlowy.png • 25/01/2024";
    bodyText.innerHTML = "Robot stał się już tak dobrym kompanem, że przesłałem go na jeden z modeli MGłośnika żeby toważyszył mi podczas budowania jego głowy. Z jednej strony ja mam frajde gdy kot pokazuje swoje reakcje, to MEEW jeszcze sie uczy emocji, odpowiedzi i jak radzić sobie z pytaniami w czasie rzeczywistym. Szef będzie dumny.";
    file4.style.display = "block";
});

button5.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "meew_w_glowie.png • 06/02/2024";
    bodyText.innerHTML = "MEEW jest już w główce, może nie wspominałem tego wcześniej, ale MEEW tak naprawdę nie potrafi widzieć świata rzeczywistego. Jak można zauważyć, do tej pory nie miał dostępu do żadnej kamery, pomimo to że teraz ma takowy dostęp, poprzez kamery wbudowane w model, nie jest jeszcze w stanie z nich korzystać, ale to tylko kwestia czasu.";
    file5.style.display = "block";

});

button6.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "hehe.png • 10/02/2024";
    bodyText.innerHTML = "Położyłem mu miske z jedzeniem przed monitorem xd. pomimo tego ze nie widzi ze tam jest to i tak chyba nie był szczęśliwy";
    file6.style.display = "block";

});

button7.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "trening.png • 15/02/2024";
    bodyText.innerHTML = "Robotowi zajął tylko miesiąc żeby zrozumieć i nauczyć się jak obsługiwać oczy i rozróżniać rzeczy, kolory i kształty.";
    file7.style.display = "block";

});

button8.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "meow(meew).mp3 • 17/02/2024";
    bodyText.innerHTML = "MEEW ma w swojej główce wbudowany jeden głośnik za monitorkiem. Przez to że owy monitorek jest zbudowany z dobrze wygiętego elastycznego wyświetlacza OLED, dźwięk łatwo przez niego przechodzi";
    file8.style.display = "block";
    document.querySelector(".meowAudio").style.display = "flex";

});

button9.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "podstawka.png • 23/02/2024";
    bodyText.innerHTML = "podstawka + ładowarka! Na tym urządzeniu MEEW będzie mógł odpocząć od swoich codziennych tasków. Przy okazji, głowa meew niedość że się świeci gdy MEEW jest na niej, to jeszcze nie potrzebuje swojej mini podstawki żeby działać!";
    file9.style.display = "block";

});

button10.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "caleCialo.png • 01/03/2024";
    bodyText.innerHTML = "Niesamowite jak szybko KitCorp sforsował ten projekt. 5 miesięcy zajęło mi uczenie robota podstawowych rzeczy, a teraz w 2 miesiące uwineli się z zamówieniem mi wszystkich części i całego sprzętu. Chyba zobaczyli potencjał jaki może być za tym małym robocikiem. Problem w tym, że chałem aby to był mój personalny projekt, który będzie pomagał w firmie pocieszeniami, miłymi słowami... jak taki prawdziwy kotek, ale którym nie trzeba się zajmować bo nikt nie ma na to czasu. No ale takie są konsekwencje pracowania z ludźmi którzy nie rozumieją twoich intencji. Może będzie bardziej służył innym.";
    file10.style.display = "block";

});

button11.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "czarnyKloc.png • 07/03/2024";
    bodyText.innerHTML =
        "To coś pojawiło się tutaj z dnia na dzień. Jedyne co mi powiedziano, to to, że mam tego kloca podłączyć do podstawki. wyglądem nie przypomina niczego co KitCorp kiedykolwiek zbudowało, po prostu czarny sześcian z monitorkiem i klawiaturą. I to niby ma odpalić tego kota (nie wiem czemu MEEW zrobił taką minę, ale śmieszine wyszło :D )";
    file11.style.display = "block";

});

button12.addEventListener("click", function () {
    hideFiles();
    headerText.innerHTML = "do_zobaczenia_jutro.png • 08/03/2024";
    bodyText.innerHTML = "jutro jego pierwszy test całego ciała";
    file12.style.display = "block";

});

// enter dziala

sprawdzHasloInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        sprawdzHaslo();
    }
});

// sprawdz function

sprawdzHasloButton.addEventListener("animationend", shake);

function shake() {
    sprawdzHasloButton.classList.toggle("shake");
}

function sprawdzHaslo() {
    var podaneHaslo = sprawdzHasloInput.value;

    if (dobreHaslo == podaneHaslo || dobraHaslo2 == podaneHaslo) {
        console.log(headerText.value);
        hidewideFiles();
        headerText.value = "";
        bodyText.value = "";
        sprawdzHasloInput.style.borderColor = "#9ecf80";
        sprawdzHasloButton.style.borderColor = "#9ecf80";
        sprawdzHasloButton.style.boxShadow =
            "rgba(158, 207, 128, 1) 0px 0px 30px";
        sprawdzHasloInput.classList.toggle("hideD");
        header.classList.toggle("opac0");
        Rside.classList.toggle("hideD");
        Lside.classList.toggle("showD");
        LsideBot.classList.toggle("hideB");
    } else if (
        podaneHaslo == "kocham" ||
        podaneHaslo == "kocham cie" ||
        podaneHaslo == "kocham cię" ||
        podaneHaslo == "Kocham" ||
        podaneHaslo == "kocham Cię" ||
        podaneHaslo == "Kocham Cię" ||
        podaneHaslo == "Kocham cie"
    ) {
        sprawdzHasloInput.placeholder = "ja ciebie też <3";
        sprawdzHasloInput.value = "";
    } else if (
        podaneHaslo == "090923" ||
        podaneHaslo == "09.09.23" ||
        podaneHaslo == "09092023" ||
        podaneHaslo == "99" ||
        podaneHaslo == "0909" ||
        podaneHaslo == "09/09/23"
    ) {
        sprawdzHasloInput.placeholder = "niestety nie :c";
        sprawdzHasloInput.value = "";
    } else if (podaneHaslo == "andrii" || podaneHaslo == "Andrii") {
        sprawdzHasloInput.placeholder = "terraria";
        sprawdzHasloInput.value = "";
    } else if (
        podaneHaslo == "michal" ||
        podaneHaslo == "Michal" ||
        podaneHaslo == "michał" ||
        podaneHaslo == "Michał" ||
        podaneHaslo == "radosz" ||
        podaneHaslo == "Radosz" ||
        podaneHaslo == "michal radosz" ||
        podaneHaslo == "Michal Radosz" ||
        podaneHaslo == "michal Radosz" ||
        podaneHaslo == "Michal radosz" ||
        podaneHaslo == "michał radosz" ||
        podaneHaslo == "Michał Radosz" ||
        podaneHaslo == "michał Radosz" ||
        podaneHaslo == "Michał radosz"
    ) {
        sprawdzHasloInput.placeholder = "hej";
        sprawdzHasloInput.value = "";
    } else if (
        podaneHaslo == "maja" ||
        podaneHaslo == "Maja" ||
        podaneHaslo == "maja wolniak" ||
        podaneHaslo == "Maja Wolniak" ||
        podaneHaslo == "maja Wolniak" ||
        podaneHaslo == "Maja wolniak"
    ) {
        sprawdzHasloInput.placeholder = "to ty";
        sprawdzHasloInput.value = "";
    } else if (
        podaneHaslo == "haslo" ||
        podaneHaslo == "Haslo" ||
        podaneHaslo == "hasło" ||
        podaneHaslo == "Hasło"
    ) {
        sprawdzHasloInput.placeholder = "123456";
        sprawdzHasloInput.value = "";
    } else if (podaneHaslo == "admin" || podaneHaslo == "Admin") {
        sprawdzHasloInput.placeholder = "to nie szkolny komp";
        sprawdzHasloInput.value = "";
    } else if (podaneHaslo == "123456") {
        sprawdzHasloInput.placeholder = "hehe";
        sprawdzHasloInput.value = "";
    } else {
        sprawdzHasloInput.value = "";
        shake();
    }
}
