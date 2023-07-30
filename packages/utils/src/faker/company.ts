import { range } from 'lodash';

class CompanyFaker {
  /**
   * @see https://github.com/faker-ruby/faker/blob/f3117a284104c18e8c81be76b827006b93170151/lib/faker/default/company.rb#L123
   */
  public static logo = () => {
    const items = range(1, 13);
    const randomNum = items[Math.floor(Math.random() * items.length)];

    return `https://pigment.github.io/fake-logos/logos/medium/color/${randomNum}.png`;
  };
}

export { CompanyFaker };
