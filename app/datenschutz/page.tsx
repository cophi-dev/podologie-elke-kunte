import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero kicker="DSGVO" title="Datenschutzerklärung" />
      <section className="legal mx-auto max-w-3xl px-5 py-14 lg:px-8">
        <h2>Name und Kontakt des Verantwortlichen gemäß Artikel 4 Abs. 7 DSGVO</h2>
        <p>
          {site.owner}
          <br />
          {site.street}
          <br />
          {site.zip} {site.city}
          <br />
          Telefon: {site.phoneDisplay}
          <br />
          Telefax: {site.faxDisplay}
          <br />
          E-Mail: {site.email}
        </p>

        <h2>Sicherheit und Schutz Ihrer personenbezogenen Daten</h2>
        <p>
          Ich betrachte es als meine vorrangige Aufgabe, die Vertraulichkeit der von Ihnen bereitgestellten
          personenbezogenen Daten zu wahren und diese vor unbefugten Zugriffen zu schützen. Deshalb wende ich äußerste
          Sorgfalt und moderne Sicherheitsstandards an, um einen maximalen Schutz Ihrer personenbezogenen Daten zu
          gewährleisten.
        </p>
        <p>
          Als privatrechtliches Unternehmen unterliege ich den Bestimmungen der europäischen Datenschutzgrundverordnung
          (DSGVO) und den Regelungen des Bundesdatenschutzgesetzes (BDSG). Ich habe technische und organisatorische
          Maßnahmen getroffen, die sicherstellen, dass die Vorschriften über den Datenschutz sowohl von mir als auch von
          meinen externen Dienstleistern beachtet werden.
        </p>

        <h2>Begriffsbestimmungen</h2>
        <p>
          Der Gesetzgeber fordert, dass personenbezogene Daten auf rechtmäßige Weise, nach Treu und Glauben und in einer
          für die betroffene Person nachvollziehbaren Weise verarbeitet werden („Rechtmäßigkeit, Verarbeitung nach Treu
          und Glauben, Transparenz“). Um dies zu gewährleisten, informiere ich Sie über die einzelnen gesetzlichen
          Begriffsbestimmungen, die auch in dieser Datenschutzerklärung verwendet werden:
        </p>
        <h3>1. Personenbezogene Daten</h3>
        <p>
          „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
          natürliche Person beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt,
          insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer
          Online-Kennung oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der
          physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität
          dieser natürlichen Person sind.
        </p>
        <h3>2. Verarbeitung</h3>
        <p>
          „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche
          Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das
          Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die
          Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die
          Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
        </p>
        <h3>3. Einschränkung der Verarbeitung</h3>
        <p>
          „Einschränkung der Verarbeitung“ ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre
          künftige Verarbeitung einzuschränken.
        </p>
        <h3>4. Profiling</h3>
        <p>
          „Profiling“ ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese
          personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person
          beziehen, zu bewerten.
        </p>
        <h3>5. Pseudonymisierung</h3>
        <p>
          „Pseudonymisierung“ ist die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten
          ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden
          können.
        </p>
        <h3>6. Dateisystem</h3>
        <p>
          „Dateisystem“ ist jede strukturierte Sammlung personenbezogener Daten, die nach bestimmten Kriterien zugänglich
          sind.
        </p>
        <h3>7. Verantwortlicher</h3>
        <p>
          „Verantwortlicher“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein
          oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
        </p>
        <h3>8. Auftragsverarbeiter</h3>
        <p>
          „Auftragsverarbeiter“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die
          personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
        </p>
        <h3>9. Empfänger</h3>
        <p>
          „Empfänger“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, denen
          personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder
          nicht.
        </p>
        <h3>10. Dritter</h3>
        <p>
          „Dritter“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der
          betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren
          Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu
          verarbeiten.
        </p>
        <h3>11. Einwilligung</h3>
        <p>
          Eine „Einwilligung“ der betroffenen Person ist jede freiwillig für den bestimmten Fall, in informierter Weise und
          unmissverständlich abgegebene Willensbekundung.
        </p>

        <h2>Rechtmäßigkeit der Verarbeitung</h2>
        <p>
          Die Verarbeitung personenbezogener Daten ist nur rechtmäßig, wenn für die Verarbeitung eine Rechtsgrundlage
          besteht. Rechtsgrundlage können gemäß Artikel 6 Abs. 1 lit. a – f DSGVO insbesondere Einwilligung,
          Vertragserfüllung, rechtliche Verpflichtung, lebenswichtige Interessen, öffentliches Interesse oder berechtigte
          Interessen sein.
        </p>

        <h2>Information über die Erhebung personenbezogener Daten</h2>
        <p>
          Im Folgenden informiere ich über die Erhebung personenbezogener Daten bei Nutzung meiner Website.
          Personenbezogene Daten sind z. B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.
        </p>
        <p>
          Bei einer Kontaktaufnahme mit mir per E-Mail oder über das Kontaktformular werden die von Ihnen mitgeteilten
          Daten von mir gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten lösche
          ich, nachdem die Speicherung nicht mehr erforderlich ist, oder die Verarbeitung wird eingeschränkt, falls
          gesetzliche Aufbewahrungspflichten bestehen. Das Kontaktformular öffnet Ihr lokales E-Mail-Programm; es werden
          dabei keine Formulardaten auf dem Webserver gespeichert.
        </p>

        <h2>Erhebung personenbezogener Daten bei Besuch meiner Website</h2>
        <p>
          Bei der bloß informatorischen Nutzung der Website, also wenn Sie sich nicht registrieren oder mir anderweitig
          Informationen übermitteln, erhebe ich nur die personenbezogenen Daten, die Ihr Browser an meinen Server
          übermittelt. Wenn Sie meine Website betrachten möchten, werden die folgenden Daten verarbeitet, die technisch
          erforderlich sind, um Ihnen meine Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten
          (Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO):
        </p>
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
          <li>Inhalt der Anforderung (konkrete Seite)</li>
          <li>Zugriffsstatus / HTTP-Statuscode</li>
          <li>jeweils übertragene Datenmenge</li>
          <li>Website, von der die Anforderung kommt</li>
          <li>Browser</li>
          <li>Betriebssystem und dessen Oberfläche</li>
          <li>Sprache und Version der Browsersoftware</li>
        </ul>
        <p>
          Diese Website setzt keine Analyse-Cookies (kein Google Analytics) und keine Werbe-Cookies. Technisch notwendige
          Session-Informationen des Hosters können anfallen.
        </p>

        <h2>Cookies</h2>
        <p>
          Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden können. Diese Website kommt ohne
          optionale Tracking-Cookies aus. Sie können Ihre Browser-Einstellung so konfigurieren, dass Cookies abgelehnt
          werden.
        </p>

        <h2>Karte / OpenStreetMap</h2>
        <p>
          Auf der Kontaktseite wird eine Karte von OpenStreetMap eingebunden. Dabei kann der Betreiber von OpenStreetMap
          (OpenStreetMap Foundation) Ihre IP-Adresse und technische Nutzungsdaten verarbeiten. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer anschaulichen Anfahrtsskizze). Weitere Informationen:
          https://wiki.osmfoundation.org/wiki/Privacy_Policy
        </p>

        <h2>Kinder</h2>
        <p>
          Unser Angebot richtet sich grundsätzlich an Erwachsene. Personen unter 18 Jahren sollten ohne Zustimmung der
          Eltern oder Erziehungsberechtigten keine personenbezogenen Daten an uns übermitteln.
        </p>

        <h2>Rechte der betroffenen Person</h2>
        <p>
          Sie haben das Recht auf Widerruf einer erteilten Einwilligung, Bestätigung, Auskunft, Berichtigung, Löschung
          („Recht auf Vergessenwerden“), Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch gegen die
          Verarbeitung, Schutz vor automatisierten Entscheidungen einschließlich Profiling sowie das Recht auf Beschwerde
          bei einer Aufsichtsbehörde und auf einen wirksamen gerichtlichen Rechtsbehelf.
        </p>
        <p>
          Für die Ausübung dieser Rechte können Sie sich jederzeit an mich unter den oben genannten Kontaktdaten wenden.
          Zuständige Aufsichtsbehörde ist unter anderem der Hamburgische Beauftragte für Datenschutz und
          Informationsfreiheit.
        </p>
        <p>
          Die vollständige Darstellung dieser Rechte entspricht den Artikeln 7, 12 bis 22 sowie 77 und 79 DSGVO, wie sie
          bereits auf der bisherigen Website der Praxis veröffentlicht waren.
        </p>
      </section>
    </>
  );
}
