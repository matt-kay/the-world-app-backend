import { Args, Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver('Country')
export class AppResolver {
  constructor(private appService: AppService) {}

  @Query()
  async allCountries() {
    return this.appService.allCountries();
  }
  @Query()
  async getCountriesByName(@Args('name') name: string) {
    return this.appService.getCountriesByName(name);
  }
  @Query()
  async getCountriesByFullText(@Args('name') name: string) {
    return this.appService.getCountriesByFullText(name);
  }
  @Query()
  async getCountriesByCode(@Args('code') code: string) {
    return this.appService.getCountriesByCode(code);
  }
  @Query()
  async getCountriesByCurrency(@Args('currency') currency: string) {
    return this.appService.getCountriesByCurrency(currency);
  }
  @Query()
  async getCountriesByLanguage(@Args('language') language: string) {
    return this.appService.getCountriesByLanguage(language);
  }
  @Query()
  async getCountriesByRegion(@Args('region') region: string) {
    return this.appService.getCountriesByRegion(region);
  }
  @Query()
  async getCountriesBySubRegion(@Args('subRegion') subRegion: string) {
    return this.appService.getCountriesBySubRegion(subRegion);
  }
}
