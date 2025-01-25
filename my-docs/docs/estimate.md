# Definicja zadañ i ich oceny

tasks := \
    "Konteneryzacja œrodowiska"           4 6 4 6 4.75 \
    "Logowanie"                           5 5 6 4 5 \
    "Uwierzytelnianie dwusk³adnikowe (2FA)" 5 6 4 6 5.25 \
    "Weryfikacja e-maila"                 4 3 4 5 4 \
    "Rejestracja przez Facebook"          3 4 3 4 3.5 \
    "Rejestracja przez Google"            3 4 3 4 3.5 \
    "Rejestracja przez e-mail"            3 3 4 4 3.5 \
    "Resetowanie has³a"                   2 3 3 4 3 \
    "Tworzenie i edytowanie œlubu"        10 9 10 11 10.5 \
    "Lista goœci"                         3 3 3 4 3.25 \
    "Lista zadañ"                         3 3 3 4 3.25 \
    "Status i odpowiedŸ goœci"            3 3 3 4 3.25 \
    "Eksport danych"                      3 3 3 4 3.25 \
    "Zaproszenie e-mailowe"               5 5 4 6 5 \
    "Lista preferencji ¿ywieniowych"      3 3 3 4 3.25 \
    "Kalkulator kosztów"                  3 3 3 4 3.25 \
    "Mapa i wskazówki dojazdu"            4 3 3 4 3.5 \
    "Landing page"                        4 5 4 5 4.5 \
    "Informacje o œlubie + aktualizacje"  4 5 4 5 4.5 \
    "Lista prezentów + edycja"            3 3 3 4 3.25 \
    "Role rodzinne"                       3 3 3 4 3.25 \
    "Zapraszanie innych u¿ytkowników do œlubu" 4 5 4 5 4.5 \
    "Obs³uga kilku jêzyków"               3 3 4 5 3.75 \
    "Frontend"                            4 3 4 5 4 \
    "Formularz rejestracyjny"             3 3 3 5 3.5 \
    "Edycja miejsc goœci"                 3 3 3 5 3.5 \
    "Tryb jasny/ciemny"                   3 3 3 4 3.25 \
    "Wdro¿enie"                           3 3 4 5 3.75

# Podsumowanie ocen
samuel := 116
adam := 118
pawel := 127
jan := 141
srednia := 125

# Wypisz wyniki
all:
	@echo "Podsumowanie zadañ:"
	@printf "%-40s %-10s %-10s %-10s %-10s %-10s\n" "Task" "Samuel" "Adam" "Pawel" "Jan" "Srednia"
	@echo "----------------------------------------------------------------------"
	@echo $(tasks) | xargs -n6 printf "%-40s %-10s %-10s %-10s %-10s %-10s\n"
	@echo "----------------------------------------------------------------------"
	@printf "%-40s %-10s %-10s %-10s %-10s %-10s\n" "SUMA" $(samuel) $(adam) $(pawel) $(jan) $(srednia)
