---
sidebar_position: 3
---

# Instrukcja Instalacji Aplikacji Planner Ślubu

Aby zainstalować i uruchomić projekt Planner Ślubu, należy przejść przez kilka kroków obejmujących instalację niezbędnych narzędzi i zależności. Poniżej znajduje się szczegółowy przewodnik krok po kroku, który pomoże Ci skonfigurować środowisko zarówno na systemach Linux/Unix (np. Arch Linux, Arch WSL), jak i Windows.

## Spis Treści
1. [Wymagania Systemowe](#1-wymagania-systemowe)
2. [Włączenie Trybu Wirtualizacji w BIOS-ie](#2-włączenie-trybu-wirtualizacji-w-bios-ie)
3. [Instalacja Menedżera Pakietów](#3-instalacja-menedżera-pakietów)
4. [Instalacja Niezbędnych Pakietów](#4-instalacja-niezbędnych-pakietów)
5. [Instalacja Docker](#5-instalacja-docker)
6. [Konfiguracja Uprawnień Administracyjnych](#6-konfiguracja-uprawnień-administracyjnych)
7. [Instalacja Dodatkowych Zależności](#7-instalacja-dodatkowych-zależności)
8. [Klonowanie Repozytoriów Projektu](#8-klonowanie-repozytoriów-projektu)
9. [Instalacja Zależności Projektu](#9-instalacja-zależności-projektu)
10. [Budowanie i Uruchamianie Aplikacji](#10-budowanie-i-uruchamianie-aplikacji)
11. [Rozwiązywanie Problemów](#11-rozwiązywanie-problemów)
12. [Podsumowanie](#12-podsumowanie)

## 1. Wymagania Systemowe
- **System Operacyjny**: Linux/Unix (np. Arch Linux, Arch WSL) lub Windows  
- **Uprawnienia Administracyjne**: Niezbędne do instalacji niektórych narzędzi  
- **Połączenie Internetowe**: Do pobierania pakietów i zależności  

## 2. Włączenie Trybu Wirtualizacji w BIOS-ie
Aby korzystać ze środowisk wirtualnych, takich jak WSL, włącz wirtualizację w BIOS-ie:
- Restartuj komputer i naciśnij klawisz dostępu do BIOS (np. F2, F10, DEL).
- Znajdź opcję **Virtualization Technology** i włącz ją.
- Zapisz zmiany i uruchom komputer ponownie.

## 3. Instalacja Menedżera Pakietów
### Arch Linux / Arch WSL:
- **Pacman**: Jest domyślnie zainstalowany w Arch Linux i Arch WSL. Użyj go do instalacji potrzebnych pakietów.

### Windows:
- **Chocolatey** lub **Scoop**: Użyj jednego z tych menedżerów pakietów do instalacji niezbędnych narzędzi.
- **WSL (Windows Subsystem for Linux)**: Alternatywnie, zainstaluj WSL i skonfiguruj dystrybucję Linux (np. Arch) dla korzystania z narzędzi Linuxowych.

## 4. Instalacja Niezbędnych Pakietów
Aby zainstalować wszystkie niezbędne pakiety wymagane przez projekt Planner Ślubu, użyj poniższego polecenia:

**Opcja Kompleksowa:**
```bash
sudo pacman -S --needed docker php docker-compose mariadb zip unzip p7zip
```
Opis: Instaluje pakiety: docker, php, docker-compose, mariadb, zip, unzip, p7zip. Opcja `--needed` sprawdza, czy pakiet nie jest już zainstalowany.

**Opcja Alternatywna (bez MariaDB):**
```bash
sudo pacman -S --needed docker php docker-compose zip unzip p7zip
```

## 5. Instalacja Docker
Docker jest niezbędny do zarządzania kontenerami aplikacji.

### Arch Linux / Arch WSL:
**Instalacja Dockera:**
```bash
sudo pacman -S docker
```
**Uruchomienie i włączenie usługi Docker:**
```bash
sudo systemctl start docker
sudo systemctl enable docker
```
**Dodanie użytkownika do grupy docker (opcjonalnie):**
```bash
sudo usermod -aG docker $USER
```
Uwaga: Po wykonaniu tego polecenia wyloguj się i zaloguj ponownie, aby zmiany zaczęły obowiązywać.

### Windows:
- Pobierz **Docker Desktop** ze strony [Docker](https://www.docker.com/products/docker-desktop).
- Upewnij się, że zaznaczone są opcje WSL 2 oraz integracja z WSL.
- Po instalacji uruchom Docker Desktop.

**Sprawdzenie instalacji:**
```powershell
docker --version
```

## 6. Konfiguracja Uprawnień Administracyjnych
### Arch Linux / Arch WSL:
`sudo` jest domyślnie skonfigurowane.

### Windows:
Jeśli używasz WSL, upewnij się, że masz odpowiednie uprawnienia administracyjne w systemie Windows.

## 7. Instalacja Dodatkowych Zależności
### Node.js i npm:
```bash
sudo pacman -S nodejs npm
```
Na Windows pobierz instalator z [Node.js](https://nodejs.org/).

**Instalacja Vite i pluginu Vue:**

Utworzenie projektu Vite
```bash
npm create vite@latest
  cd vite-project
```
Instalacja TailwindCSS, PostCSS i Autoprefixer
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss initt
```
Instalacja Vue Router
```bash
npm install vue-router@next
```
Instalacja Bootstrap i FontAwesome
```bash
npm install bootstrap @fortawesome/fontawesome-free
```
Instalacja Chart.js
```bash
npm install chart.js@latest
```
Zainstalowanie zależności projektu i uruchomienie serwera deweloperskiego
```bash
npm install
npm run dev
```
Pobierz zawartość projektu
```bash
git pull
```
Instalacja Node.js i npm (w razie problemów)
```bash
sudo pacman -S nodejs npm

```
### Baza Danych:
**PostgreSQL:**
```bash
sudo pacman -S postgresql
```
**MySQL:**
```bash
sudo pacman -S mysql
```

## 8. Klonowanie Repozytoriów Projektu
**Instalacja Git:**
```bash
sudo pacman -S git
```
**Klonowanie Repozytoriów:**
```bash
git clone https://github.com/sam21401/Wedding-Planner-Frontend
git clone https://github.com/sam21401/Wedding-Planner
git clone https://github.com/sam21401/Wedding-Proxy
```

## 9. Instalacja Zależności Projektu
**Backend:**
```bash
cd Wedding-Planner
make install
make run
```
**Frontend:**
```bash
cd Wedding-Planner-Frontend
make install
make run
```
**Sprawdzenie wersji Vue:**
```bash
npm list vue
```
Przykładowy output:
```plaintext
frontend@1.0.0 D:\projekt_rewak\Wedding-Planner-Frontend-1
└─┬ @vitejs/plugin-vue@5.2.1
  └─┬ vue@3.5.13
    └─┬ @vue/server-renderer@3.5.13
      └── vue@3.5.13 deduped
```

## 10. Budowanie i Uruchamianie Aplikacji
**Backend:**
```bash
make build
make start
```
**Frontend:**
```bash
make build
make start
```

## 11. Rozwiązywanie Problemów
**Docker nie uruchamia się poprawnie:**
```bash
sudo systemctl status docker
```
**Problemy z zależnościami npm:**
```bash
rm -rf node_modules
npm install
```
**Aplikacja nie jest dostępna pod oczekiwanym adresem:**
```bash
docker ps
```

## 12. Podsumowanie
Powyższy przewodnik powinien pomóc w zainstalowaniu i uruchomieniu aplikacji Planner Ślubu. W razie problemów skorzystaj z dokumentacji narzędzi lub społeczności programistycznych.
