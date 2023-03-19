import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private axios: HttpService) {}

  // allCountries :  CountryListResult
  //     getCountriesByName(name : String!) : CountryListResult
  //     getCountriesByFullText(name : String!) : CountryListResult
  //     getCountriesByCode(code : String!) : CountryListResult
  //     getCountriesByCurrency(currency : String!) : CountryListResult
  //     getCountriesByLanguage(currency : String!) : CountryListResult
  //     getCountriesByRegion(region : String!) : CountryListResult
  //     getCountriesBySubRegion(subRegion : String!) : CountryListResult

  async allCountries() {
    try {
      const response = await this.axios.axiosRef.get(
        `https://restcountries.com/v3.1/all`,
      );

      return response.data;
    } catch (error) {
      return error.message;
    }
  }

  async getCountriesByName(name: string) {
    try {
      const response = await this.axios.axiosRef.get(
        `https://restcountries.com/v3.1/name/${name}`,
      );

      return response.data;
    } catch (error) {
      return error.message;
    }
  }

  async getCountriesByFullText(name: string) {
    try {
      const response = await this.axios.axiosRef.get(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`,
      );

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
  async getCountriesByCode(code: string) {
    try {
      const response = await this.axios.axiosRef.get(
        `https://restcountries.com/v3.1/alpha/${code}`,
      );

      return response.data;
    } catch (error) {
      return error.message;
    }
  }

  async getCountriesByCurrency(currency: string) {
    try {
      const response = await this.axios.axiosRef.get(
        `https://restcountries.com/v3.1/currency/${currency}`,
      );

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
  async getCountriesByLanguage(language: string) {
    try {
      const response = await this.axios.axiosRef.get(
        `https://restcountries.com/v3.1/lang/${language}`,
      );

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
  async getCountriesByRegion(region: string) {
    try {
      const response = await this.axios.axiosRef.get(
        `https://restcountries.com/v3.1/region/${region}`,
      );

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
  async getCountriesBySubRegion(subRegion: string) {
    try {
      const response = await this.axios.axiosRef.get(
        `https://restcountries.com/v3.1/subregion/${subRegion}`,
      );

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
}
