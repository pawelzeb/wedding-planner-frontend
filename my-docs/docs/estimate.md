# Definicja zada� i ich oceny

tasks := \
    "Konteneryzacja �rodowiska"           4 6 4 6 4.75 \
    "Logowanie"                           5 5 6 4 5 \
    "Uwierzytelnianie dwusk�adnikowe (2FA)" 5 6 4 6 5.25 \
    "Weryfikacja e-maila"                 4 3 4 5 4 \
    "Rejestracja przez Facebook"          3 4 3 4 3.5 \
    "Rejestracja przez Google"            3 4 3 4 3.5 \
    "Rejestracja przez e-mail"            3 3 4 4 3.5 \
    "Resetowanie has�a"                   2 3 3 4 3 \
    "Tworzenie i edytowanie �lubu"        10 9 10 11 10.5 \
    "Lista go�ci"                         3 3 3 4 3.25 \
    "Lista zada�"                         3 3 3 4 3.25 \
    "Status i odpowied� go�ci"            3 3 3 4 3.25 \
    "Eksport danych"                      3 3 3 4 3.25 \
    "Zaproszenie e-mailowe"               5 5 4 6 5 \
    "Lista preferencji �ywieniowych"      3 3 3 4 3.25 \
    "Kalkulator koszt�w"                  3 3 3 4 3.25 \
    "Mapa i wskaz�wki dojazdu"            4 3 3 4 3.5 \
    "Landing page"                        4 5 4 5 4.5 \
    "Informacje o �lubie + aktualizacje"  4 5 4 5 4.5 \
    "Lista prezent�w + edycja"            3 3 3 4 3.25 \
    "Role rodzinne"                       3 3 3 4 3.25 \
    "Zapraszanie innych u�ytkownik�w do �lubu" 4 5 4 5 4.5 \
    "Obs�uga kilku j�zyk�w"               3 3 4 5 3.75 \
    "Frontend"                            4 3 4 5 4 \
    "Formularz rejestracyjny"             3 3 3 5 3.5 \
    "Edycja miejsc go�ci"                 3 3 3 5 3.5 \
    "Tryb jasny/ciemny"                   3 3 3 4 3.25 \
    "Wdro�enie"                           3 3 4 5 3.75

# Podsumowanie ocen
samuel := 116
adam := 118
pawel := 127
jan := 141
srednia := 125

# Wypisz wyniki
all:
	@echo "Podsumowanie zada�:"
	@printf "%-40s %-10s %-10s %-10s %-10s %-10s\n" "Task" "Samuel" "Adam" "Pawel" "Jan" "Srednia"
	@echo "----------------------------------------------------------------------"
	@echo $(tasks) | xargs -n6 printf "%-40s %-10s %-10s %-10s %-10s %-10s\n"
	@echo "----------------------------------------------------------------------"
	@printf "%-40s %-10s %-10s %-10s %-10s %-10s\n" "SUMA" $(samuel) $(adam) $(pawel) $(jan) $(srednia)
