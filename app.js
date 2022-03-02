

function RandomQuestion() {
    let Question;
    switch (Math.floor(Math.random() * 20)+1) {
        case 1:
            Question ="1. Napisati funkciju koja klonira niz koji joj je prosledjen kao argument"
            break;

        case 2:
            Question ="2. Napisati funkciju koja vraca poslednji element iz niza koji joj je prosledjen kao argument"
            break;

        case 3:
            Question ="3. Napisati funkciju koja spaja sve elemente jednog niza u String"
            break;

        case 4:
            Question ="4. Napisati funkciju koja prihvata niz brojeva kao argument i za svaki od njih proverava da li je paran ili neparan. Ukoliko je paran vraca `$BROJ is even`, u suprotnom `$BROJ is odd.` Ako je nula, onda `Number is zero!`"
            break;
        
        case 5:
            Question ="5. Napisati funkciju koja ce niz koji prihvati kao argument da sortira u rastucem redosledu (testirati na nizu Brojeva i nizu Stringova)"
            break;
        
        case 6:
            Question ="6. Napisati funkciju koja ispisuje elemente pod nizova. Npr ako su pod-nizovi [[1,2,3] , [4,5,6]] onda je rezultat funkcije: `Array number $REDNI_BROJ_NIZA contains these elements: $ELEMENTI`"
            break;
        
        case 7:
            Question ="7. Napisati funkciju koja sabira ukupan PROIZVOD i ukupan ZBIR svih elemenata iz niza prosledjenog kao argument. Takodje, dodati validaciju koja provera da li je SVAKI element iz prosledjenog niza broj. Ako bar jedan element nije broj, ispisati `Each element in array has to be a number.`"
            break;
        
        case 8:
            Question ="8. Pozvati funkciju prompt() 3 puta i svakom prilikom uneti nesto u input polje. Unetu vrednost dodati u isti niz i na kraju ga ispisati."
            break;

        case 9:
            Question ="9. Svaku vrednost iz prethodnog niza ukoliko je u pitanju broj zapisan u String formatu (npr '55') pretvoriti u broj 55 i pri tome ga zameniti u nizu. Dakle, ako je '55' (string), pretvori se u 55 (broj) i potom se umesto '55' (stringa) sada u nizu treba naci 55 (broj)"
            break;

        case 10:
            Question ="10. Napisati funkciju koja ce za niz godina prosledjen kao argument utvrditi koja je od godina prestupna. Ako je prestupna, ispisati `$GODINA is a leap year!` ! NAPOMENA: Godina je prestupna ako je deljiva za 400. Takodje, godina je prestupna ako je deljiva sa 4 i nedeljiva sa 100."
            break;

        case 11:
            Question ="11. Napisati funkciju koja iz niza prihvacenog kao argument vraca duplikate "
            break;

        case 12:
            Question ="12. Napisati funkciju koja ce sabrati sve brojeve iz unije 3 niza"
            break;

        case 13:
            Question ="13. Napisati funkciju koja ce vrednosti 0, false, undefined, null otkloniti iz niza prosledjenog kao argument"
            break;
            
        case 14:
            Question ="14. Napisati funkciju koja ce ovaj niz sa knjigama sortirati rastuce po naslovu: Prvi Objekat [ id: 1, author: 'Steven King', title: 'Misery'] , Drugi objekat: [id: 2, author: 'Steven King', title: 'The Shining'] i Treci objekat u nizu je : [id: 3,author: 'Steven King',title: 'Doctor Sleep']. "
            break;
        
        case 15:
            Question ="15. Napisati funkciju koja ce iz niza prosledjenog kao argument vratiti najveci broj "
            break;
        
        case 16:
            Question ="16. Kreirati funkciju koja vraca niz koji inicijalno na svakoj poziciji ima broj 0 (dakle npr -> [0,0,0,0,0]); Parametar neka bude broj koji odredjuje duzinu niza (npr ako se funkciji prosledi broj 5, onda se kreira niz od 5 elemenata (duzine 5))."
            break;

        case 17:
            Question ="17. Napisati funkciju koja reverse-uje niz prosledjen kao argument. Npr [1,2,3] => [3,2,1]. Pokusati prvo BEZ reverse() funkcije."
            break;

        case 18:
            Question ="18. Napisati funkciju koja vraca TRUE ako su dva niza identicna (ako su im svi elementi medjusobno isti)"
            break;

        case 19:
            Question ="19. Napisati funkciju koja vraca broj kopija u nizu. Ako ima duplikata ispisati: There are $BROJ_DUPLIKATA duplicates in this array. Ako nema duplikata ispisati: There are no duplicates in this array"
            break;

        case 20:
            Question ="20. Napisati funkciju koja ce za prosledjeni objekat (ucenika) sracunati prosek njegovih zakljucenih ocena na kraju godine. Npr ako su predmeti sledeci: tehnicko: [3,4,5,5,4], matematika: [5,2,3,5,4], srpski jezik: [4,4,3,5,4] Onda na osnovu ova 3 predmeta izvuci UKUPNU prosecnu ocenu i tu ocenu dodeliti tom uceniku kao prosek za kraj godine: Npr: 'Pera Peric has an average grade: $PROSEK' HINT: proveriti da li se moze FOR IN loop iskoristiti"
            break;
    }
    document.getElementById("Question").innerHTML = Question;
}
