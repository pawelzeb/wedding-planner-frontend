"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[6803],{23:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"installation","title":"Instrukcja Instalacji Aplikacji Planner \u015alubu \u2013 Aplikacji Webowej","description":"Aby zainstalowa\u0107 i uruchomi\u0107 projekt Planner \u015alubu, nale\u017cy przej\u015b\u0107 przez kilka krok\xf3w obejmuj\u0105cych instalacj\u0119 niezb\u0119dnych narz\u0119dzi i zale\u017cno\u015bci. Poni\u017cej znajduje si\u0119 szczeg\xf3\u0142owy przewodnik krok po kroku, kt\xf3ry pomo\u017ce Ci skonfigurowa\u0107 \u015brodowisko zar\xf3wno na systemach Linux/Unix (np. Arch Linux, Arch WSL), jak i Windows.","source":"@site/docs/installation.md","sourceDirName":".","slug":"/installation","permalink":"/wedding-planner-frontend/docs/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/pawelzeb/wedding-planner-frontend/edit/main/my-docs/docs/installation.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Funkcjonalno\u015bci Planera \u015alubu","permalink":"/wedding-planner-frontend/docs/features"},"next":{"title":"Interfejs aplikacji","permalink":"/wedding-planner-frontend/docs/interface"}}');var r=i(4848),s=i(8453);const l={},c="Instrukcja Instalacji Aplikacji Planner \u015alubu \u2013 Aplikacji Webowej",o={},d=[{value:"Spis Tre\u015bci",id:"spis-tre\u015bci",level:2},{value:"1. Wymagania Systemowe",id:"1-wymagania-systemowe",level:2},{value:"2. W\u0142\u0105czenie Trybu Wirtualizacji w BIOS-ie",id:"2-w\u0142\u0105czenie-trybu-wirtualizacji-w-bios-ie",level:2},{value:"3. Instalacja Mened\u017cera Pakiet\xf3w",id:"3-instalacja-mened\u017cera-pakiet\xf3w",level:2},{value:"Arch Linux / Arch WSL:",id:"arch-linux--arch-wsl",level:3},{value:"Windows:",id:"windows",level:3},{value:"4. Instalacja Niezb\u0119dnych Pakiet\xf3w",id:"4-instalacja-niezb\u0119dnych-pakiet\xf3w",level:2},{value:"5. Instalacja Docker",id:"5-instalacja-docker",level:2},{value:"Arch Linux / Arch WSL:",id:"arch-linux--arch-wsl-1",level:3},{value:"Windows:",id:"windows-1",level:3},{value:"6. Konfiguracja Uprawnie\u0144 Administracyjnych",id:"6-konfiguracja-uprawnie\u0144-administracyjnych",level:2},{value:"Arch Linux / Arch WSL:",id:"arch-linux--arch-wsl-2",level:3},{value:"Windows:",id:"windows-2",level:3},{value:"7. Instalacja Dodatkowych Zale\u017cno\u015bci",id:"7-instalacja-dodatkowych-zale\u017cno\u015bci",level:2},{value:"Node.js i npm:",id:"nodejs-i-npm",level:3},{value:"Baza Danych:",id:"baza-danych",level:3},{value:"8. Klonowanie Repozytori\xf3w Projektu",id:"8-klonowanie-repozytori\xf3w-projektu",level:2},{value:"9. Instalacja Zale\u017cno\u015bci Projektu",id:"9-instalacja-zale\u017cno\u015bci-projektu",level:2},{value:"10. Budowanie i Uruchamianie Aplikacji",id:"10-budowanie-i-uruchamianie-aplikacji",level:2},{value:"11. Rozwi\u0105zywanie Problem\xf3w",id:"11-rozwi\u0105zywanie-problem\xf3w",level:2},{value:"12. Podsumowanie",id:"12-podsumowanie",level:2}];function t(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"instrukcja-instalacji-aplikacji-planner-\u015blubu--aplikacji-webowej",children:"Instrukcja Instalacji Aplikacji Planner \u015alubu \u2013 Aplikacji Webowej"})}),"\n",(0,r.jsx)(e.p,{children:"Aby zainstalowa\u0107 i uruchomi\u0107 projekt Planner \u015alubu, nale\u017cy przej\u015b\u0107 przez kilka krok\xf3w obejmuj\u0105cych instalacj\u0119 niezb\u0119dnych narz\u0119dzi i zale\u017cno\u015bci. Poni\u017cej znajduje si\u0119 szczeg\xf3\u0142owy przewodnik krok po kroku, kt\xf3ry pomo\u017ce Ci skonfigurowa\u0107 \u015brodowisko zar\xf3wno na systemach Linux/Unix (np. Arch Linux, Arch WSL), jak i Windows."}),"\n",(0,r.jsx)(e.h2,{id:"spis-tre\u015bci",children:"Spis Tre\u015bci"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#1-wymagania-systemowe",children:"Wymagania Systemowe"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#2-w%C5%82%C4%85czenie-trybu-wirtualizacji-w-bios-ie",children:"W\u0142\u0105czenie Trybu Wirtualizacji w BIOS-ie"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#3-instalacja-mened%C5%BCera-pakiet%C3%B3w",children:"Instalacja Mened\u017cera Pakiet\xf3w"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#4-instalacja-niezb%C4%99dnych-pakiet%C3%B3w",children:"Instalacja Niezb\u0119dnych Pakiet\xf3w"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#5-instalacja-docker",children:"Instalacja Docker"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#6-konfiguracja-uprawnie%C5%84-administracyjnych",children:"Konfiguracja Uprawnie\u0144 Administracyjnych"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#7-instalacja-dodatkowych-zale%C5%BCno%C5%9Bci",children:"Instalacja Dodatkowych Zale\u017cno\u015bci"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#8-klonowanie-repozytori%C3%B3w-projektu",children:"Klonowanie Repozytori\xf3w Projektu"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#9-instalacja-zale%C5%BCno%C5%9Bci-projektu",children:"Instalacja Zale\u017cno\u015bci Projektu"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#10-budowanie-i-uruchamianie-aplikacji",children:"Budowanie i Uruchamianie Aplikacji"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#11-rozwi%C4%85zywanie-problem%C3%B3w",children:"Rozwi\u0105zywanie Problem\xf3w"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#12-podsumowanie",children:"Podsumowanie"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"1-wymagania-systemowe",children:"1. Wymagania Systemowe"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"System Operacyjny"}),": Linux/Unix (np. Arch Linux, Arch WSL) lub Windows"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Uprawnienia Administracyjne"}),": Niezb\u0119dne do instalacji niekt\xf3rych narz\u0119dzi"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Po\u0142\u0105czenie Internetowe"}),": Do pobierania pakiet\xf3w i zale\u017cno\u015bci"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"2-w\u0142\u0105czenie-trybu-wirtualizacji-w-bios-ie",children:"2. W\u0142\u0105czenie Trybu Wirtualizacji w BIOS-ie"}),"\n",(0,r.jsx)(e.p,{children:"Aby korzysta\u0107 ze \u015brodowisk wirtualnych, takich jak WSL, w\u0142\u0105cz wirtualizacj\u0119 w BIOS-ie:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Restartuj komputer i naci\u015bnij klawisz dost\u0119pu do BIOS (np. F2, F10, DEL)."}),"\n",(0,r.jsxs)(e.li,{children:["Znajd\u017a opcj\u0119 ",(0,r.jsx)(e.strong,{children:"Virtualization Technology"})," i w\u0142\u0105cz j\u0105."]}),"\n",(0,r.jsx)(e.li,{children:"Zapisz zmiany i uruchom komputer ponownie."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"3-instalacja-mened\u017cera-pakiet\xf3w",children:"3. Instalacja Mened\u017cera Pakiet\xf3w"}),"\n",(0,r.jsx)(e.h3,{id:"arch-linux--arch-wsl",children:"Arch Linux / Arch WSL:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Pacman"}),": Jest domy\u015blnie zainstalowany w Arch Linux i Arch WSL. U\u017cyj go do instalacji potrzebnych pakiet\xf3w."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"windows",children:"Windows:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Chocolatey"})," lub ",(0,r.jsx)(e.strong,{children:"Scoop"}),": U\u017cyj jednego z tych mened\u017cer\xf3w pakiet\xf3w do instalacji niezb\u0119dnych narz\u0119dzi."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"WSL (Windows Subsystem for Linux)"}),": Alternatywnie, zainstaluj WSL i skonfiguruj dystrybucj\u0119 Linux (np. Arch) dla korzystania z narz\u0119dzi Linuxowych."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"4-instalacja-niezb\u0119dnych-pakiet\xf3w",children:"4. Instalacja Niezb\u0119dnych Pakiet\xf3w"}),"\n",(0,r.jsx)(e.p,{children:"Aby zainstalowa\u0107 wszystkie niezb\u0119dne pakiety wymagane przez projekt Planner \u015alubu, u\u017cyj poni\u017cszego polecenia:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Opcja Kompleksowa:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo pacman -S --needed docker php docker-compose mariadb zip unzip p7zip\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Opis: Instaluje pakiety: docker, php, docker-compose, mariadb, zip, unzip, p7zip. Opcja ",(0,r.jsx)(e.code,{children:"--needed"})," sprawdza, czy pakiet nie jest ju\u017c zainstalowany."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Opcja Alternatywna (bez MariaDB):"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo pacman -S --needed docker php docker-compose zip unzip p7zip\n"})}),"\n",(0,r.jsx)(e.h2,{id:"5-instalacja-docker",children:"5. Instalacja Docker"}),"\n",(0,r.jsx)(e.p,{children:"Docker jest niezb\u0119dny do zarz\u0105dzania kontenerami aplikacji."}),"\n",(0,r.jsx)(e.h3,{id:"arch-linux--arch-wsl-1",children:"Arch Linux / Arch WSL:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Instalacja Dockera:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo pacman -S docker\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Uruchomienie i w\u0142\u0105czenie us\u0142ugi Docker:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo systemctl start docker\r\nsudo systemctl enable docker\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Dodanie u\u017cytkownika do grupy docker (opcjonalnie):"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo usermod -aG docker $USER\n"})}),"\n",(0,r.jsx)(e.p,{children:"Uwaga: Po wykonaniu tego polecenia wyloguj si\u0119 i zaloguj ponownie, aby zmiany zacz\u0119\u0142y obowi\u0105zywa\u0107."}),"\n",(0,r.jsx)(e.h3,{id:"windows-1",children:"Windows:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Pobierz ",(0,r.jsx)(e.strong,{children:"Docker Desktop"})," ze strony ",(0,r.jsx)(e.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker"}),"."]}),"\n",(0,r.jsx)(e.li,{children:"Upewnij si\u0119, \u017ce zaznaczone s\u0105 opcje WSL 2 oraz integracja z WSL."}),"\n",(0,r.jsx)(e.li,{children:"Po instalacji uruchom Docker Desktop."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Sprawdzenie instalacji:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-powershell",children:"docker --version\n"})}),"\n",(0,r.jsx)(e.h2,{id:"6-konfiguracja-uprawnie\u0144-administracyjnych",children:"6. Konfiguracja Uprawnie\u0144 Administracyjnych"}),"\n",(0,r.jsx)(e.h3,{id:"arch-linux--arch-wsl-2",children:"Arch Linux / Arch WSL:"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"sudo"})," jest domy\u015blnie skonfigurowane."]}),"\n",(0,r.jsx)(e.h3,{id:"windows-2",children:"Windows:"}),"\n",(0,r.jsx)(e.p,{children:"Je\u015bli u\u017cywasz WSL, upewnij si\u0119, \u017ce masz odpowiednie uprawnienia administracyjne w systemie Windows."}),"\n",(0,r.jsx)(e.h2,{id:"7-instalacja-dodatkowych-zale\u017cno\u015bci",children:"7. Instalacja Dodatkowych Zale\u017cno\u015bci"}),"\n",(0,r.jsx)(e.h3,{id:"nodejs-i-npm",children:"Node.js i npm:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo pacman -S nodejs npm\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Na Windows pobierz instalator z ",(0,r.jsx)(e.a,{href:"https://nodejs.org/",children:"Node.js"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Instalacja Vite i pluginu Vue:"})}),"\n",(0,r.jsx)(e.p,{children:"Utworzenie projektu Vite"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm create vite@latest\r\n  cd vite-project\n"})}),"\n",(0,r.jsx)(e.p,{children:"Instalacja TailwindCSS, PostCSS i Autoprefixer"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm install -D tailwindcss postcss autoprefixer\r\nnpx tailwindcss initt\n"})}),"\n",(0,r.jsx)(e.p,{children:"Instalacja Vue Router"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm install vue-router@next\n"})}),"\n",(0,r.jsx)(e.p,{children:"Instalacja Bootstrap i FontAwesome"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm install bootstrap @fortawesome/fontawesome-free\n"})}),"\n",(0,r.jsx)(e.p,{children:"Instalacja Chart.js"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm install chart.js@latest\n"})}),"\n",(0,r.jsx)(e.p,{children:"Zainstalowanie zale\u017cno\u015bci projektu i uruchomienie serwera deweloperskiego"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm install\r\nnpm run dev\n"})}),"\n",(0,r.jsx)(e.p,{children:"Pobierz zawarto\u015b\u0107 projektu"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"git pull\n"})}),"\n",(0,r.jsx)(e.p,{children:"Instalacja Node.js i npm (w razie problem\xf3w)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo pacman -S nodejs npm\r\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"baza-danych",children:"Baza Danych:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"PostgreSQL:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo pacman -S postgresql\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"MySQL:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo pacman -S mysql\n"})}),"\n",(0,r.jsx)(e.h2,{id:"8-klonowanie-repozytori\xf3w-projektu",children:"8. Klonowanie Repozytori\xf3w Projektu"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Instalacja Git:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo pacman -S git\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Klonowanie Repozytori\xf3w:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/sam21401/Wedding-Planner\n"})}),"\n",(0,r.jsx)(e.h2,{id:"9-instalacja-zale\u017cno\u015bci-projektu",children:"9. Instalacja Zale\u017cno\u015bci Projektu"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Backend:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"cd Wedding-Planner\r\nmake install\r\nmake run\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Frontend:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"cd Wedding-Planner-Frontend\r\nmake install\r\nmake run\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Sprawdzenie wersji Vue:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm list vue\n"})}),"\n",(0,r.jsx)(e.p,{children:"Przyk\u0142adowy output:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plaintext",children:"frontend@1.0.0 D:\\projekt_rewak\\Wedding-Planner-Frontend-1\r\n\u2514\u2500\u252c @vitejs/plugin-vue@5.2.1\r\n  \u2514\u2500\u252c vue@3.5.13\r\n    \u2514\u2500\u252c @vue/server-renderer@3.5.13\r\n      \u2514\u2500\u2500 vue@3.5.13 deduped\n"})}),"\n",(0,r.jsx)(e.h2,{id:"10-budowanie-i-uruchamianie-aplikacji",children:"10. Budowanie i Uruchamianie Aplikacji"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Backend:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"make build\r\nmake start\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Frontend:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"make build\r\nmake start\n"})}),"\n",(0,r.jsx)(e.h2,{id:"11-rozwi\u0105zywanie-problem\xf3w",children:"11. Rozwi\u0105zywanie Problem\xf3w"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Docker nie uruchamia si\u0119 poprawnie:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo systemctl status docker\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Problemy z zale\u017cno\u015bciami npm:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"rm -rf node_modules\r\nnpm install\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Aplikacja nie jest dost\u0119pna pod oczekiwanym adresem:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"docker ps\n"})}),"\n",(0,r.jsx)(e.h2,{id:"12-podsumowanie",children:"12. Podsumowanie"}),"\n",(0,r.jsx)(e.p,{children:"Powy\u017cszy przewodnik powinien pom\xf3c w zainstalowaniu i uruchomieniu aplikacji Planner \u015alubu. W razie problem\xf3w skorzystaj z dokumentacji narz\u0119dzi lub spo\u0142eczno\u015bci programistycznych."})]})}function j(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(t,{...n})}):t(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var a=i(6540);const r={},s=a.createContext(r);function l(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);