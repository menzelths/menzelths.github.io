if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kurswahlMultiplatform'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kurswahlMultiplatform'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'kurswahlMultiplatform'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kurswahlMultiplatform'.");
}
var kurswahlMultiplatform = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var toString = Kotlin.toString;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var equals = Kotlin.equals;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Unit = Kotlin.kotlin.Unit;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var throwUPAE = Kotlin.throwUPAE;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var throwCCE = Kotlin.throwCCE;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var setOf_0 = Kotlin.kotlin.collections.setOf_mh5how$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_7wec05$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var table = $module$kotlinx_html_js.kotlinx.html.table_dmqmme$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  Belegung$Überschrift.prototype = Object.create(Belegung$Zeile.prototype);
  Belegung$Überschrift.prototype.constructor = Belegung$Überschrift;
  Belegung$Kommentarart.prototype = Object.create(Enum.prototype);
  Belegung$Kommentarart.prototype.constructor = Belegung$Kommentarart;
  Belegung$Summe.prototype = Object.create(Belegung$Zeile.prototype);
  Belegung$Summe.prototype.constructor = Belegung$Summe;
  Belegung$Kommentar.prototype = Object.create(Belegung$Zeile.prototype);
  Belegung$Kommentar.prototype.constructor = Belegung$Kommentar;
  Belegung$ZeileDarstellung.prototype = Object.create(Belegung$Zeile.prototype);
  Belegung$ZeileDarstellung.prototype.constructor = Belegung$ZeileDarstellung;
  Belegung$Companion$Kursart.prototype = Object.create(Enum.prototype);
  Belegung$Companion$Kursart.prototype.constructor = Belegung$Companion$Kursart;
  Belegung$Companion$Aktion.prototype = Object.create(Enum.prototype);
  Belegung$Companion$Aktion.prototype.constructor = Belegung$Companion$Aktion;
  Aufgabenfeld.prototype = Object.create(Enum.prototype);
  Aufgabenfeld.prototype.constructor = Aufgabenfeld;
  Fachattribute.prototype = Object.create(Enum.prototype);
  Fachattribute.prototype.constructor = Fachattribute;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function main() {
    println('Hallo');
    var fächer = ArrayList_init();
    fächer.add_11rb$(new Fach('Deutsch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Deutsch_getInstance())));
    fächer.add_11rb$(new Fach('Englisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Franz\xF6sisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Latein', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Griechisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Russisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Spanisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Italienisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Portugiesisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Bildende Kunst', Aufgabenfeld$I_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Musik', Aufgabenfeld$I_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Geschichte', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Geographie/Gemeinschaftskunde', Aufgabenfeld$II_getInstance(), listOf([0, 2, 0]), listOf_0(Fachattribute$GeGe_getInstance())));
    fächer.add_11rb$(new Fach('Geographie', Aufgabenfeld$II_getInstance(), listOf([5, 0, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Gemeinschaftskunde', Aufgabenfeld$II_getInstance(), listOf([5, 0, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Religionslehre', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Ethik', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Wirtschaft', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Mathematik', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Mathematik_getInstance())));
    fächer.add_11rb$(new Fach('Biologie', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Naturwissenschaft_getInstance())));
    fächer.add_11rb$(new Fach('Chemie', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Naturwissenschaft_getInstance())));
    fächer.add_11rb$(new Fach('Physik', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Naturwissenschaft_getInstance())));
    fächer.add_11rb$(new Fach('Informatik', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$kannNawiErsetzen_getInstance())));
    fächer.add_11rb$(new Fach('NwT', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$kannNawiErsetzen_getInstance())));
    fächer.add_11rb$(new Fach('Sport', Aufgabenfeld$Sport_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Seminarfach', Aufgabenfeld$Seminarfach_getInstance(), listOf([0, 3, 0]), listOf_0(Fachattribute$Seminarfach_getInstance())));
    Belegung$Companion_getInstance().generiereFächer_n5lu7h$(fächer);
    var aktuelleBelegung = new Belegung('Belegung 1');
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Mathematik', Belegung$Companion$Kursart$LF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Englisch', Belegung$Companion$Kursart$LF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Informatik', Belegung$Companion$Kursart$LF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Geschichte', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Religionslehre', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance(), ['Geschichte', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance(), ['Religionslehre', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Deutsch', Belegung$Companion$Kursart$BF_getInstance()]);
    println('\n' + toString(aktuelleBelegung));
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$CHECK_getInstance(), []);
    (new Sample()).checkMe();
  }
  function Belegung(name) {
    Belegung$Companion_getInstance();
    this.name = name;
    this.aktuelleBelegung_0 = ArrayList_init();
  }
  function Belegung$Zeile() {
  }
  Belegung$Zeile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Zeile',
    interfaces: []
  };
  function Belegung$Überschrift(text) {
    Belegung$Zeile.call(this);
    this.text = text;
  }
  Belegung$Überschrift.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: '\xDCberschrift',
    interfaces: [Belegung$Zeile]
  };
  Belegung$Überschrift.prototype.component1 = function () {
    return this.text;
  };
  Belegung$Überschrift.prototype.copy_61zpoe$ = function (text) {
    return new Belegung$Überschrift(text === void 0 ? this.text : text);
  };
  Belegung$Überschrift.prototype.toString = function () {
    return '\xDCberschrift(text=' + Kotlin.toString(this.text) + ')';
  };
  Belegung$Überschrift.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  Belegung$Überschrift.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.text, other.text))));
  };
  function Belegung$Kommentarart(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Belegung$Kommentarart_initFields() {
    Belegung$Kommentarart_initFields = function () {
    };
    Belegung$Kommentarart$GUT_instance = new Belegung$Kommentarart('GUT', 0);
    Belegung$Kommentarart$SCHLECHT_instance = new Belegung$Kommentarart('SCHLECHT', 1);
    Belegung$Kommentarart$NEUTRAL_instance = new Belegung$Kommentarart('NEUTRAL', 2);
  }
  var Belegung$Kommentarart$GUT_instance;
  function Belegung$Kommentarart$GUT_getInstance() {
    Belegung$Kommentarart_initFields();
    return Belegung$Kommentarart$GUT_instance;
  }
  var Belegung$Kommentarart$SCHLECHT_instance;
  function Belegung$Kommentarart$SCHLECHT_getInstance() {
    Belegung$Kommentarart_initFields();
    return Belegung$Kommentarart$SCHLECHT_instance;
  }
  var Belegung$Kommentarart$NEUTRAL_instance;
  function Belegung$Kommentarart$NEUTRAL_getInstance() {
    Belegung$Kommentarart_initFields();
    return Belegung$Kommentarart$NEUTRAL_instance;
  }
  Belegung$Kommentarart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kommentarart',
    interfaces: [Enum]
  };
  function Belegung$Kommentarart$values() {
    return [Belegung$Kommentarart$GUT_getInstance(), Belegung$Kommentarart$SCHLECHT_getInstance(), Belegung$Kommentarart$NEUTRAL_getInstance()];
  }
  Belegung$Kommentarart.values = Belegung$Kommentarart$values;
  function Belegung$Kommentarart$valueOf(name) {
    switch (name) {
      case 'GUT':
        return Belegung$Kommentarart$GUT_getInstance();
      case 'SCHLECHT':
        return Belegung$Kommentarart$SCHLECHT_getInstance();
      case 'NEUTRAL':
        return Belegung$Kommentarart$NEUTRAL_getInstance();
      default:throwISE('No enum constant sample.Belegung.Kommentarart.' + name);
    }
  }
  Belegung$Kommentarart.valueOf_61zpoe$ = Belegung$Kommentarart$valueOf;
  function Belegung$Summe(stunden) {
    Belegung$Zeile.call(this);
    this.stunden = stunden;
  }
  Belegung$Summe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Summe',
    interfaces: [Belegung$Zeile]
  };
  Belegung$Summe.prototype.component1 = function () {
    return this.stunden;
  };
  Belegung$Summe.prototype.copy_pqoyrt$ = function (stunden) {
    return new Belegung$Summe(stunden === void 0 ? this.stunden : stunden);
  };
  Belegung$Summe.prototype.toString = function () {
    return 'Summe(stunden=' + Kotlin.toString(this.stunden) + ')';
  };
  Belegung$Summe.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stunden) | 0;
    return result;
  };
  Belegung$Summe.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.stunden, other.stunden))));
  };
  function Belegung$Kommentar(kommentarart, text) {
    Belegung$Zeile.call(this);
    this.kommentarart = kommentarart;
    this.text = text;
  }
  Belegung$Kommentar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kommentar',
    interfaces: [Belegung$Zeile]
  };
  Belegung$Kommentar.prototype.component1 = function () {
    return this.kommentarart;
  };
  Belegung$Kommentar.prototype.component2 = function () {
    return this.text;
  };
  Belegung$Kommentar.prototype.copy_i98wu4$ = function (kommentarart, text) {
    return new Belegung$Kommentar(kommentarart === void 0 ? this.kommentarart : kommentarart, text === void 0 ? this.text : text);
  };
  Belegung$Kommentar.prototype.toString = function () {
    return 'Kommentar(kommentarart=' + Kotlin.toString(this.kommentarart) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  Belegung$Kommentar.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kommentarart) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  Belegung$Kommentar.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kommentarart, other.kommentarart) && Kotlin.equals(this.text, other.text)))));
  };
  function Belegung$ZeileDarstellung(name, aufgabenfeld, gewählt, klickbar, mündlich, mündlichKlickbar, stunden, stundenAlternativVorhanden, fachnameOriginal) {
    Belegung$Zeile.call(this);
    this.name = name;
    this.aufgabenfeld = aufgabenfeld;
    this.gewählt = gewählt;
    this.klickbar = klickbar;
    this.mündlich = mündlich;
    this.mündlichKlickbar = mündlichKlickbar;
    this.stunden = stunden;
    this.stundenAlternativVorhanden = stundenAlternativVorhanden;
    this.fachnameOriginal = fachnameOriginal;
  }
  Belegung$ZeileDarstellung.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZeileDarstellung',
    interfaces: [Belegung$Zeile]
  };
  Belegung$ZeileDarstellung.prototype.component1 = function () {
    return this.name;
  };
  Belegung$ZeileDarstellung.prototype.component2 = function () {
    return this.aufgabenfeld;
  };
  Belegung$ZeileDarstellung.prototype.component3 = function () {
    return this.gewählt;
  };
  Belegung$ZeileDarstellung.prototype.component4 = function () {
    return this.klickbar;
  };
  Belegung$ZeileDarstellung.prototype.component5 = function () {
    return this.mündlich;
  };
  Belegung$ZeileDarstellung.prototype.component6 = function () {
    return this.mündlichKlickbar;
  };
  Belegung$ZeileDarstellung.prototype.component7 = function () {
    return this.stunden;
  };
  Belegung$ZeileDarstellung.prototype.component8 = function () {
    return this.stundenAlternativVorhanden;
  };
  Belegung$ZeileDarstellung.prototype.component9 = function () {
    return this.fachnameOriginal;
  };
  Belegung$ZeileDarstellung.prototype.copy_rc5irq$ = function (name, aufgabenfeld, gewählt, klickbar, mündlich, mündlichKlickbar, stunden, stundenAlternativVorhanden, fachnameOriginal) {
    return new Belegung$ZeileDarstellung(name === void 0 ? this.name : name, aufgabenfeld === void 0 ? this.aufgabenfeld : aufgabenfeld, gewählt === void 0 ? this.gewählt : gewählt, klickbar === void 0 ? this.klickbar : klickbar, mündlich === void 0 ? this.mündlich : mündlich, mündlichKlickbar === void 0 ? this.mündlichKlickbar : mündlichKlickbar, stunden === void 0 ? this.stunden : stunden, stundenAlternativVorhanden === void 0 ? this.stundenAlternativVorhanden : stundenAlternativVorhanden, fachnameOriginal === void 0 ? this.fachnameOriginal : fachnameOriginal);
  };
  Belegung$ZeileDarstellung.prototype.toString = function () {
    return 'ZeileDarstellung(name=' + Kotlin.toString(this.name) + (', aufgabenfeld=' + Kotlin.toString(this.aufgabenfeld)) + (', gew\xE4hlt=' + Kotlin.toString(this.gewählt)) + (', klickbar=' + Kotlin.toString(this.klickbar)) + (', m\xFCndlich=' + Kotlin.toString(this.mündlich)) + (', m\xFCndlichKlickbar=' + Kotlin.toString(this.mündlichKlickbar)) + (', stunden=' + Kotlin.toString(this.stunden)) + (', stundenAlternativVorhanden=' + Kotlin.toString(this.stundenAlternativVorhanden)) + (', fachnameOriginal=' + Kotlin.toString(this.fachnameOriginal)) + ')';
  };
  Belegung$ZeileDarstellung.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.aufgabenfeld) | 0;
    result = result * 31 + Kotlin.hashCode(this.gewählt) | 0;
    result = result * 31 + Kotlin.hashCode(this.klickbar) | 0;
    result = result * 31 + Kotlin.hashCode(this.mündlich) | 0;
    result = result * 31 + Kotlin.hashCode(this.mündlichKlickbar) | 0;
    result = result * 31 + Kotlin.hashCode(this.stunden) | 0;
    result = result * 31 + Kotlin.hashCode(this.stundenAlternativVorhanden) | 0;
    result = result * 31 + Kotlin.hashCode(this.fachnameOriginal) | 0;
    return result;
  };
  Belegung$ZeileDarstellung.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.aufgabenfeld, other.aufgabenfeld) && Kotlin.equals(this.gewählt, other.gewählt) && Kotlin.equals(this.klickbar, other.klickbar) && Kotlin.equals(this.mündlich, other.mündlich) && Kotlin.equals(this.mündlichKlickbar, other.mündlichKlickbar) && Kotlin.equals(this.stunden, other.stunden) && Kotlin.equals(this.stundenAlternativVorhanden, other.stundenAlternativVorhanden) && Kotlin.equals(this.fachnameOriginal, other.fachnameOriginal)))));
  };
  Belegung.prototype.anzahlLeistungsfächer_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.typ === Belegung$Companion$Kursart$LF_getInstance())
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  Belegung.prototype.anzahlMündlichePrüfungen_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.attribute.contains_11rb$(Fachattribute$mündlichePrüfung_getInstance()))
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  Belegung.prototype.seminarFachGewählt_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance()))
        destination.add_11rb$(element);
    }
    var sf = firstOrNull(destination);
    if (sf != null) {
      return sf.aufgabenfeld;
    }
    return null;
  };
  Belegung.prototype.fachAlsBasisfachOderWahlfachGewählt_0 = function (fach) {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (equals(element.name, fach))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.typ === Belegung$Companion$Kursart$BF_getInstance() || element_0.typ === Belegung$Companion$Kursart$WF_getInstance())
        destination_0.add_11rb$(element_0);
    }
    return destination_0.size > 0;
  };
  Belegung.prototype.alleHalbjahreBelegt_0 = function (fach, typ) {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (equals(element.name, fach) && element.typ === typ)
        destination.add_11rb$(element);
    }
    var fach_0 = firstOrNull(destination);
    if (fach_0 != null) {
      if (fach_0.alternativStunden) {
        var $receiver_0 = fach_0.stundenAlternativ;
        var destination_0 = ArrayList_init();
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          if (element_0 !== 0)
            destination_0.add_11rb$(element_0);
        }
        return destination_0.size === 4;
      }
       else {
        var $receiver_1 = fach_0.stunden;
        var destination_1 = ArrayList_init();
        var tmp$_1;
        tmp$_1 = $receiver_1.iterator();
        while (tmp$_1.hasNext()) {
          var element_1 = tmp$_1.next();
          if (element_1 !== 0)
            destination_1.add_11rb$(element_1);
        }
        return destination_1.size === 4;
      }
    }
     else {
      return false;
    }
  };
  Belegung.prototype.holeFehler = function () {
    this.action_4t1mlb$(Belegung$Companion$Aktion$CHECK_getInstance(), []);
    return toList(Belegung$Companion_getInstance().fehlerMeldungen);
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  Belegung.prototype.holeDarstellung = function () {
    var tmp$, tmp$_0, tmp$_1;
    var text = LinkedHashSet_init();
    var $receiver = Belegung$Companion_getInstance().fächerauswahl;
    var destination = LinkedHashMap_init();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      var key = element.aufgabenfeld;
      var tmp$_0_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    var bereiche = destination;
    tmp$ = bereiche.entries.iterator();
    while (tmp$.hasNext()) {
      var bereich = tmp$.next();
      text.add_11rb$(new Belegung$Überschrift('Bereich ' + toString(bereich.key)));
      var $receiver_0 = bereich.value;
      var destination_0 = LinkedHashMap_init();
      var tmp$_3;
      tmp$_3 = $receiver_0.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        var key_0 = element_0.name;
        var tmp$_0_1;
        var value_0 = destination_0.get_11rb$(key_0);
        if (value_0 == null) {
          var answer_0 = ArrayList_init();
          destination_0.put_xwzc9p$(key_0, answer_0);
          tmp$_0_1 = answer_0;
        }
         else {
          tmp$_0_1 = value_0;
        }
        var list_0 = tmp$_0_1;
        list_0.add_11rb$(element_0);
      }
      var fächer = destination_0;
      tmp$_0 = fächer.entries.iterator();
      while (tmp$_0.hasNext()) {
        var f = tmp$_0.next();
        var aufgabenfeld = bereich.key;
        var name;
        var gewählt = null;
        var mündlich = false;
        var mündlichKlickbar = false;
        var klickbarWahl = LinkedHashSet_init();
        var stunden = ArrayList_init();
        var stundenAlternativVorhanden = false;
        name = f.key;
        var fachnameOriginal = f.key;
        var varianten = f.value;
        tmp$_1 = varianten.iterator();
        while (tmp$_1.hasNext()) {
          var v = tmp$_1.next();
          if (this.anzahlLeistungsfächer_0() < 3 && !v.attribute.contains_11rb$(Fachattribute$Orchidee_getInstance()) && !v.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance()) && !v.attribute.contains_11rb$(Fachattribute$GeGe_getInstance())) {
            klickbarWahl.add_11rb$(Belegung$Companion$Kursart$LF_getInstance());
          }
          if (this.aktuelleBelegung_0.contains_11rb$(v)) {
            gewählt = v.typ;
            v.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance());
            klickbarWahl.add_11rb$(v.typ);
            stunden = v.alternativStunden === false ? v.stunden : v.stundenAlternativ;
            if (v.typ === Belegung$Companion$Kursart$WF_getInstance()) {
              stundenAlternativVorhanden = true;
            }
            if (v.attribute.contains_11rb$(Fachattribute$spätbeginnend_getInstance())) {
              stundenAlternativVorhanden = true;
            }
            if (v.attribute.contains_11rb$(Fachattribute$GeGe_getInstance())) {
              v.stunden = mutableListOf([2, 2, 2, 2]);
              var $receiver_1 = this.aktuelleBelegung_0;
              var destination_1 = ArrayList_init();
              var tmp$_4;
              tmp$_4 = $receiver_1.iterator();
              while (tmp$_4.hasNext()) {
                var element_1 = tmp$_4.next();
                if (equals(element_1.name, 'Wirtschaft') && element_1.typ === Belegung$Companion$Kursart$LF_getInstance())
                  destination_1.add_11rb$(element_1);
              }
              if (destination_1.size > 0) {
                stundenAlternativVorhanden = true;
              }
              var $receiver_2 = this.aktuelleBelegung_0;
              var destination_2 = ArrayList_init();
              var tmp$_5;
              tmp$_5 = $receiver_2.iterator();
              while (tmp$_5.hasNext()) {
                var element_2 = tmp$_5.next();
                if (equals(element_2.name, 'Gemeinschaftskunde') && element_2.typ === Belegung$Companion$Kursart$LF_getInstance())
                  destination_2.add_11rb$(element_2);
              }
              if (destination_2.size > 0) {
                stundenAlternativVorhanden = false;
                v.stunden = mutableListOf([2, 0, 0, 2]);
                name = 'Geographie';
                stunden = v.stunden;
              }
              var $receiver_3 = this.aktuelleBelegung_0;
              var destination_3 = ArrayList_init();
              var tmp$_6;
              tmp$_6 = $receiver_3.iterator();
              while (tmp$_6.hasNext()) {
                var element_3 = tmp$_6.next();
                if (equals(element_3.name, 'Geographie') && element_3.typ === Belegung$Companion$Kursart$LF_getInstance())
                  destination_3.add_11rb$(element_3);
              }
              if (destination_3.size > 0) {
                stundenAlternativVorhanden = false;
                v.stunden = mutableListOf([0, 2, 2, 0]);
                stunden = v.stunden;
                name = 'Gemeinschaftskunde';
              }
            }
          }
          if (v.attribute.contains_11rb$(Fachattribute$GeGe_getInstance())) {
            var $receiver_4 = this.aktuelleBelegung_0;
            var destination_4 = ArrayList_init();
            var tmp$_7;
            tmp$_7 = $receiver_4.iterator();
            while (tmp$_7.hasNext()) {
              var element_4 = tmp$_7.next();
              if (equals(element_4.name, 'Gemeinschaftskunde') && element_4.typ === Belegung$Companion$Kursart$LF_getInstance())
                destination_4.add_11rb$(element_4);
            }
            if (destination_4.size > 0) {
              name = 'Geographie';
            }
            var $receiver_5 = this.aktuelleBelegung_0;
            var destination_5 = ArrayList_init();
            var tmp$_8;
            tmp$_8 = $receiver_5.iterator();
            while (tmp$_8.hasNext()) {
              var element_5 = tmp$_8.next();
              if (equals(element_5.name, 'Geographie') && element_5.typ === Belegung$Companion$Kursart$LF_getInstance())
                destination_5.add_11rb$(element_5);
            }
            if (destination_5.size > 0) {
              name = 'Gemeinschaftskunde';
            }
          }
          if (v.typ === Belegung$Companion$Kursart$BF_getInstance() || v.typ === Belegung$Companion$Kursart$WF_getInstance()) {
            if (v.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance()) && equals(this.seminarFachGewählt_0(), v.aufgabenfeld)) {
              klickbarWahl.add_11rb$(v.typ);
            }
             else if (v.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance()) && this.seminarFachGewählt_0() != null && !equals(this.seminarFachGewählt_0(), v.aufgabenfeld)) {
              klickbarWahl.remove_11rb$(v.typ);
            }
             else {
              klickbarWahl.add_11rb$(v.typ);
            }
            if (this.anzahlMündlichePrüfungen_0() < 2 && this.fachAlsBasisfachOderWahlfachGewählt_0(v.name) && this.alleHalbjahreBelegt_0(v.name, v.typ)) {
              mündlichKlickbar = true;
            }
            if (v.attribute.contains_11rb$(Fachattribute$mündlichePrüfung_getInstance())) {
              mündlichKlickbar = true;
              mündlich = true;
            }
          }
        }
        text.add_11rb$(new Belegung$ZeileDarstellung(name == null ? throwUPAE('name') : name, aufgabenfeld, gewählt, klickbarWahl, mündlich, mündlichKlickbar, stunden, stundenAlternativVorhanden, fachnameOriginal));
      }
    }
    text.add_11rb$(new Belegung$Summe(this.holeWochenStunden_0()));
    return toList(text);
  };
  Belegung.prototype.getBelegung = function () {
    return this.aktuelleBelegung_0;
  };
  Belegung.prototype.getFächer = function () {
    return Belegung$Companion_getInstance().fächerauswahl;
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  Belegung.prototype.toString = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.name + ' ' + item.typ + ' ' + item.attribute);
    }
    return '\n\nAktuelleBelegung:\n' + joinToString(destination, '\n');
  };
  Belegung.prototype.testeMehrfach_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.name;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var tmp$_1;
    var result = LinkedHashMap_init();
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var entry = tmp$_1.next();
      if (entry.value.size > 1) {
        result.put_xwzc9p$(entry.key, entry.value);
      }
    }
    var mehrfach = toList(result.keys);
    if (mehrfach.size > 0) {
      println('Die folgenden F\xE4cher sind mehrfach belegt: ' + joinToString(mehrfach, ','));
      return false;
    }
     else {
      return true;
    }
  };
  Belegung.prototype.testeSprachenOderNaturwissenschaft_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.attribute.contains_11rb$(Fachattribute$Fremdsprache_getInstance()))
        destination.add_11rb$(element);
    }
    var sprachen = destination;
    var $receiver_0 = this.aktuelleBelegung_0;
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.attribute.contains_11rb$(Fachattribute$Naturwissenschaft_getInstance()) || element_0.attribute.contains_11rb$(Fachattribute$kannNawiErsetzen_getInstance()))
        destination_0.add_11rb$(element_0);
    }
    var naturwissenschaften = destination_0;
    var $receiver_1 = this.aktuelleBelegung_0;
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      if (element_1.attribute.contains_11rb$(Fachattribute$kannNawiErsetzen_getInstance()))
        destination_1.add_11rb$(element_1);
    }
    var naturwissenschaftersatz = destination_1;
    println(sprachen.size.toString() + ' Sprache(n) und ' + naturwissenschaften.size + ' Naturwissenschaft(en) gew\xE4hlt.');
    Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$NEUTRAL_getInstance(), sprachen.size.toString() + ' Sprache(n) und ' + naturwissenschaften.size + ' Naturwissenschaft(en) gew\xE4hlt.'));
    var tmp$_2 = sprachen.size === 0;
    if (!tmp$_2) {
      tmp$_2 = naturwissenschaften.size === 0;
    }
    if (tmp$_2) {
      println('Es wurde noch keine Fremdsprache gew\xE4hlt.');
      if ((naturwissenschaften.size - naturwissenschaftersatz.size | 0) === 0) {
        Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es wurde noch keine klassische Naturwissenschaft gew\xE4hlt.'));
      }
      if (sprachen.size === 0) {
        Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es wurde noch keine Fremdsprache gew\xE4hlt.'));
      }
      return false;
    }
    var tmp$_3 = sprachen.size < 2;
    if (tmp$_3) {
      tmp$_3 = naturwissenschaften.size < 2;
    }
    if (tmp$_3) {
      println('Es m\xFCssen entweder mindestens 2 Naturwissenschaften und 1 Sprache belegt werden oder umgekehrt.');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es m\xFCssen entweder mindestens 2 Naturwissenschaften und 1 Sprache belegt werden oder umgekehrt.'));
      return false;
    }
     else {
      var tmp$_4 = sprachen.size < 2;
      if (tmp$_4) {
        tmp$_4 = naturwissenschaften.size >= 2;
      }
      if (tmp$_4) {
        var anzahlKlassischeNaturwissenschaften = naturwissenschaften.size - naturwissenschaftersatz.size | 0;
        if (anzahlKlassischeNaturwissenschaften === 0) {
          println('Es muss mindestens eine klassische Naturwissenschaft belegt werden.');
          Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es muss mindestens eine klassische Naturwissenschaft belegt werden.'));
          return false;
        }
         else if (anzahlKlassischeNaturwissenschaften === 1) {
          var destination_2 = ArrayList_init();
          var tmp$_5;
          tmp$_5 = naturwissenschaften.iterator();
          while (tmp$_5.hasNext()) {
            var element_2 = tmp$_5.next();
            if (element_2.typ === Belegung$Companion$Kursart$LF_getInstance())
              destination_2.add_11rb$(element_2);
          }
          var anzahlLeistungsfächer = destination_2.size;
          if (anzahlLeistungsfächer > 0) {
            println('G\xFCltige Kombination f\xFCr Naturwissenschaften');
            Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$GUT_getInstance(), 'G\xFCltige Kombination f\xFCr Naturwissenschaften'));
            return true;
          }
           else {
            println('Bei der Ersetzung einer klassischen Naturwissenschaft durch Informatik oder NwT muss mindestens eines dieser F\xE4cher als Leistungsfach belegt werden.');
            Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Bei der Ersetzung einer klassischen Naturwissenschaft durch Informatik oder NwT muss mindestens eines dieser F\xE4cher als Leistungsfach belegt werden.'));
            return false;
          }
        }
         else {
          return true;
        }
      }
       else {
        return true;
      }
    }
  };
  Belegung.prototype.testeObFachSchonVorhanden_0 = function (name) {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (equals(element.name, name))
        destination.add_11rb$(element);
    }
    var anzahl = destination.size;
    return anzahl > 0;
  };
  Belegung.prototype.testeBereichsabdeckungPrüfung_0 = function () {
    var rueckgabe = false;
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.attribute.contains_11rb$(Fachattribute$mündlichePrüfung_getInstance()) || element.typ === Belegung$Companion$Kursart$LF_getInstance())
        destination.add_11rb$(element);
    }
    var prüfungsfächer = destination;
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = prüfungsfächer.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.attribute.contains_11rb$(Fachattribute$Deutsch_getInstance()) || element_0.attribute.contains_11rb$(Fachattribute$Mathematik_getInstance()))
        destination_0.add_11rb$(element_0);
    }
    if (destination_0.size < 2) {
      println('Mathematik und Deutsch m\xFCssen Pr\xFCfungsf\xE4cher im Abitur sein.');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Mathematik und Deutsch m\xFCssen Pr\xFCfungsf\xE4cher im Abitur sein.'));
      return false;
    }
     else {
      print('Mathematik und Deutsch sind in den Pr\xFCfungsf\xE4chern enthalten. ');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$GUT_getInstance(), 'Mathematik und Deutsch sind in den Pr\xFCfungsf\xE4chern enthalten. '));
    }
    if (prüfungsfächer.size < 5) {
      println('Es m\xFCssen drei Leistungsf\xE4cher f\xFCr die schriftliche und zwei Basisf\xE4cher f\xFCr die m\xFCndliche Pr\xFCfung gew\xE4hlt werden');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es m\xFCssen drei Leistungsf\xE4cher f\xFCr die schriftliche und zwei Basisf\xE4cher f\xFCr die m\xFCndliche Pr\xFCfung gew\xE4hlt werden'));
      return false;
    }
     else {
      println('Es sind drei Leistungsf\xE4cher und f\xFCr die m\xFCndliche Pr\xFCfung zwei Basisf\xE4cher gew\xE4hlt');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$GUT_getInstance(), 'Es sind drei Leistungsf\xE4cher und f\xFCr die m\xFCndliche Pr\xFCfung zwei Basisf\xE4cher gew\xE4hlt'));
    }
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault(prüfungsfächer, 10));
    var tmp$_1;
    tmp$_1 = prüfungsfächer.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_1.add_11rb$(item.aufgabenfeld);
    }
    var bereiche = toSet(destination_1);
    var fehlendeBereiche = minus(setOf([Aufgabenfeld$I_getInstance(), Aufgabenfeld$II_getInstance(), Aufgabenfeld$III_getInstance()]), bereiche);
    if (fehlendeBereiche.size > 0) {
      var destination_2 = ArrayList_init_0(collectionSizeOrDefault(fehlendeBereiche, 10));
      var tmp$_2;
      tmp$_2 = fehlendeBereiche.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        destination_2.add_11rb$(Belegung$Companion_getInstance().Text.get_11rb$(item_0));
      }
      println('Die folgenden Aufgabenfelder sind noch nicht in der Abiturpr\xFCfung abgedeckt: ' + joinToString(destination_2, ','));
      var tmp$_3 = Belegung$Companion_getInstance().fehlerMeldungen;
      var tmp$_4 = Belegung$Kommentarart$SCHLECHT_getInstance();
      var destination_3 = ArrayList_init_0(collectionSizeOrDefault(fehlendeBereiche, 10));
      var tmp$_5;
      tmp$_5 = fehlendeBereiche.iterator();
      while (tmp$_5.hasNext()) {
        var item_1 = tmp$_5.next();
        destination_3.add_11rb$(Belegung$Companion_getInstance().Text.get_11rb$(item_1));
      }
      tmp$_3.add_11rb$(new Belegung$Kommentar(tmp$_4, 'Die folgenden Aufgabenfelder sind noch nicht in der Abiturpr\xFCfung abgedeckt: ' + joinToString(destination_3, ',')));
    }
    return rueckgabe;
  };
  Belegung.prototype.testePflichtbelegungRest_0 = function () {
    var pflichtfächer = {v: ArrayList_init()};
    var Bereichsnamen = listOf(['Geschichte', 'Geographie und Gemeinschaftskunde', 'Religion oder Ethik', 'Bildende Kunst oder Musik', 'Sport']);
    var $receiver = this.aktuelleBelegung_0;
    var tmp$ = pflichtfächer.v;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (equals(element.name, 'Geschichte'))
        destination.add_11rb$(element);
    }
    tmp$.add_11rb$(destination.size);
    var tmp$_1 = pflichtfächer.v;
    var destination_0 = ArrayList_init();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      if (element_0.attribute.contains_11rb$(Fachattribute$GeGe_getInstance()))
        destination_0.add_11rb$(element_0);
    }
    tmp$_1.add_11rb$(destination_0.size);
    var tmp$_3 = pflichtfächer.v;
    var destination_1 = ArrayList_init();
    var tmp$_4;
    tmp$_4 = $receiver.iterator();
    while (tmp$_4.hasNext()) {
      var element_1 = tmp$_4.next();
      if (equals(element_1.name, 'Religionslehre') || equals(element_1.name, 'Ethik'))
        destination_1.add_11rb$(element_1);
    }
    tmp$_3.add_11rb$(destination_1.size);
    var tmp$_5 = pflichtfächer.v;
    var destination_2 = ArrayList_init();
    var tmp$_6;
    tmp$_6 = $receiver.iterator();
    while (tmp$_6.hasNext()) {
      var element_2 = tmp$_6.next();
      if (equals(element_2.name, 'Bildende Kunst') || equals(element_2.name, 'Musik'))
        destination_2.add_11rb$(element_2);
    }
    tmp$_5.add_11rb$(destination_2.size);
    var tmp$_7 = pflichtfächer.v;
    var destination_3 = ArrayList_init();
    var tmp$_8;
    tmp$_8 = $receiver.iterator();
    while (tmp$_8.hasNext()) {
      var element_3 = tmp$_8.next();
      if (equals(element_3.name, 'Sport'))
        destination_3.add_11rb$(element_3);
    }
    tmp$_7.add_11rb$(destination_3.size);
    var fehlendeFächer = ArrayList_init();
    var index = 0;
    for (var tmp$_9 = pflichtfächer.v.iterator(); tmp$_9.hasNext(); ++index) {
      var pf = tmp$_9.next();
      if (pf === 0) {
        fehlendeFächer.add_11rb$(Bereichsnamen.get_za3lpa$(index));
      }
    }
    if (fehlendeFächer.size > 0) {
      println('Folgende F\xE4cher fehlen noch: ' + joinToString(fehlendeFächer, ', '));
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Folgende F\xE4cher fehlen noch: ' + joinToString(fehlendeFächer, ', ')));
    }
    return fehlendeFächer.size === 0;
  };
  Belegung.prototype.testeMindestens42Kurse_0 = function () {
    var tmp$;
    var kurssumme = 0;
    tmp$ = this.aktuelleBelegung_0.iterator();
    while (tmp$.hasNext()) {
      var fach = tmp$.next();
      var tmp$_0 = kurssumme;
      var tmp$_1;
      if (fach.alternativStunden === false) {
        var $receiver = fach.stunden;
        var destination = ArrayList_init();
        var tmp$_2;
        tmp$_2 = $receiver.iterator();
        while (tmp$_2.hasNext()) {
          var element = tmp$_2.next();
          if (element !== 0)
            destination.add_11rb$(element);
        }
        tmp$_1 = destination.size;
      }
       else {
        var $receiver_0 = fach.stundenAlternativ;
        var destination_0 = ArrayList_init();
        var tmp$_3;
        tmp$_3 = $receiver_0.iterator();
        while (tmp$_3.hasNext()) {
          var element_0 = tmp$_3.next();
          if (element_0 !== 0)
            destination_0.add_11rb$(element_0);
        }
        tmp$_1 = destination_0.size;
      }
      kurssumme = tmp$_0 + tmp$_1 | 0;
    }
    println('Anzahl der gew\xE4hlten Kurse: ' + kurssumme);
    Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$NEUTRAL_getInstance(), 'Anzahl der gew\xE4hlten Kurse: ' + kurssumme));
    if (kurssumme < 42) {
      println('Es m\xFCssen mindestens 42 Kurse gew\xE4hlt werden');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es m\xFCssen mindestens 42 Kurse gew\xE4hlt werden'));
    }
    return kurssumme >= 42;
  };
  Belegung.prototype.holeWochenStunden_0 = function () {
    var tmp$;
    var stundensumme = mutableListOf([0, 0, 0, 0]);
    var zeilenStunden = ArrayList_init();
    tmp$ = this.aktuelleBelegung_0.iterator();
    while (tmp$.hasNext()) {
      var fach = tmp$.next();
      zeilenStunden = fach.alternativStunden === false ? fach.stunden : fach.stundenAlternativ;
      for (var i = 0; i <= 3; i++) {
        stundensumme.set_wxm5ur$(i, stundensumme.get_za3lpa$(i) + zeilenStunden.get_za3lpa$(i) | 0);
      }
    }
    return toList(stundensumme);
  };
  Belegung.prototype.testeMindestens32Wochenstunden_0 = function () {
    var tmp$;
    var stundensumme = 0;
    tmp$ = this.aktuelleBelegung_0.iterator();
    while (tmp$.hasNext()) {
      var fach = tmp$.next();
      stundensumme = stundensumme + (fach.alternativStunden === false ? sum(fach.stunden) : sum(fach.stundenAlternativ)) | 0;
    }
    var durchschnitt = stundensumme / 4.0;
    println('Durchschnittlich ' + durchschnitt + ' Wochenstunden pro Halbjahr.');
    Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$NEUTRAL_getInstance(), 'Durchschnittlich ' + durchschnitt + ' Wochenstunden pro Halbjahr.'));
    if (durchschnitt < 32) {
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es m\xFCssen im Durchschnitt mindestens 32 Wochenstunden pro Halbjahr sein.' + '\n' + 'Somit m\xFCssen noch Kurse im Gesamtwochenstundenumfang von mindestens ' + (32 - durchschnitt) * 4 + ' Stunden belegt werden.'));
      println('\nEs m\xFCssen im Durchschnitt mindestens 32 Wochenstunden pro Halbjahr sein.');
      println('\n' + 'Somit m\xFCssen noch Kurse im Gesamtwochenstundenumfang von mindestens ' + (32 - durchschnitt) * 4 + ' Stunden belegt werden.');
    }
    return durchschnitt >= 32;
  };
  Belegung.prototype.testeLeistungsfächer_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.typ === Belegung$Companion$Kursart$LF_getInstance())
        destination.add_11rb$(element);
    }
    var leistungsfächer = destination;
    var rückgabe = false;
    if (leistungsfächer.size < 3) {
      println('Zu wenige Leistungsf\xE4cher gew\xE4hlt!');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Zu wenige Leistungsf\xE4cher gew\xE4hlt!'));
    }
     else if (leistungsfächer.size > 3) {
      println('Zu viele Leistungsf\xE4cher gew\xE4hlt!');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Zu viele Leistungsf\xE4cher gew\xE4hlt!'));
    }
     else {
      var destination_0 = LinkedHashMap_init();
      var tmp$_0;
      tmp$_0 = leistungsfächer.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var key = element_0.attribute;
        var tmp$_0_0;
        var value = destination_0.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          destination_0.put_xwzc9p$(key, answer);
          tmp$_0_0 = answer;
        }
         else {
          tmp$_0_0 = value;
        }
        var list = tmp$_0_0;
        list.add_11rb$(element_0);
      }
      var lfAuswahl = toSet(flatten(destination_0.keys));
      if (minus(Belegung$Companion_getInstance().leistungsfachBereiche, lfAuswahl).size <= 2) {
        println('Leistungsfachkombination g\xFCltig');
        Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$GUT_getInstance(), 'Leistungsfachkombination g\xFCltig'));
        rückgabe = true;
      }
       else {
        println('Leistungsfachkombination ung\xFCltig: zwei der drei Leistungsf\xE4cher m\xFCssen aus D, M, FS, Nawi sein');
        Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Leistungsfachkombination ung\xFCltig: zwei der drei Leistungsf\xE4cher m\xFCssen aus D, M, FS, Nawi sein'));
      }
    }
    return rückgabe;
  };
  Belegung.prototype.serialisiere = function () {
    var kodierung = '';
    var schonErledigt = ArrayList_init();
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.attribute.contains_11rb$(Fachattribute$Mathematik_getInstance()) && element.typ === Belegung$Companion$Kursart$LF_getInstance())
        destination.add_11rb$(element);
    }
    kodierung += destination.size;
    var $receiver_0 = this.aktuelleBelegung_0;
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.attribute.contains_11rb$(Fachattribute$Deutsch_getInstance()) && element_0.typ === Belegung$Companion$Kursart$LF_getInstance())
        destination_0.add_11rb$(element_0);
    }
    kodierung += destination_0.size;
    var $receiver_1 = this.aktuelleBelegung_0;
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      if (element_1.attribute.contains_11rb$(Fachattribute$Mathematik_getInstance()))
        destination_1.add_11rb$(element_1);
    }
    schonErledigt.add_11rb$(first(destination_1));
    var $receiver_2 = this.aktuelleBelegung_0;
    var destination_2 = ArrayList_init();
    var tmp$_2;
    tmp$_2 = $receiver_2.iterator();
    while (tmp$_2.hasNext()) {
      var element_2 = tmp$_2.next();
      if (element_2.attribute.contains_11rb$(Fachattribute$Deutsch_getInstance()))
        destination_2.add_11rb$(element_2);
    }
    schonErledigt.add_11rb$(first(destination_2));
    var sprache = {v: ''};
    var index = 0;
    for (var tmp$_3 = Belegung$Companion_getInstance().sprachen.iterator(); tmp$_3.hasNext(); ++index) {
      var s = tmp$_3.next();
      var $receiver_3 = this.aktuelleBelegung_0;
      var destination_3 = ArrayList_init();
      var tmp$_4;
      tmp$_4 = $receiver_3.iterator();
      while (tmp$_4.hasNext()) {
        var element_3 = tmp$_4.next();
        if (equals(element_3.name, s))
          destination_3.add_11rb$(element_3);
      }
      if (destination_3.size > 0) {
        sprache.v = s;
        kodierung += Belegung$Companion_getInstance().binär3.get_za3lpa$(index);
        break;
      }
    }
    var $receiver_4 = this.aktuelleBelegung_0;
    var destination_4 = ArrayList_init();
    var tmp$_5;
    tmp$_5 = $receiver_4.iterator();
    while (tmp$_5.hasNext()) {
      var element_4 = tmp$_5.next();
      if (equals(element_4.name, sprache.v))
        destination_4.add_11rb$(element_4);
    }
    var fachAktuell = first(destination_4);
    schonErledigt.add_11rb$(fachAktuell);
    if (fachAktuell.typ === Belegung$Companion$Kursart$LF_getInstance()) {
      kodierung += '1';
    }
     else {
      kodierung += '0';
      if (fachAktuell.alternativStunden === true) {
        kodierung += '1';
      }
       else {
        kodierung += '0';
      }
      if (fachAktuell.attribute.contains_11rb$(Fachattribute$mündlichePrüfung_getInstance())) {
        kodierung += '1';
      }
       else {
        kodierung += '0';
      }
    }
    var naturwissenschaft = {v: ''};
    var index_0 = 0;
    for (var tmp$_6 = Belegung$Companion_getInstance().naturwissenschaften.iterator(); tmp$_6.hasNext(); ++index_0) {
      var s_0 = tmp$_6.next();
      var $receiver_5 = this.aktuelleBelegung_0;
      var destination_5 = ArrayList_init();
      var tmp$_7;
      tmp$_7 = $receiver_5.iterator();
      while (tmp$_7.hasNext()) {
        var element_5 = tmp$_7.next();
        if (equals(element_5.name, s_0))
          destination_5.add_11rb$(element_5);
      }
      if (destination_5.size > 0) {
        naturwissenschaft.v = s_0;
        kodierung += Belegung$Companion_getInstance().binär2.get_za3lpa$(index_0);
        break;
      }
    }
    var $receiver_6 = this.aktuelleBelegung_0;
    var destination_6 = ArrayList_init();
    var tmp$_8;
    tmp$_8 = $receiver_6.iterator();
    while (tmp$_8.hasNext()) {
      var element_6 = tmp$_8.next();
      if (equals(element_6.name, naturwissenschaft.v))
        destination_6.add_11rb$(element_6);
    }
    fachAktuell = first(destination_6);
    schonErledigt.add_11rb$(fachAktuell);
    kodierung += this.fachBFoderLF_0(fachAktuell);
    var $receiver_7 = this.aktuelleBelegung_0;
    var destination_7 = ArrayList_init();
    var tmp$_9;
    tmp$_9 = $receiver_7.iterator();
    while (tmp$_9.hasNext()) {
      var element_7 = tmp$_9.next();
      if (equals(element_7.name, 'Geschichte'))
        destination_7.add_11rb$(element_7);
    }
    fachAktuell = first(destination_7);
    schonErledigt.add_11rb$(fachAktuell);
    kodierung += this.fachBFoderLF_0(fachAktuell);
  };
  Belegung.prototype.fachBFoderLF_0 = function (fachAktuell) {
    var kodierung = '';
    if (fachAktuell.typ === Belegung$Companion$Kursart$LF_getInstance()) {
      kodierung += '1';
    }
     else {
      kodierung += '0';
      if (fachAktuell.attribute.contains_11rb$(Fachattribute$mündlichePrüfung_getInstance())) {
        kodierung += '1';
      }
       else {
        kodierung += '0';
      }
    }
    return kodierung;
  };
  Belegung.prototype.mehrfach_fyomdn$ = function ($receiver) {
    var fachMap = LinkedHashMap_init();
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.name;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var tmp$_1;
    var result = LinkedHashMap_init();
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var entry = tmp$_1.next();
      if (entry.value.size > 1) {
        result.put_xwzc9p$(entry.key, entry.value);
      }
    }
    var mehrfach = toList(result.keys);
    var destination_0 = LinkedHashMap_init();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      var key_0 = element_0.name;
      var tmp$_0_0;
      var value_0 = destination_0.get_11rb$(key_0);
      if (value_0 == null) {
        var answer_0 = ArrayList_init();
        destination_0.put_xwzc9p$(key_0, answer_0);
        tmp$_0_0 = answer_0;
      }
       else {
        tmp$_0_0 = value_0;
      }
      var list_0 = tmp$_0_0;
      list_0.add_11rb$(element_0);
    }
    println(destination_0);
    return mehrfach;
  };
  function Belegung$action$lambda(closure$name) {
    return function (it) {
      return equals(it.name, closure$name);
    };
  }
  function Belegung$action$lambda$lambda(closure$name) {
    return function (it) {
      return equals(it.name, closure$name);
    };
  }
  function Belegung$action$lambda$lambda_0(closure$name) {
    return function (it) {
      return equals(it.name, closure$name);
    };
  }
  Belegung.prototype.action_4t1mlb$ = function (command, parameter) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    loop_label: switch (command.name) {
      case 'NEU':
        var name = typeof (tmp$ = parameter[0]) === 'string' ? tmp$ : throwCCE();
        var typ = Kotlin.isType(tmp$_0 = parameter[1], Belegung$Companion$Kursart) ? tmp$_0 : throwCCE();
        var $receiver = Belegung$Companion_getInstance().fächerauswahl;
        var destination = ArrayList_init();
        var tmp$_8;
        tmp$_8 = $receiver.iterator();
        while (tmp$_8.hasNext()) {
          var element = tmp$_8.next();
          if (equals(element.name, name) && element.typ === typ)
            destination.add_11rb$(element);
        }

        var fach = firstOrNull(destination);
        if (!this.testeObFachSchonVorhanden_0(name)) {
          if (fach != null) {
            if (!this.aktuelleBelegung_0.contains_11rb$(fach)) {
              this.aktuelleBelegung_0.add_11rb$(fach);
            }
             else {
              println('Fach ' + name + ' bereits enthalten');
            }
          }
           else {
            println('Fach existiert so nicht');
          }
        }
         else {
          println('Fach ' + name + ' ist bereits in der Belegung vorhanden');
        }

        break loop_label;
      case 'L\xD6SCHE':
        var name_0 = typeof (tmp$_1 = parameter[0]) === 'string' ? tmp$_1 : throwCCE();
        removeAll(this.aktuelleBelegung_0, Belegung$action$lambda(name_0));
        break loop_label;
      case 'TOGGLESTUNDEN':
        var name_1 = typeof (tmp$_2 = parameter[0]) === 'string' ? tmp$_2 : throwCCE();
        var typ_0 = Kotlin.isType(tmp$_3 = parameter[1], Belegung$Companion$Kursart) ? tmp$_3 : throwCCE();
        var $receiver_0 = this.aktuelleBelegung_0;
        var destination_0 = ArrayList_init();
        var tmp$_9;
        tmp$_9 = $receiver_0.iterator();
        while (tmp$_9.hasNext()) {
          var element_0 = tmp$_9.next();
          if (equals(element_0.name, name_1) && element_0.typ === typ_0)
            destination_0.add_11rb$(element_0);
        }

        var fach_0 = firstOrNull(destination_0);
        if (fach_0 != null) {
          fach_0.alternativStunden = !fach_0.alternativStunden;
          var tmp$_10 = fach_0.alternativStunden;
          if (tmp$_10) {
            var $receiver_1 = fach_0.stundenAlternativ;
            var destination_1 = ArrayList_init();
            var tmp$_11;
            tmp$_11 = $receiver_1.iterator();
            while (tmp$_11.hasNext()) {
              var element_1 = tmp$_11.next();
              if (element_1 > 0)
                destination_1.add_11rb$(element_1);
            }
            tmp$_10 = destination_1.size < 4;
          }
          if (tmp$_10) {
            fach_0.attribute.remove_11rb$(Fachattribute$mündlichePrüfung_getInstance());
          }
        }

        break loop_label;
      case 'CHECK':
        Belegung$Companion_getInstance().fehlerMeldungen = ArrayList_init();
        this.testeMehrfach_0();
        this.testeLeistungsfächer_0();
        this.testeBereichsabdeckungPrüfung_0();
        this.testeSprachenOderNaturwissenschaft_0();
        this.testePflichtbelegungRest_0();
        this.testeMindestens42Kurse_0();
        break loop_label;
      case 'TOGGLEM\xDCNDLICH':
        var name_2 = typeof (tmp$_4 = parameter[0]) === 'string' ? tmp$_4 : throwCCE();
        var typ_1 = Kotlin.isType(tmp$_5 = parameter[1], Belegung$Companion$Kursart) ? tmp$_5 : throwCCE();
        var $receiver_2 = this.aktuelleBelegung_0;
        var destination_2 = ArrayList_init();
        var tmp$_12;
        tmp$_12 = $receiver_2.iterator();
        while (tmp$_12.hasNext()) {
          var element_2 = tmp$_12.next();
          if (element_2.attribute.contains_11rb$(Fachattribute$mündlichePrüfung_getInstance()))
            destination_2.add_11rb$(element_2);
        }

        var anzahlPrüfungsfächer = destination_2.size;
        var $receiver_3 = this.aktuelleBelegung_0;
        var indexOfFirst$result;
        indexOfFirst$break: do {
          var tmp$_13;
          var index = 0;
          tmp$_13 = $receiver_3.iterator();
          while (tmp$_13.hasNext()) {
            var item = tmp$_13.next();
            if (equals(item.name, name_2) && item.typ === typ_1) {
              indexOfFirst$result = index;
              break indexOfFirst$break;
            }
            index = index + 1 | 0;
          }
          indexOfFirst$result = -1;
        }
         while (false);
        var schriftlichIndex = indexOfFirst$result;
        if (schriftlichIndex >= 0) {
          var $receiver_4 = this.aktuelleBelegung_0.get_za3lpa$(schriftlichIndex).attribute;
          if ($receiver_4.contains_11rb$(Fachattribute$mündlichePrüfung_getInstance())) {
            $receiver_4.remove_11rb$(Fachattribute$mündlichePrüfung_getInstance());
          }
           else {
            if (anzahlPrüfungsfächer < 2) {
              $receiver_4.add_11rb$(Fachattribute$mündlichePrüfung_getInstance());
            }
             else {
              Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Maximal drei m\xFCndliche Pr\xFCfungsf\xE4cher erlaubt.'));
              println('Maximal drei m\xFCndliche Pr\xFCfungsf\xE4cher erlaubt.');
            }
          }
        }

        break loop_label;
      case 'TOGGLE':
        var name_3 = typeof (tmp$_6 = parameter[0]) === 'string' ? tmp$_6 : throwCCE();
        var typ_2 = Kotlin.isType(tmp$_7 = parameter[1], Belegung$Companion$Kursart) ? tmp$_7 : throwCCE();
        var $receiver_5 = Belegung$Companion_getInstance().fächerauswahl;
        var destination_3 = ArrayList_init();
        var tmp$_14;
        tmp$_14 = $receiver_5.iterator();
        while (tmp$_14.hasNext()) {
          var element_3 = tmp$_14.next();
          if (equals(element_3.name, name_3) && element_3.typ === typ_2)
            destination_3.add_11rb$(element_3);
        }

        var fach_1 = firstOrNull(destination_3);
        if (fach_1 != null) {
          var $receiver_6 = this.aktuelleBelegung_0;
          if ($receiver_6.contains_11rb$(fach_1)) {
            fach_1.attribute.remove_11rb$(Fachattribute$mündlichePrüfung_getInstance());
            removeAll($receiver_6, Belegung$action$lambda$lambda(name_3));
            if (equals(fach_1.name, 'Wirtschaft') && fach_1.typ === Belegung$Companion$Kursart$LF_getInstance()) {
              var $receiver_7 = Belegung$Companion_getInstance().fächerauswahl;
              var destination_4 = ArrayList_init();
              var tmp$_15;
              tmp$_15 = $receiver_7.iterator();
              while (tmp$_15.hasNext()) {
                var element_4 = tmp$_15.next();
                if (element_4.attribute.contains_11rb$(Fachattribute$GeGe_getInstance()))
                  destination_4.add_11rb$(element_4);
              }
              var gege = firstOrNull(destination_4);
              if (gege != null) {
                gege.alternativStunden = false;
                gege.attribute.remove_11rb$(Fachattribute$mündlichePrüfung_getInstance());
              }
            }
            fach_1.alternativStunden = false;
          }
           else {
            var destination_5 = ArrayList_init_0(collectionSizeOrDefault($receiver_6, 10));
            var tmp$_16;
            tmp$_16 = $receiver_6.iterator();
            while (tmp$_16.hasNext()) {
              var item_0 = tmp$_16.next();
              destination_5.add_11rb$(item_0.name);
            }
            if (destination_5.contains_11rb$(name_3)) {
              var $receiver_8 = Belegung$Companion_getInstance().fächerauswahl;
              var destination_6 = ArrayList_init();
              var tmp$_17;
              tmp$_17 = $receiver_8.iterator();
              while (tmp$_17.hasNext()) {
                var element_5 = tmp$_17.next();
                if (equals(element_5.name, name_3))
                  destination_6.add_11rb$(element_5);
              }
              var tmp$_18;
              tmp$_18 = destination_6.iterator();
              while (tmp$_18.hasNext()) {
                var element_6 = tmp$_18.next();
                element_6.attribute.remove_11rb$(Fachattribute$mündlichePrüfung_getInstance());
              }
              removeAll($receiver_6, Belegung$action$lambda$lambda_0(name_3));
              fach_1.alternativStunden = false;
              $receiver_6.add_11rb$(fach_1);
            }
             else {
              $receiver_6.add_11rb$(fach_1);
              fach_1.alternativStunden = false;
            }
          }
        }

        break loop_label;
      default:Kotlin.noWhenBranchMatched();
        break loop_label;
    }
  };
  function Belegung$Companion() {
    Belegung$Companion_instance = this;
    this.binär2 = listOf(['00', '01', '10', '11']);
    this.binär3 = listOf(['000', '001', '010', '011', '100', '101', '110', '111']);
    this.naturwissenschaften = listOf(['Physik', 'Chemie', 'Biologie']);
    this.sprachen = listOf(['Englisch', 'Franz\xF6sisch', 'Latein', 'Griechisch', 'Russisch', 'Spanisch', 'Italienisch', 'Portugiesisch']);
    this.lfOderBfOderBfMündlich = hashMapOf([to('LF', '10'), to('BF', '01'), to('BFm\xFCndlich', '11')]);
    this.fehlerMeldungen = ArrayList_init();
    this.Text = hashMapOf([to(Belegung$Companion$Kursart$BF_getInstance(), 'Basisfach'), to(Aufgabenfeld$I_getInstance(), 'Sprachlich'), to(Aufgabenfeld$II_getInstance(), 'Gesellschaftswissenschaften'), to(Aufgabenfeld$III_getInstance(), 'Mathematik und Naturwissenschaften')]);
    this.leistungsfachBereiche = setOf([Fachattribute$Mathematik_getInstance(), Fachattribute$Fremdsprache_getInstance(), Fachattribute$Naturwissenschaft_getInstance(), Fachattribute$Deutsch_getInstance()]);
    this.fächerauswahl_o9hkti$_0 = this.fächerauswahl_o9hkti$_0;
  }
  function Belegung$Companion$Kursart(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Belegung$Companion$Kursart_initFields() {
    Belegung$Companion$Kursart_initFields = function () {
    };
    Belegung$Companion$Kursart$LF_instance = new Belegung$Companion$Kursart('LF', 0);
    Belegung$Companion$Kursart$BF_instance = new Belegung$Companion$Kursart('BF', 1);
    Belegung$Companion$Kursart$WF_instance = new Belegung$Companion$Kursart('WF', 2);
  }
  var Belegung$Companion$Kursart$LF_instance;
  function Belegung$Companion$Kursart$LF_getInstance() {
    Belegung$Companion$Kursart_initFields();
    return Belegung$Companion$Kursart$LF_instance;
  }
  var Belegung$Companion$Kursart$BF_instance;
  function Belegung$Companion$Kursart$BF_getInstance() {
    Belegung$Companion$Kursart_initFields();
    return Belegung$Companion$Kursart$BF_instance;
  }
  var Belegung$Companion$Kursart$WF_instance;
  function Belegung$Companion$Kursart$WF_getInstance() {
    Belegung$Companion$Kursart_initFields();
    return Belegung$Companion$Kursart$WF_instance;
  }
  Belegung$Companion$Kursart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kursart',
    interfaces: [Enum]
  };
  function Belegung$Companion$Kursart$values() {
    return [Belegung$Companion$Kursart$LF_getInstance(), Belegung$Companion$Kursart$BF_getInstance(), Belegung$Companion$Kursart$WF_getInstance()];
  }
  Belegung$Companion$Kursart.values = Belegung$Companion$Kursart$values;
  function Belegung$Companion$Kursart$valueOf(name) {
    switch (name) {
      case 'LF':
        return Belegung$Companion$Kursart$LF_getInstance();
      case 'BF':
        return Belegung$Companion$Kursart$BF_getInstance();
      case 'WF':
        return Belegung$Companion$Kursart$WF_getInstance();
      default:throwISE('No enum constant sample.Belegung.Companion.Kursart.' + name);
    }
  }
  Belegung$Companion$Kursart.valueOf_61zpoe$ = Belegung$Companion$Kursart$valueOf;
  function Belegung$Companion$Aktion(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Belegung$Companion$Aktion_initFields() {
    Belegung$Companion$Aktion_initFields = function () {
    };
    Belegung$Companion$Aktion$NEU_instance = new Belegung$Companion$Aktion('NEU', 0);
    Belegung$Companion$Aktion$LÖSCHE_instance = new Belegung$Companion$Aktion('L\xD6SCHE', 1);
    Belegung$Companion$Aktion$TOGGLE_instance = new Belegung$Companion$Aktion('TOGGLE', 2);
    Belegung$Companion$Aktion$CHECK_instance = new Belegung$Companion$Aktion('CHECK', 3);
    Belegung$Companion$Aktion$TOGGLEMÜNDLICH_instance = new Belegung$Companion$Aktion('TOGGLEM\xDCNDLICH', 4);
    Belegung$Companion$Aktion$TOGGLESTUNDEN_instance = new Belegung$Companion$Aktion('TOGGLESTUNDEN', 5);
  }
  var Belegung$Companion$Aktion$NEU_instance;
  function Belegung$Companion$Aktion$NEU_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$NEU_instance;
  }
  var Belegung$Companion$Aktion$LÖSCHE_instance;
  function Belegung$Companion$Aktion$LÖSCHE_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$LÖSCHE_instance;
  }
  var Belegung$Companion$Aktion$TOGGLE_instance;
  function Belegung$Companion$Aktion$TOGGLE_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$TOGGLE_instance;
  }
  var Belegung$Companion$Aktion$CHECK_instance;
  function Belegung$Companion$Aktion$CHECK_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$CHECK_instance;
  }
  var Belegung$Companion$Aktion$TOGGLEMÜNDLICH_instance;
  function Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$TOGGLEMÜNDLICH_instance;
  }
  var Belegung$Companion$Aktion$TOGGLESTUNDEN_instance;
  function Belegung$Companion$Aktion$TOGGLESTUNDEN_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$TOGGLESTUNDEN_instance;
  }
  Belegung$Companion$Aktion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Aktion',
    interfaces: [Enum]
  };
  function Belegung$Companion$Aktion$values() {
    return [Belegung$Companion$Aktion$NEU_getInstance(), Belegung$Companion$Aktion$LÖSCHE_getInstance(), Belegung$Companion$Aktion$TOGGLE_getInstance(), Belegung$Companion$Aktion$CHECK_getInstance(), Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance(), Belegung$Companion$Aktion$TOGGLESTUNDEN_getInstance()];
  }
  Belegung$Companion$Aktion.values = Belegung$Companion$Aktion$values;
  function Belegung$Companion$Aktion$valueOf(name) {
    switch (name) {
      case 'NEU':
        return Belegung$Companion$Aktion$NEU_getInstance();
      case 'L\xD6SCHE':
        return Belegung$Companion$Aktion$LÖSCHE_getInstance();
      case 'TOGGLE':
        return Belegung$Companion$Aktion$TOGGLE_getInstance();
      case 'CHECK':
        return Belegung$Companion$Aktion$CHECK_getInstance();
      case 'TOGGLEM\xDCNDLICH':
        return Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance();
      case 'TOGGLESTUNDEN':
        return Belegung$Companion$Aktion$TOGGLESTUNDEN_getInstance();
      default:throwISE('No enum constant sample.Belegung.Companion.Aktion.' + name);
    }
  }
  Belegung$Companion$Aktion.valueOf_61zpoe$ = Belegung$Companion$Aktion$valueOf;
  function Belegung$Companion$Belegfach(name, typ, aufgabenfeld, stunden, stundenAlternativ, alternativStunden, attribute) {
    this.name = name;
    this.typ = typ;
    this.aufgabenfeld = aufgabenfeld;
    this.stunden = stunden;
    this.stundenAlternativ = stundenAlternativ;
    this.alternativStunden = alternativStunden;
    this.attribute = attribute;
  }
  Belegung$Companion$Belegfach.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Belegfach',
    interfaces: []
  };
  Belegung$Companion$Belegfach.prototype.component1 = function () {
    return this.name;
  };
  Belegung$Companion$Belegfach.prototype.component2 = function () {
    return this.typ;
  };
  Belegung$Companion$Belegfach.prototype.component3 = function () {
    return this.aufgabenfeld;
  };
  Belegung$Companion$Belegfach.prototype.component4 = function () {
    return this.stunden;
  };
  Belegung$Companion$Belegfach.prototype.component5 = function () {
    return this.stundenAlternativ;
  };
  Belegung$Companion$Belegfach.prototype.component6 = function () {
    return this.alternativStunden;
  };
  Belegung$Companion$Belegfach.prototype.component7 = function () {
    return this.attribute;
  };
  Belegung$Companion$Belegfach.prototype.copy_3ojbng$ = function (name, typ, aufgabenfeld, stunden, stundenAlternativ, alternativStunden, attribute) {
    return new Belegung$Companion$Belegfach(name === void 0 ? this.name : name, typ === void 0 ? this.typ : typ, aufgabenfeld === void 0 ? this.aufgabenfeld : aufgabenfeld, stunden === void 0 ? this.stunden : stunden, stundenAlternativ === void 0 ? this.stundenAlternativ : stundenAlternativ, alternativStunden === void 0 ? this.alternativStunden : alternativStunden, attribute === void 0 ? this.attribute : attribute);
  };
  Belegung$Companion$Belegfach.prototype.toString = function () {
    return 'Belegfach(name=' + Kotlin.toString(this.name) + (', typ=' + Kotlin.toString(this.typ)) + (', aufgabenfeld=' + Kotlin.toString(this.aufgabenfeld)) + (', stunden=' + Kotlin.toString(this.stunden)) + (', stundenAlternativ=' + Kotlin.toString(this.stundenAlternativ)) + (', alternativStunden=' + Kotlin.toString(this.alternativStunden)) + (', attribute=' + Kotlin.toString(this.attribute)) + ')';
  };
  Belegung$Companion$Belegfach.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.typ) | 0;
    result = result * 31 + Kotlin.hashCode(this.aufgabenfeld) | 0;
    result = result * 31 + Kotlin.hashCode(this.stunden) | 0;
    result = result * 31 + Kotlin.hashCode(this.stundenAlternativ) | 0;
    result = result * 31 + Kotlin.hashCode(this.alternativStunden) | 0;
    result = result * 31 + Kotlin.hashCode(this.attribute) | 0;
    return result;
  };
  Belegung$Companion$Belegfach.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.typ, other.typ) && Kotlin.equals(this.aufgabenfeld, other.aufgabenfeld) && Kotlin.equals(this.stunden, other.stunden) && Kotlin.equals(this.stundenAlternativ, other.stundenAlternativ) && Kotlin.equals(this.alternativStunden, other.alternativStunden) && Kotlin.equals(this.attribute, other.attribute)))));
  };
  Object.defineProperty(Belegung$Companion.prototype, 'f\xE4cherauswahl', {
    get: function () {
      if (this.fächerauswahl_o9hkti$_0 == null)
        return throwUPAE('f\xE4cherauswahl');
      return this.fächerauswahl_o9hkti$_0;
    },
    set: function (fächerauswahl) {
      this.fächerauswahl_o9hkti$_0 = fächerauswahl;
    }
  });
  Belegung$Companion.prototype.generiereFächer_n5lu7h$ = function (listeMitFächern) {
    var tmp$, tmp$_0, tmp$_1;
    var liste = ArrayList_init();
    tmp$ = listeMitFächern.iterator();
    while (tmp$.hasNext()) {
      var fach = tmp$.next();
      tmp$_0 = fach.stunden.size;
      for (var index = 0; index < tmp$_0; index++) {
        var stundenbelegung = ArrayList_init();
        var stundenbelegungAlternativ = ArrayList_init();
        if (fach.stunden.get_za3lpa$(index) > 0) {
          for (var i = 0; i <= 3; i++) {
            stundenbelegung.add_11rb$(fach.stunden.get_za3lpa$(index));
          }
          switch (index) {
            case 0:
              tmp$_1 = Belegung$Companion$Kursart$LF_getInstance();
              break;
            case 1:
              tmp$_1 = Belegung$Companion$Kursart$BF_getInstance();
              break;
            default:tmp$_1 = Belegung$Companion$Kursart$WF_getInstance();
              break;
          }
          var art = tmp$_1;
          if (fach.attribute.contains_11rb$(Fachattribute$Fremdsprache_getInstance()) && art === Belegung$Companion$Kursart$BF_getInstance()) {
            stundenbelegungAlternativ = mutableListOf([4, 4, 4, 4]);
            var attr2 = toMutableList(fach.attribute);
            attr2.add_11rb$(Fachattribute$spätbeginnend_getInstance());
            fach.attribute = toList(attr2);
          }
          if (fach.attribute.contains_11rb$(Fachattribute$GeGe_getInstance())) {
            stundenbelegungAlternativ = mutableListOf([2, 0, 2, 0]);
          }
          if (fach.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance())) {
            stundenbelegung = mutableListOf([3, 3, 0, 0]);
          }
          if (art === Belegung$Companion$Kursart$WF_getInstance()) {
            stundenbelegungAlternativ = mutableListOf([2, 2, 0, 0]);
          }
          liste.add_11rb$(new Belegung$Companion$Belegfach(fach.name, art, fach.aufgabenfeld, stundenbelegung, stundenbelegungAlternativ, false, toMutableList(fach.attribute)));
        }
      }
    }
    var tmp$_2, tmp$_0_0;
    var index_0 = 0;
    tmp$_2 = liste.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      println((tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0).toString() + ', ' + item);
    }
    this.fächerauswahl = toList(liste);
  };
  Belegung$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Belegung$Companion_instance = null;
  function Belegung$Companion_getInstance() {
    if (Belegung$Companion_instance === null) {
      new Belegung$Companion();
    }
    return Belegung$Companion_instance;
  }
  Belegung.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Belegung',
    interfaces: []
  };
  function Aufgabenfeld(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Aufgabenfeld_initFields() {
    Aufgabenfeld_initFields = function () {
    };
    Aufgabenfeld$I_instance = new Aufgabenfeld('I', 0);
    Aufgabenfeld$II_instance = new Aufgabenfeld('II', 1);
    Aufgabenfeld$III_instance = new Aufgabenfeld('III', 2);
    Aufgabenfeld$Sport_instance = new Aufgabenfeld('Sport', 3);
    Aufgabenfeld$Seminarfach_instance = new Aufgabenfeld('Seminarfach', 4);
  }
  var Aufgabenfeld$I_instance;
  function Aufgabenfeld$I_getInstance() {
    Aufgabenfeld_initFields();
    return Aufgabenfeld$I_instance;
  }
  var Aufgabenfeld$II_instance;
  function Aufgabenfeld$II_getInstance() {
    Aufgabenfeld_initFields();
    return Aufgabenfeld$II_instance;
  }
  var Aufgabenfeld$III_instance;
  function Aufgabenfeld$III_getInstance() {
    Aufgabenfeld_initFields();
    return Aufgabenfeld$III_instance;
  }
  var Aufgabenfeld$Sport_instance;
  function Aufgabenfeld$Sport_getInstance() {
    Aufgabenfeld_initFields();
    return Aufgabenfeld$Sport_instance;
  }
  var Aufgabenfeld$Seminarfach_instance;
  function Aufgabenfeld$Seminarfach_getInstance() {
    Aufgabenfeld_initFields();
    return Aufgabenfeld$Seminarfach_instance;
  }
  Aufgabenfeld.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Aufgabenfeld',
    interfaces: [Enum]
  };
  function Aufgabenfeld$values() {
    return [Aufgabenfeld$I_getInstance(), Aufgabenfeld$II_getInstance(), Aufgabenfeld$III_getInstance(), Aufgabenfeld$Sport_getInstance(), Aufgabenfeld$Seminarfach_getInstance()];
  }
  Aufgabenfeld.values = Aufgabenfeld$values;
  function Aufgabenfeld$valueOf(name) {
    switch (name) {
      case 'I':
        return Aufgabenfeld$I_getInstance();
      case 'II':
        return Aufgabenfeld$II_getInstance();
      case 'III':
        return Aufgabenfeld$III_getInstance();
      case 'Sport':
        return Aufgabenfeld$Sport_getInstance();
      case 'Seminarfach':
        return Aufgabenfeld$Seminarfach_getInstance();
      default:throwISE('No enum constant sample.Aufgabenfeld.' + name);
    }
  }
  Aufgabenfeld.valueOf_61zpoe$ = Aufgabenfeld$valueOf;
  function Fachattribute(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Fachattribute_initFields() {
    Fachattribute_initFields = function () {
    };
    Fachattribute$Naturwissenschaft_instance = new Fachattribute('Naturwissenschaft', 0);
    Fachattribute$Deutsch_instance = new Fachattribute('Deutsch', 1);
    Fachattribute$Fremdsprache_instance = new Fachattribute('Fremdsprache', 2);
    Fachattribute$Mathematik_instance = new Fachattribute('Mathematik', 3);
    Fachattribute$kannNawiErsetzen_instance = new Fachattribute('kannNawiErsetzen', 4);
    Fachattribute$Seminarfach_instance = new Fachattribute('Seminarfach', 5);
    Fachattribute$GeGe_instance = new Fachattribute('GeGe', 6);
    Fachattribute$mündlichePrüfung_instance = new Fachattribute('m\xFCndlichePr\xFCfung', 7);
    Fachattribute$spätbeginnend_instance = new Fachattribute('sp\xE4tbeginnend', 8);
    Fachattribute$Orchidee_instance = new Fachattribute('Orchidee', 9);
  }
  var Fachattribute$Naturwissenschaft_instance;
  function Fachattribute$Naturwissenschaft_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Naturwissenschaft_instance;
  }
  var Fachattribute$Deutsch_instance;
  function Fachattribute$Deutsch_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Deutsch_instance;
  }
  var Fachattribute$Fremdsprache_instance;
  function Fachattribute$Fremdsprache_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Fremdsprache_instance;
  }
  var Fachattribute$Mathematik_instance;
  function Fachattribute$Mathematik_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Mathematik_instance;
  }
  var Fachattribute$kannNawiErsetzen_instance;
  function Fachattribute$kannNawiErsetzen_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$kannNawiErsetzen_instance;
  }
  var Fachattribute$Seminarfach_instance;
  function Fachattribute$Seminarfach_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Seminarfach_instance;
  }
  var Fachattribute$GeGe_instance;
  function Fachattribute$GeGe_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$GeGe_instance;
  }
  var Fachattribute$mündlichePrüfung_instance;
  function Fachattribute$mündlichePrüfung_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$mündlichePrüfung_instance;
  }
  var Fachattribute$spätbeginnend_instance;
  function Fachattribute$spätbeginnend_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$spätbeginnend_instance;
  }
  var Fachattribute$Orchidee_instance;
  function Fachattribute$Orchidee_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Orchidee_instance;
  }
  Fachattribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fachattribute',
    interfaces: [Enum]
  };
  function Fachattribute$values() {
    return [Fachattribute$Naturwissenschaft_getInstance(), Fachattribute$Deutsch_getInstance(), Fachattribute$Fremdsprache_getInstance(), Fachattribute$Mathematik_getInstance(), Fachattribute$kannNawiErsetzen_getInstance(), Fachattribute$Seminarfach_getInstance(), Fachattribute$GeGe_getInstance(), Fachattribute$mündlichePrüfung_getInstance(), Fachattribute$spätbeginnend_getInstance(), Fachattribute$Orchidee_getInstance()];
  }
  Fachattribute.values = Fachattribute$values;
  function Fachattribute$valueOf(name) {
    switch (name) {
      case 'Naturwissenschaft':
        return Fachattribute$Naturwissenschaft_getInstance();
      case 'Deutsch':
        return Fachattribute$Deutsch_getInstance();
      case 'Fremdsprache':
        return Fachattribute$Fremdsprache_getInstance();
      case 'Mathematik':
        return Fachattribute$Mathematik_getInstance();
      case 'kannNawiErsetzen':
        return Fachattribute$kannNawiErsetzen_getInstance();
      case 'Seminarfach':
        return Fachattribute$Seminarfach_getInstance();
      case 'GeGe':
        return Fachattribute$GeGe_getInstance();
      case 'm\xFCndlichePr\xFCfung':
        return Fachattribute$mündlichePrüfung_getInstance();
      case 'sp\xE4tbeginnend':
        return Fachattribute$spätbeginnend_getInstance();
      case 'Orchidee':
        return Fachattribute$Orchidee_getInstance();
      default:throwISE('No enum constant sample.Fachattribute.' + name);
    }
  }
  Fachattribute.valueOf_61zpoe$ = Fachattribute$valueOf;
  function Fach(name, aufgabenfeld, stunden, attribute) {
    this.name = name;
    this.aufgabenfeld = aufgabenfeld;
    this.stunden = stunden;
    this.attribute = attribute;
  }
  Fach.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fach',
    interfaces: []
  };
  Fach.prototype.component1 = function () {
    return this.name;
  };
  Fach.prototype.component2 = function () {
    return this.aufgabenfeld;
  };
  Fach.prototype.component3 = function () {
    return this.stunden;
  };
  Fach.prototype.component4 = function () {
    return this.attribute;
  };
  Fach.prototype.copy_4oj9zq$ = function (name, aufgabenfeld, stunden, attribute) {
    return new Fach(name === void 0 ? this.name : name, aufgabenfeld === void 0 ? this.aufgabenfeld : aufgabenfeld, stunden === void 0 ? this.stunden : stunden, attribute === void 0 ? this.attribute : attribute);
  };
  Fach.prototype.toString = function () {
    return 'Fach(name=' + Kotlin.toString(this.name) + (', aufgabenfeld=' + Kotlin.toString(this.aufgabenfeld)) + (', stunden=' + Kotlin.toString(this.stunden)) + (', attribute=' + Kotlin.toString(this.attribute)) + ')';
  };
  Fach.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.aufgabenfeld) | 0;
    result = result * 31 + Kotlin.hashCode(this.stunden) | 0;
    result = result * 31 + Kotlin.hashCode(this.attribute) | 0;
    return result;
  };
  Fach.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.aufgabenfeld, other.aufgabenfeld) && Kotlin.equals(this.stunden, other.stunden) && Kotlin.equals(this.attribute, other.attribute)))));
  };
  function Sample() {
  }
  Sample.prototype.checkMe = function () {
    var fächer = ArrayList_init();
    fächer.add_11rb$(new Fach('Deutsch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Deutsch_getInstance())));
    fächer.add_11rb$(new Fach('Englisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Franz\xF6sisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Latein', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Griechisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Russisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Spanisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Italienisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Portugiesisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance())));
    fächer.add_11rb$(new Fach('Bildende Kunst', Aufgabenfeld$I_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Musik', Aufgabenfeld$I_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Geschichte', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Geographie', Aufgabenfeld$II_getInstance(), listOf([5, 0, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Gemeinschaftskunde', Aufgabenfeld$II_getInstance(), listOf([5, 0, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Geo/Gk', Aufgabenfeld$II_getInstance(), listOf([0, 2, 0]), listOf_0(Fachattribute$GeGe_getInstance())));
    fächer.add_11rb$(new Fach('Geo/Gk', Aufgabenfeld$II_getInstance(), listOf([0, 2, 0]), listOf_0(Fachattribute$GeGe_getInstance())));
    fächer.add_11rb$(new Fach('Religionslehre', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Ethik', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Wirtschaft', Aufgabenfeld$II_getInstance(), listOf([5, 0, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Mathematik', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Mathematik_getInstance())));
    fächer.add_11rb$(new Fach('Biologie', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Naturwissenschaft_getInstance())));
    fächer.add_11rb$(new Fach('Chemie', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Naturwissenschaft_getInstance())));
    fächer.add_11rb$(new Fach('Physik', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Naturwissenschaft_getInstance())));
    fächer.add_11rb$(new Fach('Schulversuch Informatik', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$kannNawiErsetzen_getInstance())));
    fächer.add_11rb$(new Fach('Schulversuch NwT', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$kannNawiErsetzen_getInstance())));
    fächer.add_11rb$(new Fach('Sport', Aufgabenfeld$Sport_getInstance(), listOf([5, 2, 0]), emptyList()));
    fächer.add_11rb$(new Fach('Literatur und Theater', Aufgabenfeld$I_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance())));
    fächer.add_11rb$(new Fach('VK Mathematik', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance())));
    fächer.add_11rb$(new Fach('VK Sprache', Aufgabenfeld$I_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance())));
    fächer.add_11rb$(new Fach('Wahlfach Informatik', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance())));
    fächer.add_11rb$(new Fach('Literatur', Aufgabenfeld$I_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance())));
    fächer.add_11rb$(new Fach('Philosophie', Aufgabenfeld$II_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance())));
    fächer.add_11rb$(new Fach('Psychologie', Aufgabenfeld$II_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance())));
    fächer.add_11rb$(new Fach('Astronomie', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance())));
    fächer.add_11rb$(new Fach('Probleml\xF6sen mit CAS', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance())));
    fächer.add_11rb$(new Fach('Darstellende Geometrie', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance())));
    fächer.add_11rb$(new Fach('Geologie', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance())));
    fächer.add_11rb$(new Fach('Seminarfach I', Aufgabenfeld$I_getInstance(), listOf([0, 3, 0]), listOf_0(Fachattribute$Seminarfach_getInstance())));
    fächer.add_11rb$(new Fach('Seminarfach II', Aufgabenfeld$II_getInstance(), listOf([0, 3, 0]), listOf_0(Fachattribute$Seminarfach_getInstance())));
    fächer.add_11rb$(new Fach('Seminarfach III', Aufgabenfeld$III_getInstance(), listOf([0, 3, 0]), listOf_0(Fachattribute$Seminarfach_getInstance())));
    Belegung$Companion_getInstance().generiereFächer_n5lu7h$(fächer);
    var aktuelleBelegung = new Belegung('Belegung 1');
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Mathematik', Belegung$Companion$Kursart$LF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Englisch', Belegung$Companion$Kursart$LF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Informatik', Belegung$Companion$Kursart$LF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Geschichte', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Religionslehre', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance(), ['Geschichte', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance(), ['Religionslehre', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Deutsch', Belegung$Companion$Kursart$BF_getInstance()]);
    println('\n' + toString(aktuelleBelegung));
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$CHECK_getInstance(), []);
    erstelleRaster(aktuelleBelegung);
    visualisiereBelegung(aktuelleBelegung);
    eventsAnhängen(aktuelleBelegung);
    return 42;
  };
  Sample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sample',
    interfaces: []
  };
  function erstelleRaster$lambda$lambda$lambda$lambda(closure$zeile) {
    return function ($receiver) {
      set_classes($receiver, setOf_0('fett'));
      $receiver.unaryPlus_pdl1vz$(closure$zeile.text);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function erstelleRaster$lambda$lambda$lambda(closure$zeile) {
    return function ($receiver) {
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda(closure$zeile));
      for (var i = 0; i <= 5; i++) {
        td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_0);
      }
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_1($receiver) {
    set_classes($receiver, setOf_0('fett'));
    $receiver.unaryPlus_pdl1vz$('Wochenstunden');
    return Unit;
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_3(closure$zeile, closure$i) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$zeile.stunden.get_za3lpa$(closure$i).toString());
      set_classes($receiver, setOf_0('fett'));
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda_0(closure$zeile) {
    return function ($receiver) {
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_1);
      for (var i = 0; i <= 2; i++) {
        td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_2);
      }
      for (var i_0 = 0; i_0 <= 3; i_0++) {
        td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_3(closure$zeile, i_0));
      }
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_4(closure$zeile) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$zeile.name);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_5(closure$zeile) {
    return function ($receiver) {
      var klassen = LinkedHashSet_init();
      if (closure$zeile.klickbar.contains_11rb$(Belegung$Companion$Kursart$LF_getInstance())) {
        $receiver.unaryPlus_pdl1vz$('LF');
        klassen.add_11rb$('klickbar');
        set_id($receiver, closure$zeile.fachnameOriginal + '_LF');
      }
      if (equals(closure$zeile.gewählt, Belegung$Companion$Kursart$LF_getInstance())) {
        klassen.add_11rb$('belegt_LF');
      }
      set_classes($receiver, klassen);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_6(closure$zeile) {
    return function ($receiver) {
      var klassen = LinkedHashSet_init();
      if (closure$zeile.klickbar.contains_11rb$(Belegung$Companion$Kursart$BF_getInstance())) {
        $receiver.unaryPlus_pdl1vz$('BF');
        klassen.add_11rb$('klickbar');
        set_id($receiver, closure$zeile.fachnameOriginal + '_BF');
        if (equals(closure$zeile.gewählt, Belegung$Companion$Kursart$BF_getInstance())) {
          klassen.add_11rb$('belegt_BF');
        }
      }
       else if (closure$zeile.klickbar.contains_11rb$(Belegung$Companion$Kursart$WF_getInstance())) {
        $receiver.unaryPlus_pdl1vz$('WF');
        klassen.add_11rb$('klickbar');
        set_id($receiver, closure$zeile.fachnameOriginal + '_WF');
        if (equals(closure$zeile.gewählt, Belegung$Companion$Kursart$WF_getInstance())) {
          klassen.add_11rb$('belegt_WF');
        }
      }
      set_classes($receiver, klassen);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_7(closure$zeile) {
    return function ($receiver) {
      var tmp$;
      var klassen = LinkedHashSet_init();
      if (closure$zeile.mündlichKlickbar) {
        klassen.add_11rb$('klickbar');
        var gewählt = (tmp$ = closure$zeile.gewählt) != null ? tmp$ : '';
        if (Kotlin.isType(gewählt, Belegung$Companion$Kursart)) {
          if (equals(gewählt, Belegung$Companion$Kursart$BF_getInstance())) {
            set_id($receiver, closure$zeile.fachnameOriginal + '_mBF');
          }
           else if (equals(gewählt, Belegung$Companion$Kursart$WF_getInstance())) {
            set_id($receiver, closure$zeile.fachnameOriginal + '_mWF');
          }
        }
      }
      set_classes($receiver, klassen);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_8(closure$gewählt, closure$zeile, closure$i) {
    return function ($receiver) {
      var klassen = LinkedHashSet_init();
      if (Kotlin.isType(closure$gewählt, Belegung$Companion$Kursart)) {
        if (closure$zeile.stunden.get_za3lpa$(closure$i) !== 0) {
          $receiver.unaryPlus_pdl1vz$(closure$zeile.stunden.get_za3lpa$(closure$i).toString());
          println('Stunden ' + closure$i + ' ' + closure$zeile.stunden.get_za3lpa$(closure$i));
          if (closure$zeile.stundenAlternativVorhanden === true) {
            klassen.add_11rb$('klickbar');
            klassen.add_11rb$('stunden');
            if (equals(closure$gewählt, Belegung$Companion$Kursart$BF_getInstance())) {
              set_id($receiver, closure$zeile.name + '_stundenBF');
            }
             else if (equals(closure$gewählt, Belegung$Companion$Kursart$WF_getInstance())) {
              set_id($receiver, closure$zeile.name + '_stundenWF');
            }
          }
        }
         else {
          $receiver.unaryPlus_pdl1vz$(' ');
        }
      }
       else {
        $receiver.unaryPlus_pdl1vz$(' ');
      }
      set_classes($receiver, klassen);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda_1(closure$zeile) {
    return function ($receiver) {
      var tmp$;
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_4(closure$zeile));
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_5(closure$zeile));
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_6(closure$zeile));
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_7(closure$zeile));
      var gewählt = (tmp$ = closure$zeile.gewählt) != null ? tmp$ : '';
      for (var i = 0; i <= 3; i++) {
        td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_8(gewählt, closure$zeile, i));
      }
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda(closure$darstellung) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$darstellung.iterator();
      while (tmp$.hasNext()) {
        var zeile = tmp$.next();
        if (Kotlin.isType(zeile, Belegung$Überschrift)) {
          tr($receiver, void 0, erstelleRaster$lambda$lambda$lambda(zeile));
        }
         else if (Kotlin.isType(zeile, Belegung$Summe)) {
          tr($receiver, void 0, erstelleRaster$lambda$lambda$lambda_0(zeile));
        }
         else if (Kotlin.isType(zeile, Belegung$ZeileDarstellung)) {
          tr($receiver, void 0, erstelleRaster$lambda$lambda$lambda_1(zeile));
        }
      }
      return Unit;
    };
  }
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  function erstelleRaster$lambda$lambda$lambda$lambda_9(closure$it) {
    return function ($receiver) {
      if (closure$it.kommentarart === Belegung$Kommentarart$SCHLECHT_getInstance()) {
        set_classes($receiver, setOf_0('rot'));
      }
       else if (closure$it.kommentarart === Belegung$Kommentarart$GUT_getInstance()) {
        set_classes($receiver, setOf_0('gr\xFCn'));
      }
       else {
        set_classes($receiver, emptySet());
      }
      $receiver.unaryPlus_pdl1vz$(closure$it.text);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda_0(closure$aktuelleBelegung) {
    return function ($receiver) {
      var meldungen = closure$aktuelleBelegung.holeFehler();
      var tmp$;
      tmp$ = meldungen.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        div($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_9(element));
      }
      return Unit;
    };
  }
  function erstelleRaster$lambda(closure$darstellung, closure$aktuelleBelegung) {
    return function ($receiver) {
      table($receiver, void 0, erstelleRaster$lambda$lambda(closure$darstellung));
      div($receiver, void 0, erstelleRaster$lambda$lambda_0(closure$aktuelleBelegung));
      return Unit;
    };
  }
  function erstelleRaster$lambda_0($receiver) {
    return Unit;
  }
  function erstelleRaster(aktuelleBelegung) {
    var darstellung = aktuelleBelegung.holeDarstellung();
    var $receiver = aktuelleBelegung.getFächer();
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.aufgabenfeld;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var fächerauswahl = destination;
    var myDiv = div_0(get_create(document), 'panel', erstelleRaster$lambda(darstellung, aktuelleBelegung));
    println('div erstellt');
    var con = document.getElementById('container');
    ensureNotNull(con).innerHTML = '';
    println('Container: ' + toString(con));
    ensureNotNull(document.getElementById('container')).appendChild(myDiv);
    println('div an container angeh\xE4ngt');
    append(ensureNotNull(document.getElementById('container')), erstelleRaster$lambda_0);
  }
  function eventsAnhängen$lambda(closure$elemente, closure$i, closure$aktuelleBelegung) {
    return function (event) {
      var tmp$, tmp$_0;
      var id = (tmp$_0 = (tmp$ = closure$elemente[closure$i]) != null ? tmp$.id : null) != null ? tmp$_0 : '';
      var typEvent = split(id, ['_']);
      var refresh = false;
      if (typEvent.size === 2) {
        if (startsWith(typEvent.get_za3lpa$(1), 'm')) {
          closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance(), [typEvent.get_za3lpa$(0), equals(typEvent.get_za3lpa$(1).substring(1), 'BF') ? Belegung$Companion$Kursart$BF_getInstance() : Belegung$Companion$Kursart$WF_getInstance()]);
          refresh = true;
        }
         else if (equals(typEvent.get_za3lpa$(1), 'LF')) {
          closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLE_getInstance(), [typEvent.get_za3lpa$(0), Belegung$Companion$Kursart$LF_getInstance()]);
          refresh = true;
        }
         else if (equals(typEvent.get_za3lpa$(1), 'BF')) {
          closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLE_getInstance(), [typEvent.get_za3lpa$(0), Belegung$Companion$Kursart$BF_getInstance()]);
          refresh = true;
        }
         else if (equals(typEvent.get_za3lpa$(1), 'WF')) {
          closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLE_getInstance(), [typEvent.get_za3lpa$(0), Belegung$Companion$Kursart$WF_getInstance()]);
          refresh = true;
        }
         else if (startsWith(typEvent.get_za3lpa$(1), 'stunden')) {
          closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLESTUNDEN_getInstance(), [typEvent.get_za3lpa$(0), equals(typEvent.get_za3lpa$(1).substring(7), 'BF') ? Belegung$Companion$Kursart$BF_getInstance() : Belegung$Companion$Kursart$WF_getInstance()]);
          refresh = true;
        }
      }
      if (refresh === true) {
        erstelleRaster(closure$aktuelleBelegung);
        visualisiereBelegung(closure$aktuelleBelegung);
        eventsAnhängen(closure$aktuelleBelegung);
        closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$CHECK_getInstance(), []);
      }
      return Unit;
    };
  }
  function eventsAnhängen(aktuelleBelegung) {
    var tmp$;
    var elemente = document.getElementsByClassName('klickbar');
    tmp$ = elemente.length;
    for (var i = 0; i <= tmp$; i++) {
      if (elemente[i] != null) {
        ensureNotNull(elemente[i]).addEventListener('click', eventsAnhängen$lambda(elemente, i, aktuelleBelegung));
      }
    }
  }
  function visualisiereBelegung(aktuelleBelegung) {
    var belegung = aktuelleBelegung.getBelegung();
    var tmp$;
    tmp$ = belegung.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      var id = element.name + '_' + toString(element.typ);
      var id_mündlich = element.name + '_m' + (element.typ === Belegung$Companion$Kursart$BF_getInstance() ? 'BF' : element.typ === Belegung$Companion$Kursart$WF_getInstance() ? 'WF' : '');
      var typ = element.typ;
      var zelle = document.getElementById(id);
      var $receiver = aktuelleBelegung.getBelegung();
      var destination = ArrayList_init();
      var tmp$_4;
      tmp$_4 = $receiver.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        if (element_0.attribute.contains_11rb$(Fachattribute$mündlichePrüfung_getInstance()))
          destination.add_11rb$(element_0);
      }
      if (destination.size < 2) {
        if (element.typ === Belegung$Companion$Kursart$BF_getInstance() || element.typ === Belegung$Companion$Kursart$WF_getInstance()) {
          (tmp$_0 = document.getElementById(id_mündlich)) != null ? addClass(tmp$_0, ['klickbar']) : null;
        }
      }
       else {
        if (element.attribute.contains_11rb$(Fachattribute$mündlichePrüfung_getInstance())) {
          (tmp$_1 = document.getElementById(id_mündlich)) != null ? addClass(tmp$_1, ['klickbar']) : null;
        }
      }
      if (zelle != null) {
        addClass(zelle, ['belegt_' + toString(typ)]);
      }
      if (element.attribute.contains_11rb$(Fachattribute$mündlichePrüfung_getInstance())) {
        (tmp$_2 = document.getElementById(id_mündlich)) != null ? (tmp$_2.innerHTML = 'X') : null;
      }
       else {
        (tmp$_3 = document.getElementById(id_mündlich)) != null ? (tmp$_3.innerHTML = '&nbsp;&nbsp;') : null;
      }
    }
  }
  function Platform() {
    Platform_instance = this;
    this.name = 'JS';
  }
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }
    return Platform_instance;
  }
  var package$sample = _.sample || (_.sample = {});
  package$sample.main = main;
  Belegung.Zeile = Belegung$Zeile;
  Belegung.Überschrift = Belegung$Überschrift;
  Object.defineProperty(Belegung$Kommentarart, 'GUT', {
    get: Belegung$Kommentarart$GUT_getInstance
  });
  Object.defineProperty(Belegung$Kommentarart, 'SCHLECHT', {
    get: Belegung$Kommentarart$SCHLECHT_getInstance
  });
  Object.defineProperty(Belegung$Kommentarart, 'NEUTRAL', {
    get: Belegung$Kommentarart$NEUTRAL_getInstance
  });
  Belegung.Kommentarart = Belegung$Kommentarart;
  Belegung.Summe = Belegung$Summe;
  Belegung.Kommentar = Belegung$Kommentar;
  Belegung.ZeileDarstellung = Belegung$ZeileDarstellung;
  Object.defineProperty(Belegung$Companion$Kursart, 'LF', {
    get: Belegung$Companion$Kursart$LF_getInstance
  });
  Object.defineProperty(Belegung$Companion$Kursart, 'BF', {
    get: Belegung$Companion$Kursart$BF_getInstance
  });
  Object.defineProperty(Belegung$Companion$Kursart, 'WF', {
    get: Belegung$Companion$Kursart$WF_getInstance
  });
  Belegung$Companion.prototype.Kursart = Belegung$Companion$Kursart;
  Object.defineProperty(Belegung$Companion$Aktion, 'NEU', {
    get: Belegung$Companion$Aktion$NEU_getInstance
  });
  Object.defineProperty(Belegung$Companion$Aktion, 'L\xD6SCHE', {
    get: Belegung$Companion$Aktion$LÖSCHE_getInstance
  });
  Object.defineProperty(Belegung$Companion$Aktion, 'TOGGLE', {
    get: Belegung$Companion$Aktion$TOGGLE_getInstance
  });
  Object.defineProperty(Belegung$Companion$Aktion, 'CHECK', {
    get: Belegung$Companion$Aktion$CHECK_getInstance
  });
  Object.defineProperty(Belegung$Companion$Aktion, 'TOGGLEM\xDCNDLICH', {
    get: Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance
  });
  Object.defineProperty(Belegung$Companion$Aktion, 'TOGGLESTUNDEN', {
    get: Belegung$Companion$Aktion$TOGGLESTUNDEN_getInstance
  });
  Belegung$Companion.prototype.Aktion = Belegung$Companion$Aktion;
  Belegung$Companion.prototype.Belegfach = Belegung$Companion$Belegfach;
  Object.defineProperty(Belegung, 'Companion', {
    get: Belegung$Companion_getInstance
  });
  package$sample.Belegung = Belegung;
  Object.defineProperty(Aufgabenfeld, 'I', {
    get: Aufgabenfeld$I_getInstance
  });
  Object.defineProperty(Aufgabenfeld, 'II', {
    get: Aufgabenfeld$II_getInstance
  });
  Object.defineProperty(Aufgabenfeld, 'III', {
    get: Aufgabenfeld$III_getInstance
  });
  Object.defineProperty(Aufgabenfeld, 'Sport', {
    get: Aufgabenfeld$Sport_getInstance
  });
  Object.defineProperty(Aufgabenfeld, 'Seminarfach', {
    get: Aufgabenfeld$Seminarfach_getInstance
  });
  package$sample.Aufgabenfeld = Aufgabenfeld;
  Object.defineProperty(Fachattribute, 'Naturwissenschaft', {
    get: Fachattribute$Naturwissenschaft_getInstance
  });
  Object.defineProperty(Fachattribute, 'Deutsch', {
    get: Fachattribute$Deutsch_getInstance
  });
  Object.defineProperty(Fachattribute, 'Fremdsprache', {
    get: Fachattribute$Fremdsprache_getInstance
  });
  Object.defineProperty(Fachattribute, 'Mathematik', {
    get: Fachattribute$Mathematik_getInstance
  });
  Object.defineProperty(Fachattribute, 'kannNawiErsetzen', {
    get: Fachattribute$kannNawiErsetzen_getInstance
  });
  Object.defineProperty(Fachattribute, 'Seminarfach', {
    get: Fachattribute$Seminarfach_getInstance
  });
  Object.defineProperty(Fachattribute, 'GeGe', {
    get: Fachattribute$GeGe_getInstance
  });
  Object.defineProperty(Fachattribute, 'm\xFCndlichePr\xFCfung', {
    get: Fachattribute$mündlichePrüfung_getInstance
  });
  Object.defineProperty(Fachattribute, 'sp\xE4tbeginnend', {
    get: Fachattribute$spätbeginnend_getInstance
  });
  Object.defineProperty(Fachattribute, 'Orchidee', {
    get: Fachattribute$Orchidee_getInstance
  });
  package$sample.Fachattribute = Fachattribute;
  package$sample.Fach = Fach;
  package$sample.Sample = Sample;
  package$sample.erstelleRaster_6vo07b$ = erstelleRaster;
  package$sample.eventsAnhängen_6vo07b$ = eventsAnhängen;
  package$sample.visualisiereBelegung_6vo07b$ = visualisiereBelegung;
  Object.defineProperty(package$sample, 'Platform', {
    get: Platform_getInstance
  });
  main();
  Kotlin.defineModule('kurswahlMultiplatform', _);
  return _;
}(typeof kurswahlMultiplatform === 'undefined' ? {} : kurswahlMultiplatform, kotlin, this['kotlinx-html-js']);
