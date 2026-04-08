const questions = {
    hesla: [
        {
            text: "Co slouží jako první obranná linie proti neoprávněnému přístupu k účtům?",
            answers: [
                "Antivirus",
                "Hesla",
                "Firewall"
            ],
            correct: 1
        },

        {
            text: "Proč je e-mail považován za klíčový účet?",
            answers: [
                "Protože obsahuje nejvíce fotek.",
                "Protože je v něm uložen herní postup.",
                "Protože se přes něj dají resetovat hesla k dalším službám."
            ],
            correct: 2
        },

        {
            text: "Co chrání silná hesla v rámci soukromí?",
            answers: [
                "Pouze hesla k Wi-Fi.",
                "Osobní konverzace, fotografie a citlivé dokumenty.",
                "Fyzický majetek v domácnosti."
            ],
            correct: 1
        },

       {
            text: "Na jakých platformách chrání silné heslo vaše platební karty?",
            answers: [
                "V bankovnictví i na herních platformách (Steam, Xbox atd.).",
                "Pouze na sociálních sítích.",
                "Jen v internetovém bankovnictví."
            ],
            correct: 0
        },

        {
            text: "Jak se nazývá útok, kdy software zkouší každou možnou kombinaci znaků?",
            answers: [
                "Útok hrubou silou (Brute-force).",
                "Slovníkový útok.",
                "Credential Stuffing."
            ],
            correct: 0
        },

        {
            text: "Co zkouší počítač při slovníkovém útoku?",
            answers: [
                "Náhodné shluky písmen.",
                "Tisíce běžných slov, jmen a frází.",
                "Otisky prstů."
            ],
            correct: 1
        },

        {
            text: "Jaká jsou tři základní kritéria bezpečného hesla?",
            answers: [
                "Délka, barva a jednoduchost.",
                "Rychlost, délka a jméno uživatele.",
                "Délka, komplexnost a jedinečnost."
            ],
            correct: 2
        },

        {
            text: "Který faktor je při tvorbě hesla nejdůležitější?",
            answers: [
                "Délka.",
                "Speciální znaky.",
                "Velká písmena."
            ],
            correct: 0
        },

        {
            text: "Jaká je minimální doporučená délka hesla?",
            answers: [
                "6 až 8 znaků.",
                "12 až 16 znaků.",
                "Alespoň 20 znaků."
            ],
            correct: 1
        }, 

        {
            text: "Jak dlouho trvá prolomení hesla o 8 znacích oproti 12 znakům?",
            answers: [
                "Je to stejné.",
                "8 znaků trvá roky, 12 znaků pár hodin.",
                "8 znaků trvá pár hodin, 12 znaků trvá roky."
            ],
            correct: 2
        },

        {
            text: "Co tvoří komplexnost hesla?",
            answers: [
                "Mix velkých/malých písmen, čísel a speciálních znaků.",
                "Použití cizího jazyka.",
                "Co nejdelší slovo ze slovníku."
            ],
            correct: 0
        },

        {
            text: "Čemu byste se měli při tvorbě hesla vyhnout?",
            answers: [
                "Číslům.",
                "Velkým písmenům na začátku.",
                "Skutečným slovům, jménům a datům narození."
            ],
            correct: 2
        }, 

         {
            text: "Co znamená jedinečnost hesla?",
            answers: [
                "Že nepoužíváte stejné heslo pro více účtů.",
                "Že heslo obsahuje vykřičník.",
                "Že heslo nikdo jiný na světě nemá."
            ],
            correct: 0
        },

        {
            text: "Co je to Credential Stuffing?",
            answers: [
                "Metoda tvorby hesla.",
                "Zkoušení ukradeného hesla na jiných službách (např. e-mailu či Discordu).",
                "Ukládání hesel do prohlížeče."
            ],
            correct: 1 
        },

        {
            text: "Na co byste se měli zaměřit místo krátkých a složitých hesel?",
            answers: [
                "Na zapamatovatelné, ale dlouhé fráze.",
                "Na krátká hesla s mnoha čísly.",
                "Na jména svých domácích mazlíčků."
            ],
            correct: 0
        },

         {
            text: "Jak se jmenuje metoda tvorby hesla z věty?",
            answers: [
                "Password Method.",
                "Passphrase Method.",
                "Sentence Method."
            ],
            correct: 1
        },

        {
            text: "Jak vytvoříte heslo metodou zkratky?",
            answers: [
                "Napíšete slovo pozpátku.",
                "Použijete jen samohlásky.",
                "Vezmete první písmena (a čísla) z vymyšlené věty."
            ],
            correct: 2
        },

        {
            text: "Jak vylepšit unikátnost hesla pro konkrétní službu (např. Instagram)?",
            answers: [
                "Přidáním prefixu nebo sufixu specifického pro danou službu.",
                "Změnou celého hesla každý týden.",
                "Napsáním názvu služby doprostřed hesla."
            ],
            correct: 0
        },

         {
            text: "Co je výsledkem správně vytvořené Passphrase?",
            answers: [
                "Krátké, ale těžké heslo.",
                "Dlouhé, komplexní a unikátní heslo, které je zapamatovatelné.",
                "Heslo, které si musíte zapsat na papírek."
            ],
            correct: 1
        },

        {
            text: "Jak se nazývá nástroj pro bezpečnou správu mnoha hesel?",
            answers: [
                "Password Manager (Správce hesel).",
                "Password Notebook.",
                "Excel tabulka."
            ],
            correct: 0
        },

        {
            text: "Co je to Master Password?",
            answers: [
                "Heslo k vašemu Wi-Fi routeru.",
                "Jediné heslo, které si musíte pamatovat pro přístup do správce hesel.",
                "Nejsilnější heslo ve vaší databázi."
            ],
            correct: 1
        },

         {
            text: "Kterou z těchto funkcí správce hesel NEMÁ?",
            answers: [
                "Generování náhodných hesel.",
                "Automatické vyplňování formulářů.",
                "Automatické placení účtů v bance."
            ],
            correct: 2
        },

        {
            text: "Co znamená zkratka 2FA?",
            answers: [
                "Druhá fáze útoku.",
                "Dvoufaktorová autentizace.",
                "Dvojitá formátovací analýza."
            ],
            correct: 1
        },

        {
            text: "Proč je 2FA důležitá?",
            answers: [
                "Je to druhá vrstva ochrany, pokud útočník zjistí vaše heslo.",
                "Zrychluje přihlašování.",
                "Umožňuje mít kratší hesla."
            ],
            correct: 0
        },

         {
            text: "Co může být druhým faktorem při přihlašování?",
            answers: [
                "Kód z SMS nebo biometrika (otisk prstu).",
                "Vaše přezdívka.",
                "Druhé, kratší heslo."
            ],
            correct: 0
        },

        {
            text: "Kde se doporučuje aktivovat 2FA nejdříve?",
            answers: [
                "Na všech nepodstatných herních účtech.",
                "Na e-mailu a hlavních sociálních/herních účtech.",
                "Pouze v internetovém bankovnictví."
            ],
            correct: 1
        },

        {
            text: "Kolik znaků by měla mít všechna vaše nová hesla podle shrnutí?",
            answers: [
                "Minimálně 8.",
                "Minimálně 10.",
                "Minimálně 12."
            ],
            correct: 2
        },

         {
            text: "Jak zní pravidlo o kopírování hesel?",
            answers: [
                "Kopírovat se může jen u her.",
                "Nikdy nepoužívejte stejné heslo na dvou různých místech.",
                "Můžete mít stejné heslo na e-mailu a v bance."
            ],
            correct: 1
        },

        {
            text: "Komu můžete sdělit své heslo?",
            answers: [
                "Nikdy nikomu.",
                "Podpoře hry, pokud ji o to požádají.",
                "Jen nejlepším kamarádům."
            ],
            correct: 0
        },

        {
            text: "Pro které účty je vhodné začít používat správce hesel?",
            answers: [
                "Jen pro ty, které zapomínáte.",
                "Pouze pro ty nejdůležitější.",
                "Pro všechny účty (i ty méně podstatné)."
            ],
            correct: 2
        } 
    ],

     phishing: [
        {
            text: "Co se snaží prolomit sociální inženýři na rozdíl od klasických hackerů?",
            answers: [
                "Firewally a operační systémy.",
                "Člověka (využívají jeho důvěru nebo strach).",
                "Wi-Fi routery."
            ],
            correct: 1
        },

        {
            text: "Co je to Phishing?",
            answers: [
                "Pomoci uživateli s nastavením účtu.",
                "Získat heslo, ukrást peníze nebo nainstalovat malware.",
                "Změnit barvu pozadí vašeho profilu."
            ],
            correct: 1
        },

        {
            text: "Kterou z těchto emocí podvodníci nejčastěji zneužívají?",
            answers: [
                "Lhostejnost.",
                "Strach, spěch a zvědavost.",
                "Štěstí z dobře odvedené práce."
            ],
            correct: 1
        },

       {
            text: "Jak se nazývá phishing prováděný prostřednictvím SMS zpráv?",
            answers: [
                "Vishing.",
                "Smishing.",
                "SMS-hacker."
            ],
            correct: 1
        },

        {
            text: "Co je to Vishing? ",
            answers: [
                "Podvodná reklama na internetu.",
                "Podvod přes hlasový hovor (Voice Phishing).",
                "Krádež vizitek."
            ],
            correct: 1
        },

        {
            text: "Za koho se útočníci při Vishingu často vydávají?",
            answers: [
                "Za prodejce kosmetiky.",
                "Za zaměstnance banky, policie nebo technické podpory.",
                "Za vaše sousedy."
            ],
            correct: 1
        },

        {
            text: "Jak fungují Fake webové stránky? ",
            answers: [
                "Jsou to stránky, které nefungují.",
                "Jsou vzhledem k nerozeznání od originálu a slouží k odchycení hesla.",
                "Jsou to stránky, které prodávají falešné zboží."
            ],
            correct: 1
        },

        {
            text: "Co bývá častým příkladem Smishingu?",
            answers: [
                "Zpráva o tom, že jste vyhráli v loterii, do které jste se nepřihlásili.",
                "SMS o zadrženém balíku s výzvou k zaplacení poplatku na odkazu.",
                "SMS od operátora o vyčerpání dat."
            ],
            correct: 1
        },

        {
            text: "Který komunikační kanál využívá klasický E-mail Phishing?",
            answers: [
                "Elektronickou poštu.",
                "Telefonní hovory.",
                "Poštovní dopisy."
            ],
            correct: 0
        }, 

        {
            text: "Jaký pocit se ve vás snaží vyvolat phishingová zpráva?",
            answers: [
                "Paniku a naléhavost.",
                "Klid a pohodu.",
                "Pocit, že máte dostatek času na rozmyšlenou."
            ],
            correct: 0
        },

        {
            text: "Co byste měli zkontrolovat u odesílatele e-mailu?",
            answers: [
                "Skutečnou e-mailovou adresu (zda odpovídá oficiální doméně).",
                "Jen jeho jméno (např. Podpora Microsoft).",
                "Jestli má odesílatel profilovou fotku."
            ],
            correct: 0
        },

        {
            text: "Jak poznáte podvodnou adresu (např. místo microsoft.com)?",
            answers: [
                "Bude v ní drobná chyba (např. microsft.net nebo mikroskop.eu).",
                "Bude napsaná velkými písmeny.",
                "Bude obsahovat vaše jméno."
            ],
            correct: 0
        }, 

         {
            text: "Jak bezpečně zkontrolovat cíl odkazu v e-mailu (na počítači)?",
            answers: [
                "Přejet přes něj myší a sledovat URL adresu v dolním rohu obrazovky.",
                "Kliknout na něj a podívat se, kam vás to hodí.",
                "Odkaz zkopírovat a poslat kamarádovi."
            ],
            correct: 0
        },

        {
            text: "Jak zkontrolujete odkaz na mobilním telefonu bez kliknutí?",
            answers: [
                "Na odkazu dlouze podržíte prst, dokud se neobjeví bublina s adresou.",
                "Mobilní telefony tuto funkci nemají.",
                "Musíte se na odkaz podívat lupou."
            ],
            correct: 0
        },

        {
            text: "Co je častým znakem podvodných zpráv vytvořených automatickými překladači?",
            answers: [
                "Špatná čeština, divný slovosled a chybějící diakritika.",
                "Příliš odborná terminologie.",
                "Básnický styl psaní."
            ],
            correct: 0
        },

         {
            text: "Požádá vás někdy banka o sdělení celého hesla nebo PINu po telefonu? ",
            answers: [
                "Nikdy. Seriózní společnosti tyto údaje nepotřebují znát.",
                "Ano, je to běžný způsob ověření identity.",
                "Jen v případě, že jste zapomněli svéMaster Password."
            ],
            correct: 0
        },

        {
            text: "Obdržíte e-mail od Netflixu, že vaše platba neprošla a musíte HNED zadat kartu. Co uděláte?",
            answers: [
                "E-mail ignorujete a raději se přihlásíte přímo přes oficiální web/aplikaci Netflixu.",
                "Ihned kliknete na odkaz v e-mailu, aby vám nevypnuli film.",
                "Odpovíte na e-mail a pošlete jim údaje v textu."
            ],
            correct: 0
        },

        {
            text: "Někdo vám volá z technické podpory a chce, abyste si nainstalovali program pro vzdálenou pomoc. Co je to?",
            answers: [
                "Pravděpodobně Vishing zaměřený na ovládnutí vašeho PC.",
                "Skvělá služba zdarma.",
                "Standardní aktualizace Windows."
            ],
            correct: 0
        },

         {
            text: "Stránka slibuje herní měnu zdarma, ale chce, abyste se přihlásili svým Steam účtem. Co hrozí?",
            answers: [
                "Že získáte bonusové skiny.",
                "Že jde o Fake webovou stránku, která vám ukradne herní účet.",
                "Že se vám zrychlí hra."
            ],
            correct: 1
        },

        {
            text: "Co znamená pravidlo NEKLIKAT?",
            answers: [
                "Neklikat na reklamy na YouTube.",
                "Neklikat na pravé tlačítko myši.",
                "Neklikat na podezřelé odkazy ani neotevírat přílohy."
            ],
            correct: 2
        },

        {
            text: "Proč je nebezpečné odpovídat na phishingový e-mail?",
            answers: [
                "Protože vás to bude stát peníze za odeslání.",
                "Žádné nebezpečí nehrozí, pokud nepošlete heslo.",
                "Potvrdíte tím útočníkovi, že je váš e-mail aktivní a vy na zprávy reagujete."
            ],
            correct: 2
        },

         {
            text: "Kde byste měli zadávat citlivé údaje?",
            answers: [
                "Na jakékoliv stránce, která vypadá hezky.",
                "V odpovědi na SMS zprávu.",
                "Pouze na oficiálních a ověřených stránkách, na které jste přišli sami (ne přes odkaz)."
            ],
            correct: 2
        },

        {
            text: "Co byste měli udělat, když narazíte na podezřelý hovor?",
            answers: [
                "Pokračovat v hovoru a snažit se útočníka obelstít.",
                "Udělat vše, co po vás hlas v telefonu chce.",
                "Položit telefon a zavolat na oficiální číslo dané instituce pro ověření."
            ],
            correct: 2
        },

        {
            text: "Jaký je nejlepší způsob, jak vyřešit problém s balíkem z SMS?",
            answers: [
                "Zaplatit 20 Kč na přiloženém odkazu.",
                "Poslat útočníkovi fotku své občanky.",
                "Jít na oficiální stránky dopravce a zadat tam číslo zásilky, které už máte z dřívějška."
            ],
            correct: 2
        },

         {
            text: "Pokud adresa odkazu nezačíná skutečnou doménou firmy (např. steamcommunity.com), co to znamená? ",
            answers: [
                "Že je stránka v údržbě.",
                "Že firma změnila web.",
                "Že jde o podvod."
            ],
            correct: 2
        },

        {
            text: "Co byste měli udělat s přílohou v e-mailu od neznámého odesílatele?",
            answers: [
                "Otevřít ji a zjistit, co v ní je.",
                "Přeposlat ji kamarádovi, aby ji zkontroloval on.",
                "Smazat ji a nikdy neotevírat."
            ],
            correct: 2
        },

        {
            text: "Které z těchto pravidel je klíčové pro bezpečnost?",
            answers: [
                "Sdílet hesla jen s rodinou.",
                "Mít heslo napsané na monitoru.",
                "NIKDY nikomu své heslo neříkat."
            ],
            correct: 2
        },

         {
            text: "Jaké je hlavní heslo pro správu podezřelých zpráv?",
            answers: [
                "Rychle klikni, ať o nic nepřijdeš.",
                "Důvěřuj, ale neprověřuj.",
                "Neklikat, neodpovídat, nezadávat"
            ],
            correct: 2
        },

        {
            text: "Je phishing nebezpečný i pro zkušené uživatele?",
            answers: [
                "Ne, ti ho poznají na první pohled.",
                "Ne, pokud mají drahý počítač.",
                "Ano, útoky jsou stále sofistikovanější a zneužívají lidské emoce."
            ],
            correct: 2
        }
    ],

    ochrana: [
        {
            text: "Jak bývají v dnešní době často označována osobní data?",
            answers: [
                "Uhlím digitálního věku.",
                "Ropou 21. století.",
                "Zlatem internetu."
            ],
            correct: 1
        },

        {
            text: "Ve které zemi vznikl v roce 1970 první zákon o ochraně dat na světě?",
            answers: [
                "V USA.",
                "V Německu.",
                "V České republice."
            ],
            correct: 1
        },

        {
            text: "Který úřad v ČR dohlíží na ochranu osobních údajů?",
            answers: [
                "Policie ČR.",
                "Úřad pro ochranu osobních údajů (ÚOOÚ).",
                "Ministerstvo vnitra."
            ],
            correct: 1
        },

       {
            text: "Kdy vstoupilo v účinnost nařízení GDPR?",
            answers: [
                "1. ledna 2000.",
                "25. května 2018.",
                "1. srpna 2026."
            ],
            correct: 1
        },

        {
            text: "Co všechno lze považovat za osobní údaj?",
            answers: [
                "Pouze jméno a příjmení.",
                "Jakoukoliv informaci, která nás propne k určitému člověku.",
                "Jen rodné číslo."
            ],
            correct: 1
        },

        {
            text: "Patří mezi osobní údaje i IP adresa nebo ID reklamního profilu?",
            answers: [
                "Ne, to jsou technické údaje.",
                "Ano, jsou to tzv. online identifikátory.",
                "Jen pokud s tím uživatel souhlasí."
            ],
            correct: 1
        },

        {
            text: "Co patří do zvláštní kategorie (citlivých) údajů?",
            answers: [
                "Adresa bydliště a e-mail.",
                "Genetické údaje, informace o zdraví nebo náboženství.",
                "Seznam zakoupeného zboží v e-shopu."
            ],
            correct: 1
        },

        {
            text: "Kdy se smí pracovat s citlivými údaji (např. o zdraví)?",
            answers: [
                "Kdykoliv o to firma požádá.",
                "Jen ve výjimečných, zákonem daných případech (např. v nemocnici).",
                "Nikdy, je to absolutně zakázáno."
            ],
            correct: 1
        },

        {
            text: "Co znamená zásada Účelové omezení?",
            answers: [
                "Data se smí používat jen pro účel, pro který byla sebrána.",
                "Správce musí mít omezený počet zaměstnanců.",
                "Účel zpracování musí být tajný."
            ],
            correct: 0
        }, 

        {
            text: "Která zásada řeší zabezpečení dat (šifrování, hesla)?",
            answers: [
                "Integrita a důvěrnost.",
                "Odpovědnost.",
                "Transparentnost."
            ],
            correct: 0
        },

        {
            text: "Co znamená zásada Odpovědnost?",
            answers: [
                "Správce musí být schopen dokázat, že dodržuje všechna pravidla.",
                "Uživatel je zodpovědný za únik svých dat.",
                "Stát odpovídá za všechny chyby firem."
            ],
            correct: 0
        },

        {
            text: "Proč zaměstnavatel hlásí vaše daně státu bez vašeho souhlasu?",
            answers: [
                "Přikazuje mu to zákon (právní povinnost).",
                "Protože má oprávněný zájem.",
                "Protože na to má právo ze smlouvy."
            ],
            correct: 0
        }, 

         {
            text: "Co je příkladem oprávněného zájmu?",
            answers: [
                "Monitorování bankomatu kamerou kvůli prevenci podvodů.",
                "Prodej vašich dat reklamním agenturám.",
                "Sledování vaší soukromé pošty šéfem."
            ],
            correct: 0
        },

        {
            text: "Jaký musí být platný souhlas podle GDPR?",
            answers: [
                "Svobodný a aktivní (žádná předem zaškrtnutá políčka).",
                "Vynucený a tichý.",
                "Stačí, když uživatel stránku neopustí."
            ],
            correct: 0
        },

        {
            text: "Co vám umožňuje Právo na přístup?",
            answers: [
                "Chtít kopii všech dat, která o vás firma vede.",
                "Vstoupit do kanceláře firmy a prohlížet si šanony.",
                "Právo změnit si heslo."
            ],
            correct: 0
        },

         {
            text: "Jak se jinak říká Právu na výmaz?",
            answers: [
                "Právo na zapomnění.",
                "Právo na ticho.",
                "Právo na restart."
            ],
            correct: 0
        },

        {
            text: "Co je to Právo na přenositelnost?",
            answers: [
                "Možnost nechat si připravit data ve strojově čitelném formátu pro přechod k jiné službě (např. bance).",
                "Právo vzít si svůj počítač do jiné práce.",
                "Právo poslat svá data komukoliv na světě."
            ],
            correct: 0
        },

        {
            text: "Jaká je maximální výše pokuty za porušení GDPR?",
            answers: [
                "Až 20 milionů EUR nebo 4 % z celosvětového ročního obratu firmy.",
                "1 milion korun.",
                "Žádné pokuty nejsou, jen napomenutí."
            ],
            correct: 0
        },

         {
            text: "Kam se můžete v ČR obrátit, pokud máte podezření na porušení ochrany svých dat?",
            answers: [
                "Na Českou obchodní inspekci.",
                "Na Úřad pro ochranu osobních údajů (ÚOOÚ).",
                "Na Evropský parlament."
            ],
            correct: 1
        },

        {
            text: "Kdy nastupuje plná účinnost Nařízení o umělé inteligenci (AI Act)?",
            answers: [
                "V květnu 2018.",
                "V roce 2030.",
                "V srpnu 2026."
            ],
            correct: 2
        },

        {
            text: "Co dokáže AI zjistit z vašich nevinných dat (např. lajků)?",
            answers: [
                "Pouze to, co se vám líbí.",
                "Nic, AI data neanalyzuje.",
                "Citlivé informace jako politické preference nebo zdravotní stav."
            ],
            correct: 2
        },

         {
            text: "Co musí splňovat realistický obrázek nebo video vytvořené AI (deepfake)?",
            answers: [
                "Musí být v nejvyšším rozlišení.",
                "Nesmí být publikováno na internetu.",
                "Musí být jasně označeno jako výtvor AI."
            ],
            correct: 2
        },

        {
            text: "Co byste měli dělat s cookie lištami na webu?",
            answers: [
                "Vždy kliknout na Přijmout vše, aby lišta zmizela.",
                "Web okamžitě zavřít.",
                "Alespoň zběžně je číst a nepotvrzovat vše slepě."
            ],
            correct: 2
        },

        {
            text: "Proč byste měli mazat staré a nepoužívané účty?",
            answers: [
                "Aby se uvolnilo místo na serverech internetu.",
                "Nemá to žádný význam.",
                "Jsou časovanou bombou při úniku dat z dané služby."
            ],
            correct: 2
        },

         {
            text: "Co byste měli prověřit u e-shopu před zadáním karty?",
            answers: [
                "Jen barvu webových stránek.",
                "Nic, pokud mají nízké ceny.",
                "Recenze a obchodní podmínky."
            ],
            correct: 2
        },

        {
            text: "Proč se zajímat o oprávnění aplikací (např. u kalkulačky)?",
            answers: [
                "Aby kalkulačka počítala rychleji.",
                "Aplikace si oprávnění určují samy a nelze je měnit.",
                "Abychom zjistili, zda aplikace nepotřebuje přístup k datům, která pro svou funkci nepotřebuje."
            ],
            correct: 2
        },

        {
            text: "Kde je nejvhodnější ukládat citlivé dokumenty v cloudu?",
            answers: [
                "Do složky Veřejné.",
                "Volně v kořenovém adresáři.",
                "Šifrované nebo aspoň zaheslované."
            ],
            correct: 2
        },

         {
            text: "Co dělat, když zjistíte, že vaše data unikla z nějaké instituce?",
            answers: [
                "Nic, data už jsou pryč.",
                "Smazat si e-mail.",
                "Informovat ÚOOÚ a dotčenou instituci."
            ],
            correct: 2
        },

        {
            text: "Jaký nástroj ochrání vaše data i v případě, že vám někdo ukradne heslo?",
            answers: [
                "Rychlejší internet.",
                "Větší monitor.",
                "Dvoufázové ověření (2FA)."
            ],
            correct: 2
        }
    ],

     fakenews: [
        {
            text: "Jaký je hlavní rozdíl mezi misinformací a dezinformací?",
            answers: [
                "V délce zprávy.",
                "V záměru (misinformace je šířena v dobré víře, dezinformace záměrně s cílem škodit).",
                "Misinformace je vždy na papíře, dezinformace na internetu."
            ],
            correct: 1
        },

        {
            text: "Co je to malinformace?",
            answers: [
                "Informace o špatném počasí.",
                "Pravdivá informace zneužitá k poškození někoho (např. únik soukromí).",
                "Úplně vymyšlená zpráva o celebritách."
            ],
            correct: 1
        },

        {
            text: "Proč odborníci považují pojem „fake news“ za nepřesný?",
            answers: [
                "Protože je příliš krátký.",
                "Protože ho politici často zneužívají pro cokoli, co se jim nelíbí.",
                "Protože novinky už dnes nejsou fake."
            ],
            correct: 1
        },

       {
            text: "Na co dezinformace primárně útočí?",
            answers: [
                "Na náš logický úsudek a matematické schopnosti.",
                "Na naše emoce (strach, hněv, pocit ohrožení).",
                "Na naši paměť."
            ],
            correct: 1
        },

        {
            text: "Co je to konfirmační zkreslení (Confirmation Bias)?",
            answers: [
                "Schopnost potvrdit pravost dokumentu u notáře.",
                "Tendence věřit informacím, které potvrzují to, co si už beztak myslíme.",
                "Tendence zapomínat informace, které jsou složité."
            ],
            correct: 1
        },

        {
            text: "Jak funguje efekt pouhého vystavení?",
            answers: [
                "Čím méně o něčem slyšíme, tím více tomu věříme.",
                "Čím častěji nějaké tvrzení slyšíme, tím pravdivější nám po čase připadá.",
                "Člověk věří jen tomu, co vidí na vlastní oči."
            ],
            correct: 1
        },

        {
            text: "Co znamená technika vytržení z kontextu?",
            answers: [
                "Smazání celého článku z internetu.",
                "Použití pravdivé fotky nebo výroku v úplně jiné situaci nebo čase.",
                "Překlad článku do cizího jazyka."
            ],
            correct: 1
        },

        {
            text: "Co je cílem strategie Zaplavení prostoru (Firehose of Falsehood)?",
            answers: [
                "Pobavit čtenáře co nejvíce vtipy.",
                "Vypustit tolik protichůdných lží, až běžný občan rezignuje na hledání pravdy.",
                "Informovat o všech událostech ve světě v reálném čase."
            ],
            correct: 1
        },

        {
            text: "Co je to Deepfake video?",
            answers: [
                "Video vytvořené AI, kde lidé říkají nebo dělají věci, které se nikdy nestaly.",
                "Video natočené ve velké hloubce pod mořem.",
                "Velmi dlouhé video na YouTube."
            ],
            correct: 0
        }, 

        {
            text: "Jak mohou útočníci v roce 2026 zneužít hlasovou simulaci?",
            answers: [
                "K falešným hovorům příbuzným s žádostí o peníze jménem někoho blízkého.",
                "K vylepšení kvality hovoru při špatném signálu.",
                "K dabování filmů do češtiny."
            ],
            correct: 0
        },

        {
            text: "Co dělají AI boti na sociálních sítích?",
            answers: [
                "Simulují lidskou diskuzi a vytvářejí falešný dojem „většinového názoru“.",
                "Pomáhají lidem s nastavením profilu.",
                "Opravují gramatické chyby v komentářích."
            ],
            correct: 0
        },

        {
            text: "Proč dezinformační weby často používají šokující lži (clickbait)?",
            answers: [
                "Kvůli zisku z reklamy, kterou přitahují kliknutí.",
                "Aby vzdělávaly veřejnost.",
                "Aby ušetřily místo na serveru."
            ],
            correct: 0
        }, 

         {
            text: "Co je to polarizace společnosti?",
            answers: [
                "Rozdělení lidí na nesmiřitelné tábory, které spolu nejsou schopny mluvit.",
                "Stěhování lidí na severní a jižní pól.",
                "Zvýšení prodeje polarizačních brýlí."
            ],
            correct: 0
        },

        {
            text: "Jaký nástroj pomůže zjistit, zda včerejší fotka z útoku není 10 let stará?",
            answers: [
                "Zpětné vyhledávání obrázků (např. Google Lens, TinEye).",
                "Antivirus.",
                "Kalkulačka."
            ],
            correct: 0
        },

        {
            text: "Které weby v ČR se zabývají ověřováním faktů (fact-checking)?",
            answers: [
                "Manipulátoři.cz nebo Demagog.cz.",
                "Facebook a X.",
                "Blesk a Aha."
            ],
            correct: 0
        },

         {
            text: "Co by mělo být varovným signálem v titulku článku?",
            answers: [
                "Silné citové zabarvení (snaha vyděsit nebo rozzuřit).",
                "Uvedení zdroje a jména autora.",
                "Odkaz na oficiální statistiky."
            ],
            correct: 0
        },

        {
            text: "Co je považováno za nejsilnější zbraň proti dezinformacím?",
            answers: [
                "Mediální gramotnost a kritické myšlení. ",
                "Mazání všech příspěvků, které nejsou oficiální.",
                "Úplný zákaz internetu."
            ],
            correct: 0
        },

        {
            text: "Proč byste neměli sdílet zprávy v afektu (když jste vytočení)?",
            answers: [
                "Protože v afektu děláme chyby a snadněji naletíme na manipulaci.",
                "Protože se tím vybíjí baterie telefonu.",
                "Protože to algoritmy nemají rády."
            ],
            correct: 0
        },

         {
            text: "Co jsou to řetězové e-maily?",
            answers: [
                "Oficiální zprávy z banky.",
                "Hlavní kanál dezinformací, který se šíří přeposíláním, často mezi seniory.",
                "E-maily o slevách v supermarketech."
            ],
            correct: 1
        },

        {
            text: "Proč sociální sítě schválně ukazují obsah, který nás štve nebo s ním souhlasíme?",
            answers: [
                "Chtějí nás vzdělávat v obou směrech.",
                "Je to náhoda.",
                "Fungují tak jejich algoritmy, které chtějí udržet naši pozornost co nejdéle."
            ],
            correct: 2
        },

        {
            text: "Jak poznáte relevantní zdroj informací?",
            answers: [
                "Má v textu hodně vykřičníků.",
                "Poslal vám ho anonymní profil s obrázkem psa.",
                "Má jasného autora, transparentní financování a ověřitelné zdroje."
            ],
            correct: 2
        },

         {
            text: "Co znamená být vlastním editorem v digitálním věku?",
            answers: [
                "Že si každý musí psát vlastní noviny.",
                "Že musíme umět opravovat chyby v cizích textech.",
                "Že každý nese odpovědnost za to, jaké informace přijímá a šíří dál."
            ],
            correct: 2
        },

        {
            text: "Jak spolu souvisí AI Act (2026) a dezinformace?",
            answers: [
                "AI Act zakazuje používat internet k šíření zpráv.",
                "AI Act říká, že dezinformace jsou legální.",
                "AI Act nařizuje, že deepfakes musí být jasně označeny."
            ],
            correct: 2
        },

        {
            text: "Proč je nebezpečné věřit falešným autoritám?",
            answers: [
                "Protože tituly před jménem nic neznamenají.",
                "Protože skuteční vědci neexistují.",
                "Protože útočníci zneužívají dojem odbornosti k prosazení lží."
            ],
            correct: 2
        },

         {
            text: "Co dělat, když o senzační zprávě píše jen jeden pochybný web?",
            answers: [
                "Napsat o tom na svůj blog.",
                "Okamžitě ji sdílet, než ji smažou. ",
                "Být velmi skeptický – pravděpodobně se nestala nebo je zkreslená."
            ],
            correct: 2
        },

        {
            text: "Jaký je cíl dezinformací o tajných skupinách mocných?",
            answers: [
                "Pomoci lidem pochopit politiku.",
                "Odhalit skutečnou pravdu.",
                "Nabídnout jednoduché vysvětlení složitého světa (konspirační teorie)."
            ],
            correct: 2
        },

        {
            text: "Má technologická platforma (např. Meta) povinnost mazat nelegální obsah?",
            answers: [
                "Ne, na internetu je absolutní svoboda.",
                "Jen pokud jim za to stát zaplatí.",
                "Ano, musí mazat nenávistné projevy a nelegální obsah."
            ],
            correct: 2
        },

         {
            text: "Jak se zachovat v internetové diskuzi, která vás provokuje?",
            answers: [
                "Odpovědět co nejagresivněji.",
                "Smazat si účet.",
                "Diskutovat slušně nebo se nenechat vyprovokovat – cílem dezinformace je hádka."
            ],
            correct: 2
        },

        {
            text: "Co je hlavní myšlenkou digitální bezpečnosti v roce 2026?",
            answers: [
                "Že nás ochrání moderní software a zákony.",
                "Že internetu se nedá věřit vůbec v ničem.",
                "Že nejdůležitější je naše vlastní ostražitost, silná hesla a kritické myšlení."
            ],
            correct: 2
        }
    ],

    stopa: [
        {
            text: "Co je to digitální stopa (nebo digitální stín)?",
            answers: [
                "Obrázek, který se zobrazuje vedle našeho jména.",
                "Souhrn všech dat a záznamů, které po sobě zanecháváme při používání technologií.",
                "Speciální režim monitoru pro šetření zraku."
            ],
            correct: 1
        },

        {
            text: "Jak vzniká aktivní digitální stopa?",
            answers: [
                "Automatickým ukládáním IP adresy.",
                "Vaším vědomým rozhodnutím něco sdílet, poslat nebo vyplnit. ",
                "Pouhým zapnutím chytrého telefonu."
            ],
            correct: 1
        },

        {
            text: "Co z následujícího patří do aktivní digitální stopy? ",
            answers: [
                "IP adresa a cookies. ",
                "Fotografie nahraná na Instagram nebo odeslaný e-mail. ",
                "Historie prohlížení, kterou si pamatuje server."
            ],
            correct: 1
        },

       {
            text: "Co je to pasivní digitální stopa? ",
            answers: [
                "Statusy na sociálních sítích, které nikdo nekomentuje.",
                "Data, která vznikají v zákulisí bez našeho přímého přičinění. ",
                "Staré účty, které už nepoužíváme."
            ],
            correct: 1
        },

        {
            text: "Který údaj z pasivní stopy prozradí vaši přibližnou polohu a poskytovatele internetu? ",
            answers: [
                "Metadata fotky. ",
                "IP adresa. ",
                "Uživatelské jméno."
            ],
            correct: 1
        },

        {
            text: "Co jsou to cookies? ",
            answers: [
                "Viry, které kradou hesla. ",
                "Malé soubory v prohlížeči sledující preference (např. pro cílení reklamy). ",
                "Odměny za časté navštěvování webu."
            ],
            correct: 1
        },

        {
            text: "Co se skrývá pod pojmem metadata u fotografie? ",
            answers: [
                "Popisek, který k fotce napíšete. ",
                "Skryté informace jako přesný čas pořízení nebo GPS souřadnice. ",
                "Filtr, který na fotku použijete."
            ],
            correct: 1
        },

        {
            text: "Co si algoritmy skládají z tisíců vašich drobných stop?",
            answers: [
                "Záložní kopii vašeho počítače. ",
                "Vaši digitální identitu. ",
                "Nové heslo k vašemu účtu."
            ],
            correct: 1
        },

        {
            text: "Jak mohou e-shopy využít vaši digitální identitu při tvorbě cen? ",
            answers: [
                "Mohou měnit ceny podle typu vašeho zařízení nebo historie prohlížení. ",
                "Ceny jsou pro všechny vždy stejné. ",
                "E-shopy k těmto datům nemají přístup."
            ],
            correct: 0
        }, 

        {
            text: "Co je to algoritmická bublina? ",
            answers: [
                "Stav, kdy nám algoritmy ukazují jen to, co zapadá do našich názorů. ",
                "Ochranný obal na mobilní telefon. ",
                "Reklama, která se zobrazuje v kruhu."
            ],
            correct: 0
        },

        {
            text: "Mohou banky nebo pojišťovny v budoucnu analyzovat vaši digitální stopu? ",
            answers: [
                "Ano, pro posuzování rizikovosti klienta (v některých zemích se to již děje). ",
                "Ne, je to přísně zakázáno po celém světě. ",
                "Jen pokud jim pošlete odkaz na svůj Facebook."
            ],
            correct: 0
        },

        {
            text: "Proč personalisté dnes vyhledávají uchazeče na internetu? ",
            answers: [
                "Je to standardní procedura pro ověření důvěryhodnosti a pověsti. ",
                "Hledají jejich adresu, aby jim mohli poslat dopis.",
                "Aby zjistili, jaké mají koníčky."
            ],
            correct: 0
        }, 

         {
            text: "Co znamená věta internet nezapomíná? ",
            answers: [
                "Že staré fotky nebo příspěvky mohou být dohledatelné i po mnoha letech. ",
                "Že Google si pamatuje všechna vaše hesla.",
                "Že servery nikdy nepotřebují údržbu. "
            ],
            correct: 0
        },

        {
            text: "Jak může smazání odkazu z vyhledávače (právo být zapomenut) pomoci? ",
            answers: [
                "Odstraní odkaz z výsledků vyhledávání, ale obsah na původním webu často zůstává. ",
                "Smaže obsah z celého internetu navždy. ",
                "Změní vaši IP adresu."
            ],
            correct: 0
        },

        {
            text: "Co je to technika OSINT? ",
            answers: [
                "Získávání informací z veřejně dostupných zdrojů (např. z vašich fotek a statusů). ",
                "Způsob šifrování zpráv. ",
                "Typ viru, který maže digitální stopu."
            ],
            correct: 0
        },

         {
            text: "Který údaj zveřejněný na internetu může usnadnit krádež identity (např. půjčku na vaše jméno)? ",
            answers: [
                "Rodné číslo, datum narození nebo rodné jméno matky.",
                "Oblíbená barva.",
                "Název vašeho oblíbeného filmu."
            ],
            correct: 0
        },

        {
            text: "Co je to Sharenting?",
            answers: [
                "Nadměrné sdílení informací a fotek dětí jejich rodiči na internetu.",
                "Sdílení nájemného s více lidmi.",
                "Půjčování herních účtů kamarádům."
            ],
            correct: 0
        },

        {
            text: "Jaké riziko přináší sharenting dětem v budoucnu?",
            answers: [
                "Riziko šikany nebo zneužití fotek pedofily.",
                "Že budou mít příliš mnoho sledujících.",
                "Že nebudou umět používat internet."
            ],
            correct: 0
        },

         {
            text: "Co skutečně dělá Anonymní režim (Incognito) v prohlížeči?",
            answers: [
                "Udělá vás pro všechny na internetu neviditelnými.",
                "Zajistí pouze to, že se historie a cookies neuloží ve vašem počítači.",
                "Zašifruje veškerou vaši komunikaci."
            ],
            correct: 1
        },

        {
            text: "Kdo vás stále vidí i v anonymním režimu?",
            answers: [
                "Nikdo, v tom je smysl anonymity.",
                "Pouze policie.",
                "Poskytovatel internetu, zaměstnavatel a navštívené weby (např. Google)."
            ],
            correct: 2
        },

        {
            text: "Co je to Audit jména?",
            answers: [
                "Kontrola, zda máte v občance správné jméno.",
                "Placená služba pro změnu jména na Facebooku.",
                "Zadání vlastního jména do vyhledávačů, abyste viděli, co o vás ví svět."
            ],
            correct: 2
        },

         {
            text: "Proč je důležité mazat staré, nepoužívané účty (např. na starých fórech)?",
            answers: [
                "Aby se uvolnilo místo na disku.",
                "Aby vám nechodily staré e-maily.",
                "Protože jsou dírou do soukromí, kterou mohou útočníci využít."
            ],
            correct: 2
        },

        {
            text: "Jak lze omezit digitální stopu při posílání fotek cizím lidem?",
            answers: [
                "Poslat fotku černobíle.",
                "Fotku před odesláním pojmenovat test.",
                "Odstranit z fotky metadata o poloze (GPS). "
            ],
            correct: 2
        },

        {
            text: "Jaký je praktický význam používání více e-mailových identit?",
            answers: [
                "Zpomaluje to útoky hackerů.",
                "Je to nutné pro získání více slevových kódů.",
                "Odděluje to oficiální komunikaci (banka) od nákupů a diskusí, čímž chrání soukromí."
            ],
            correct: 2
        },

         {
            text: "Je digitální stopa vždy jen negativní?",
            answers: [
                "Ano, je to jen seznam našich chyb.",
                "Je neutrální, nikoho nezajímá.",
                "Ne, pozitivní stopa (odbornost, dobrovolnictví) může pomoci v životě i kariéře."
            ],
            correct: 2
        },

        {
            text: "Co byste měli pravidelně kontrolovat na sociálních sítích? ",
            answers: [
                "Počet lajků u starých fotek.",
                "Kdo si prohlížel váš profil včera v noci.",
                "Nastavení soukromí a viditelnost příspěvků."
            ],
            correct: 2
        },

        {
            text: "Co je v roce 2026 hlavním cílem správy digitální stopy?",
            answers: [
                "Být naprosto neviditelný.",
                "Smazat celý internet.",
                "Být autorem své vlastní pověsti a mít stopu pod kontrolou."
            ],
            correct: 2
        },

         {
            text: "Proč fotka z večírku před 10 lety může být problémem dnes?",
            answers: [
                "Protože už na ní nevypadáte tak dobře.",
                "Protože Google fotky po 5 letech automaticky nahlásí policii.",
                "Protože se ztrácí kontext a vtip z mládí může dnes vypadat jako nezralost."
            ],
            correct: 2
        },

        {
            text: "Jak nejlépe spravovat oprávnění v mobilu pro zachování soukromí?",
            answers: [
                "Povolit aplikacím vše, aby fungovaly správně.",
                "Mobil raději vůbec nepoužívat k focení.",
                "Zakázat přístup k poloze a kontaktům aplikacím, které to pro svou funkci nepotřebují."
            ],
            correct: 2
        }
    ]

};

