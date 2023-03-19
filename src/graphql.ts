
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CapitalInfo {
    latlng?: Nullable<Nullable<number>[]>;
}

export class Car {
    side?: Nullable<string>;
    signs?: Nullable<Nullable<string>[]>;
}

export class CoatOfArms {
    png?: Nullable<string>;
    svg?: Nullable<string>;
}

export class EUR {
    name?: Nullable<string>;
    symbol?: Nullable<string>;
}

export class Currencies {
    EUR?: Nullable<EUR>;
}

export class Eng {
    f?: Nullable<string>;
    m?: Nullable<string>;
}

export class Fra {
    f?: Nullable<string>;
    m?: Nullable<string>;
}

export class Demonyms {
    eng?: Nullable<Eng>;
    fra?: Nullable<Fra>;
}

export class Flags {
    alt?: Nullable<string>;
    png?: Nullable<string>;
    svg?: Nullable<string>;
}

export class Idd {
    root?: Nullable<string>;
    suffixes?: Nullable<Nullable<string>[]>;
}

export class Languages {
    slv?: Nullable<string>;
}

export class Maps {
    googleMaps?: Nullable<string>;
    openStreetMaps?: Nullable<string>;
}

export class Slv {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class NativeName {
    slv?: Nullable<Slv>;
}

export class Name {
    common?: Nullable<string>;
    nativeName?: Nullable<NativeName>;
    official?: Nullable<string>;
}

export class PostalCode {
    format?: Nullable<string>;
    regex?: Nullable<string>;
}

export class Ara {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Bre {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Ces {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Cym {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Deu {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Est {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Fin {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Fra3 {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Hrv {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Hun {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Ita {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Jpn {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Kor {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Nld {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Per {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Pol {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Por {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Rus {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Slk {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Spa {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Srp {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Swe {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Tur {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Urd {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Zho {
    common?: Nullable<string>;
    official?: Nullable<string>;
}

export class Translations {
    ara?: Nullable<Ara>;
    bre?: Nullable<Bre>;
    ces?: Nullable<Ces>;
    cym?: Nullable<Cym>;
    deu?: Nullable<Deu>;
    est?: Nullable<Est>;
    fin?: Nullable<Fin>;
    fra?: Nullable<Fra3>;
    hrv?: Nullable<Hrv>;
    hun?: Nullable<Hun>;
    ita?: Nullable<Ita>;
    jpn?: Nullable<Jpn>;
    kor?: Nullable<Kor>;
    nld?: Nullable<Nld>;
    per?: Nullable<Per>;
    pol?: Nullable<Pol>;
    por?: Nullable<Por>;
    rus?: Nullable<Rus>;
    slk?: Nullable<Slk>;
    spa?: Nullable<Spa>;
    srp?: Nullable<Srp>;
    swe?: Nullable<Swe>;
    tur?: Nullable<Tur>;
    urd?: Nullable<Urd>;
    zho?: Nullable<Zho>;
}

export class Country {
    altSpellings?: Nullable<Nullable<string>[]>;
    area?: Nullable<number>;
    borders?: Nullable<Nullable<string>[]>;
    capital?: Nullable<Nullable<string>[]>;
    capitalInfo?: Nullable<CapitalInfo>;
    car?: Nullable<Car>;
    cca2?: Nullable<string>;
    cca3?: Nullable<string>;
    ccn3?: Nullable<string>;
    cioc?: Nullable<string>;
    coatOfArms?: Nullable<CoatOfArms>;
    continents?: Nullable<Nullable<string>[]>;
    currencies?: Nullable<Currencies>;
    demonyms?: Nullable<Demonyms>;
    fifa?: Nullable<string>;
    flag?: Nullable<string>;
    flags?: Nullable<Flags>;
    idd?: Nullable<Idd>;
    independent?: Nullable<boolean>;
    landlocked?: Nullable<boolean>;
    languages?: Nullable<Languages>;
    latlng?: Nullable<Nullable<number>[]>;
    maps?: Nullable<Maps>;
    name?: Nullable<Name>;
    population?: Nullable<number>;
    postalCode?: Nullable<PostalCode>;
    region?: Nullable<string>;
    startOfWeek?: Nullable<string>;
    status?: Nullable<string>;
    subregion?: Nullable<string>;
    timezones?: Nullable<Nullable<string>[]>;
    tld?: Nullable<Nullable<string>[]>;
    translations?: Nullable<Translations>;
    unMember?: Nullable<boolean>;
}

export abstract class IQuery {
    abstract allCountries(): Nullable<Nullable<Country>[]> | Promise<Nullable<Nullable<Country>[]>>;

    abstract getCountriesByName(name: string): Nullable<Nullable<Country>[]> | Promise<Nullable<Nullable<Country>[]>>;

    abstract getCountriesByFullText(name: string): Nullable<Nullable<Country>[]> | Promise<Nullable<Nullable<Country>[]>>;

    abstract getCountriesByCode(code: string): Nullable<Nullable<Country>[]> | Promise<Nullable<Nullable<Country>[]>>;

    abstract getCountriesByCurrency(currency: string): Nullable<Nullable<Country>[]> | Promise<Nullable<Nullable<Country>[]>>;

    abstract getCountriesByLanguage(language: string): Nullable<Nullable<Country>[]> | Promise<Nullable<Nullable<Country>[]>>;

    abstract getCountriesByRegion(region: string): Nullable<Nullable<Country>[]> | Promise<Nullable<Nullable<Country>[]>>;

    abstract getCountriesBySubRegion(subRegion: string): Nullable<Nullable<Country>[]> | Promise<Nullable<Nullable<Country>[]>>;
}

type Nullable<T> = T | null;
