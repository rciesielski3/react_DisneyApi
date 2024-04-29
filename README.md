Source:
https://rciesielski3.github.io/react_DisneyApi

Treść zadania: Celem pracy domowe jest wykonanie prostej aplikacji która pobierze dane z API i wyświetli je w postaci kafelków na stronie. Klikniecie w odpowiednim miejscu w kafelek spowoduje otwarcie modala posiadającego więcej informacji na temat danej postaci. Strona będzie posiadać paginację oraz zmianę motywu z jasnego na ciemny.

Wytyczne:

1. Do ostylowania aplikacji używamy styled-components
2. Sugeruję zapoznać się z biblioteką material-ui, nie jest to element obowiązkowy, jednak może przyspieszyć prace developerskie.
3. Theming można rozwiązać na na jeden z dwóch sposobów:
4. Poprzez samodzielnie stworzony context oraz obiekt przechowujący wartości CSS.

Sposób opisany w dokumentacji styled-components.

Strona główna

1. Switch do zmiany motywu umieszczamy w prawym górnym rogu aplikacji.
2. Wyświetlane karty powinny być responsywne i wypełniać dostępną przestrzeń.
3. Karta zawiera zdjęcie postaci, nazwę oraz przycisk który obsłuży otwarcie modala.
4. Paginację umieszczamy na dole strony.
5. Elementy powinny zostać wykonane estetycznie.

Pobieranie i wyświetlanie danych.

1. Dane pobieramy z publicznego API https://disneyapi.dev/docs
2. Cała logika biznesowa powinna zostać umieszczona w custom hookach.
3. Podczas pobierania danych dbamy o obsługę błędów.
4. W czasie gdy czekamy na dane wyświetlamy stosowny loader.

Paginacja

1. Paginacja powinna wyświetlać prawdziwą ilość dostępnych stron.
2. Paginacja powinna zostać wykonana w sposób estetyczny.
3. Na paginacji powinna być zaznaczona strona na której się znajdujemy.

Modal

1. Modal tworzymy za pomoc react portal
2. Po otwarciu modala pobieramy dane danej postaci na podstawie id.
3. Na modalu wyświetlamy więcej informacji na temat danej postaci takie jak: films, shortFilms, videoGames, tvShows. Warto zwrócić uwagę że poszczególne postaci będą znacząco różniły się od siebie ilością posiadanych informacji.
4. Wyświetlamy tylko te informacje które posiada dana postać.
5. Zdjęcie postaci na modalu powinno być okrągłe.
6. Modal zamykamy za pomocą przycisku lub klikając poza nim.
7. Modal również polega zmianie motywu
