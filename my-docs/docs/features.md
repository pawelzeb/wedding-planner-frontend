# Funkcjonalności Planera Ślubu

## Użytkownik (Państwo młodzi i współorganizatorzy)

### Logowanie i Rejestracja
- Możliwość rejestracji przez e-mail, Facebook, Google.
- Weryfikacja konta przez e-mail.
- Uwierzytelnianie dwuskładnikowe (2FA).
- Funkcja resetowania hasła.


![Rejestracja](/static/img/docusaurus-social-card2.jpg)

### Tworzenie wesela
- Tworzenie wydarzenia weselnego jako głównej bazy organizacyjnej.

![Rejestracja](/static/img/docusaurus-social-card3.jpg)

### Lista gości
- Możliwość tworzenia listy gości z przypisaniem statusów:
  - "Czekamy na odpowiedź",
  - "Potwierdzony",
  - "Niepotwierdzony".
- Przypisywanie preferencji żywieniowych.
- Eksport listy gości do pliku CSV.

### Lista zadań
- Tworzenie listy zadań z przypisaniem statusów:
  - "Do zrobienia",
  - "W trakcie",
  - "Zrobione".
- Dodawanie terminów wykonania (deadline) i notatek do zadań.

### Kalkulator kosztów
- Narzędzie do planowania budżetu i monitorowania wydatków.

### Landing page wesela
- Tworzenie strony internetowej z informacjami o weselu:
  - Mapa dojazdu.
  - Oczekiwania prezentowe.
  - Kontakt do organizatorów.
  - Aktualizacje wydarzenia.

---

## Administrator

### Zarządzanie użytkownikami
- Monitorowanie procesów rejestracji użytkowników.
- Zapewnienie poprawnej integracji z zewnętrznymi systemami (Facebook, Google, e-mail).

### Zarządzanie serwisem
- Monitorowanie działania aplikacji i eksportu plików.
- Zapewnienie bezpieczeństwa danych.

---

## Frontend

### Interfejs użytkownika
#### Obecne funkcjonalności
- **Zwiększ rozmiar tekstu**: Możliwość zwiększania tekstu obok opcji zmniejszania.
- **Zmienny rozmiar interfejsu**: Opcje powiększania i zmniejszania całego interfejsu.
- **Czcionki czytelne dla dyslektyków**: Przełącznik umożliwiający wybór czcionek takich jak OpenDyslexic.
- **Przewodnik audio**: Narrator czytający treści interfejsu.
- **Pauza animacji**: Wyłączanie animacji i efektów przejścia dla osób wrażliwych na ruch.
- **Tryb nocny**: Rozbudowany tryb ciemny z możliwością regulacji jasności i tonacji.
- **Konfiguracja kontrastów**: Ustawienia poziomu kontrastu (więcej opcji niż tylko "wysoki kontrast").
- **Zapisywanie ustawień**: Funkcja zapisywania preferencji w przeglądarce użytkownika.
- **Przewodnik wizualny**: Instrukcja wyjaśniająca działanie opcji dostępności.
- Przełącznik języka (PL/EN).
---

## Technologia
- Docker, Redis, Laravel, Vue.js.
