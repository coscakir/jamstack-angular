import { httpGetJson, registerPlugin, ScullyConfig } from '@scullyio/scully';
import { ICharacters } from 'src/app/service/swapi/swapi.interface';

const getAllCharacters = async () => {
  const characters: ICharacters = (await httpGetJson(
    `https://swapi.dev/api/people/`
  )) as ICharacters;

  const r = characters.results.map((character) => {
    const id = character.url.split('people/')[1].replace('/', '');
    return {
      route: `/characters/${id}`,
    };
  });

  return r;
};

registerPlugin('router', 'getAllCharacters', getAllCharacters);

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'jamstack-angular',
  outDir: './dist/static',
  routes: {
    '/characters/:id': {
      type: 'getAllCharacters',
    },
  },
};
